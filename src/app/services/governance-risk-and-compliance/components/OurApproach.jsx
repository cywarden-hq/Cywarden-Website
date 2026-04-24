import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const basePath = "/images/services/governance-risk-and-compliance";

const sectionBg = `${basePath}/our-approach-bg.svg`;
const cardTexture = `${basePath}/our-approach-card-bg.png`;

const sharedBody =
    "Annex A control mapping, risk treatment plans, Statement of Applicability development, internal audit preparation, and full certification readiness support.";

const cards = [
    { title: "ISO 27001" },
    { title: "GDPR Compliance" },
    { title: "SOC 2 Type 1 & 2" },
    { title: "GRC" },
    { title: "Governance Frameworks" },
];

function ApproachCard({ title, description, className }) {
    return (
        <article
            className={cn(
                "relative overflow-hidden rounded-2xl border border-sky-400/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_48px_rgba(0,0,0,0.45)] sm:rounded-[1.35rem] sm:p-7 md:p-8",
                "bg-[#060a14]",
                className,
            )}
            style={{
                backgroundImage: `url('${cardTexture}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/[0.04] to-transparent"
                aria-hidden
            />
            <h3 className="relative font-heading text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-[1.35rem] lg:text-2xl">
                {title}
            </h3>
            <p className="relative mt-4 max-w-prose text-left text-sm leading-relaxed text-white/82 sm:text-base sm:leading-relaxed">
                {description}
            </p>
        </article>
    );
}

export function OurApproach() {
    return (
        <div className="relative isolate min-w-0 overflow-x-clip bg-[#020308]">
            <div className="pointer-events-none absolute inset-0 z-0">
                <Image
                    src={sectionBg}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={false}
                />
                <div className="absolute inset-0 bg-black/45" aria-hidden />
            </div>
            {/* Soft lift behind the grid */}
            <div
                className="pointer-events-none absolute left-1/2 top-[42%] z-[1] h-[min(70vh,32rem)] w-[min(120vw,56rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(30,100,200,0.22)_0%,transparent_68%)] blur-3xl"
                aria-hidden
            />

            <Section
                className="relative z-10 bg-transparent py-16 text-white sm:py-20 md:py-24 lg:py-28"
                aria-labelledby="grc-our-approach-heading"
                size="lg"
            >
                <Container as="div" className="flex flex-col items-center">
                    <header className="max-w-4xl text-center">
                        <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-[#FF5900] sm:text-base">
                            Our approach
                        </p>
                        <h2
                            id="grc-our-approach-heading"
                            className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl md:text-[clamp(2rem,3.5vw,2.85rem)]"
                        >
                            Governance That Survives Audit and Reality
                        </h2>
                    </header>

                    <ul className="relative z-[2] mt-12 grid w-full max-w-5xl list-none grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 md:gap-6 lg:mt-16 lg:max-w-6xl">
                        {cards.map((card, index) => (
                            <li
                                key={card.title}
                                className={cn(
                                    "min-w-0",
                                    index === 4 && "md:col-span-2 md:flex md:justify-center",
                                )}
                            >
                                <ApproachCard
                                    title={card.title}
                                    description={sharedBody}
                                    className={cn(
                                        "h-full w-full",
                                        index === 4 &&
                                            "md:max-w-[calc(50%-0.75rem)] md:shrink-0 lg:max-w-[calc(50%-0.75rem)]",
                                    )}
                                />
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>
        </div>
    );
}
