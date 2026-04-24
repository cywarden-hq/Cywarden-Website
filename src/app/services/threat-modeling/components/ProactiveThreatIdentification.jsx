"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const cardImage =
    "/images/services/threat-modeling/threat-identification-1.png";

const tabs = [
    {
        id: "scope",
        label: "Scope & Model",
        title: "Scope & Model",
        description:
            "Define systems under analysis assets, trust boundaries, data flows, and external interfaces. Create data flow diagrams and map architecture to attack surfaces using STRIDE, PASTA, or MITRE ATT&CK.",
    },
    {
        id: "identify",
        label: "Identify & Prioritize",
        title: "Identify & Prioritize",
        description:
            "Discover threats across assets and data flows, score by likelihood and impact, and produce a ranked backlog so remediation starts with the highest-risk issues.",
    },
    {
        id: "mitigate",
        label: "Mitigate & Validate",
        title: "Mitigate & Validate",
        description:
            "Select controls mapped to findings, align fixes with risk appetite, and validate through design reviews, testing, and traceability back to requirements and threat scenarios.",
    },
    {
        id: "integrate",
        label: "Integrate & Evolve",
        title: "Integrate & Evolve",
        description:
            "Embed modeling into SDLC rituals, connect outputs to architecture and governance, and refresh models as systems change so security design keeps pace with delivery.",
    },
];

export function ProactiveThreatIdentification() {
    const baseId = useId();
    const [activeIndex, setActiveIndex] = useState(0);
    const active = tabs[activeIndex];

    return (
        <Section
            className="relative z-10 min-w-0 overflow-x-hidden bg-transparent text-white"
            aria-labelledby="proactive-threat-heading"
            size="lg"
        >
            <Container className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
                <header className="max-w-3xl">
                    <p className="section-label">Our approach</p>
                    <h2
                        id="proactive-threat-heading"
                        className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
                    >
                        Proactive Threat Identification
                    </h2>
                </header>

                <div className="flex flex-col gap-8 lg:gap-10">
                    <div
                        className="w-full rounded-full bg-white p-1.5 shadow-sm sm:p-2"
                        role="tablist"
                        aria-label="Threat identification phases"
                    >
                        <div className="flex gap-1 overflow-x-auto px-2 pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-4 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
                            {tabs.map((tab, index) => {
                                const selected = index === activeIndex;
                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        role="tab"
                                        id={`${baseId}-tab-${tab.id}`}
                                        aria-selected={selected}
                                        aria-controls={`${baseId}-panel-${tab.id}`}
                                        tabIndex={selected ? 0 : -1}
                                        onClick={() => setActiveIndex(index)}
                                        className={cn(
                                            "min-w-0 shrink-0 px-3 py-2.5 text-center text-sm font-medium transition-colors md:px-2 md:py-3 md:text-[0.8125rem] lg:px-4 lg:text-sm",
                                            selected
                                                ? "rounded-xl bg-gray-200 font-semibold text-[#007BFF] shadow-md shadow-black/30"
                                                : "rounded-xl bg-transparent text-neutral-900 hover:text-black",
                                        )}
                                    >
                                        <span className="block truncate sm:whitespace-normal">
                                            {tab.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-center lg:gap-12 xl:gap-16">
                        <div
                            id={`${baseId}-panel-${active.id}`}
                            role="tabpanel"
                            aria-labelledby={`${baseId}-tab-${active.id}`}
                            className="min-w-0 lg:max-w-xl lg:pr-4"
                        >
                            <h3 className="font-heading text-2xl font-bold leading-snug text-white sm:text-3xl">
                                {active.title}
                            </h3>
                            <p className="body-lg mt-4 text-pretty text-white/90 sm:mt-5">
                                {active.description}
                            </p>
                            <Link
                                href="/services"
                                className="mt-6 inline-flex text-base font-semibold text-[#007BFF] underline-offset-4 hover:underline sm:mt-7"
                            >
                                Learn more
                            </Link>
                        </div>

                        <div className="relative min-w-0 w-full">
                            <Image
                                src={cardImage}
                                alt="Security architecture visualization with shields, locks, and connected systems."
                                width={700}
                                height={457}
                                className="h-auto w-full max-w-full object-contain"
                                sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 55vw, 100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
