import Link from "next/link";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const eyebrowGradient =
    "linear-gradient(90deg, rgb(229, 100, 4) 9%, rgb(255, 255, 255) 31%)";
const headlineGradient =
    "linear-gradient(90deg, rgb(229, 96, 13) 0%, rgb(255, 255, 255) 44%)";

export function Hero() {
    return (
        <Section
            className="relative flex min-h-[min(100svh,720px)] flex-col overflow-hidden bg-[#000c2d] sm:min-h-[min(100svh,800px)] lg:min-h-[min(100svh,850px)]"
            aria-label="Hero"
        >
            {/* Background video */}
            <div className="absolute inset-0">
                <video
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden
                >
                    <source src="/images/home/hero-background-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Blue glow behind the hero */}
            <div
                className="pointer-events-none absolute -left-[20%] -top-[35%] h-[720px] w-[738px] rounded-full bg-[#0080FF] opacity-30 blur-[100px]"
                aria-hidden
            />

            {/* Tiled texture overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.55] mix-blend-soft-light"
                style={{
                    backgroundImage: "url(/images/home/hero-texture-tile.png)",
                    backgroundSize: "50%",
                    backgroundRepeat: "repeat",
                    WebkitMaskImage:"radial-gradient(circle at top left, black 30%, transparent 70%)",
                    maskImage:"radial-gradient(circle at top left, black 30%, transparent 70%)",
                }}
                aria-hidden
            />

            {/* Content */}
            <Container as="div" className="relative z-10 flex min-h-0 flex-1 flex-col justify-center">
                <div className="max-w-full sm:max-w-[687px]">
                    <p
                        className="bg-clip-text body-lg font-semibold text-transparent"
                        style={{ backgroundImage: eyebrowGradient }}
                    >
                        ENTERPRISE CYBERSECURITY SERVICES
                    </p>

                    <h1
                        className="mt-2 max-w-[600px] bg-clip-text heading-1 text-transparent md:mt-2.5"
                        style={{ backgroundImage: headlineGradient }}
                    >
                        <span className="block">Protect what Matters</span>
                        <span className="block">Build What Lasts.</span>
                    </h1>

                    <p className="mt-6 max-w-[585px] body-lg text-white/70 md:mt-8">
                        Cywarden delivers managed security, AI-driven threat operations, and
                        compliance services that turn cybersecurity from a cost center into a
                        strategic advantage.
                    </p>

                    <div className="mt-8 flex w-full max-w-[618px] flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[30px]">
                        <Link
                            href="/contact"
                            className={cn(
                                "inline-flex h-12 w-full shrink-0 items-center justify-center rounded-[11px] border border-white/50",
                                "bg-black/10 px-4 font-heading text-base font-normal text-white transition hover:bg-black/20 sm:min-w-0 sm:flex-1 sm:basis-[min(100%,288px)] lg:flex-none lg:w-[288px]",
                            )}
                        >
                            Strengthen Your Security Posture
                        </Link>
                        <Link
                            href="/services"
                            className={cn(
                                "inline-flex h-12 w-full shrink-0 items-center justify-center rounded-[11px] px-4 font-heading text-base font-medium text-white transition",
                                "bg-[#F9680E] shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_4px_18.5px_rgba(0,0,0,0.25),inset_0_-5px_42px_rgba(0,0,0,0.25)]",
                                "hover:brightness-110 sm:min-w-0 sm:flex-1 sm:basis-[min(100%,200px)] lg:flex-none lg:w-[200px]",
                            )}
                        >
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
