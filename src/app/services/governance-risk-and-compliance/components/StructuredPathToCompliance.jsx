import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const basePath = "/images/services/governance-risk-and-compliance";

/** Step imagery — compliance-step-1 … 4.png */
const stepImages = [
    `${basePath}/compliance-step-1.png`,
    `${basePath}/compliance-step-2.png`,
    `${basePath}/compliance-step-3.png`,
    `${basePath}/compliance-step-4.png`,
];

/**
 * Copy aligned to Figma node 1685:406 (file eMHa4M8jL3Dd6d3mpvJai0).
 * If Figma text differs, update strings here to match the design file.
 */
const steps = [
    {
        label: "Step 1",
        title: "Assess",
        description:
            "Inventory regulatory obligations, control maturity, and evidence gaps so priorities align with real business risk before scope or budget are locked.",
    },
    {
        label: "Step 2",
        title: "Design",
        description:
            "Translate requirements into control objectives, policy sets, and a traceable roadmap owners can execute—without boiling the ocean.",
    },
    {
        label: "Step 3",
        title: "Implement",
        description:
            "Operationalize controls across tools and teams: evidence automation, access and change workflows, and training so behavior matches policy.",
    },
    {
        label: "Step 4",
        title: "Certify & Sustain",
        description:
            "Prepare attestations, support audits, then keep posture current with metrics, exception handling, and continuous control testing.",
    },
];

function ArrowNortheast({ className }) {
    return (
        <svg
            className={cn("inline-block shrink-0 text-white", className)}
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
        >
            <path
                d="M7 17L17 7M17 7H10M17 7V14"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function StructuredPathToCompliance() {
    return (
        <Section
            className="relative min-w-0 bg-black py-16 text-white sm:py-20 md:py-24 lg:py-28"
            aria-labelledby="grc-structured-path-heading"
            size="lg"
        >
            <Container as="div">
                <h2
                    id="grc-structured-path-heading"
                    className="text-center font-heading text-[clamp(1.65rem,4.2vw,2.35rem)] font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[clamp(2rem,3.2vw,2.75rem)]"
                >
                    A Structured Path to Compliance
                </h2>

                <div className="mx-auto mt-8 md:mt-10">
                    {steps.map((step, index) => (
                        <article
                            key={step.label}
                            className="grid grid-cols-1 gap-4 border-b border-white/[0.08] py-10 sm:gap-10 sm:py-12 md:grid-cols-[minmax(0,40%)_minmax(0,60%)] md:items-center md:gap-12 md:py-14 lg:gap-16 lg:py-16 last:border-b-0"
                        >
                            <div className="min-w-0 md:pr-4">
                                <p className="font-sans text-sm font-medium text-white/45 sm:text-[0.9375rem]">
                                    {step.label}
                                </p>
                                <div className="mt-2 flex flex-wrap items-center gap-2 sm:mt-2.5 sm:gap-2.5">
                                    <h3 className="font-heading text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[clamp(1.65rem,2.4vw,2.15rem)] lg:text-4xl">
                                        {step.title}
                                    </h3>
                                    <ArrowNortheast className="mb-0.5 md:h-6 md:w-6" />
                                </div>
                                <p className="body-lg mt-4 max-w-xl text-pretty text-left text-white/78 sm:mt-5 md:text-lg md:leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            <div className="relative mx-auto w-full max-w-xl md:mx-0 md:max-w-none">
                                <div
                                    className={cn(
                                        "relative aspect-[16/5] w-full overflow-hidden rounded-full",
                                        "shadow-[0_20px_60px_-12px_rgba(0,80,200,0.25)]",
                                    )}
                                >
                                    <Image
                                        src={stepImages[index]}
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
