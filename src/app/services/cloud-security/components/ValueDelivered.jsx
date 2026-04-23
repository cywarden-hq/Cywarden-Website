import Image from "next/image";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const eyebrow = "Value Delivered";
const heading = "What You Get";

const cards = [
    {
        n: "01",
        title: "Multi-Cloud Visibility",
        body: "Unified security posture across AWS, Azure, and GCP - one view of your entire cloud risk landscape.",
        image: "/images/services/cloud-security/value-delivered-1.png",
        imageFirst: false,
    },
    {
        n: "02",
        title: "Zero-Trust Architecture",
        body: "Identity-centric security controls that verify every access request, regardless of network location.",
        image: "/images/services/cloud-security/value-delivered-2.png",
        imageFirst: true,
    },
    {
        n: "03",
        title: "Continuous Compliance Posture",
        body: "Evidence-backed controls and automated reporting that keep auditors aligned with your live cloud state, not quarterly snapshots.",
        image: "/images/services/cloud-security/value-delivered-3.png",
        imageFirst: false,
    },
];

export function ValueDelivered() {
    return (
        <section
            className="relative overflow-x-clip bg-black py-16 text-white sm:py-20 lg:py-24"
            aria-labelledby="value-delivered-heading"
        >
            {/* Electric cyan glows — top-left + bottom-right (match “What You Get” mock) */}
            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
                <div
                    className="absolute -left-[20%] -top-[18%] h-[min(480px,85vw)] w-[min(480px,85vw)] rounded-full bg-[#00A3FF]/50 blur-[130px] sm:-left-[14%] sm:-top-[12%] sm:h-[min(520px,75vw)] sm:w-[min(520px,75vw)] sm:blur-[150px]"
                />
                <div
                    className="absolute -bottom-[16%] -right-[18%] h-[min(460px,82vw)] w-[min(460px,82vw)] rounded-full bg-[#00A3FF]/50 blur-[130px] sm:bottom-[0%] sm:-right-[12%] sm:h-[min(500px,72vw)] sm:w-[min(500px,72vw)] sm:blur-[145px]"
                />
            </div>

            <Container as="div" className="relative z-10 flex flex-col items-center">
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-amber-600 sm:text-base">
                    {eyebrow}
                </p>
                <h2
                    id="value-delivered-heading"
                    className="mt-4 text-center font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl md:text-[clamp(1.875rem,3.5vw,2.75rem)]"
                >
                    {heading}
                </h2>

                <div className="mt-12 flex w-full max-w-7xl flex-col gap-10 sm:mt-14 sm:gap-12 lg:mt-16 lg:gap-14">
                    {cards.map((card) => (
                        <div
                            key={card.n}
                            className="rounded-2xl bg-gradient-to-b from-[#2B00FF] to-[#00B7FF] p-px md:rounded-3xl"
                        >
                            <div
                                className={cn(
                                    "flex min-h-0 flex-col gap-8 overflow-hidden rounded-[15px] bg-[#05080f] md:rounded-[23px]",
                                    /* fr + gap: grid avoids 40% + 60% + gap > 100% flex overflow on the right */
                                    "lg:grid lg:items-stretch lg:gap-x-10 lg:gap-y-0",
                                    card.imageFirst
                                        ? "flex-col-reverse lg:grid-cols-[minmax(0,6fr)_minmax(0,4fr)]"
                                        : "lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)]",
                                )}
                            >
                                <div
                                    className={cn(
                                        "flex min-w-0 w-full max-w-full flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12",
                                        card.imageFirst && "lg:col-start-2 lg:row-start-1",
                                    )}
                                >
                                    <span
                                        className="inline-block w-fit bg-gradient-to-r from-[#FF4400] to-[#FF9D00] bg-clip-text font-heading text-5xl font-bold leading-none text-transparent sm:text-6xl lg:text-7xl"
                                        aria-hidden
                                    >
                                        {card.n}
                                    </span>
                                    <h3 className="mt-4 font-heading text-xl font-bold leading-snug text-white sm:text-2xl">
                                        {card.title}
                                    </h3>
                                    <p className="body-text mt-3 max-w-prose text-pretty text-white/85 sm:mt-4">
                                        {card.body}
                                    </p>
                                </div>

                                {/* Image column — min-w-0 so fill image cannot blow past rounded card */}
                                <div
                                    className={cn(
                                        "flex min-w-0 w-full max-w-full flex-col justify-center p-5 sm:p-6 lg:p-6 xl:p-8",
                                        card.imageFirst && "lg:col-start-1 lg:row-start-1",
                                    )}
                                >
                                    <div className="relative aspect-[16/10] w-full max-w-full min-h-[200px] min-w-0 overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[min(20rem,44vh)]">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 60vw, 100vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
