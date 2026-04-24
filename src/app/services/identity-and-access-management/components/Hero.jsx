import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const heroImage = "/images/services/identity-and-access-management/hero.svg";

const description =
    "Design and implement identity-first security architectures that govern who accesses what, from where, and under what conditions - across cloud, hybrid, and on-premise environments.";

export function Hero() {
    return (
        <Section
            className="relative min-w-0 overflow-x-clip bg-black text-white"
            aria-labelledby="iam-hero-heading"
        >
            <Container
                as="div"
                className="relative z-10 flex w-full flex-col items-center px-4 sm:px-6"
            >
                {/* <div className="relative w-full max-w-[min(100%,52rem)] shrink-0 md:max-w-4xl lg:max-w-5xl"> */}
                    <Image
                        src={heroImage}
                        alt="Identity and access management diagram: central shield with user and group nodes on orbital rings."
                        width={800}
                        height={800}
                        className="object-contain"
                        priority
                    />
                {/* </div> */}

                <div className="flex w-full max-w-4xl flex-col items-center px-1 text-center sm:px-0">
                    <h1
                        id="iam-hero-heading"
                        className="font-heading text-[clamp(1.65rem,6vw,2.1rem)] font-bold leading-tight tracking-tight sm:text-5xl md:text-[clamp(2rem,4.2vw,3.25rem)]"
                    >
                        <span className="text-white">Identity & Access</span>
                        <br />
                        <span className="bg-gradient-to-r from-[#00FFD4] to-[#0011FF] bg-clip-text text-transparent">
                            Management
                        </span>
                    </h1>
                    <p className="body-lg mt-5 max-w-3xl text-pretty text-white/85 sm:mt-6 md:mt-7 md:text-xl md:leading-relaxed">
                        {description}
                    </p>
                </div>
            </Container>
        </Section>
    );
}
