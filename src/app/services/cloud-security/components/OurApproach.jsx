import Image from "next/image";
import Container from "@/components/ui/container";
import { ApproachMethodologyGrid } from "./ApproachMethodologyGrid";

const illustration = "/images/services/cloud-security/our-approach.svg";

const eyebrow = "Our Approach";
const heading = "How We Secure the Cloud";
const description =
    "Our cloud security methodology integrates with your cloud adoption journey, ensuring security is embedded from Day 1 - not bolted on after.";

export function OurApproach() {
    return (
        <section
            className="bg-black py-16 text-white sm:py-20 lg:py-24"
            aria-labelledby="our-approach-heading"
        >
            <Container as="div" className="flex flex-col items-center gap-12 sm:gap-14 lg:gap-20">
                <div className="flex max-w-3xl flex-col items-center text-center">
                    <p className="section-label">
                        {eyebrow}
                    </p>
                    <h2
                        id="our-approach-heading"
                        className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl md:text-[clamp(1.875rem,3.5vw,2.75rem)]"
                    >
                        {heading}
                    </h2>
                    <p className="body-lg mt-5 max-w-2xl text-pretty text-white/90 sm:mt-6">
                        {description}
                    </p>
                </div>

                {/* Diagram + methodology: zero gap; SVG viewBox is tall — crop lower canvas with aspect + object-cover */}
                <div className="flex w-full max-w-7xl flex-col items-stretch gap-0">
                    <div className="relative w-full overflow-hidden bg-black aspect-[1440/690]">
                        <Image
                            src={illustration}
                            alt=""
                            fill
                            className="object-cover object-top"
                            sizes="(min-width: 1280px) 80rem, 100vw"
                            priority={false}
                        />
                    </div>
                    <ApproachMethodologyGrid />
                </div>
            </Container>
        </section>
    );
}
