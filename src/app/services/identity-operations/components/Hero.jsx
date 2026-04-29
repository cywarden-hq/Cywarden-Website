import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const heroBg = "/images/services/identity-operations/hero-bg.svg";

const description =
    "24x7 identity monitoring, threat detection, and access governance - continuously protecting your most targeted attack surface: identity.";

export function Hero() {
    return (
        <Section
            className="relative min-w-0 overflow-hidden bg-black text-white"
            aria-labelledby="identity-operations-hero-heading"
        >
            <div className="relative flex min-h-[min(86svh,760px)] flex-col items-stretch sm:min-h-[min(90svh,820px)] lg:min-h-[min(92svh,860px)]">
                <Image
                    src={heroBg}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/12" aria-hidden />

                <Container
                    as="div"
                    className="relative z-10 flex w-full flex-1 flex-col items-start justify-center text-left"
                >
                    <div className="max-w-[42rem]">
                        <p className="font-heading text-base font-semibold text-[#FF7700] sm:text-lg">Managed Security</p>
                        <h1
                            id="identity-operations-hero-heading"
                            className="mt-2 font-heading text-[clamp(2rem,6.5vw,3.7rem)] font-bold leading-[1.05] tracking-tight text-white sm:mt-3"
                        >
                            Identity Operations
                        </h1>
                        <p className="body-lg mt-7 max-w-[36rem] text-pretty text-white/90 sm:mt-8 md:text-xl md:leading-relaxed">
                            {description}
                        </p>
                    </div>
                </Container>
            </div>
        </Section>
    );
}
