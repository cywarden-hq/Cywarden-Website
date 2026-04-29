import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

/** Max JSON body size (bytes) — enforced even when Content-Length is missing */
const MAX_BODY_BYTES = 10 * 1024;

const RATE_LIMIT_TRUSTED_IP = {
    maxRequests: 8,
    windowMs: 15 * 60 * 1000,
} as const;

/** Stricter cap when client IP cannot be determined (spoofable headers absent / unknown) */
const RATE_LIMIT_UNKNOWN_IP = {
    maxRequests: 3,
    windowMs: 15 * 60 * 1000,
} as const;

/** Minimum time form must stay open before submit (slows instant bots) */
const MIN_FORM_MS = 2_500;
/** Reject stale sessions (e.g. replayed payloads) */
const MAX_FORM_AGE_MS = 2 * 60 * 60 * 1000;
/** Reject clocks too far in the future */
const MAX_CLOCK_SKEW_MS = 60_000;

const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;

const contactFormSchema = z
    .object({
        name: z
            .string()
            .min(1)
            .max(100)
            .regex(/^[a-zA-Z\s'-]+$/, 'name'),
        email: z.string().email().max(100).toLowerCase().trim(),
        phone: z.string().min(1).max(20).regex(PHONE_REGEX, 'phone'),
        message: z.string().min(10).max(500),
        honeypot: z.string().max(0).optional(),
        formOpenedAt: z.number().finite(),
    })
    .strict();

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const jsonHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-store',
} as const;

function badRequest(): NextResponse {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400, headers: jsonHeaders });
}

function tooManyRequests(resetTime: number, limit: number, remaining: number): NextResponse {
    const retrySec = Math.ceil((resetTime - Date.now()) / 1000);
    return NextResponse.json(
        { error: 'Too many requests. Please try again later.', retryAfter: retrySec },
        {
            status: 429,
            headers: {
                ...jsonHeaders,
                'Retry-After': String(retrySec),
                'X-RateLimit-Limit': String(limit),
                'X-RateLimit-Remaining': String(remaining),
                'X-RateLimit-Reset': String(resetTime),
            },
        },
    );
}

function sanitizeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

/** Strip header / SMTP injection characters from user-controlled strings */
function stripCrlfAndControls(s: string): string {
    return s.replace(/[\r\n\x00\u2028\u2029]/g, '');
}

function containsSpamPatterns(text: string): boolean {
    const spamPatterns = [
        /http[s]?:\/\//i,
        /www\./i,
        /[a-z0-9]+@[a-z0-9]+\.[a-z]+/i,
        /(click|buy|free|offer|discount|deal|limited|act now)/i,
        /[<>]/,
    ];
    return spamPatterns.some((pattern) => pattern.test(text));
}

function checkRateLimit(
    identifier: string,
    config: { maxRequests: number; windowMs: number },
): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const record = rateLimitStore.get(identifier);

    if (!record || now > record.resetTime) {
        rateLimitStore.set(identifier, {
            count: 1,
            resetTime: now + config.windowMs,
        });
        return {
            allowed: true,
            remaining: config.maxRequests - 1,
            resetTime: now + config.windowMs,
        };
    }

    if (record.count >= config.maxRequests) {
        return {
            allowed: false,
            remaining: 0,
            resetTime: record.resetTime,
        };
    }

    record.count++;
    return {
        allowed: true,
        remaining: config.maxRequests - record.count,
        resetTime: record.resetTime,
    };
}

/** Stable short hash for User-Agent (rate-limit bucket helper, not crypto) */
function hashUserAgent(ua: string): string {
    const s = ua.slice(0, 256);
    let h = 2_166_136_261 >>> 0;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16_777_619) >>> 0;
    }
    return h.toString(16);
}

/**
 * Best-effort client IP. When not behind a trusted reverse proxy, values may be spoofed —
 * use WAF / platform rate limits in production for high-risk sites.
 */
function getClientIdentifier(request: Request): string {
    const h = request.headers;
    const ordered = [
        h.get('cf-connecting-ip'),
        h.get('true-client-ip'),
        h.get('x-real-ip'),
        h.get('x-vercel-forwarded-for'),
        h.get('x-nf-client-connection-ip'),
        h.get('x-forwarded-for')?.split(',')[0]?.trim(),
    ];
    for (const v of ordered) {
        if (v && v.length > 0 && v !== 'unknown') {
            return v.slice(0, 128);
        }
    }
    return 'unknown';
}

function stripBodyStrings(body: Record<string, unknown>): Record<string, unknown> {
    const keys = ['name', 'email', 'phone', 'message', 'honeypot'] as const;
    const out = { ...body };
    for (const k of keys) {
        if (typeof out[k] === 'string') {
            out[k] = stripCrlfAndControls(out[k] as string);
        }
    }
    return out;
}

function safeSubjectSnippet(name: string, maxLen: number): string {
    const flat = stripCrlfAndControls(name).replace(/\s+/g, ' ').trim();
    return flat.length <= maxLen ? flat : `${flat.slice(0, maxLen - 1)}…`;
}

async function readJsonBodyLimited(request: Request): Promise<unknown | null> {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
        return null;
    }
    try {
        return JSON.parse(raw) as unknown;
    } catch {
        return undefined;
    }
}

export async function POST(request: Request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            console.error('contact/form: RESEND_API_KEY is not set');
            return NextResponse.json(
                { error: 'Service temporarily unavailable' },
                { status: 503, headers: jsonHeaders },
            );
        }

        const contentLength = request.headers.get('content-length');
        if (contentLength && Number.parseInt(contentLength, 10) > MAX_BODY_BYTES) {
            return NextResponse.json({ error: 'Request too large' }, { status: 413, headers: jsonHeaders });
        }

        const ip = getClientIdentifier(request);
        const ua = request.headers.get('user-agent') ?? '';
        const uaHash = hashUserAgent(ua);
        const rateKey = `contact|${ip}|${uaHash}`;
        const limit = ip === 'unknown' ? RATE_LIMIT_UNKNOWN_IP : RATE_LIMIT_TRUSTED_IP;
        const rateLimit = checkRateLimit(rateKey, limit);

        if (!rateLimit.allowed) {
            return tooManyRequests(rateLimit.resetTime, limit.maxRequests, rateLimit.remaining);
        }

        const parsed = await readJsonBodyLimited(request);
        if (parsed === null) {
            return NextResponse.json({ error: 'Request too large' }, { status: 413, headers: jsonHeaders });
        }
        if (parsed === undefined) {
            return badRequest();
        }
        if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
            return badRequest();
        }

        const stripped = stripBodyStrings(parsed as Record<string, unknown>);
        const validationResult = contactFormSchema.safeParse(stripped);
        if (!validationResult.success) {
            console.warn('contact/form: validation failed', validationResult.error.flatten());
            return badRequest();
        }

        const data = validationResult.data;

        if (data.honeypot && data.honeypot.length > 0) {
            console.warn('contact/form: honeypot filled');
            return badRequest();
        }

        const now = Date.now();
        if (data.formOpenedAt > now + MAX_CLOCK_SKEW_MS) {
            console.warn('contact/form: formOpenedAt in future');
            return badRequest();
        }
        const age = now - data.formOpenedAt;
        if (age < MIN_FORM_MS) {
            console.warn('contact/form: submitted too fast');
            return badRequest();
        }
        if (age > MAX_FORM_AGE_MS) {
            console.warn('contact/form: stale form');
            return badRequest();
        }

        if (containsSpamPatterns(data.name) || containsSpamPatterns(data.message)) {
            console.warn('contact/form: spam heuristics');
            return badRequest();
        }

        const sanitizedName = sanitizeHtml(data.name);
        const sanitizedEmail = sanitizeHtml(data.email);
        const sanitizedPhone = sanitizeHtml(data.phone);
        const sanitizedMessage = sanitizeHtml(data.message);

        const subjectName = safeSubjectSnippet(data.name, 80);

        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
            from: 'Cywarden Contact <contact@resend.dev>',
            to: ['info@cywarden.com'],
            subject: `New Contact Form Submission from ${subjectName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${sanitizedName}</p>
                <p><strong>Email:</strong> ${sanitizedEmail}</p>
                <p><strong>Phone:</strong> ${sanitizedPhone}</p>
                <p><strong>Message:</strong></p>
                <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email. Please try again later.' },
                { status: 500, headers: jsonHeaders },
            );
        }

        return NextResponse.json(
            { message: 'Email sent successfully' },
            {
                status: 200,
                headers: {
                    ...jsonHeaders,
                    'X-RateLimit-Limit': String(limit.maxRequests),
                    'X-RateLimit-Remaining': String(rateLimit.remaining),
                    'X-RateLimit-Reset': String(rateLimit.resetTime),
                },
            },
        );
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers: jsonHeaders });
    }
}
