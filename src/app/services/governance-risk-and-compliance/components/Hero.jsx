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
            className="relative min-w-0 overflow-x-clip bg-black pb-0 pt-16 text-white sm:pt-20 md:pt-28 lg:pt-32"
            aria-labelledby="grc-hero-heading"
        >
            {/* Purple→blue glow: spans section so it can wash up toward the header */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 bottom-0 z-0 overflow-x-clip"
                aria-hidden
            >
                <div
                    className="absolute left-1/2 top-[min(4vh,1.25rem)] h-[min(95vw,56rem)] w-[min(240vw,118rem)] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-[#4D00FF] to-[#009DFF] opacity-[0.38] blur-[80px] sm:top-[min(2vh,0.75rem)] sm:opacity-[0.44] sm:blur-[110px] md:blur-[130px]"
                    aria-hidden
                />
                <div
                    className="absolute left-1/2 top-[min(14vh,5.5rem)] h-[min(110vw,64rem)] w-[min(260vw,128rem)] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-[#4D00FF] via-[#6020ff] to-[#009DFF] opacity-[0.28] blur-[100px] sm:top-[min(12vh,5rem)] sm:blur-[140px] md:blur-[170px]"
                    aria-hidden
                />
                <div
                    className="absolute left-1/2 top-[min(26vh,10rem)] h-[min(88vw,50rem)] w-[min(220vw,108rem)] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-[#4D00FF] to-[#009DFF] opacity-[0.22] blur-[72px] sm:blur-[96px]"
                    aria-hidden
                />
            </div>

            {/* Black “blocker” cap — rim lower so body copy stays clear of the arc */}
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(64vh,36rem)] overflow-hidden sm:h-[min(68vh,40rem)] md:h-[min(72vh,44rem)]"
                aria-hidden
            >
                <div className="absolute left-1/2 top-[10%] h-[min(220vw,280%)] w-[min(235vw,118rem)] -translate-x-1/2 rounded-[50%] bg-black sm:top-[8%] md:top-[6%] lg:top-[5%]" />
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

                <div className="relative z-10 mt-10 w-full max-w-5xl pb-20 sm:mt-12 sm:pb-24 md:mt-14 md:pb-28 lg:max-w-6xl lg:mt-16">
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
