import { cn } from "@/lib/utils";

const steps = [
    {
        n: "01",
        title: "Assess & Design",
        body: "Comprehensive cloud security posture assessment across workloads, configurations, identities, and data flows. Design security controls for multi-cloud environments.",
    },
    {
        n: "02",
        title: "Implement & Harden",
        body: "Deploy CSPM, CWPP, and container security tools. Configure guardrails, policy enforcement, workload protection, and runtime security monitoring across AWS, Azure, and GCP.",
    },
    {
        n: "03",
        title: "Monitor & Detect",
        body: "Continuous monitoring for cloud misconfigurations, anomalous API activity, lateral movement, and data exfiltration with real-time alerting and response.",
    },
    {
        n: "04",
        title: "Govern & Evolve",
        body: "Automate compliance reporting against SOC 2, ISO 27001, PCI DSS, and GDPR. Continuous improvement through security maturity scoring and emerging threat coverage expansion.",
    },
];

export function ApproachMethodologyGrid({ className } = {}) {
    return (
        <div
            className={cn(
                "relative isolate w-full max-w-7xl overflow-hidden rounded-2xl border border-white/15",
                "bg-gradient-to-br from-[#011133] to-[#0B3189] px-5 py-10",
                "sm:px-8 sm:py-10 md:rounded-3xl md:px-10 md:py-14",
                className,
            )}
        >
            {/* Figma 1591-270 — Ellipse 22007 + 22006; relative offsets from Figma (left/top): 22006 at (1179,220), 22007 at (837,276) → 22006 sits 169px left of 22007’s right edge and 56px higher. */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
                {/* Ellipse 22007 — 848×201, rgba + plus-lighter + blur(94px) */}
                <div
                    className="absolute rounded-[50%]"
                    style={{
                        width: 500,
                        height: 201,
                        right: "max(-50rem, -8vw)",
                        bottom: "max(-3.5rem, -5vw)",
                        background: "rgba(255, 110, 57, 0.84)",
                        mixBlendMode: "plus-lighter",
                        filter: "blur(94px)",
                    }}
                />
                {/* Ellipse 22006 — 337×231, border + blur(94px) */}
                <div
                    className="absolute box-border rounded-[50%]"
                    style={{
                        width: 337,
                        height: 201,
                        right: "calc(max(-50rem, -8vw) + 50px)",
                        bottom: "calc(max(-3.5rem, -5vw) + 56px)",
                        background: "rgba(255, 68, 0, 0.83)",
                        border: "1px solid #000000",
                        filter: "blur(94px)",
                    }}
                />
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-0 lg:grid-cols-4">
                {steps.map((step, index) => (
                    <article
                        key={step.n}
                        className={cn(
                            "relative flex flex-col items-start py-8 text-left lg:px-5 lg:py-2 xl:px-7",
                            "border-b border-white/15 last:border-b-0 lg:border-b-0",
                        )}
                    >
                        {index > 0 ? (
                            <div
                                className="pointer-events-none absolute bottom-12 left-0 top-12 hidden w-px bg-white/25 lg:block"
                                aria-hidden
                            />
                        ) : null}
                        <span className="font-heading text-5xl font-bold leading-none tracking-tight text-white/53 md:text-6xl lg:text-7xl">
                            {step.n}
                        </span>
                        <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-white sm:text-xl">
                            {step.title}
                        </h3>
                        <p className="body-text mt-3 text-pretty text-white/85 sm:mt-4">{step.body}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
