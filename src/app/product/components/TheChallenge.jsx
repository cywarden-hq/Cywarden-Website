import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

/** Figma-aligned accents (screenshot) */
const copper = "#D17A48";
const pillarBlue = "#3B82F6";

const subtext =
    "Three pillars that define how CyForte.ai continuously strengthens your security posture through intelligent automation and self-learning.";

const pillars = [
    {
        title: "Observe",
        subtitle: "Know Your Risk",
        body: "Gain complete visibility into your risk landscape. CyForte continuously monitors data streams to identify vulnerabilities, assess maturity levels, and pinpoint exactly where to act before threats materialize.",
    },
    {
        title: "Transform",
        subtitle: "Alerts to Decisions",
        body: "Convert raw signals into actionable intelligence. Our processing engine filters noise, correlates events, and prioritizes critical alerts — empowering your team to turn hesitation into decisive action.",
    },
    {
        title: "Evolve",
        subtitle: "Self-Learning Defense",
        body: "Build resilience through adaptation. The system learns from every interaction, refining its models with speed and precision to stay ahead of emerging threats and evolving business needs.",
    },
];

/**
 * Stroke from mid-left → down → rounded bottom → up to mid-right (no top edge).
 * viewBox 0 0 100 100; r matches ~rounded-2xl proportion for typical card height.
 */
function PillarCardBorder({ gradId }) {
    const r = 5.2;
    return (
        <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
        >
            <defs>
                <linearGradient
                    id={gradId}
                    x1="0"
                    y1="0.5"
                    x2="1"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset="0%" stopColor="#A9D0FF" />
                    <stop offset="56%" stopColor="#4A9CFF" />
                    <stop offset="100%" stopColor="#1E4A8C" />
                </linearGradient>
            </defs>
            <path
                d={`M 0 50 L 0 ${100 - r} A ${r} ${r} 0 0 1 ${r} 100 L ${100 - r} 100 A ${r} ${r} 0 0 1 100 ${100 - r} L 100 50`}
                fill="none"
                stroke={`url(#${gradId})`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
}

function PillarCard({ title, subtitle, body }) {
    const gradId = `pillar-border-${title.toLowerCase().replace(/\s+/g, "-")}`;

    return (
        <article
            className={cn(
                "relative flex min-h-0 flex-col overflow-hidden rounded-2xl bg-[#050508] px-6 py-8 text-center sm:px-8 sm:py-10",
                "shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]",
            )}
        >
            <PillarCardBorder gradId={gradId} />

            <div className="relative z-10 flex flex-1 flex-col">
                <h3 className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">{title}</h3>
                <p
                    className="mt-2 font-heading text-base font-bold tracking-tight sm:text-lg"
                    style={{ color: pillarBlue }}
                >
                    {subtitle}
                </p>
                <p className="body-text mt-5 flex-1 leading-relaxed text-gray-300 sm:mt-6">{body}</p>
            </div>
        </article>
    );
}

export function TheChallenge() {
    return (
        <Section
            as="section"
            size="lg"
            className="bg-black text-white"
            aria-labelledby="the-challenge-heading"
        >
            <Container as="div" className="min-w-0">
                <header className="mx-auto max-w-[920px] text-center">
                    <p
                        className="font-heading text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs"
                        style={{ color: copper }}
                    >
                        The challenge
                    </p>
                    <h2
                        id="the-challenge-heading"
                        className="mt-4 text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl lg:text-[clamp(2rem,3.2vw,2.75rem)]"
                    >
                        Observe. Transform. Evolve.
                    </h2>
                    <p className="body-lg mx-auto mt-5 max-w-[780px] text-pretty text-gray-300 sm:mt-6">
                        {subtext}
                    </p>
                </header>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-3 md:gap-5 lg:mt-16 lg:gap-8">
                    {pillars.map((pillar) => (
                        <PillarCard key={pillar.title} {...pillar} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}
