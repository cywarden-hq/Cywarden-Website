import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const bg = "/images/services/cloud-security/cta-bg.png";

const headline = "Secure Your Cloud Journey";

const subcopy =
    "Whether you're migrating to cloud or optimizing an existing multi-cloud environment, we'll design the right security architecture.";

export function CloudSecurityCta() {
    return (
        <section
            className="relative overflow-x-clip bg-black py-16 text-white sm:py-20 lg:py-28"
            aria-labelledby="cloud-security-cta-heading"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <Image
                    src={bg}
                    alt=""
                    fill
                    className="object-cover object-center"
                    size="50vw"
                    priority={false}
                />
                <div
                    className="absolute inset-0 bg-black/30"
                    aria-hidden
                />
            </div>

            <Container as="div" className="relative z-10 flex flex-col items-center px-4 text-center sm:px-6">
                <h2
                    id="cloud-security-cta-heading"
                    className="max-w-3xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[clamp(1.75rem,3.5vw,2.75rem)]"
                >
                    {headline}
                </h2>
                <p className="body-lg mt-5 max-w-2xl text-pretty text-white/90 sm:mt-6 md:text-xl md:leading-relaxed">
                    {subcopy}
                </p>
                <Link
                    href="/contact"
                    className={cn(
                        "mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-white bg-transparent px-7 py-3 font-heading text-base font-semibold text-white transition sm:mt-10 sm:px-9 sm:py-3.5",
                        "hover:border-white hover:bg-white/10",
                    )}
                >
                    Get a Cloud Security Assessment
                </Link>
            </Container>
        </section>
    );
}
