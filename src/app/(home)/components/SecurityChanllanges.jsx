"use client";

import { useState } from "react";
import { Activity, Cog, Lock } from "lucide-react";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";
import Image from "next/image";

const challenges = [
  {
    id: "01",
    title: "Talent Gaps Are Widening",
    subtitle: "Chronic staffing shortages leave SOCs exposed",
    detailTitle: "Talent Gaps Are Widening, Not Closing",
    detailBody:
      "You cannot hire fast enough. The cybersecurity talent shortage means critical roles stay open for months, leaving your SOC understaffed and response times dangerously slow. Security operations require 24/7 coverage, but building and retaining a world-class team is increasingly unattainable for most organizations.",
    features: [
      { Icon: Cog, label: "24/7 AI SOC Monitoring" },
      { Icon: Activity, label: "Automated Threat\nDetection" },
      { Icon: Lock, label: "Compliance Automation" },
    ],
  },
  {
    id: "02",
    title: "Alert Fatigue Is Masking Threats",
    subtitle: "Critical signals buried under noise",
    detailTitle: "Noise Drowns the Signals That Matter",
    detailBody:
      "SOCs are flooded with alerts—many low fidelity or duplicated across tools. Analysts spend cycles triaging false positives while high-severity activity blends into the background. Without prioritization tuned to your environment, real incidents arrive late or not at all.",
    features: [
      { Icon: Activity, label: "Automated Threat\nDetection" },
      { Icon: Cog, label: "24/7 AI SOC Monitoring" },
      { Icon: Lock, label: "Compliance Automation" },
    ],
  },
  {
    id: "03",
    title: "Cloud Expansion Has Outrun Controls",
    subtitle: "Multi-cloud visibility gaps and identity sprawl",
    detailTitle: "Cloud Growth Moved Faster Than Governance",
    detailBody:
      "Workloads spread across regions and providers faster than policies, logging, and identity guardrails could follow. Shadow resources, misconfigurations, and inconsistent IAM create blind spots attackers already exploit. You need continuous visibility aligned to how cloud actually ships in your org.",
    features: [
      { Icon: Lock, label: "Compliance Automation" },
      { Icon: Cog, label: "24/7 AI SOC Monitoring" },
      { Icon: Activity, label: "Automated Threat\nDetection" },
    ],
  },
  {
    id: "04",
    title: "Compliance Is Consuming Resources",
    subtitle: "Manual audit cycles drain engineering time",
    detailTitle: "Compliance Should Enable Speed, Not Block It",
    detailBody:
      "Frameworks multiply while evidence collection stays manual. Teams borrow engineering hours for screenshots and spreadsheets instead of hardening systems. Automation that maps controls to live telemetry turns audits into a by-product of good operations—not a quarterly fire drill.",
    features: [
      { Icon: Lock, label: "Compliance Automation" },
      { Icon: Activity, label: "Automated Threat\nDetection" },
      { Icon: Cog, label: "24/7 AI SOC Monitoring" },
    ],
  },
  {
    id: "05",
    title: "Security Disconnected From Strategy",
    subtitle: "Risk reporting remains reactive",
    detailTitle: "Risk Has to Speak the Language of the Business",
    detailBody:
      "When security metrics do not tie to revenue, resilience, and customer trust, leadership sees cost—not capability. Reporting must translate technical signal into operational and strategic outcomes so investment decisions and incident response stay aligned with what the company is trying to achieve.",
    features: [
      { Icon: Cog, label: "24/7 AI SOC Monitoring" },
      { Icon: Lock, label: "Compliance Automation" },
      { Icon: Activity, label: "Automated Threat\nDetection" },
    ],
  },
];

export function SecurityChanllanges() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = challenges[activeIndex];

  return (
    <Section
      as="section"
      size="lg"
      className="relative overflow-hidden bg-[#03060d] text-white"
      aria-labelledby="security-challenge-heading"
    >
        <Image
          src="/images/home/security-challange-bg.png"
          alt=""
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          sizes="100vw"
          priority={false}
          aria-hidden
        />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 140, 255, 0.55) 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#03060d_72%)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -left-[18%] top-1/2 h-[min(90vw,520px)] w-[min(140vw,900px)] -translate-y-1/2 rounded-full bg-[#0080FF] opacity-[0.22] blur-[120px] md:blur-[160px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[12%] top-[42%] h-[min(85vw,480px)] w-[min(130vw,820px)] -translate-y-1/2 rounded-full bg-[#1E6DFF] opacity-[0.2] blur-[110px] md:blur-[150px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-18%] left-1/2 h-[min(70vw,380px)] w-[min(120vw,720px)] -translate-x-1/2 rounded-full bg-[#008CFF] opacity-[0.28] blur-[100px] md:blur-[130px]"
        aria-hidden
      />

      <Container as="div" className="relative z-10 min-w-0">
        <p className="section-label">The Challenge</p>

        <h2
          id="security-challenge-heading"
          className="heading-2 mt-3 max-w-4xl text-white"
        >
          <span className="text-white">Security Complexity Is Outpacing Most </span>
          <span className="text-[#3BA3FF]">Organizations</span>
        </h2>

        {/* One outer navy card (screenshot): tabs + black detail inside */}
        <div className="relative mt-10 sm:mt-12 lg:mt-14">
          <div
            className={cn(
              "relative overflow-hidden rounded-[32px] border border-white/[0.08]",
              "bg-gradient-to-b from-[#0C3296] to-[#010055]",
              "p-5 sm:p-8 lg:p-10",
            )}
          >
            {/* Blue glow from bottom center inside the card */}
            <div
              className="pointer-events-none absolute -bottom-1/4 left-1/2 h-[55%] w-[90%] max-w-3xl -translate-x-1/2 rounded-full bg-[#0080FF] opacity-[0.22] blur-[100px]"
              aria-hidden
            />

            <div className="relative z-[1] flex min-w-0 flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-8 xl:gap-10 2xl:gap-12">
              {/* Left ~40% */}
              <div
                className="flex w-full min-w-0 max-w-full flex-col gap-[10px] sm:max-w-[431px] lg:max-w-sm lg:shrink-0 xl:max-w-md 2xl:max-w-[28rem]"
                role="tablist"
                aria-label="Security challenges"
              >
                {challenges.map((item, index) => {
                  const selected = index === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      id={`challenge-tab-${item.id}`}
                      aria-selected={selected}
                      aria-controls="challenge-panel"
                      tabIndex={0}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "flex min-h-[72px] w-full items-center gap-0 rounded-xl py-1 pl-3.5 text-left transition sm:h-[72px] sm:py-0",
                        selected
                          ? "bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                          : "border border-white/10 bg-white/[0.07]",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-full font-sans text-[18px] font-medium leading-none",
                          selected
                            ? "bg-[#3D5CF5] text-white"
                            : "bg-white/10 text-white/50",
                        )}
                        aria-hidden
                      >
                        {item.id}
                      </span>
                      <div className="flex min-w-0 flex-1 flex-col justify-center py-2 pl-3 pr-3">
                        <p
                          className={cn(
                            "font-sans text-[13px] font-bold leading-4 tracking-normal",
                            selected ? "text-[#0D1B6E]" : "text-white/90",
                          )}
                        >
                          {item.title}
                        </p>
                        <p
                          className={cn(
                            "mt-1 font-sans text-[11px] font-normal leading-[13px]",
                            selected ? "text-[#4A5768]" : "text-white/50",
                          )}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right ~60% — black detail card */}
              <div
                id="challenge-panel"
                role="tabpanel"
                aria-labelledby={`challenge-tab-${active.id}`}
                className={cn(
                  "flex min-w-0 flex-1 flex-col rounded-2xl border border-white/[0.06]",
                  "bg-black px-4 py-7 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:rounded-[20px] lg:px-8 lg:py-10 xl:px-10 xl:py-12",
                )}
              >
                <h3 className="font-heading text-xl font-bold leading-snug text-[#FF7A00] sm:text-2xl">
                  {active.detailTitle}
                </h3>
                <p className="mt-5 max-w-prose font-sans text-sm leading-[1.7] text-white sm:text-base">
                  {active.detailBody}
                </p>

                <div className="mt-8 flex flex-1 flex-col justify-end gap-4 sm:mt-10">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                    {active.features.map(({ Icon, label }, i) => (
                      <div
                        key={`${active.id}-${i}`}
                        className="flex flex-col items-center justify-center gap-2.5 rounded-xl bg-white px-3 py-4 text-center shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                      >
                        <Icon
                          className="size-6 shrink-0 text-[#4866E8]"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                        <p className="whitespace-pre-line font-sans text-[11px] font-medium leading-snug text-[#0D1B6E] sm:text-xs">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
