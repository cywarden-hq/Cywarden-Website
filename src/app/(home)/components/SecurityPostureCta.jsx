import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/container";

const headline = "Strengthen Your Security Posture Today";

const subcopy = "Whether you are building a security program from the ground up or hardening an existing one, our team is ready to have the conversation that matters.";

export function SecurityPostureCta() {
  return (
    <section
      className="relative bg-black text-white"
      aria-labelledby="security-posture-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 min-h-full bg-gradient-to-r from-[#000000] to-[#0037FF]"
        aria-hidden
      />

      <Container as="div" className="relative z-[1] flex w-full flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:gap-8 xl:gap-12">
        <div className="relative flex flex-col justify-center items-start z-20 w-full min-w-0 shrink-0 lg:flex-1">
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

        <div className="">
            <Image
              src="/images/home/strengthen-posture.svg"
              alt="Futuristic security team with blue-lit gear"
              width={700}
              height={700}
              className="object-contain"
              priority={false}
            />
        </div>
      </Container>
    </section>
  );
}
