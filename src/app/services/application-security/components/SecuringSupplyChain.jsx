import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const circleAsset = "/images/services/application-security/supply-chain-circle.png";

const eyebrow = "Our Approach";
const heading = "Securing the Software Supply Chain";

const pillars = [
    {
        title: "Design & CI/CD Security",
        body: "Identify application-layer threats through threat modeling. Embed SAST, DAST, SCA, and secrets scanning into CI/CD pipelines with automated security gates.",
    },
    {
        title: "Testing & Validation",
        body: "In-depth pre-release and periodic penetration testing across applications, APIs, and cloud infrastructure to validate security controls.",
    },
    {
        title: "Runtime & Supply Chain",
        body: "Deploy WAF, API security monitoring, and RASP for production security. Implement software composition analysis, container signing, and dependency tracking.",
    },
    {
        title: "Culture & Governance",
        body: "Developer security training, secure coding guidelines, security champions programs, and automated governance for continuous risk reduction.",
    },
];

/** Left indent for staggered rows — matches line + copy alignment */
const rowSpacer = [
    "w-0 shrink-0",
    "w-0 shrink-0 lg:w-[clamp(1.5rem,8vw,6rem)] xl:w-[clamp(2rem,10vw,8rem)]",
    "w-0 shrink-0",
    "w-0 shrink-0 lg:w-[clamp(2.5rem,12vw,9rem)] xl:w-[clamp(3rem,14vw,11rem)]",
];

export function SecuringSupplyChain() {
    return (
        <Section
            size="lg"
            className="relative overflow-x-clip bg-black text-white"
            aria-labelledby="securing-supply-chain-heading"
        >
            <div
                className="pointer-events-none absolute right-0 top-1/2 z-0 hidden aspect-square w-[min(96vw,920px)] max-w-[100vw] -translate-y-1/2 md:block lg:w-[min(88vw,980px)] xl:w-[min(82vw,1040px)]"
                aria-hidden
            >
                <Image
                    src={circleAsset}
                    alt=""
                    fill
                    className="object-contain object-right"
                    sizes="100vw"
                    priority={false}
                />
            </div>

            <Container as="div" className="relative z-10 min-w-0">
                {/* lg+: col 1 = copy + lines to gutter; col 2 = band aligned with supply-chain circle (Figma 1498-459) */}
                <div className="grid min-w-0 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_min(34vw,400px)] lg:gap-x-0">
                    <div className="min-w-0 lg:pr-2">
                        <div className="max-w-3xl lg:max-w-none">
                            <p className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-amber-600 sm:text-base">
                                {eyebrow}
                            </p>
                            <h2
                                id="securing-supply-chain-heading"
                                className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl md:text-[clamp(1.75rem,3.2vw,2.75rem)]"
                            >
                                {heading}
                            </h2>

                            <div className="mt-12 space-y-12 sm:mt-14 sm:space-y-14 lg:mt-16">
                                {pillars.map((item, index) => (
                                    <article key={item.title} className="w-full min-w-0">
                                        {/* Connector: spacer (stagger) + line to column edge / circle band */}
                                        <div className="mb-4 flex w-full min-w-0 items-center">
                                            <div className={cn(rowSpacer[index])} aria-hidden />
                                            <div
                                                className="h-px min-h-px min-w-0 flex-1 bg-gradient-to-r from-sky-400 via-sky-200 to-sky-500 shadow-[0_0_14px_rgba(56,189,248,0.35)]"
                                                aria-hidden
                                            />
                                        </div>
                                        <div className="flex w-full min-w-0 items-start">
                                            <div className={cn(rowSpacer[index])} aria-hidden />
                                            <div className="min-w-0 flex-1">
                                                <h3 className="heading-3 font-semibold leading-snug text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="body-text mt-3 max-w-xl text-pretty text-gray-300 sm:mt-4 lg:max-w-lg">
                                                    {item.body}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden min-h-[200px] lg:block" aria-hidden />
                </div>
            </Container>
        </Section>
    );
}
