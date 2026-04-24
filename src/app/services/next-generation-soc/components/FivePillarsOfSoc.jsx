import Image from "next/image";
import Container from "@/components/ui/container";

const pillarsIcon = "/images/services/next-gen-soc/pillars-icon.svg";

const pillarEntries = [
    {
        step: 1,
        title: "Global Delivery",
        body: "Standardized processes with offshore scale capacity. ISO 27001, SOC 2, and CMMI certified delivery center staffed with Microsoft security professionals.",
        align: "center",
    },
    {
        step: 2,
        title: "SLA-Backed Response",
        body: "P1 incidents responded within 30 minutes, targeted for 4-hour resolution. SIEM-driven workflows with expert analyst-led triage and containment.",
        align: "left",
    },
    {
        step: 3,
        title: "Compliance-Aligned Operations",
        body: "Designed to meet regulatory requirements (PCI DSS, ISO 27001, DPDPA) with embedded control mapping and audit evidence collection in daily SOC workflows.",
        align: "right",
    },
    {
        step: 4,
        title: "Telemetry-Driven Visibility",
        body: "Robust security telemetry using OCSF-aligned normalization to standardize signals, strengthen detection accuracy, and enable reliable cross-signal correlation.",
        align: "left",
    },
    {
        step: 5,
        title: "Data-Centric Controls",
        body: "Data classification, access restrictions, encryption, and activity monitoring to protect sensitive data and prevent unauthorized access and data loss.",
        align: "right",
    },
];

function PillarStepNumber({ value }) {
    return (
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6600] to-[#FFAE00] font-heading text-sm font-semibold tabular-nums leading-none text-white sm:h-9 sm:w-9 sm:text-base">
            {value}
        </span>
    );
}

function PillarsIconHeading({ id }) {
    return (
        <div className="relative mx-auto w-full max-w-[min(100%,22rem)] drop-shadow-[0_0_28px_rgba(0,102,255,0.32)] sm:max-w-md md:max-w-lg lg:max-w-xl">
            <div className="relative w-full">
                <Image
                    src={pillarsIcon}
                    alt=""
                    width={741}
                    height={588}
                    className="relative z-[1] pointer-events-none h-auto w-full select-none object-contain"
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 56vw, 36rem"
                    priority={false}
                />
                <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col items-center justify-center px-6 pb-[5%] pt-[3%] sm:px-10 sm:pb-[6%] sm:pt-[4%] md:px-14 md:pb-[7%]">
                    <header className="flex flex-col items-center text-center">
                        <p className="section-label">Solution tenets</p>
                    </header>
                    <h2
                        id={id}
                        className="mt-2 max-w-[11.5rem] text-center font-heading text-lg font-bold leading-tight text-white sm:mt-3 sm:max-w-[15rem] sm:text-2xl md:max-w-[17rem] md:text-[clamp(1.25rem,2.4vw,1.85rem)]"
                    >
                        Five Pillars of Our SOC
                    </h2>
                </div>
            </div>
        </div>
    );
}

function PillarBlock({ step, title, body, align = "center" }) {
    const textAlign =
        align === "left"
            ? "text-center md:text-left"
            : align === "right"
              ? "text-center md:text-right"
              : "text-center";

    const layout =
        align === "center"
            ? "flex flex-col items-center gap-3 sm:gap-4"
            : align === "right"
              ? "flex flex-col items-center gap-3 sm:flex-row-reverse sm:items-start sm:gap-4"
              : "flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4";

    return (
        <article className={`relative z-[2] ${layout}`}>
            <PillarStepNumber value={step} />
            <div className={`min-w-0 flex-1 ${textAlign}`}>
                <h3 className="font-heading text-lg font-bold leading-snug text-white sm:text-xl">{title}</h3>
                <p className="body-lg mt-2 text-pretty text-white/75 sm:mt-3">{body}</p>
            </div>
        </article>
    );
}

export function FivePillarsOfSoc() {
    const headingId = "ngsoc-five-pillars-heading";
    const [p1, p2, p3, p4, p5] = pillarEntries;

    return (
        <div
            className="relative isolate min-w-0 overflow-x-clip bg-[#03060f] pt-6 text-white sm:pt-8 md:pt-10 lg:pt-12 pb-20"
            aria-labelledby={headingId}
        >
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.32]"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.065) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                    maskImage: "radial-gradient(ellipse 90% 65% at 50% 12%, #000 0%, transparent 70%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 90% 65% at 50% 12%, #000 0%, transparent 70%)",
                }}
                aria-hidden
            />
            <div
                className="pointer-events-none absolute left-1/2 top-2/3 z-[1] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0048FF]"
                aria-hidden
                style={{
                    width: "min(703px, 92vw)",
                    height: "min(682px, 88vw)",
                    filter: "blur(100px)",
                    opacity: 0.6,
                }}
            />
            <Container as="div" className="relative z-[2]">
                <div className="relative mx-auto flex w-full max-w-6xl flex-col px-0">
                    <div className="relative z-[2] flex flex-col items-stretch gap-8 sm:gap-10 md:gap-12 lg:gap-14">
                        <PillarsIconHeading id={headingId} />

                        <div className="w-full max-w-2xl self-center px-1 sm:px-0 md:max-w-3xl lg:-mt-4 lg:max-w-3xl xl:-mt-6">
                            <PillarBlock {...p1} />
                        </div>

                        <div className="grid w-full grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:gap-x-12 lg:gap-y-12 xl:gap-x-16">
                            <div className="mx-auto w-full max-w-xl md:mx-0 md:max-w-md md:justify-self-start lg:max-w-lg">
                                <PillarBlock {...p2} />
                            </div>
                            <div className="mx-auto w-full max-w-xl md:mx-0 md:max-w-md md:justify-self-end lg:max-w-lg">
                                <PillarBlock {...p3} />
                            </div>
                        </div>

                        <div className="grid w-full grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:gap-x-12 lg:gap-y-12 xl:gap-x-20">
                            <div className="mx-auto w-full max-w-xl md:mx-0 md:max-w-md md:justify-self-start lg:max-w-lg">
                                <PillarBlock {...p4} />
                            </div>
                            <div className="mx-auto w-full max-w-xl md:mx-0 md:max-w-md md:justify-self-end lg:max-w-lg">
                                <PillarBlock {...p5} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
