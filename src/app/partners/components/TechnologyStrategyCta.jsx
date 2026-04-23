import Link from "next/link";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const headline = "Best-in-Class Technology, Expert Delivery";

const subcopy =
    "We combine the right technology with deep operational expertise to deliver security outcomes.";

export function TechnologyStrategyCta() {
    return (
        <section
            className="bg-black py-16 text-white sm:py-20 lg:py-24"
            aria-labelledby="partners-technology-cta-heading"
        >
            <Container as="div" className="flex flex-col items-center text-center">
                <h2
                    id="partners-technology-cta-heading"
                    className="max-w-4xl text-balance font-heading text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-tight tracking-tight bg-gradient-to-r from-[#00BFFF] to-[#006FFF] text-transparent bg-clip-text"
                >
                    {headline}
                </h2>
                <p className="body-lg mt-5 max-w-2xl text-pretty text-white sm:mt-6">
                    {subcopy}
                </p>
                <Link
                    href="/contact"
                    className={cn(
                        "mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-[#F9680E] bg-transparent px-8 py-3 font-heading text-base font-semibold text-white transition sm:mt-10 sm:px-10 sm:py-3.5",
                        "hover:border-[#FF8A3D] hover:bg-[#F9680E]/10",
                    )}
                >
                    Discuss Technology Strategy
                </Link>
            </Container>
        </section>
    );
}
