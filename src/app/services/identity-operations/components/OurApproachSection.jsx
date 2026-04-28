import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const intro = {
    eyebrow: "Our Approach",
    title: "Identity as the Security Perimeter",
    body: "With 80% of breaches involving compromised credentials, identity has become the primary attack surface. Our Identity Operations service provides continuous monitoring and response for all identity-related threats.",
};

const steps = [
    {
        step: "01",
        title: "Detect & Monitor",
        description:
            "Real-time monitoring for credential theft, password sprays, MFA fatigue, anomalous logins, and identity-based lateral movement. Continuous oversight of privileged accounts and admin activities.",
    },
    {
        step: "02",
        title: "Govern & Certify",
        description:
            "Ongoing access certifications, entitlement reviews, dormant account detection, and separation-of-duty monitoring to maintain least-privilege posture.",
    },
    {
        step: "03",
        title: "Respond & Contain",
        description:
            "Rapid containment of identity-based attacks - session termination, credential revocation, conditional access enforcement, and forensic investigation.",
    },
    {
        step: "04",
        title: "Report & Evolve",
        description:
            "Automated audit evidence for identity controls. Compliance dashboards for SOX, SOC 2, and ISO 27001. Analyze trends and optimize access policies based on evolving threats.",
    },
];

function StepCell({ step, title, description }) {
    return (
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <p className="font-heading text-2xl font-bold tabular-nums leading-none text-[#FF7700] sm:text-[1.65rem]">{step}</p>
            <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-white sm:mt-4 sm:text-xl">{title}</h3>
            <p className="body-text mt-2 max-w-[320px] text-pretty text-gray-400 sm:mt-3">{description}</p>
        </div>
    );
}

export function OurApproachSection() {
    return (
        <section
            className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24"
            aria-labelledby="identity-operations-approach-heading"
        >
            <div className="pointer-events-none absolute inset-0 z-10" aria-hidden>
                <div className="absolute -left-[28%] -top-[24%] h-[min(560px,92vw)] w-[min(560px,92vw)] rounded-full bg-[#0080FF]/55 blur-[100px] sm:-left-[22%] sm:-top-[18%] sm:h-[min(620px,88vw)] sm:w-[min(620px,88vw)] lg:h-[min(680px,70vw)] lg:w-[min(680px,70vw)]" />
                <div className="absolute -bottom-[20%] -right-[24%] h-[min(540px,90vw)] w-[min(540px,90vw)] rounded-full bg-[#0080FF]/55 blur-[100px] sm:-bottom-[14%] sm:-right-[18%] sm:h-[min(600px,85vw)] sm:w-[min(600px,85vw)] lg:h-[min(640px,68vw)] lg:w-[min(640px,68vw)]" />
            </div>

            <Container as="div" className="relative z-10 min-w-0">
                <div className="relative grid min-h-0 grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-x-0 lg:gap-y-0">
                    <div className="relative z-20 min-w-0 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-stretch">
                        <div
                            className={cn(
                                "relative flex min-h-[min(100%,420px)] flex-col overflow-hidden rounded-2xl px-7 py-10",
                                "border border-white/20 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl",
                                "sm:px-9 sm:py-12 lg:min-h-[min(100%,580px)] lg:justify-center lg:rounded-3xl lg:px-10 lg:py-14",
                            )}
                        >
                            <div className="relative z-10">
                                <p className="section-label">{intro.eyebrow}</p>
                                <h2
                                    id="identity-operations-approach-heading"
                                    className="mt-4 text-balance font-heading text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[clamp(1.75rem,2.2vw,2.25rem)]"
                                >
                                    {intro.title}
                                </h2>
                                <p className="body-lg mt-6 max-w-none leading-relaxed text-white/90 sm:mt-8">{intro.body}</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={cn(
                            "relative z-0 min-h-0 min-w-0 overflow-hidden rounded-2xl border border-sky-400/35 lg:col-span-9 lg:col-start-4 lg:row-start-1",
                            "bg-linear-to-br from-[#000817] to-[#003192] border border-[#003192] lg:min-h-[min(100%,480px)] lg:rounded-3xl mt-20",
                        )}
                    >
                        <div
                            className={cn(
                                "relative z-10 grid grid-cols-1 gap-10 px-6 py-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 sm:px-8 sm:py-12",
                                "lg:gap-x-10 lg:gap-y-14 lg:py-14 lg:pr-10 lg:pl-[max(3rem,calc(100%*2/9+2rem))] xl:pr-12 xl:pl-[max(3.5rem,calc(100%*2/9+2.5rem))]",
                            )}
                        >
                            {steps.map((item) => (
                                <StepCell key={item.step} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
