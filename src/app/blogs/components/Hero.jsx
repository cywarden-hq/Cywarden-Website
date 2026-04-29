import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

export function Hero() {
    return (
        <Section size="xl" className="relative min-w-0 overflow-hidden bg-[#020617] text-white" aria-label="Blogs hero">
            <div className="pointer-events-none absolute inset-0">
                <Image
                    src="/images/blogs/hero-bg.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-[#020617]/45 to-[#020617]/75"
                    aria-hidden
                />
            </div>

            <Container
                as="div"
                className="relative z-10 flex w-full flex-col items-center px-4 text-center"
            >
                <h1 className="font-heading text-3xl font-bold uppercase tracking-[0.12em] sm:text-4xl md:text-[2.75rem]">
                    Blogs
                </h1>
                <p className="body-lg mt-4 max-w-[36rem] text-pretty text-white/90 sm:mt-5">
                    Expert perspectives on cloud security, risk management, and digital resilience.
                </p>
            </Container>
        </Section>
    );
}
