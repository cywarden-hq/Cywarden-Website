import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const bgImage = "/images/services/identity-and-access-management/cta-bg.png";

const headline = "Start Securing Identities Before Trust Is Exploited";

const subcopy =
    "Identity-first architecture is the foundation of resilient, zero-trust security across cloud, hybrid, and on-premise environments.";

export function IamCta() {
    return (
        <section
            className="relative min-w-0 overflow-x-clip bg-black py-12 text-white sm:py-16 lg:py-20"
            aria-labelledby="iam-cta-heading"
        >
            <Container as="div" className="relative z-10 px-4 sm:px-6">
                <div
                    className={cn(
                        "relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] px-6 py-10 text-center sm:rounded-3xl sm:px-10 lg:px-14",
                        "shadow-[0_24px_80px_rgba(0,40,120,0.35)]",
                    )}
                >
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src={bgImage}
                            alt=""
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, min(100vw, 72rem)"
                            priority
                        />
                    </div>

                    <div
                        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#2f6fff]/50 via-[#0a2466]/72 to-[#030818]/88"
                        aria-hidden
                    />
                    <div
                        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_95%_75%_at_50%_-5%,rgba(140,195,255,0.35)_0%,transparent_55%)]"
                        aria-hidden
                    />
                    <div
                        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.3]"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
                            backgroundSize: "26px 26px",
                        }}
                        aria-hidden
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        <h2
                            id="iam-cta-heading"
                            className="max-w-4xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[clamp(1.875rem,3.6vw,2.75rem)] md:leading-[1.15]"
                        >
                            {headline}
                        </h2>
                        <p className="body-lg mx-auto mt-5 max-w-2xl text-pretty text-white/90 sm:mt-6 md:text-xl md:leading-relaxed">
                            {subcopy}
                        </p>
                        <Link
                            href="/contact"
                            className={cn(
                                "mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white bg-transparent px-8 py-3 font-heading text-base font-semibold text-white transition sm:mt-10 sm:px-10 sm:py-3.5",
                                "hover:bg-white/10",
                            )}
                        >
                            Start IAM Assessment
                            <span aria-hidden className="text-lg leading-none text-white">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
