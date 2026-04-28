import Image from "next/image";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const basePath = "/images/services/network-operations";

const intro =
    "Modern enterprises operate across hybrid networks — on-premise, cloud, SD-WAN, and remote. Our Network Operations service provides unified visibility and protection across all network segments.";

const rows = [
    {
        title: "Detect & Analyze",
        description:
            "Real-time monitoring using IDS/IPS, NDR, and flow analysis. Deep packet inspection, encrypted traffic analysis, and network forensics for incident investigation.",
        file: "detect-and-analyze.svg",
        width: 739,
        height: 460,
        alt: "Dashboard highlighting IDS, IPS, NDR, flow analysis, deep packet inspection, and network forensics.",
    },
    {
        title: "Govern & Harden",
        description:
            "Continuous firewall rule review, policy optimization, and change management. Validate network segmentation, microsegmentation, and zero-trust network access enforcement.",
        file: "govern-and-hardern.svg",
        width: 731,
        height: 460,
        alt: "Dashboard for firewall rule review, policy optimization, change management, segmentation, and zero-trust access.",
    },
    {
        title: "Monitor Cloud & Hybrid",
        description:
            "Monitor VPCs, security groups, NACLs, and cloud network flows in AWS, Azure, and GCP. Detect misconfigurations and unauthorized network paths across hybrid environments.",
        file: "monitor-cloud.svg",
        width: 746,
        height: 459,
        alt: "Cloud and hybrid network monitoring across AWS, Azure, and GCP with VPC and flow metrics.",
    },
    {
        title: "Respond & Improve",
        description:
            "Rapid containment of network-based attacks — automated blocking and segment isolation. Analyze trends and optimize policies based on evolved threats.",
        file: "respond-and-improve.svg",
        width: 761,
        height: 488,
        alt: "Incident response dashboard with threat detection, containment status, and trend analysis.",
    },
];

/** Odd cards (1st, 3rd): blue → black. Even cards (2nd, 4th): black → blue. */
function stripGradientClass(isOdd) {
    return isOdd
        ? "bg-gradient-to-r from-[#00246F] via-[#000814] to-black"
        : "bg-gradient-to-r from-black via-[#000814] to-[#00246F]";
}

function ApproachRow({ title, description, file, width, height, alt, index }) {
    const isOdd = index % 2 === 0;
    const reversed = !isOdd;

    return (
        <li
            className={cn(
                "min-w-0 w-full",
                index === 0 && "pt-6 sm:pt-8 lg:pt-10",
            )}
        >
            <div className={cn("relative w-full overflow-visible py-4 sm:py-4 lg:py-3", stripGradientClass(isOdd))}>
                <Container as="div" className="min-w-0">
                    <div
                        className={cn(
                            "flex min-h-0 w-full min-w-0 flex-col gap-6 sm:gap-7",
                            "lg:flex-row lg:items-center lg:justify-between lg:gap-10 xl:gap-12 2xl:gap-14",
                            reversed ? "lg:flex-row-reverse" : null,
                        )}
                    >
                        <div
                            className={cn(
                                "flex min-w-0 max-w-xl shrink-0 flex-col justify-center lg:max-w-[22rem] xl:max-w-[24rem]",
                                reversed ? "text-left lg:text-right" : "text-left",
                            )}
                        >
                            <h3 className="font-heading text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
                                {title}
                            </h3>
                            <p className="body-lg mt-2 max-w-prose text-pretty text-white/80 sm:mt-2.5 sm:leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div
                            className={cn(
                                "relative z-10 flex min-w-0 shrink-0 justify-center lg:max-w-[min(100%,42rem)] xl:max-w-[46rem] 2xl:max-w-[50rem]",
                                reversed ? "lg:justify-start" : "lg:justify-end",
                            )}
                        >
                            <div
                                className={cn(
                                    "w-full max-w-[min(100%,24rem)] sm:max-w-[28rem] lg:max-w-[min(100%,40rem)] xl:max-w-[44rem] 2xl:max-w-[48rem]",
                                    "-translate-y-5 sm:-translate-y-6",
                                    "lg:-translate-y-[clamp(2.75rem,8vw,5.5rem)] xl:-translate-y-[clamp(3rem,7vw,6rem)]",
                                )}
                            >
                                <Image
                                    src={`${basePath}/${file}`}
                                    alt={alt}
                                    width={width}
                                    height={height}
                                    className={cn(
                                        "h-auto w-full object-contain",
                                        "drop-shadow-[0_0_28px_rgba(147,197,253,0.35)] lg:drop-shadow-[0_0_48px_rgba(96,165,250,0.45)]",
                                    )}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1536px) 42rem, 48rem"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </li>
    );
}

export function OurApproach() {
    return (
        <section
            className="relative isolate min-w-0 overflow-x-clip overflow-y-visible bg-black py-16 text-white sm:py-20 lg:py-24"
            aria-labelledby="network-operations-our-approach-heading"
        >
            <Container as="div" className="relative z-10 min-w-0">
                <header className="mx-auto max-w-3xl text-center">
                    <h2 id="network-operations-our-approach-heading" className="section-label">
                        Our Approach
                    </h2>
                    <p className="body-lg mt-5 text-pretty text-white/90 sm:mt-6 md:text-lg md:leading-relaxed">
                        {intro}
                    </p>
                </header>
            </Container>

            <ul className="relative z-10 mt-12 flex w-full min-w-0 list-none flex-col gap-14 sm:mt-14 sm:gap-16 lg:mt-16 lg:gap-20 xl:gap-24 2xl:gap-28">
                {rows.map((row, index) => (
                    <ApproachRow key={row.title} {...row} index={index} />
                ))}
            </ul>
        </section>
    );
}
