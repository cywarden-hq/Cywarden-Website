import Link from "next/link";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const headline = "Defend Every Network Layer";

const subcopy =
    "From perimeter to cloud — comprehensive network security operations by certified professionals.";

export function NetworkOperationsCta() {
    return (
        <section
            className="relative min-w-0 bg-black py-20 text-white sm:py-24 lg:py-28"
            aria-labelledby="network-operations-cta-heading"
        >
            <Container
                as="div"
                className="flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8"
            >
                <h2
                    id="network-operations-cta-heading"
                    className="max-w-3xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[clamp(1.875rem,3.5vw,2.75rem)]"
                >
                    {headline}
                </h2>
                <p className="body-lg mt-6 max-w-2xl text-pretty text-white/90 sm:mt-7 md:mt-8 md:text-xl md:leading-relaxed">
                    {subcopy}
                </p>
                <Link
                    href="/contact"
                    className={cn(
                        "mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-white/50 bg-transparent px-8 py-2.5 text-sm font-normal text-white transition sm:mt-10 sm:min-h-12 sm:px-10 sm:py-3 sm:text-base",
                        "hover:border-white hover:bg-white/5",
                    )}
                >
                    Start Network Operations
                </Link>
            </Container>
        </section>
    );
}
