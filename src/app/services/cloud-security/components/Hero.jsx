import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const heroBg = "/images/services/cloud-security/hero.png";

const description =
    "Secure your cloud infrastructure from architecture to runtime. We design, implement, and continuously validate cloud security across AWS, Azure, and GCP environments.";

export function Hero() {
    return (
        <Section
            className="relative min-w-0 overflow-hidden bg-black text-white"
            aria-labelledby="cloud-security-hero-heading"
        >
            <div className="relative flex min-h-[min(100svh,900px)] flex-col items-stretch sm:min-h-[min(100svh,960px)]">
                <Image
                    src={heroBg}
                    alt=""
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40" />

                <Container
                    as="div"
                    className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6"
                >
                    {/* Slight downward shift so the block sits a little into the cloud artwork */}
                    <div className="translate-y-4 sm:translate-y-6 md:translate-y-8">
                        <h1
                            id="cloud-security-hero-heading"
                            className="font-heading text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.65)] sm:text-5xl md:text-[clamp(2.5rem,5vw,3.5rem)]"
                        >
                            Cloud Security
                        </h1>
                        <p className="body-lg mx-auto mt-5 max-w-[38rem] text-pretty text-[#E8E8E8] drop-shadow-[0_1px_16px_rgba(0,0,0,0.55)] sm:mt-6 md:mt-7 md:text-xl md:leading-relaxed">
                            {description}
                        </p>
                    </div>
                </Container>
            </div>
        </Section>
    );
}
