import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const copper = "#D17A48";
const statStroke = "#006FFF";
const statGlow = "rgba(0, 85, 255, 0.55)";

const statNumberClass =
    "font-heading text-[clamp(2.75rem,8vw,4.5rem)] font-bold leading-none tracking-tight sm:text-7xl lg:text-[clamp(3.25rem,4.5vw,4.75rem)]";

const eyebrow = "Platform impact";

const heading = "Measurable Results, Not Just Promises";

const metrics = [
    { value: "70%", label: "SOC Workload Reduction" },
    { value: "50%", label: "Faster Risk Assessments" },
    { value: "60%", label: "Alert Noise Reduction" },
    { value: "80%", label: "Less Analyst Effort on Vulns" },
];

function OutlinedStat({ value, label }) {
    return (
        <div className="flex flex-col items-center px-1 py-2 text-center">
            {/* Blurred duplicate = outer-only bloom; top layer stays hollow with no fill */}
            <span className="relative isolate inline-grid place-items-center leading-none">
                <span
                    aria-hidden
                    className={cn(
                        "col-start-1 row-start-1 select-none blur-[10px] sm:blur-xl lg:blur-[14px]",
                        statNumberClass,
                    )}
                    style={{
                        color: "transparent",
                        WebkitTextStroke: `15px ${statGlow}`,
                    }}
                >
                    {value}
                </span>
                <span
                    className={cn("col-start-1 row-start-1", statNumberClass)}
                    style={{
                        color: "transparent",
                        WebkitTextStroke: `1.5px ${statStroke}`,
                        paintOrder: "stroke fill",
                    }}
                >
                    {value}
                </span>
            </span>
            <p className="body-lg mt-4 max-w-[220px] text-pretty font-medium text-white lg:mt-5">{label}</p>
        </div>
    );
}

export function PlatformImpact() {
    return (
        <section
            className="relative overflow-x-clip overflow-y-visible bg-black py-16 text-white sm:py-20 lg:py-24"
            aria-labelledby="platform-impact-heading"
        >
            <div
                className="pointer-events-none absolute -right-[8%] -top-[10%] h-[min(380px,55vw)] w-[min(380px,55vw)] rounded-full bg-[#0186DC]/22 blur-[100px]"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute -bottom-[12%] -left-[6%] h-[min(340px,50vw)] w-[min(340px,50vw)] rounded-full bg-[#0186DC]/18 blur-[110px]"
                aria-hidden
            />

            <Container as="div" className="relative z-10 min-w-0">
                <header className="mx-auto max-w-[920px] text-center">
                    <p
                        className="font-heading text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs"
                        style={{ color: copper }}
                    >
                        {eyebrow}
                    </p>
                    <h2
                        id="platform-impact-heading"
                        className="mt-4 text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl lg:text-[clamp(2rem,3vw,2.75rem)]"
                    >
                        {heading}
                    </h2>
                </header>

                <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-12 sm:mt-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:mt-16 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-16">
                    {metrics.map((m) => (
                        <OutlinedStat key={m.label} {...m} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
