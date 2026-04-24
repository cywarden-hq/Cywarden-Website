import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { ClipboardList, Cog, ScanSearch, Shield, ShieldAlert, Users } from "lucide-react";

const intro = {
    eyebrow: "The challenge",
    title: "A Fleet of Specialized AI Agents",
    body: "Each agent is purpose-built for a specific security domain — automating alert triage, detecting drift, prioritizing vulnerabilities, and accelerating incident investigation.",
};

const agents = [
    {
        title: "Alert Navigator",
        description:
            "Cut through noise with ranked, context-rich alerts so analysts focus on what actually matters—often reducing triage load by up to 70%.",
        Icon: ShieldAlert,
    },
    {
        title: "Cyber Risk Monitor",
        description:
            "Turn scanner and posture signals into clear, prioritized risk themes aligned to your business and control framework.",
        Icon: Shield,
    },
    {
        title: "Exposure Intel",
        description:
            "Replace slow, manual assessments with continuous evidence of exposure—so gaps are found early and tracked to closure.",
        Icon: ScanSearch,
    },
    {
        title: "SecOps Maturity Check",
        description:
            "Benchmark how your SOC actually runs with a fact-based maturity view across people, process, and tooling.",
        Icon: ClipboardList,
    },
    {
        title: "Human-AI Collaboration",
        description:
            "Pair autonomous agents with your analysts so decisions stay explainable, auditable, and human-led where it counts.",
        Icon: Users,
    },
    {
        title: "Adaptive Defense Engine",
        description:
            "Automate recurring policy and configuration checks across hybrid and cloud estates so drift is caught before it spreads.",
        Icon: Cog,
    },
];

function AgentCell({ title, description, Icon }) {
    return (
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div
                className={cn(
                    "mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
                    "bg-sky-500/15 text-sky-300",
                    "shadow-[0_0_28px_rgba(56,189,248,0.35),inset_0_1px_0_rgba(255,255,255,0.12)]",
                )}
            >
                <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="font-heading text-lg font-bold leading-snug text-white sm:text-xl">{title}</h3>
            <p className="body-text mt-2 max-w-[320px] text-pretty text-gray-400 sm:mt-3">{description}</p>
        </div>
    );
}

export function FleetAgentsSection() {
    return (
        <section
            className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24"
            aria-labelledby="fleet-agents-heading"
        >
            {/* Atmospheric orbs — large, saturated; blur kept moderate so color stays vivid */}
            <div className="pointer-events-none absolute inset-0 z-10" aria-hidden>
                <div className="absolute -left-[28%] -top-[24%] h-[min(560px,92vw)] w-[min(560px,92vw)] rounded-full bg-[#0080FF]/55 blur-[100px] sm:-left-[22%] sm:-top-[18%] sm:h-[min(620px,88vw)] sm:w-[min(620px,88vw)] lg:h-[min(680px,70vw)] lg:w-[min(680px,70vw)]" />
                <div className="absolute -bottom-[20%] -right-[24%] h-[min(540px,90vw)] w-[min(540px,90vw)] rounded-full bg-[#0080FF]/55 blur-[100px] sm:-bottom-[14%] sm:-right-[18%] sm:h-[min(600px,85vw)] sm:w-[min(600px,85vw)] lg:h-[min(640px,68vw)] lg:w-[min(640px,68vw)]" />
            </div>

            <Container as="div" className="relative z-10 min-w-0">
                {/*
                  < lg: single column (intro, then agents).
                  lg+: 12-col row — intro cols 1–5, agents cols 4–12 (2-col overlap for look).
                  Overlap = 2/12 of container over 9/12-wide panel → pad content by 2/9 of panel + gutter so text never sits under the intro card.
                */}
                <div className="relative grid min-h-0 grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-x-0 lg:gap-y-0">
                    {/* Left intro — taller; sits above agents panel only in the overlapped *padding* band on lg+ */}
                    <div className="relative z-20 min-w-0 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-stretch">
                        <div
                            className={cn(
                                "relative flex min-h-[min(100%,420px)] flex-col overflow-hidden rounded-2xl px-7 py-10",
                                "bg-linear-to-br from-[#000817] to-[#003192] border border-[#1100FF]/50",
                                "sm:px-9 sm:py-12 lg:min-h-[min(100%,580px)] lg:justify-center lg:rounded-3xl lg:px-10 lg:py-14",
                            )}
                        >
                            <div className="relative z-10">
                                <p className="section-label">{intro.eyebrow}</p>
                                <h2
                                    id="fleet-agents-heading"
                                    className="mt-4 text-balance font-heading text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[clamp(1.75rem,2.2vw,2.25rem)]"
                                >
                                    {intro.title}
                                </h2>
                                <p className="body-lg mt-6 max-w-none leading-relaxed text-white/90 sm:mt-8">
                                    {intro.body}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right panel — spans trailing columns, stays inside container */}
                    <div
                        className={cn(
                            "relative z-0 min-h-0 min-w-0 overflow-hidden rounded-2xl border border-sky-400/35 lg:col-span-9 lg:col-start-4 lg:row-start-1",
                            "bg-linear-to-br from-[#000817] to-[#003192] border border-[#1100FF]/50 lg:min-h-[min(100%,520px)] lg:rounded-3xl mt-20",
                        )}
                    >
                        {/* lg+: left pad ≥ overlap (2/9 of this panel) so columns never sit under the intro card */}
                        <div
                            className={cn(
                                "relative z-10 grid grid-cols-1 gap-10 px-6 py-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 sm:px-8 sm:py-12",
                                "lg:gap-x-10 lg:gap-y-14 lg:py-14 lg:pr-10 lg:pl-[max(3rem,calc(100%*2/9+2rem))] xl:pr-12 xl:pl-[max(3.5rem,calc(100%*2/9+2.5rem))]",
                            )}
                        >
                            {agents.map((agent) => (
                                <AgentCell key={agent.title} {...agent} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
