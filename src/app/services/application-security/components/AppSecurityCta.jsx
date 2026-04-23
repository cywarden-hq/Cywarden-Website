import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const bg = "/images/services/application-security/cta-bg.png";

const headline = "Build Security Into Your Code";

const subcopy =
    "Let us help you embed security into every stage of your development lifecycle.";

export function AppSecurityCta() {
    return (
        <section
            className="relative overflow-x-clip bg-black py-16 text-white sm:py-20 lg:py-28"
            aria-labelledby="app-security-cta-heading"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <Image
                    src={bg}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={false}
                />
                <div className="absolute inset-0 bg-black/35" aria-hidden />
            </div>

            <Container as="div" className="relative z-10 flex flex-col items-center px-4 text-center sm:px-6">
                <h2
                    id="app-security-cta-heading"
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
                        "mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white bg-transparent px-7 py-3 font-heading text-base font-semibold text-white transition sm:mt-10 sm:px-9 sm:py-3.5",
                        "hover:bg-white hover:text-black",
                    )}
                >
                    Start AppSec Assessment
                    <span aria-hidden className="font-sans text-lg leading-none">
                        →
                    </span>
                </Link>
            </Container>
        </section>
    );
}
