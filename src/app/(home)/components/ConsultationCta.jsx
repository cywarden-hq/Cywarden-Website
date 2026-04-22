import Link from "next/link";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const headline = "Still struggling to keep up with modern cyber threats?";
const body =
  "Cywarden delivers AI - powered security operations, continuous monitoring, and expert guidance to detect threats faster and protect your business at scale.";
const buttonLabel = "Book a Security Consultation";
const buttonHref = "/contact";
const ctaBackgroundSrc = "/images/home/consultation-cta-bg.svg";

const headlineGradient = {
  backgroundImage:
    "linear-gradient(90deg, rgb(255, 98, 0) 0%, rgb(255, 170, 0) 100%)",
};

export function ConsultationCta() {
  return (
    <Section
      as="section"
      size="md"
      className="bg-transparent text-white"
      aria-labelledby="consultation-cta-heading"
    >
      <Container as="div" className="min-w-0">
        <div
          className={cn(
            "grid min-w-0 overflow-hidden rounded-[14px] border border-[#008CFF]",
            "shadow-[0_0_40px_rgba(0,140,255,0.12)]",
          )}
        >
          {/* Full banner art (1155×349 in SVG) — scales with width; right graphic is inside the SVG */}
          <img
            src={ctaBackgroundSrc}
            alt=""
            width={1155}
            height={349}
            className="col-start-1 row-start-1 block h-auto w-full object-contain object-center"
            decoding="async"
          />

          <div className="col-start-1 row-start-1 flex min-w-0 flex-col justify-start px-4 py-7 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:flex-row lg:items-center lg:px-8 lg:py-6 xl:px-[47px] [&>*]:pointer-events-auto pointer-events-none">
            <div className="flex min-w-0 max-w-full flex-col sm:max-w-[min(100%,610px)]">
              <h2
                id="consultation-cta-heading"
                className="bg-clip-text text-pretty font-heading text-left text-[clamp(1.25rem,3.2vw,1.9375rem)] font-bold leading-tight text-transparent"
                style={headlineGradient}
              >
                {headline}
              </h2>

              <p className="mt-4 max-w-prose font-sans text-left text-sm font-light leading-relaxed text-white/95 sm:mt-5 sm:text-base md:mt-6 md:text-lg lg:text-xl">
                {body}
              </p>

              <Link
                href={buttonHref}
                className={cn(
                  "mt-8 inline-flex w-fit items-center justify-center rounded-full border border-white/70",
                  "px-6 py-2.5 font-sans text-[15px] font-medium text-white transition",
                  "hover:border-white hover:bg-white/5",
                )}
              >
                {buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
