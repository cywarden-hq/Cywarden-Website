import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

const p1 =
    "Cywarden is a global cybersecurity leader empowering modern enterprises to defend, innovate, and thrive in an increasingly complex digital landscape. Our unified, AI-native Managed Security Services platform delivers continuous monitoring, advanced threat detection, full-stack observability, and automated response seamlessly integrated into one cohesive framework.";

const p2 =
    "Designed for hybrid and multi-cloud environments, Cywarden's AI-driven approach dramatically reduces manual SOC workload, accelerates incident response, and ensures real-time protection across identities, infrastructure, applications, and data. With Cywarden, organizations gain unparalleled visibility, adaptive defenses, and the confidence to grow securely in a world of evolving threats.";

function TitleBrackets({ children, className }) {
    return (
        <div className={cn("relative inline-block px-6 pt-1 sm:px-10 sm:pt-2 md:px-12", className)}>
            <span
                className="pointer-events-none absolute left-0 top-0 h-7 w-7 border-l-2 border-t-2 border-white sm:h-9 sm:w-9 md:h-10 md:w-10"
                aria-hidden
            />
            <span
                className="pointer-events-none absolute right-0 top-0 h-7 w-7 border-r-2 border-t-2 border-white sm:h-9 sm:w-9 md:h-10 md:w-10"
                aria-hidden
            />
            {children}
        </div>
    );
}

export function Hero() {
    return (
        <Section
            size="xl"
            className="relative min-w-0 overflow-hidden bg-[#0a1628] text-white"
            aria-labelledby="about-hero-heading"
        >
            <div className="pointer-events-none absolute inset-0">
                <Image
                    src="/images/about/hero-bg.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/10" aria-hidden />
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"
                    aria-hidden
                />
            </div>

            <Container as="div" className="relative z-10 flex w-full flex-col items-center px-4 text-center sm:px-6">
                <TitleBrackets>
                    <h1
                        id="about-hero-heading"
                        className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
                    >
                        About Cywarden
                    </h1>
                </TitleBrackets>

                <div className="mt-8 max-w-3xl space-y-5 text-pretty text-base leading-relaxed text-white/95 sm:mt-10 sm:space-y-6 sm:text-lg md:max-w-4xl md:leading-relaxed">
                    <p>{p1}</p>
                    <p>{p2}</p>
                </div>
            </Container>
        </Section>
    );
}
