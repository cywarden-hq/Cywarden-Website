import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const heroBottom = "/images/services/threat-modeling/hero-bottom.svg";

const description =
    "Identify and mitigate threats before they become vulnerabilities. Our structured threat modeling program helps you make informed security design decisions at every stage.";

const cards = [
    { label: "Secure Deployment", featured: false },
    { label: "Vulnerability Detected", featured: true },
    { label: "Risk Mitigated", featured: false },
];

/** Outer dark “frame” + inner blue panel. Narrow: full-width column; md+: row with overlap via negative margins. */
function ThreatCard({ label, featured }) {
    return (
        <div
            className={cn(
                "relative z-10 w-full max-w-[min(100%,20rem)] rounded-2xl border border-white/[0.1] bg-gradient-to-b from-[#14141c] via-[#08080c] to-[#101018] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_12px_40px_rgba(0,0,0,0.55)] sm:max-w-[min(100%,22rem)] sm:rounded-[2rem] sm:p-2 md:max-w-none md:shrink-0 md:rounded-[2.25rem] md:p-2.5 lg:rounded-[2.5rem] lg:p-3",
                "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-[0.22] before:content-['']",
                "before:bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] before:bg-[length:4px_4px]",
                featured
                    ? "z-20 max-w-[min(100%,22rem)] sm:max-w-[min(100%,24rem)] md:-mx-2 md:w-[min(50vw,24rem)] md:max-w-none lg:-mx-4 lg:w-[min(46vw,28rem)]"
                    : "md:-mx-1 md:w-[min(30vw,13.5rem)] lg:-mx-2 lg:w-[min(32vw,17.5rem)]",
            )}
        >
            <div
                className={cn(
                    "flex w-full items-center justify-center rounded-[1.15rem] border border-sky-200/35 bg-gradient-to-b from-[#3b8cff] via-[#1a5fe0] to-[#0c2666] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] sm:rounded-[1.35rem] md:rounded-[1.6rem] lg:rounded-[1.85rem]",
                    featured
                        ? "min-h-[6.25rem] px-4 py-5 sm:min-h-[7rem] sm:px-5 sm:py-6 md:min-h-[8rem] md:px-6 md:py-8 lg:min-h-[8.75rem] lg:px-7 lg:py-9"
                        : "min-h-[5.5rem] px-3 py-4 sm:min-h-[6rem] sm:px-4 sm:py-5 md:min-h-[6.5rem] md:px-4 md:py-6 lg:min-h-[6.75rem] lg:py-7",
                )}
            >
                <p
                    className={cn(
                        "text-pretty font-sans font-medium leading-snug text-white",
                        featured
                            ? "text-base font-semibold sm:text-lg md:text-2xl lg:text-3xl"
                            : "text-sm font-semibold sm:text-base md:text-xl lg:text-2xl",
                    )}
                >
                    {label}
                </p>
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <Section
            className="relative min-w-0 overflow-x-clip bg-black py-16 text-white sm:py-24 md:py-28 lg:py-34"
            aria-labelledby="threat-modeling-hero-heading"
        >
            {/* Blue wash under grid */}
            <div
                className="pointer-events-none absolute left-1/2 top-[40%] z-[1] h-[min(75vw,36rem)] w-[min(98vw,56rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,140,255,0.42)_0%,rgba(26,95,224,0.18)_42%,transparent_68%)] blur-3xl"
                aria-hidden
            />

            {/* Grid: elliptical mask (ellipse < full box) so corners fade to black; wider cell spacing */}
            <div
                className="pointer-events-none absolute inset-0 z-[2]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(168, 178, 198, 0.38) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 178, 198, 0.38) 1px, transparent 1px)
          `,
                    backgroundSize: "78px 78px",
                    backgroundPosition: "center center",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 82% 58% at 50% 42%, #000 0%, #000 24%, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.28) 56%, rgba(0,0,0,0.06) 68%, transparent 78%)",
                    maskImage:
                        "radial-gradient(ellipse 82% 58% at 50% 42%, #000 0%, #000 24%, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.28) 56%, rgba(0,0,0,0.06) 68%, transparent 78%)",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                }}
                aria-hidden
            />

            <Container
                as="div"
                className="relative z-10 flex w-full flex-col items-center gap-8 px-4 sm:gap-10 sm:px-6 md:gap-12 lg:gap-14"
            >
                <div className="flex w-full max-w-4xl flex-col items-center px-1 text-center sm:px-0">
                    <h1
                        id="threat-modeling-hero-heading"
                        className="font-heading text-[clamp(1.75rem,6.5vw,2.25rem)] font-bold leading-tight tracking-tight sm:text-5xl md:text-[clamp(2rem,4.5vw,3.25rem)]"
                    >
                        <span className="text-white">Threat </span>
                        <span className="bg-gradient-to-r from-white to-[#FF5900] bg-clip-text text-transparent">
                            Modeling
                        </span>
                    </h1>
                    <p className="body-lg mt-5 max-w-3xl text-pretty text-white/80 sm:mt-8 md:mt-8 md:text-xl md:leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full max-w-6xl flex-col items-center px-0 sm:px-2 lg:max-w-7xl">
                    <div className="relative w-full min-w-0">
                        <div className="relative z-[1] mx-auto flex w-full max-w-md flex-col items-center gap-4 md:max-w-none md:flex-row md:flex-nowrap md:items-end md:justify-center md:gap-1 lg:gap-2">
                            {cards.map((card) => (
                                <ThreatCard key={card.label} {...card} />
                            ))}
                        </div>
                    </div>

                    <div className="relative z-[1] mt-1 flex w-full max-w-[min(100%,22rem)] justify-center sm:mt-0 sm:max-w-[min(100%,28rem)] md:-mt-1 md:max-w-[36rem] lg:max-w-[40rem]">
                        <Image
                            src={heroBottom}
                            alt="Threat modeling: secured flow converging on a protected shield with keyhole."
                            width={603}
                            height={364}
                            className="h-auto w-full max-w-full object-contain object-bottom"
                            priority
                            sizes="(max-width: 640px) 22rem, (max-width: 768px) 28rem, 40rem"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
