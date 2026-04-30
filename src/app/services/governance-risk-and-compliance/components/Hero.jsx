import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const description =
    "Building security resilience through structured compliance frameworks and continuous governance excellence. End-to-end GRC solutions that align security strategy with business goals across complex regulatory landscapes.";

const pillars = [
    { line1: "Governance &", line2: "Oversight" },
    { line1: "Strategy &", line2: "Performance" },
    { line1: "Risk &", line2: "Decisions" },
    { line1: "Compliance &", line2: "Ethics" },
    { line1: "Security &", line2: "Continuity" },
];

/** Flattened brace: tips down at ends, peak up under “GRC”. */
function GrCBracket({ className }) {
    return (
        <svg
            className={cn("w-full text-white/85", className)}
            viewBox="0 0 520 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
        >
            <path
                d="M 8 22 C 8 10, 24 6, 52 6 L 220 6 C 248 6, 252 2, 260 2 C 268 2, 272 6, 300 6 L 468 6 C 496 6, 512 10, 512 22"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
}

function PillarCircle({ line1, line2, className }) {
    return (
        <div
            className={cn(
                "flex aspect-square min-h-[4.75rem] w-[min(100%,5.75rem)] shrink-0 flex-col items-center justify-center rounded-full px-1.5 text-center text-[0.56rem] font-medium leading-tight",
                "sm:min-h-[5.5rem] sm:w-[min(100%,6.5rem)] sm:px-2 sm:text-[0.62rem] md:min-h-[6.25rem] md:w-[min(100%,7.5rem)] md:text-[0.7rem] lg:min-h-[7rem] lg:w-[min(100%,8.25rem)] lg:text-sm",
                "border-2 border-[#00C3FF] text-white shadow-[0_0_22px_rgba(56,189,248,0.35),0_0_1px_rgba(165,243,252,0.5)]",
                className,
            )}
        >
            <span className="block">{line1}</span>
            <span className="block">{line2}</span>
        </div>
    );
}

export function Hero() {
    return (
        <Section
            size="xl"
            className={cn(
                "relative min-w-0 overflow-x-clip bg-black text-white",
                /* Base wash on black */
                "bg-gradient-to-b from-[#14121c] via-[#0b0a0f] to-black",
            )}
            aria-labelledby="grc-hero-heading"
        >
            {/* Corner ellipses — orange (TL) + blue (BR), FleetAgents-style placement */}
            <div className="pointer-events-none absolute inset-0 z-[1] overflow-x-clip" aria-hidden>
                <div
                    className={cn(
                        "absolute -left-[26%] -top-[22%] h-[min(92vw,32rem)] w-[min(100vw,36rem)] rounded-full bg-gradient-to-br from-[#FF5100] via-[#FF6600] to-[#FFAE00] opacity-[0.38] blur-[88px]",
                        "sm:-left-[20%] sm:-top-[16%] sm:h-[min(88vw,36rem)] sm:w-[min(94vw,42rem)] sm:opacity-[0.42] sm:blur-[108px]",
                        "md:blur-[125px] lg:h-[min(72vw,38rem)] lg:w-[min(78vw,44rem)]",
                    )}
                />
                <div
                    className={cn(
                        "absolute -bottom-[20%] -right-[24%] h-[min(88vw,30rem)] w-[min(96vw,36rem)] rounded-full bg-gradient-to-tl from-[#00B4FF] via-[#0080FF] to-[#0066DD] opacity-[0.34] blur-[88px]",
                        "sm:-bottom-[14%] sm:-right-[18%] sm:h-[min(82vw,34rem)] sm:w-[min(90vw,40rem)] sm:opacity-[0.38] sm:blur-[108px]",
                        "md:blur-[125px] lg:h-[min(68vw,36rem)] lg:w-[min(76vw,42rem)]",
                    )}
                />
            </div>

            <Container
                as="div"
                className="relative z-10 flex w-full flex-col items-center px-4 sm:px-6 lg:px-8"
            >
                <div className="flex w-full max-w-4xl flex-col items-center px-1 text-center sm:px-0">
                    <h1
                        id="grc-hero-heading"
                        className="font-heading text-[clamp(1.5rem,5vw,2rem)] font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-[clamp(2rem,4vw,3.1rem)]"
                    >
                        Governance, Risk & Compliance
                        <br />
                        Services
                    </h1>
                    <p className="body-lg mt-5 max-w-[min(100%,42rem)] text-pretty text-white/85 sm:mt-6 md:mt-7 md:text-xl md:leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="relative z-10 mt-10 w-full max-w-5xl sm:mt-12 md:mt-14 lg:max-w-6xl lg:mt-16 mb-20 sm:mb-24 md:mb-28">
                    <div className="flex flex-col items-center">
                        <p
                            className={cn("font-heading text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl",
                                "bg-gradient-to-r from-[#FF5100] to-[#FFA807] bg-clip-text text-transparent"
                            )}
                        >
                            GRC
                        </p>
                        <div className="mt-1 w-[min(100%,32rem)] px-2 sm:w-[min(100%,40rem)] md:mt-2 md:w-[min(100%,48rem)]">
                            <GrCBracket />
                        </div>
                        <div className="mt-3 flex w-full max-w-[min(100%,40rem)] flex-wrap items-start justify-center gap-1.5 sm:mt-4 sm:max-w-[min(100%,44rem)] sm:gap-2 md:mt-5 md:max-w-[min(100%,52rem)] md:flex-nowrap md:gap-2 lg:max-w-[min(100%,56rem)] lg:gap-2.5">
                            {pillars.map((p) => (
                                <PillarCircle key={p.line1} line1={p.line1} line2={p.line2} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
