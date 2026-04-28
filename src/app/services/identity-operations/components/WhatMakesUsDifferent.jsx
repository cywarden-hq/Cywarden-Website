import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const bgSrc = "/images/services/identity-operations/what-makes-us-different-bg-image.png";

/** Intrinsic pixels — full artwork scales width-wise without `cover` crop. */
const BG_WIDTH = 1440;
const BG_HEIGHT = 1486;

const features = {
    top: {
        title: "Rapid Identity Response",
        body: "SOAR-driven playbooks for automated session kill, credential rotation, and conditional access enforcement within minutes.",
    },
    left: {
        title: "Deep Identity Visibility",
        body: "Monitor workforce, privileged, service, and machine identities across cloud and on-premise. Unified identity risk scoring.",
    },
    right: {
        title: "Identity Risk Analytics",
        body: "Behavioral analytics and UEBA to detect insider threats, compromised accounts, and anomalous access patterns.",
    },
};

const cta = {
    headline: "Protect Your Most Targeted Attack Surface",
    subcopy:
        "Identity is where most breaches begin. Let us monitor, detect, and respond 24\u00d77.",
    label: "Start Identity Operations",
    href: "/contact",
};

const lineClass = "bg-white/55";

export function WhatMakesUsDifferent() {
    return (
        <section className="min-w-0 overflow-x-clip bg-black text-white" aria-labelledby="identity-what-makes-heading">
            {/* Hero art + overlays (heading + callouts on image) */}
            <div className="relative w-full bg-black">
                <div className="relative w-full">
                    <Image
                        src={bgSrc}
                        alt=""
                        width={BG_WIDTH}
                        height={BG_HEIGHT}
                        className="relative z-0 block h-auto w-full max-w-none"
                        sizes="100vw"
                        priority={false}
                    />
                </div>

                {/* Top read fade */}
                {/* <div
                    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36 bg-gradient-to-b from-black/55 via-black/15 to-transparent sm:h-40"
                    aria-hidden
                /> */}

                {/* Bottom read fade — CTA sits on image, not on a separate black strip */}
                {/* <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-[12] h-[min(52%,26rem)] bg-gradient-to-t from-black/88 via-black/45 to-transparent sm:h-[min(48%,28rem)] lg:h-[min(42%,30rem)]"
                    aria-hidden
                /> */}

                <Container
                    as="div"
                    className="pointer-events-none absolute left-1/2 top-0 z-20 w-full max-w-7xl -translate-x-1/2"
                >
                    <div className="pointer-events-auto w-full">
                        <header className="mx-auto max-w-3xl px-0 pt-16 text-center sm:pt-20">
                            <p className="section-label [text-shadow:0_1px_24px_rgba(0,0,0,0.65)]">Differentiation</p>
                            <h2
                                id="identity-what-makes-heading"
                                className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white [text-shadow:0_2px_32px_rgba(0,0,0,0.55)] sm:mt-5 sm:text-4xl md:text-[clamp(2rem,3.5vw,2.75rem)]"
                            >
                                What Makes Us Different
                            </h2>
                        </header>

                        <div className="mt-8 grid grid-cols-1 gap-10 sm:mt-10 sm:gap-12 lg:mt-10 lg:grid-cols-3 lg:grid-rows-[auto_auto] lg:gap-x-5 lg:gap-y-3 xl:gap-x-8">
                            <div className="flex flex-col items-center lg:col-span-3 lg:row-start-1">
                                <div className="w-full max-w-md">
                                    {/* U-bracket under copy (open upward); body centered like design */}
                                    <div
                                        className={cn(
                                            "border-b border-l border-r border-white/75 px-4 pb-4 pt-1 text-center",
                                            "rounded-b-md sm:rounded-b-lg",
                                        )}
                                    >
                                        <h3 className="font-heading text-lg font-bold text-white sm:text-xl">{features.top.title}</h3>
                                        <p className="body-lg mt-2 text-pretty text-white/85 sm:mt-3">{features.top.body}</p>
                                    </div>
                                    <div className="flex justify-center pt-0">
                                        <div className={cn("h-10 w-px sm:h-14 lg:h-12", lineClass)} aria-hidden />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 lg:col-start-1 lg:row-start-2 lg:flex-row lg:items-center lg:justify-end lg:gap-0 lg:self-center">
                                <div className="w-full max-w-sm lg:max-w-[22rem]">
                                    {/* ] bracket on the right of copy; horizontal connector on the right, toward orb */}
                                    <div
                                        className={cn(
                                            "border-b border-r border-t border-white/75 py-4 pl-0 pr-4 text-left",
                                            "rounded-r-md sm:rounded-r-lg",
                                        )}
                                    >
                                        <h3 className="font-heading text-lg font-bold text-white sm:text-xl">{features.left.title}</h3>
                                        <p className="body-lg mt-2 text-pretty text-white/85 sm:mt-3">{features.left.body}</p>
                                    </div>
                                </div>
                                <div
                                    className={cn(
                                        "hidden h-px w-10 shrink-0 sm:w-16 lg:block lg:w-[min(5.5vw,5rem)] xl:w-20",
                                        lineClass,
                                    )}
                                    aria-hidden
                                />
                            </div>

                            <div className="hidden w-full min-w-[clamp(3rem,10vw,6.5rem)] lg:col-start-2 lg:row-start-2 lg:block" aria-hidden />

                            <div className="flex flex-col items-center gap-4 lg:col-start-3 lg:row-start-2 lg:flex-row lg:items-center lg:justify-start lg:gap-0 lg:self-center">
                                <div
                                    className={cn(
                                        "hidden h-px w-10 shrink-0 sm:w-16 lg:block lg:w-[min(5.5vw,5rem)] xl:w-20",
                                        lineClass,
                                    )}
                                    aria-hidden
                                />
                                <div className="w-full max-w-sm lg:max-w-[22rem]">
                                    {/* [ bracket on the left of copy; mirror of left card */}
                                    <div
                                        className={cn(
                                            "border-b border-l border-t border-white/75 py-4 pl-4 pr-0 text-left",
                                            "rounded-l-md sm:rounded-l-lg",
                                        )}
                                    >
                                        <h3 className="font-heading text-lg font-bold text-white sm:text-xl">{features.right.title}</h3>
                                        <p className="body-lg mt-2 text-pretty text-white/85 sm:mt-3">{features.right.body}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                {/* CTA — same layer as heading/callouts, anchored to bottom of image */}
                <Container
                    as="div"
                    className="pointer-events-none absolute bottom-20 left-1/2 z-30 w-full max-w-7xl -translate-x-1/2"
                >
                    <div className="pointer-events-auto px-0 pb-10 text-center">
                        <h2
                            id="identity-ops-cta-heading"
                            className="mx-auto max-w-4xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.65)] sm:text-4xl md:text-[clamp(1.875rem,3.4vw,2.625rem)] md:leading-[1.12]"
                        >
                            {cta.headline}
                        </h2>
                        <p className="body-lg mx-auto mt-5 max-w-2xl text-pretty text-white/95 [text-shadow:0_1px_16px_rgba(0,0,0,0.6)] sm:mt-6 md:text-xl md:leading-relaxed">
                            {cta.subcopy}
                        </p>
                        <Link
                            href={cta.href}
                            className={cn(
                                "mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white bg-transparent px-8 py-3 font-heading text-base font-semibold text-white transition sm:mt-10 sm:px-10 sm:py-3.5",
                                "hover:bg-white/10",
                            )}
                        >
                            {cta.label}
                            <span aria-hidden className="text-lg leading-none text-white">
                                →
                            </span>
                        </Link>
                    </div>
                </Container>
            </div>
        </section>
    );
}
