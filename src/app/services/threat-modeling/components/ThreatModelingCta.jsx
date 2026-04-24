import Link from "next/link";
import Container from "@/components/ui/container";

const headline = "Start Modeling Threats Before They Find You";

const subcopy =
    "Proactive threat identification is the foundation of resilient security architecture.";

export function ThreatModelingCta() {
    return (
        <section
            className="relative min-w-0 overflow-x-hidden bg-gradient-to-r from-[#0011FF] to-[#00A1FF] pt-16 pb-20 text-center text-white sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
            aria-labelledby="threat-modeling-cta-heading"
        >
            <Container as="div" className="flex flex-col items-center px-4 sm:px-6">
                <h2
                    id="threat-modeling-cta-heading"
                    className="max-w-4xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[clamp(1.875rem,3.8vw,2.875rem)] md:leading-[1.15]"
                >
                    {headline}
                </h2>
                <p className="body-lg mx-auto mt-5 max-w-2xl text-pretty text-white/85 sm:mt-6 md:text-xl md:leading-relaxed">
                    {subcopy}
                </p>
                <Link
                    href="/contact"
                    className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white bg-transparent px-8 py-3 font-heading text-base font-semibold text-[#FF6600] transition-colors hover:bg-white/10 sm:mt-10 sm:px-10 sm:py-3.5"
                >
                    Start AppSec Assessment
                    <span aria-hidden className="text-lg leading-none text-[#FF6600]">
                        →
                    </span>
                </Link>
            </Container>
        </section>
    );
}
