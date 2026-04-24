import Image from "next/image";
import Container from "@/components/ui/container";

const heroBg = "/images/services/next-gen-soc/hero-bg.svg";

const description =
    "24×7 AI-enabled SOC operations delivering enterprise-grade threat detection, incident response, and continuous security improvement backed by aggressive SLAs and certified professionals.";

export function Hero() {
    return (
        <section
            className="relative min-w-0 overflow-hidden bg-black text-white"
            aria-labelledby="ngsoc-hero-heading"
        >
            <div className="relative flex min-h-[min(88svh,820px)] flex-col items-stretch sm:min-h-[min(92svh,880px)]">
                <Image
                    src={heroBg}
                    alt=""
                    fill
                    className="block object-cover object-center"
                    priority
                    sizes="100vw"
                />

                <Container
                    as="div"
                    className="relative z-10 flex w-full flex-1 flex-col items-start justify-center py-24 text-left sm:py-28 md:py-32 lg:py-36"
                >
                    <h1
                        id="ngsoc-hero-heading"
                        className="font-heading text-[clamp(1.65rem,5.2vw,2.15rem)] font-bold leading-[1.12] tracking-tight drop-shadow-[0_2px_28px_rgba(0,0,0,0.6)] sm:text-4xl md:text-[clamp(2rem,4.2vw,3.25rem)] lg:text-[clamp(2.1rem,3.6vw,3.35rem)]"
                    >
                        <span className="text-white">Next Generation</span>
                        <br className="max-sm:hidden" />
                        <span className="sm:hidden"> </span>
                        <span className="mt-1 inline-block bg-gradient-to-r from-[#FF7700] to-[#FF9D00] bg-clip-text text-transparent sm:mt-2">
                            Security Operations Center
                        </span>
                    </h1>
                    <p className="body-lg mt-5 max-w-[min(100%,40rem)] text-pretty text-white/90 drop-shadow-[0_1px_18px_rgba(0,0,0,0.5)] sm:mt-6 md:mt-8 md:text-xl md:leading-relaxed lg:max-w-[44rem]">
                        {description}
                    </p>
                </Container>
            </div>
        </section>
    );
}
