import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const headingBlue = "#007BFF";

const wavePatternUrl = "/images/product/Group%202018776903.svg";

const pillars = [
    {
        title: "Expand Your Offerings",
        body: "Deliver managed vulnerability operations, risk-based prioritization, and expert-led security services — without increasing operational overhead.",
    },
    {
        title: "Accelerate Revenue Growth",
        body: "Unlock new revenue streams with scalable service models, upsell opportunities, and long-term customer retention.",
    },
    {
        title: "Differentiate in the Market",
        body: "Stand out with outcome-driven cybersecurity that goes beyond tools — focused on real risk reduction.",
    },
    {
        title: "Co-Sell & Go-To-Market Support",
        body: "Leverage joint marketing, sales enablement, and technical expertise to win more deals faster.",
    },
];

export function WhyPartnerWithCywarden() {
    return (
        <section
            aria-labelledby="why-partner-heading"
            className="relative overflow-x-clip bg-black py-16 text-white sm:py-20 lg:py-24"
        >
            {/* Section background — glows sit behind the white panel + card (not inside the card) */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-x-clip" aria-hidden>
                <div className="absolute -right-[8%] top-0 h-[min(360px,55vw)] w-[min(360px,55vw)] rounded-full bg-[#0186DC]/18 blur-[100px]" />
                {/* Group 2018776980 — Figma 1582-815; #0055FF ellipses, right side of section */}
                <div
                    className="absolute h-[861px] w-[512px] max-w-[min(512px,92vw)] translate-x-[min(14vw,160px)] sm:translate-x-[min(12vw,200px)] lg:translate-x-[min(8vw,140px)]"
                    style={{
                        /* Align with max-width content column so glow sits behind the blue card area */
                        right: "max(0px, calc((100vw - min(100vw, 80rem)) / 2))",
                        top: "clamp(1.5rem, 7vh, 5rem)",
                    }}
                >
                    <div
                        className="absolute rounded-[50%] bg-[#0055FF]"
                        style={{
                            width: 359.37,
                            height: 558,
                            left: 0,
                            top: 0,
                            filter: "blur(149.5px)",
                        }}
                    />
                    <div
                        className="absolute rounded-[50%] bg-[#0055FF]"
                        style={{
                            width: 359.37,
                            height: 558,
                            left: 152.63,
                            top: 303,
                            filter: "blur(387px)",
                        }}
                    />
                </div>
            </div>

            <Container as="div" className="relative z-10 min-w-0">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    {/* Left: headline panel — content height + padding, vertically centered vs. tall card */}
                    <div
                        className={cn(
                            "flex shrink-0 items-center bg-white px-6 py-8 sm:px-7 sm:py-10",
                            "lg:w-[min(100%,42%)] lg:max-w-xl",
                        )}
                    >
                        <h2
                            id="why-partner-heading"
                            className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                            style={{ color: headingBlue }}
                        >
                            Why Partner with Cywarden
                        </h2>
                    </div>

                    {/* Right: insight card + 2×2 grid */}
                    <div
                        className={cn(
                            "relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#0044FF]",
                            "bg-gradient-to-br from-[#000817] to-[#003192]",
                            "lg:rounded-2xl lg:rounded-l-3xl",
                        )}
                    >
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light"
                            style={{
                                backgroundImage: `url(${wavePatternUrl})`,
                                backgroundSize: "130% auto",
                                backgroundPosition: "80% 20%",
                                backgroundRepeat: "no-repeat",
                            }}
                            aria-hidden
                        />
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-[#0186DC]/10 via-transparent to-transparent"
                            aria-hidden
                        />

                        <div className="relative z-10 grid grid-cols-1 gap-8 p-6 sm:gap-10 sm:p-8 md:grid-cols-2 lg:gap-10 lg:p-10 xl:p-12">
                            {pillars.map((item) => (
                                <article key={item.title}>
                                    <h3 className="heading-3 font-semibold leading-snug text-white">
                                        {item.title}
                                    </h3>
                                    <p className="body-lg mt-3 text-pretty text-gray-300 sm:mt-4">{item.body}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
