import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/container";

const globeSrc = "/images/services/next-gen-soc/globe.svg";

const glassCardBase =
    "rounded-2xl border border-white/20 bg-white/[0.08] p-5 shadow-sm backdrop-blur-md sm:p-6 sm:rounded-[1.25rem]";

function GlassCard({ title, body, dotClassName, className = "" }) {
    return (
        <div className={`${glassCardBase} ${className}`}>
            <div className="flex items-start gap-3">
                <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotClassName}`} aria-hidden />
                <div className="min-w-0">
                    <h3 className="font-heading text-base font-semibold text-white sm:text-lg">{title}</h3>
                    <p className="body-sm mt-2 text-pretty text-white/80 sm:body-text sm:mt-2.5">{body}</p>
                </div>
            </div>
        </div>
    );
}

export function RealWorldResults() {
    return (
        <section
            className="relative isolate min-w-0 overflow-x-hidden bg-[#040814] py-16 text-white sm:py-20 md:py-24 lg:py-28"
            aria-labelledby="ngsoc-real-world-heading"
        >
            <div
                className="pointer-events-none absolute right-0 top-1/2 z-0 h-[min(90vw,36rem)] w-[min(95vw,40rem)] -translate-y-1/2 translate-x-[18%] rounded-full bg-[#0048FF]/35 blur-[120px] sm:blur-[160px] md:translate-x-[12%]"
                aria-hidden
            />

            <Image
                src={globeSrc}
                alt=""
                width={1000}
                height={1000}
                className="z-[0] absolute right-0 top-0 h-full w-full select-none object-contain object-right drop-shadow-[0_0_70px_rgba(0,72,255,0.38)] lg:drop-shadow-[0_0_90px_rgba(0,72,255,0.42)]"
                // sizes="100vw"
                priority={false}
                unoptimized
            />

            <Container as="div" className="relative z-[10]">
                <div className="grid grid-cols-1 items-center gap-12 overflow-visible lg:grid-cols-12 lg:gap-10 xl:gap-14">
                    <div className="flex max-w-xl flex-col items-center lg:col-span-5 lg:max-w-none">
                        <h2
                            id="ngsoc-real-world-heading"
                            className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[clamp(2rem,3.2vw,2.75rem)]"
                        >
                            Real-World Results
                        </h2>
                        <p className="mt-4 font-sans text-base font-medium text-white/90 sm:mt-5 sm:text-lg">
                            US Technology Firm
                        </p>
                        <p className="mt-1 font-sans text-base font-medium text-white/90 sm:text-lg">
                            Cloud-Native Video Platform
                        </p>
                        <div className="mt-8 sm:mt-10">
                            <p className="font-heading text-4xl font-bold leading-none tracking-tight text-[#FF7700] sm:text-5xl">
                                3+ Year
                            </p>
                            <p className="mt-2 font-sans text-lg font-medium text-white sm:text-xl">SOC Engagement</p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6600] to-[#FFAE00] px-6 py-3 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-95 sm:px-7 sm:text-base"
                            >
                                Read More
                                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-sm font-semibold text-neutral-900 transition-colors hover:bg-white/95 sm:px-7 sm:text-base"
                            >
                                Learn More
                                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                            </Link>
                        </div>
                    </div>

                    <div className="relative z-[2] w-full lg:col-span-7">
                        <div className="mt-2 flex justify-center lg:mt-0">
                            <div className="flex w-full max-w-md min-w-0 flex-col gap-4 sm:max-w-lg lg:max-w-[23rem] xl:max-w-[24rem]">
                                <GlassCard
                                    title="US Technology Firm"
                                    body="70% reduction in false positives through tuned detection logic and analyst validation. Mean time to detect critical incidents dropped from days to under an hour with 24×7 coverage."
                                    dotClassName="bg-[#0066FF]"
                                />
                                <GlassCard
                                    title="Cloud-Native Video Platform"
                                    body="30% reduction in production risk after embedding security reviews in CI/CD and runtime monitoring. Shorter release cycles with continuous control evidence for audits."
                                    dotClassName="bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
