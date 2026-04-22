import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const headline = "Strengthen Your Security Posture Today";

const subcopy =
  "Whether you are building a security program from the ground up or hardening an existing one, our team is ready to have the conversation that matters.";

const figuresSrc = "/images/home/security-posture-cta-image-right.svg";

export function SecurityPostureCta() {
  return (
    <section
      className="relative isolate min-w-0 overflow-hidden bg-black text-white"
      aria-labelledby="security-posture-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 min-h-full bg-gradient-to-r from-[#000000] to-[#0037FF]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto flex w-full min-w-0 max-w-7xl flex-col gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-12 md:py-14 lg:flex-row lg:items-end lg:gap-8 lg:px-8 lg:py-16 xl:gap-12 xl:py-20">
        <div className="relative z-20 w-full min-w-0 max-w-xl shrink-0 lg:max-w-[min(100%,34rem)] lg:flex-1 lg:pb-2 xl:max-w-[36rem]">
          <h2
            id="security-posture-cta-heading"
            className="text-balance font-heading text-[clamp(1.5rem,3.8vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-white"
          >
            {headline}
          </h2>
          <p className="mt-4 max-w-prose font-sans text-base font-normal leading-relaxed text-white sm:mt-5 sm:text-lg lg:mt-6 lg:text-xl lg:leading-relaxed">
            {subcopy}
          </p>
          <Link
            href="/contact"
            className={cn(
              "mt-6 inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full border border-white bg-transparent px-6 py-3 font-sans text-[15px] font-medium text-white transition sm:mt-8 sm:w-fit sm:px-7",
              "hover:border-white hover:bg-white/5",
            )}
          >
            Book a Security Consultation
            <span aria-hidden className="text-base leading-none sm:text-lg">
              →
            </span>
          </Link>
          <p className="mt-6 flex flex-wrap items-center gap-x-1 font-sans text-xs text-white sm:mt-8 sm:text-sm md:text-[15px]">
            <span>Or reach us at</span>{" "}
            <a
              href="mailto:care@cywarden.com"
              className="underline decoration-white underline-offset-[3px] transition hover:opacity-90"
            >
              care@cywarden.com
            </a>
            <span className="text-white/60" aria-hidden>
              |
            </span>
            <a href="tel:+19254140853" className="transition hover:opacity-90">
              +1 925 414 0853
            </a>
          </p>
        </div>

        <div className="relative z-10 flex w-full min-w-0 flex-1 justify-center lg:min-h-[min(360px,50vh)] lg:max-w-[min(920px,58%)] lg:justify-end xl:max-w-[min(1000px,56%)]">
          <div className="relative aspect-[5/3] w-full max-w-[min(100%,520px)] sm:aspect-[16/10] sm:max-w-[600px] lg:aspect-auto lg:h-[min(420px,52vh)] lg:max-h-[640px] lg:max-w-none lg:min-h-[min(380px,48vh)] xl:h-[min(480px,56vh)] xl:max-h-[720px]">
            <Image
              src={figuresSrc}
              alt="Futuristic security team with blue-lit gear"
              fill
              className="object-contain object-bottom lg:object-right-bottom"
              sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 58vw, 900px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
