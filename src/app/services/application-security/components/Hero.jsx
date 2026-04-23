import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const heroIllustration = "/images/services/application-security/hero-bg.svg";

const description =
    "Shift security left into your development lifecycle. We design and implement application security programs that protect your software from code to production.";

export function Hero() {
    return (
        <Section
            className="relative min-w-0 overflow-x-clip bg-black py-20 text-white sm:py-26 lg:py-34"
            aria-labelledby="application-security-hero-heading"
        >
            <Image
                src="/images/services/application-security/hero-effects-bg.png"
                alt=""
                className="absolute inset-0 object-cover"
                fill
            />
            <Container
                as="div"
                className="relative z-10 flex w-full flex-col items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:gap-14"
            >
                <div className="flex max-w-4xl flex-col items-center text-center">
                    <h1
                        id="application-security-hero-heading"
                        className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-[clamp(2rem,4.5vw,3.25rem)]"
                    >
                        <span className="text-white">Application Security</span>
                        <br />
                        <span className="mt-1 inline-block w-fit bg-gradient-to-r from-[#FF4400] to-[#FF9D00] bg-clip-text text-transparent sm:mt-2">
                            And DevSecOps
                        </span>
                    </h1>
                    <p className="body-lg mt-6 max-w-3xl text-pretty text-white/85 sm:mt-8 md:text-xl md:leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="relative w-full max-w-5xl">
                    <Image
                        src={heroIllustration}
                        alt="DevSecOps lifecycle: Dev and Ops with security integrated across plan, build, test, release, and observe."
                        width={927}
                        height={618}
                        className="h-auto w-full object-contain"
                        priority
                        sizes="(min-width: 1024px) 64rem, 100vw"
                    />
                </div>
            </Container>
        </Section>
    );
}
