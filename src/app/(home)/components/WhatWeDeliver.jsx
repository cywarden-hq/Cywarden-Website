"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const deliverEyebrow = "What We Deliver";

const deliverHeading = {
  before: "Security Operations That Scale with ",
  highlight: "Your Business",
};

const deliverSubtext = {
  before:
    "Every engagement is designed around outcomes — faster detection, ",
  highlight: "reduced risk, sustained compliance, ",
  after: "and the confidence to operate at global scale.",
};

const deliverCards = [
  {
    title: "Detection",
    detailTitle: "Managed Detection & Response",
    detailBody:
      "24/7 threat monitoring, investigation, and containment delivered by a global SOC team augmented with AI-driven analytics. We detect what others miss and respond before damage spreads.",
    image: "/images/home/deliver-detection.png",
    alt: "Magnifying glass over a digital network representing threat detection",
  },
  {
    title: "Cloud",
    detailTitle: "Cloud Security & Posture Management",
    detailBody:
      "Continuous visibility across AWS, Azure, and GCP. We secure your cloud identity fabric, enforce least-privilege access, and eliminate misconfigurations that lead to breaches.",
    image: "/images/home/deliver-cloud.png",
    alt: "Cloud infrastructure and code representing cloud security",
  },
  {
    title: "Risk",
    detailTitle: "Risk Advisory & Governance",
    detailBody:
      "Enterprise risk assessments, treatment planning, and board-ready reporting that translate technical exposure into business decisions.",
    image: "/images/home/deliver-risk.png",
    alt: "Scrolling code and data streams representing risk visibility",
  },
  {
    title: "Compliance",
    detailTitle: "Compliance & Certification Readiness",
    detailBody:
      "End-to-end support for ISO 27001, SOC 2 Type I/II, GDPR, and NIST with automated evidence collection and year-round audit readiness.",
    image: "/images/home/deliver-compliance.png",
    alt: "Digital padlock on a circuit pattern representing compliance",
  },
  {
    title: "AI",
    detailTitle: "AI-Driven Security Operations",
    detailBody:
      "Machine learning models reduce alert noise by up to 80%, accelerate triage, and surface correlated threats across your environment.",
    image: "/images/home/deliver-ai.png",
    alt: "Human eye with digital circuit iris representing AI security",
  },
  {
    title: "GRC",
    detailTitle: "GRC Platform Implementation",
    detailBody:
      "Deployment of modern governance, risk, and compliance platforms like Vanta, Drata, ServiceNow GRC, and OneTrust.",
    image: "/images/home/deliver-grc.png",
    alt: "Connected cityscape representing governance, risk, and compliance",
  },
];

/** Matches `SecurityChanllanges` headline accent (“Organizations”) */
const accentBlue = "text-[#3BA3FF]";

export function WhatWeDeliver() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section
      as="section"
      size="lg"
      className="bg-black text-white"
      aria-labelledby="what-we-deliver-heading"
    >
      <Container as="div" className="min-w-0">
        <p className="section-label">{deliverEyebrow}</p>

        <h2
          id="what-we-deliver-heading"
          className="heading-2 mt-3 max-w-4xl text-balance font-bold text-white"
        >
          {deliverHeading.before}
          <span className={accentBlue}>{deliverHeading.highlight}</span>
        </h2>

        <p className="body-lg mt-5 max-w-3xl text-white/70 md:mt-6">
          {deliverSubtext.before}
          <span className={cn("font-medium", accentBlue)}>
            {deliverSubtext.highlight}
          </span>
          {deliverSubtext.after}
        </p>

        {/* Mobile / tablet: static grid (no hover strip layout) */}
        <div className="mt-10 grid grid-cols-2 gap-[15px] sm:mt-12 md:grid-cols-3 lg:hidden lg:mt-14">
          {deliverCards.map((card) => (
            <article
              key={card.title}
              className="relative aspect-[180/524] w-full overflow-hidden rounded-[30px]"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[38%] bg-gradient-to-b from-black via-black/70 to-transparent"
                aria-hidden
              />
              <h3 className="absolute left-5 top-8 z-[2] font-heading text-lg font-medium leading-tight text-white sm:left-6 sm:top-9 sm:text-[18px]">
                {card.title}
              </h3>
            </article>
          ))}
        </div>

        {/* Desktop: horizontal hover accordion */}
        <div
          className="mt-10 hidden min-h-0 w-full min-w-0 gap-2 overflow-hidden lg:mt-14 lg:flex lg:h-[min(480px,68svh)] lg:min-h-[400px] lg:items-stretch lg:gap-3 xl:h-[min(520px,70svh)] xl:min-h-[440px] xl:gap-3 2xl:h-[min(560px,72svh)]"
          onMouseLeave={() => setActiveIndex(0)}
          role="list"
          aria-label="What we deliver — hover a card to expand"
        >
          {deliverCards.map((card, index) => {
            const expanded = index === activeIndex;

            return (
              <article
                key={card.title}
                role="listitem"
                className={cn(
                  "relative min-h-0 cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-neutral-950/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
                  "transition-[flex-grow,flex-shrink,flex-basis,min-width] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]",
                  expanded
                    ? "min-w-[min(48vw,320px)] flex-[2.35_1_0%] xl:min-w-[min(40vw,380px)] 2xl:min-w-[min(36vw,420px)]"
                    : "min-w-[3rem] flex-[0.32_1_0%] sm:min-w-[3.5rem] xl:min-w-[3.75rem]",
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
                aria-expanded={expanded}
                aria-label={`${card.title}: ${card.detailTitle}`}
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out"
                  sizes="(max-width: 1280px) 45vw, 380px"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[42%] bg-gradient-to-b from-black via-black/65 to-transparent transition-opacity duration-300"
                  aria-hidden
                />
                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300",
                    expanded ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden
                />

                <h3
                  className={cn(
                    "absolute z-[2] font-heading font-medium leading-tight text-white transition-all duration-300 ease-out",
                    expanded
                      ? "left-5 top-7 text-lg sm:left-6 sm:top-8 sm:text-[18px]"
                      : "left-1/2 top-6 w-max -translate-x-1/2 origin-center text-[13px] uppercase tracking-[0.18em] [writing-mode:vertical-rl] sm:top-8 sm:text-sm",
                  )}
                >
                  {card.title}
                </h3>

                <div
                  className={cn(
                    "absolute inset-x-0 bottom-0 z-[2] flex flex-col justify-end p-5 sm:p-6",
                    "transition-opacity duration-300 ease-out",
                    expanded
                      ? "translate-y-0 opacity-100 delay-75"
                      : "pointer-events-none translate-y-2 opacity-0",
                  )}
                >
                  <h4 className="font-heading text-base font-bold leading-snug text-white sm:text-lg">
                    {card.detailTitle}
                  </h4>
                  <p className="mt-2 text-pretty font-sans text-xs leading-relaxed text-white/80 sm:text-sm xl:text-[15px]">
                    {card.detailBody}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
