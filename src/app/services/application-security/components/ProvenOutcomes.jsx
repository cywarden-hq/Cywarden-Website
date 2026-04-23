import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const graphSrc = "/images/services/application-security/outcome-graph.svg";

const eyebrow = "Results";
const heading = "Proven Outcomes";

const stats = [
    {
        value: "3-4",
        title: "Parallel Releases Secured",
        body: "Successful releases without high or critical security impact.",
    },
    {
        value: "30%",
        title: "Production Risk Reduction",
        body: "Early high-severity vulnerability detection via shift-left security controls.",
    },
    {
        value: "70%",
        title: "Faster Remediation",
        body: "DevOps-aligned security workflows accelerate fix cycles dramatically.",
    },
];

export function ProvenOutcomes() {
    return (
        <Section
            size="lg"
            className="relative overflow-x-clip bg-black text-white"
            aria-labelledby="proven-outcomes-heading"
        >
            <div
                className="pointer-events-none absolute left-1/2 top-[28%] z-0 h-[min(480px,70vw)] w-[min(900px,95vw)] max-w-full -translate-x-1/2"
                style={{
                    background:
                        "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(30, 80, 180, 0.35) 0%, rgba(10, 30, 80, 0.12) 50%, transparent 72%)",
                }}
                aria-hidden
            />

            <Container as="div" className="relative z-10 flex flex-col items-center text-center">
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-amber-600 sm:text-base">
                    {eyebrow}
                </p>
                <h2
                    id="proven-outcomes-heading"
                    className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight sm:mt-5 sm:text-4xl md:text-[clamp(1.75rem,3.2vw,2.75rem)]"
                >
                    {heading}
                </h2>

                <div className="mt-10 w-full max-w-5xl sm:mt-12 lg:mt-14">
                    <Image
                        src={graphSrc}
                        alt="Chart illustrating security outcomes across parallel releases, risk reduction, and remediation speed."
                        width={1440}
                        height={710}
                        className="h-auto w-full object-contain"
                        sizes="(min-width: 1024px) 64rem, 100vw"
                    />
                </div>

                <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-10 sm:mt-14 sm:gap-12 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-10">
                    {stats.map((item) => (
                        <div key={item.title} className="flex flex-col items-center px-2 text-center">
                            <p className="font-heading text-4xl font-bold leading-none bg-gradient-to-r from-[#0151FF] to-[#00BFFF] text-transparent bg-clip-text sm:text-5xl md:text-[clamp(2rem,4vw,3rem)]">
                                {item.value}
                            </p>
                            <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-white sm:text-xl">
                                {item.title}
                            </h3>
                            <p className="body-text mt-3 max-w-xs text-pretty text-white/80 sm:mt-4 md:max-w-none">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
