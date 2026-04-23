import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative min-w-0 text-white game bg-black" aria-label="Partners hero">
            {/* Upper hero — Earth / network background */}
            <div className="relative flex min-h-[min(100svh,820px)] flex-col items-center justify-end overflow-hidden pb-28 pt-28 sm:min-h-[min(100svh,880px)] sm:pb-36 sm:pt-32 md:pb-44 md:pt-36 lg:pt-40">
                <Image
                    src="/images/partners/hero-bg.svg"
                    alt=""
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617]/55 via-transparent to-[#020617]/90"
                    aria-hidden
                />

                <Container
                    as="div"
                    className="relative z-10 flex w-full flex-col items-center px-4 pb-8 text-center sm:pb-10"
                >
                    <h1 className="max-w-[900px] font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem,4vw,3.25rem)]">
                        Our Partner Ecosystem
                    </h1>
                    <p className="mt-4 max-w-2xl font-heading text-lg font-semibold text-white sm:text-xl md:mt-5 md:text-2xl">
                        Build, Scale, and Secure Together
                    </p>
                    <p className="body-lg mt-5 max-w-[640px] text-pretty text-white/80 sm:mt-6 md:mt-8">
                        We partner with industry-leading security technology vendors to deliver best-in-class solutions
                        across every security domain.
                    </p>
                    <Link
                        href="/contact"
                        className={cn(
                            "mt-8 inline-flex h-12 min-w-[200px] items-center justify-center rounded-[11px] px-8 font-heading text-base font-semibold text-white transition hover:brightness-110 sm:mt-10 md:h-[3.25rem]",
                            "bg-gradient-to-r from-[#F9680E] via-[#E85A12] to-[#C62828] shadow-[0_4px_24px_rgba(249,104,14,0.35)]",
                        )}
                    >
                        Become a Partner
                    </Link>
                </Container>
            </div>

            {/* Lower insight card — overlaps hero, sits on content */}
            <div className="relative z-20 -mt-24 px-4 sm:-mt-28 md:-mt-32">
                <Container as="div" className="max-w-5xl">
                    <div
                        className={cn(
                            "relative overflow-hidden rounded-2xl border border-sky-400/35 px-6 py-8 sm:px-10 md:rounded-3xl md:px-12",
                            "bg-gradient-to-b from-[#002D8D] to-[#000]",
                        )}
                    >
                        {/* Ellipse 22051 + bright core at center (Figma-style hotspot) */}
                        <div
                            className="pointer-events-none absolute left-[-139.8px] top-[-122px] h-[226px] w-[246px]"
                            aria-hidden
                        >
                            <div className="absolute inset-0 rounded-full bg-[#FF5E00] blur-[80px]" />
                            <div className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFF0E6] blur-[22px] mix-blend-screen opacity-90" />
                            <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-[8px] mix-blend-plus-lighter" />
                        </div>
                        <div
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-40"
                            aria-hidden
                        />
                        <div className="relative z-10 mx-auto max-w-3xl text-center">
                            <h2 className="font-heading text-2xl font-bold leading-snug text-white sm:text-3xl">
                                Collaborate to Deliver Real Security Outcomes
                            </h2>
                            <p className="body-lg mt-5 text-pretty text-white/85 sm:mt-6">
                                Security doesn&apos;t happen in isolation. Cywarden partners with forward-thinking
                                organizations to deliver measurable risk reduction, continuous visibility, and faster
                                response to evolving threats. Together, we help customers move from fragmented tools to a
                                unified, outcome-driven security approach.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
