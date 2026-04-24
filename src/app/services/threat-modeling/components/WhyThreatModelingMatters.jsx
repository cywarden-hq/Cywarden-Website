"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const iconBase = "/images/services/threat-modeling";

const cards = [
    {
        id: "proactive-defense",
        title: "Proactive Defense",
        description:
            "Find threats before attackers do — at design time, not after a breach",
        iconSrc: `${iconBase}/proactive-defense-icon.svg`,
    },
    {
        id: "informed-decisions",
        title: "Informed Decisions",
        description:
            "Architecture and engineering teams make security-aware design choices",
        iconSrc: `${iconBase}/informed-decisions-icon.svg`,
    },
    {
        id: "risk-prioritization",
        title: "Risk Prioritization",
        description:
            "Focus resources on the highest-impact threats, not compliance checkboxes",
        iconSrc: `${iconBase}/risk-prioritization-icon.svg`,
    },
    {
        id: "continuous-process",
        title: "Continuous Process",
        description:
            "Living threat models that evolve with your architecture and threat landscape",
        iconSrc: `${iconBase}/continuous-process-icon.svg`,
    },
];

const subheading =
    "When security is designed in—not bolted on after the fact—teams align on risk, ship with confidence, and invest effort where it actually reduces harm.";

export function WhyThreatModelingMatters() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Section
            className="relative z-10 min-w-0 overflow-x-hidden bg-transparent text-white"
            aria-labelledby="why-threat-modeling-heading"
            size="lg"
        >
            <Container className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
                <header className="max-w-3xl text-left">
                    <h2
                        id="why-threat-modeling-heading"
                        className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]"
                    >
                        Why Threat Modeling Matters
                    </h2>
                    <p className="body-lg mt-4 max-w-2xl text-pretty text-white/80 sm:mt-5">
                        {subheading}
                    </p>
                </header>

                <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                    {cards.map((card, index) => {
                        const selected = index === activeIndex;
                        return (
                            <li key={card.id} className="min-h-0 min-w-0">
                                <button
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-pressed={selected}
                                    aria-label={`${card.title}. ${card.description}`}
                                    className={cn(
                                        "flex h-full min-h-[17.5rem] w-full flex-col items-start gap-5 rounded-2xl border bg-white/[0.03] p-6 text-left sm:min-h-[18.5rem] sm:rounded-[1.35rem] sm:p-7 lg:min-h-[19rem]",
                                        "transition-[border-color,box-shadow] duration-300 ease-out",
                                        selected
                                            ? "border-[#0099FF] shadow-[0_0_0_1px_rgba(0,153,255,0.35),0_20px_50px_rgba(0,0,0,0.35)]"
                                            : "border-neutral-500/50 shadow-none hover:border-neutral-400/55",
                                    )}
                                >
                                    <span className="flex shrink-0" aria-hidden>
                                        <Image
                                            src={card.iconSrc}
                                            alt=""
                                            width={48}
                                            height={48}
                                            className={cn(
                                                "h-12 w-12 object-contain transition-[filter,opacity] duration-300 ease-out",
                                                selected
                                                    ? "grayscale-0 opacity-100"
                                                    : "grayscale opacity-[0.65]",
                                            )}
                                        />
                                    </span>
                                    <span className="flex min-h-0 flex-1 flex-col gap-3">
                                        <span className="font-heading text-lg font-semibold leading-snug text-white sm:text-xl">
                                            {card.title}
                                        </span>
                                        <span className="text-sm leading-relaxed text-white/75 sm:text-[0.9375rem]">
                                            {card.description}
                                        </span>
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </Section>
    );
}
