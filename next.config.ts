import type { NextConfig } from "next";

const securityHeaders = [
    { key: "X-DNS-Prefetch-Control", value: "on" },
    /** Clickjacking: disallow embedding this app in iframes */
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
];

const nextConfig: NextConfig = {
    async headers() {
        const base = [...securityHeaders];
        if (process.env.NODE_ENV === "production") {
            base.push({
                key: "Strict-Transport-Security",
                value: "max-age=31536000; includeSubDomains",
            });
        }
        return [{ source: "/:path*", headers: base }];
    },
};

export default nextConfig;
