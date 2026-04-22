import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const eyebrowStyle = {
  backgroundImage:
    "linear-gradient(90deg, rgb(255, 60, 0) 0%, rgb(254, 119, 2) 100%)",
};

const needleGradient = {
  backgroundImage:
    "linear-gradient(90deg, rgb(0, 81, 255) 0%, rgb(0, 174, 255) 100%)",
};

/** Inner fill width ÷ track width (630) from Figma */
const stats = [
  {
    label: "Reduction in alert noise through AI-driven triage and correlation",
    value: "80%",
    fillRatio: 493 / 630,
  },
  {
    label: "Faster incident response compared to in-house-only SOC operations",
    value: "3× Faster",
    fillRatio: 444 / 630,
  },
  {
    label: "Less engineering time spent on compliance evidence and audit preparation",
    value: "60%",
    fillRatio: 364 / 630,
  },
  {
    label: "Certification success rate across ISO 27001, SOC 2, and GDPR engagements",
    value: "100%",
    fillRatio: 614 / 630,
  },
];

export function BusinessImpact() {
  return (
    <Section
      as="section"
      size="lg"
      className="relative overflow-hidden bg-black text-white"
      aria-labelledby="business-impact-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-[#0080FF] opacity-[0.15] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[240px] w-[400px] rounded-full bg-[#0066FF] opacity-[0.12] blur-[90px]"
        aria-hidden
      />

      <Container as="div" className="relative z-10 min-w-0">
        <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-0 xl:gap-2">
          {/* Left copy */}
          <div className="w-full min-w-0 shrink-0 lg:max-w-[min(100%,480px)] lg:pr-8 xl:pr-12 2xl:pr-14">
            <p
              className="bg-clip-text font-heading text-xs font-bold uppercase tracking-[0.12em] text-transparent sm:text-[13px]"
              style={eyebrowStyle}
            >
              Business Impact
            </p>

            <h2
              id="business-impact-heading"
              className="mt-3 text-balance font-heading text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[clamp(2rem,2.5vw,2.5rem)] xl:text-[40px]"
            >
              Security That Moves{" "}
              <span
                className="bg-clip-text text-transparent"
                style={needleGradient}
              >
                the Needle
              </span>
            </h2>

            <p className="body-lg mt-8 max-w-[414px] text-white/75 lg:mt-10">
              Our clients measure our impact not in tools deployed, but in risk
              reduced, time recovered, and trust earned.
            </p>

            <p className="mt-6 max-w-[453px] font-sans text-base font-normal leading-[1.2] text-white/75 sm:text-lg lg:text-xl">
              When compliance and security operate together, the downstream
              effects are tangible: fewer audit surprises, stronger vendor trust,
              faster deal cycles where security questionnaires are a formality
              rather than a blocker, and the ability to enter regulated markets
              with confidence.
            </p>
          </div>

          {/* Vertical divider */}
          <div
            className="hidden shrink-0 self-stretch bg-white lg:block lg:w-[0.2px]"
            aria-hidden
          />

          {/* Stats */}
          <div className="flex min-w-0 flex-1 flex-col gap-8 sm:gap-9 lg:pl-8 lg:pt-1 xl:pl-12 2xl:pl-14">
            {stats.map((row) => (
              <div key={row.label}>
                <p className="mb-3 max-w-prose font-sans text-sm leading-snug text-white/80 sm:text-base sm:leading-[1.2] lg:max-w-[623px]">
                  {row.label}
                </p>
                <div className="relative h-[52px] w-full max-w-full rounded-[38px] border border-[#00C3FF] sm:h-[59px] lg:max-w-[630px]">
                  <div
                    className="absolute left-[9px] top-1/2 h-12 -translate-y-1/2 rounded-[38px]"
                    style={{
                      width: `calc((100% - 18px) * ${row.fillRatio})`,
                      maxWidth: "calc(100% - 18px)",
                      background:
                        "linear-gradient(90deg, rgba(0, 123, 255, 0) 0%, rgba(0, 123, 255, 1) 100%)",
                    }}
                  >
                    <span
                      className={cn(
                        "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2",
                        "font-heading text-lg font-bold text-white sm:text-xl",
                      )}
                    >
                      {row.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
