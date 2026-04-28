import Image from "next/image";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const basePath = "/images/services/network-operations";

const cards = [
    {
        icon: "visibility-icon.svg",
        title: "Hybrid Network Visibility",
        description:
            "Unified monitoring across on-premise, cloud, SD-WAN, and remote access networks. One SOC, complete coverage.",
        alt: "Icon representing hybrid network visibility across environments.",
    },
    {
        icon: "detection-icon.svg",
        title: "Advanced Detection",
        description:
            "AI-powered NDR with behavioral analytics, protocol-level analysis, and encrypted traffic inspection beyond traditional IDS/IPS.",
        alt: "Icon representing advanced threat detection and analytics.",
    },
    {
        icon: "threat-icon.svg",
        title: "Proactive Threat Hunting",
        description:
            "Hypothesis-driven network threat hunts that uncover advanced persistent threats hiding within normal traffic patterns.",
        alt: "Icon representing proactive threat hunting.",
    },
];

const iconSize = 72;

function DifferentiatorCard({ icon, title, description, alt }) {
    return (
        <article className="relative flex min-h-0 flex-col items-center text-center">
            <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
                <div
                    className={cn(
                        "flex size-[4.5rem] items-center justify-center rounded-full sm:size-20",
                        "bg-gradient-to-br from-[#FF7700] to-[#FF9D00]",
                        "p-1",
                        /* Separates the badge from the page so the top border reads as “broken” under the circle */
                        "shadow-[0_0_0_4px_#000000]",
                    )}
                >
                    <Image
                        src={`${basePath}/${icon}`}
                        alt={alt}
                        width={iconSize}
                        height={iconSize}
                        className="size-60 object-contain "
                    />
                </div>
            </div>

            <div
                className={cn(
                    "flex w-full min-w-0 flex-1 flex-col items-center rounded-2xl border-2 border-[#FF7700] px-5 pb-8 pt-14 sm:px-7 sm:pb-9 sm:pt-16 lg:px-6 lg:pb-10 lg:pt-[4.25rem]",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
                )}
            >
                <h3 className="font-heading text-lg font-bold leading-snug text-white sm:text-xl">{title}</h3>
                <p className="body-text mt-3 max-w-sm text-pretty text-white/85 sm:mt-4 sm:leading-relaxed lg:max-w-none">
                    {description}
                </p>
            </div>
        </article>
    );
}

export function WhatMakesUsDifferent() {
    return (
        <section
            className="relative min-w-0 bg-black py-16 text-white sm:py-20 lg:py-24"
            aria-labelledby="network-operations-different-heading"
        >
            <Container as="div" className="flex flex-col items-center">
                <header className="max-w-3xl text-center">
                    <p className="section-label">Our Approach</p>
                    <h2
                        id="network-operations-different-heading"
                        className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl md:text-[clamp(2rem,3.5vw,2.75rem)]"
                    >
                        What Makes Us Different
                    </h2>
                </header>

                <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-x-6 gap-y-14 px-0 pt-4 sm:mt-12 sm:gap-x-8 sm:gap-y-16 sm:pt-6 md:grid-cols-3 md:gap-y-12 md:pt-4 lg:mt-14 lg:gap-x-8 lg:gap-y-12 xl:gap-x-10">
                    {cards.map((card) => (
                        <DifferentiatorCard key={card.title} {...card} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
