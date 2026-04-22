import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

/**
 * Bump this when you replace files under the same name so browsers and
 * Next.js stop serving an older optimized/cached copy.
 */
const APPROACH_ASSETS_VERSION = "2";

const eyebrowStyle = {
  backgroundImage:
    "linear-gradient(90deg, rgb(229, 100, 4) 0%, rgb(249, 104, 14) 55%, rgb(255, 140, 100) 100%)",
};

const accentBlue = "text-[#3BA3FF]";

const tags = [
  "NIST CSF",
  "ISO 27001",
  "SOC 2 Type I & II",
  "GDPR / CCPA",
  "CIS Controls",
  "MITRE ATT&CK",
];

const approachCards = [
  {
    src: "/images/home/our-approach-asset.svg",
    alt: "Assess and scope — methodology card",
  },
  {
    src: "/images/home/our-approach-architecture.svg",
    alt: "Architecture and design — methodology card",
  },
  {
    src: "/images/home/our-approach-implement.svg",
    alt: "Implement and operationalize — methodology card",
  },
  {
    src: "/images/home/our-approach-certify.svg",
    alt: "Certify and sustain — methodology card",
  },
];

/** Tallest export (implement) — every cell uses this aspect so the 2×2 grid lines up. */
const CELL_ASPECT_W = 538;
const CELL_ASPECT_H = 513;

export function OurApproach() {
  return (
    <Section
      as="section"
      size="lg"
      className="relative overflow-hidden bg-transparent text-white"
      aria-labelledby="our-approach-heading"
    >
      <div
        className="pointer-events-none absolute -left-[15%] top-1/3 h-[320px] w-[320px] rounded-full bg-[#0080FF] opacity-[0.12] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#F9680E] opacity-[0.08] blur-[90px]"
        aria-hidden
      />

      <Container as="div" className="relative z-10 min-w-0">
        <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-14 2xl:gap-16">
          <div className="w-full min-w-0 shrink-0 lg:max-w-[min(100%,42%)] xl:max-w-[40%]">
            <p
              className="bg-clip-text font-heading text-xs font-semibold uppercase tracking-[0.2em] text-transparent sm:text-sm"
              style={eyebrowStyle}
            >
              Our Approach
            </p>

            <h2
              id="our-approach-heading"
              className="heading-2 mt-3 max-w-xl text-white"
            >
              Structured. Governed. Built to{" "}
              <span className={accentBlue}>Last.</span>
            </h2>

            <p className="body-lg mt-5 max-w-xl text-white/70 md:mt-6">
              We follow a proven methodology that moves organizations from
              reactive security to sustained, governance-aligned resilience.
              Every engagement is structured around your business context,
              regulatory requirements, and operational maturity.
            </p>

            <ul
              className="mt-8 flex max-w-xl flex-wrap gap-2 sm:mt-10 sm:gap-3"
              aria-label="Frameworks and standards"
            >
              {tags.map((label) => (
                <li key={label}>
                  <span
                    className={cn(
                      "inline-block rounded-lg border border-white/25 bg-white/[0.04]",
                      "px-3 py-1.5 font-sans text-xs font-medium text-white/90 sm:px-3.5 sm:py-2 sm:text-sm",
                    )}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid w-full min-w-0 flex-1 auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {approachCards.map((card) => (
              <div
                key={card.src}
                className="relative flex w-full min-w-0 justify-center sm:justify-start"
              >
                <Image
                  src={`${card.src}?v=${APPROACH_ASSETS_VERSION}`}
                  alt={card.alt}
                  width={CELL_ASPECT_W}
                  height={CELL_ASPECT_H}
                  unoptimized
                  className="h-auto w-full max-w-full object-contain object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, (max-width: 1536px) 32vw, 480px"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
