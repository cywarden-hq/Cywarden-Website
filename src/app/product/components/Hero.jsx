import Link from "next/link";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";
import Image from "next/image";

const headlineWordGradient =
    "linear-gradient(90deg, rgb(229, 96, 13) 0%, rgb(255, 255, 255) 55%)";

/**
 * Figma fills (stacked; first list item paints on top):
 * 1) White: 0% #fff @ 7% opacity → 100% #fff @ 15% opacity
 * 2) Base @ 16% opacity: 0% #1B1C36 → 50% #70717A → 100% #CAC6DD
 */
const glassSurfaceStyle = {
    backgroundImage: [
        "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.15) 100%)",
        "linear-gradient(180deg, rgba(27,28,54,0.16) 0%, rgba(112,113,122,0.16) 50%, rgba(202,198,221,0.16) 100%)",
    ].join(", "),
};

const glassSurfaceClass =
    "overflow-hidden rounded-2xl border border-[#CAC6DD]/35 backdrop-blur-[14px] shadow-[0_0_0_1px_rgba(202,198,221,0.06)_inset]";

/**
 * Lines: from inner edge of each pill toward the hub; each ends at its own dot — lines do not meet at the logo.
 * viewBox coords tuned for hub area ~320,180; dots sit in a loose diamond around the logo gap.
 */
function ConnectorWeb() {
    const stroke = "#CAC6DD";
    return (
        <svg
            className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full lg:block"
            viewBox="0 0 640 420"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
        >
            {/* TL: AI Guardian — from pill inner corner toward hub */}
            <line x1="118" y1="88" x2="292" y2="168" stroke={stroke} strokeWidth="1" strokeOpacity="0.9" />
            <circle cx="292" cy="168" r="3.5" fill={stroke} fillOpacity="0.95" />
            {/* TR: Risk */}
            <line x1="522" y1="88" x2="348" y2="168" stroke={stroke} strokeWidth="1" strokeOpacity="0.9" />
            <circle cx="348" cy="168" r="3.5" fill={stroke} fillOpacity="0.95" />
            {/* BL: Network Policy */}
            <line x1="118" y1="318" x2="292" y2="248" stroke={stroke} strokeWidth="1" strokeOpacity="0.9" />
            <circle cx="292" cy="248" r="3.5" fill={stroke} fillOpacity="0.95" />
            {/* BR: Alert Navigator */}
            <line x1="522" y1="318" x2="348" y2="248" stroke={stroke} strokeWidth="1" strokeOpacity="0.9" />
            <circle cx="348" cy="248" r="3.5" fill={stroke} fillOpacity="0.95" />
        </svg>
    );
}

function FeaturePill({ children, className }) {
    return (
        <div
            className={cn(
                "absolute z-[3] max-w-[min(48%,220px)] px-3.5 py-3 sm:max-w-[240px] sm:px-4 sm:py-3.5",
                glassSurfaceClass,
                className,
            )}
            style={glassSurfaceStyle}
        >
            <p className="body-sm text-center font-medium leading-snug text-white">{children}</p>
        </div>
    );
}

function HubConstellation() {
    return (
        <div
            className="relative mx-auto mt-4 w-full max-w-[min(100%,560px)] px-2 sm:mt-6 md:max-w-[640px] lg:mt-2"
            aria-hidden
        >
            {/* Radar rings (subtle, behind lines) */}
            <div className="pointer-events-none absolute left-1/2 top-[42%] z-0 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-[min(72vw,340px)] w-[min(72vw,340px)] sm:h-[380px] sm:w-[380px]">
                    <div className="absolute inset-0 rounded-full border border-white/15" />
                    <div className="absolute inset-[12%] rounded-full border border-dashed border-white/20" />
                    <div className="absolute inset-[26%] rounded-full border border-white/30" />
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_58%)]" />
                </div>
            </div>

            <ConnectorWeb />

            <div className="relative z-[2] min-h-[280px] sm:min-h-[320px] md:min-h-[360px]">
                {/* Pills at outer “start” of each spoke; inner edge faces the hub so lines attach toward center */}
                <FeaturePill className="left-0 top-[5%] md:top-[7%]">AI Guardian</FeaturePill>
                <FeaturePill className="right-0 top-[5%] md:top-[7%]">
                    Risk Assessment (NIST CSF)
                </FeaturePill>
                <FeaturePill className="left-0 bottom-[8%] top-auto max-w-[min(52%,240px)] md:bottom-[10%] md:max-w-[260px]">
                    Network Policy Analyzer
                </FeaturePill>
                <FeaturePill className="right-0 bottom-[8%] top-auto md:bottom-[10%]">
                    Alert Navigator
                </FeaturePill>

                <div className="absolute left-1/2 top-[50%] z-[4] flex w-full max-w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:max-w-none">
                    <Image src="/images/product/cyforte-logo.svg" alt="CyForte logo" width={100} height={100} />
                    <div className="mt-4 flex flex-wrap items-baseline justify-center gap-x-2.5 gap-y-1">
                        <span className="font-heading text-white text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                            CyForte.ai
                        </span>
                        <span className="font-heading text-2xl font-normal tracking-tight text-white sm:text-3xl lg:text-4xl">
                            Platform
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section
            className="relative min-h-[min(100svh,780px)] overflow-hidden sm:min-h-[min(100svh,860px)] lg:min-h-[min(100svh,920px)]"
            aria-label="CyForte platform hero"
        >
            <Image
                src="/images/product/hero-bg.svg"
                alt="CyForte platform hero"
                fill
                className="absolute inset-0 object-cover object-center "
                priority
            />
            <div className="absolute inset-0 bg-black/30" />

            <Container
                as="div"
                className="relative z-10 flex min-h-0 flex-col items-center pb-14 pt-28 text-center sm:pb-16 sm:pt-32 md:pb-20 md:pt-36 lg:pb-24 lg:pt-40"
            >
                <HubConstellation />

                <h1 className="heading-1 mt-10 max-w-[920px] px-1 text-balance sm:mt-12 md:mt-14">
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: headlineWordGradient }}>
                        Protect
                    </span>
                    <span className="text-white"> What Matters. </span>
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: headlineWordGradient }}>
                        Build
                    </span>
                    <span className="text-white"> What Lasts.</span>
                </h1>

                <p className="body-lg mt-6 max-w-[820px] text-pretty text-white/75 sm:mt-8">
                    Observe your risks. Transform your operations. Evolve your defences. CyForte.ai is a modular
                    AI-native security operations platform that unifies monitoring, reduces cyber risk, and gives
                    enterprises a scalable approach to defending modern environments.
                </p>

                <div className="mt-8 flex w-full max-w-lg flex-col gap-4 sm:mt-10 sm:flex-row sm:justify-center sm:gap-5">
                    <Link
                        href="/contact"
                        className={cn(
                            "inline-flex h-12 w-full shrink-0 items-center justify-center px-5 font-heading text-base font-medium text-white transition hover:brightness-110 sm:h-[3.25rem] sm:w-auto sm:min-w-[200px]",
                            glassSurfaceClass,
                        )}
                        style={glassSurfaceStyle}
                    >
                        Request a Demo
                    </Link>
                    <Link
                        href="/contact"
                        className={cn(
                            "inline-flex h-12 w-full shrink-0 items-center justify-center px-5 font-heading text-base font-medium text-white transition hover:brightness-110 sm:h-[3.25rem] sm:w-auto sm:min-w-[200px]",
                            glassSurfaceClass,
                        )}
                        style={glassSurfaceStyle}
                    >
                        See It in the SOC
                    </Link>
                </div>
            </Container>
        </section>
    );
}
