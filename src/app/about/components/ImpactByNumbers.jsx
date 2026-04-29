import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const impactData = {
    eyebrow: "BY THE NUMBERS",
    title: "Our Impact",
    stats: [
        { id: "customers", value: "85+", label: "Customers Served" },
        {
            id: "soc-engagements",
            value: "22+",
            label: "Security Operations\nEngagements",
        },
        { id: "professionals", value: "110+", label: "Certified Professionals" },
        { id: "delivery", value: "24*7", label: "Global Delivery Model" },
    ],
};

export function ImpactByNumbers() {
    const { eyebrow, title, stats } = impactData;

    return (
        <Section
            size="lg"
            className="min-w-0 overflow-hidden bg-black px-0 text-white"
            aria-labelledby="about-impact-heading"
        >
            <Container as="div" className="flex flex-col items-center px-4 text-center sm:px-6">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] sm:text-sm">
                    <span className="bg-gradient-to-r from-[#F9680E] via-[#FF9D00] to-[#FFB020] bg-clip-text text-transparent">
                        {eyebrow}
                    </span>
                </p>
                <h2 id="about-impact-heading" className="mt-3 font-heading text-3xl font-bold sm:mt-4 sm:text-4xl md:text-5xl">
                    {title}
                </h2>
            </Container>

            <div
                className={cn(
                    "mt-10 w-full sm:mt-12 md:mt-14",
                    "bg-gradient-to-r from-[#4095F2] to-[#295F98]",
                )}
            >
                <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item, i) => (
                        <div
                            key={item.id}
                            className={cn(
                                "relative flex flex-col items-center justify-center px-6 py-12 text-center sm:py-14 lg:px-8 lg:py-16",
                                /* Mobile: full-width rule between stacked rows */
                                i > 0 && "border-t-2 border-white/30 sm:border-t-0",
                                /*
                                 * Vertical rules like the reference: 2px wide, inset from top/bottom (not full cell height).
                                 * sm 2×2: only odd columns (1,3) get a left bar. lg 4-col: columns 2–4 get a left bar.
                                 */
                                i > 0 &&
                                    "max-sm:before:hidden before:pointer-events-none before:absolute before:left-0 before:block before:w-[2px] before:bg-white/45 before:content-[''] before:top-[16%] before:bottom-[16%] lg:before:top-[18%] lg:before:bottom-[20%]",
                                i === 2 && "max-lg:before:hidden",
                                /* sm: horizontal rule between rows — inset, 2px, hidden on lg */
                                i >= 2 &&
                                    "sm:after:pointer-events-none sm:after:absolute sm:after:left-[8%] sm:after:right-[8%] sm:after:top-0 sm:after:block sm:after:h-[2px] sm:after:bg-white/45 sm:after:content-[''] lg:after:hidden",
                            )}
                        >
                            <p className="font-heading text-4xl font-bold tabular-nums sm:text-5xl md:text-[2.75rem]">
                                {item.value}
                            </p>
                            <p className="mt-3 max-w-[12rem] text-sm font-medium leading-snug text-white/95 sm:mt-4 sm:text-base">
                                {item.label.split("\n").map((line, lineIdx) => (
                                    <span key={lineIdx} className="block">
                                        {line}
                                    </span>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
