import Image from "next/image";
import Container from "@/components/ui/container";

const heroImage = "/images/services/network-operations/hero.svg";

const description =
    "24x7 network security monitoring, intrusion detection, and threat response - protecting your network perimeter and internal communications from sophisticated adversaries.";

export function Hero() {
    return (
        <section
            className="min-w-0 bg-black text-white"
            aria-labelledby="network-operations-hero-heading"
        >
            <Container
                as="div"
                className="flex flex-col items-center pb-12 pt-16 text-center sm:pb-16 sm:pt-20 md:pb-20 md:pt-24 lg:pb-24 lg:pt-28"
            >
                <h1
                    id="network-operations-hero-heading"
                    className="font-heading text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.08] tracking-tight"
                >
                    <span className="text-white">Network </span>
                    <span className="bg-gradient-to-r from-white via-white to-[#FF6F00] bg-clip-text text-transparent">
                        Operations
                    </span>
                </h1>
                <p className="body-lg mt-5 max-w-[min(100%,42rem)] text-pretty text-white/90 sm:mt-6 md:mt-8 md:text-xl md:leading-relaxed">
                    {description}
                </p>
                <div className="relative mt-10 w-full max-w-6xl sm:mt-12 md:mt-14">
                    <Image
                        src={heroImage}
                        alt="Analyst monitoring network security operations with global visualization displays."
                        width={1920}
                        height={1080}
                        className="h-auto w-full object-contain"
                        priority
                        sizes="(max-width: 1152px) 100vw, 1152px"
                    />
                </div>
            </Container>
        </section>
    );
}
