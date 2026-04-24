import Link from "next/link";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const bgImage = "/images/services/governance-risk-and-compliance/cta-bg.png";

const headline = "Ready to Achieve Compliance?";

const subcopy =
    "Evidence-led governance, continuous control testing, and audit-ready documentation—so compliance strengthens security instead of slowing delivery.";

/** Image + light scrim in one layer so the texture stays visible (separate dark overlay was hiding it). */
const sectionBgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.3) 100%), url('${bgImage}')`,
    backgroundSize: "cover, cover",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
};

export function ComplianceCta() {
    return (
        <section
            className="relative min-h-[22rem] min-w-0 overflow-x-clip bg-black py-16 text-white sm:min-h-[24rem] sm:py-20 md:py-24 lg:py-28"
            aria-labelledby="grc-cta-heading"
        >
            <div
                className="pointer-events-none absolute inset-0 z-0 bg-black"
                style={sectionBgStyle}
                aria-hidden
            />

            <Container as="div" className="relative z-10">
                <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
                    <h2
                        id="grc-cta-heading"
                        className="max-w-3xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.75)] sm:text-4xl md:text-[clamp(2rem,4vw,2.85rem)] md:leading-[1.12]"
                    >
                        {headline}
                    </h2>
                    <p className="body-lg mt-4 max-w-xl text-pretty text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.7)] sm:mt-5 md:mt-6 md:max-w-2xl md:text-xl md:leading-relaxed">
                        {subcopy}
                    </p>
                    <Link
                        href="/contact"
                        className={cn(
                            "mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white bg-transparent px-8 py-3 font-heading text-base font-semibold text-white transition sm:mt-10 sm:min-h-[3.25rem] sm:px-10 sm:py-3.5",
                            "hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70",
                        )}
                    >
                        Start Compliance Assessment
                        <span aria-hidden className="text-lg leading-none">
                            →
                        </span>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
