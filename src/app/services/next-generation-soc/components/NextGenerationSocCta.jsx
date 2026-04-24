import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const headline = "Know What's Happening in Your Environment Before Attackers Do";

const subcopy =
    "Continuous threat detection, incident response, and security improvement from a next-generation SOC—with the SLAs and expertise your organization deserves.";

export function NextGenerationSocCta() {
    return (
        <section
            className="relative isolate min-w-0 overflow-x-clip py-16 text-center text-white sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-[#002BFF] to-[#008CFF]"
            aria-labelledby="ngsoc-cta-heading"
        >
            <Container as="div" className="relative z-[1] flex flex-col items-center px-4 sm:px-6">
                <h2
                    id="ngsoc-cta-heading"
                    className="max-w-4xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[clamp(1.875rem,3.6vw,2.875rem)] md:leading-[1.15]"
                >
                    {headline}
                </h2>
                <p className="body-lg mx-auto mt-5 max-w-2xl text-pretty text-white/90 sm:mt-6 md:mt-7 md:text-xl md:leading-relaxed">
                    {subcopy}
                </p>
                <Link
                    href="/contact"
                    className={cn(
                        "mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white bg-transparent px-8 py-3 font-heading text-base font-semibold text-white transition sm:mt-10 sm:min-h-[3.25rem] sm:px-10 sm:py-3.5",
                        "hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80",
                    )}
                >
                    Schedule a consultation
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
            </Container>
        </section>
    );
}
