import Image from "next/image";
import Container from "@/components/ui/container";

const missionBg = "/images/about/mission-bg.svg";

const missionBody =
    "To redefine cybersecurity with intelligent, business-aligned solutions that safeguard digital ecosystems, minimize risk, and enable fearless growth. We combine cutting-edge technology with deep expertise to deliver security that is not only effective but empowering.";

const visionBody =
    "To create a digital world where security drives innovation, not fear. We envision a future in which every organization can operate securely, confidently, and without compromise — powered by trusted partnerships, adaptive technology, and transformative cybersecurity solutions.";

export function MissionVision() {
    return (
        <div
            className="relative min-w-0 overflow-hidden bg-black text-white"
            aria-labelledby="mission-vision-heading our-mission-heading our-vision-heading"
        >
            <div className="pointer-events-none absolute inset-0">
                <Image
                    src={missionBg}
                    alt=""
                    fill
                    className="object-contain object-bottom"
                />
                <div className="absolute inset-0 bg-black/60" aria-hidden />
            </div>

            <Container as="div" className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:max-w-5xl">
                {/* Centered intro only */}
                <header className="mx-auto flex max-w-2xl flex-col items-center text-center">
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#F9680E] sm:text-sm">
                        OUR FOUNDATION
                    </p>
                    <h2
                        id="mission-vision-heading"
                        className="mt-2 font-heading text-3xl font-bold leading-tight tracking-tight sm:mt-3 sm:text-4xl md:text-5xl"
                    >
                        Mission &amp; Vision
                    </h2>
                </header>

                {/* Mission + vision: left-aligned within the same content column */}
                <div className="mt-12 w-full text-left sm:mt-14 md:mt-16">
                    <div>
                        <h3
                            id="our-mission-heading"
                            className="font-heading text-3xl font-bold tracking-tight text-[#2F9FFF] sm:text-4xl md:text-[2.25rem]"
                        >
                            Our Mission
                        </h3>
                        <p className="body-lg mt-6 max-w-none text-pretty leading-relaxed text-white/90 sm:mt-8 md:text-xl md:leading-relaxed">
                            {missionBody}
                        </p>
                    </div>

                    <div className="mt-12 sm:mt-14 md:mt-16">
                        <h3
                            id="our-vision-heading"
                            className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.25rem]"
                        >
                            Our Vision
                        </h3>
                        <p className="body-lg mt-6 max-w-none text-pretty leading-relaxed text-white/90 sm:mt-8 md:text-xl md:leading-relaxed">
                            {visionBody}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
