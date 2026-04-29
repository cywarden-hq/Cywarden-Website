import Image from "next/image";
import Section from "@/components/ui/section";

export function OurJourney() {
    return (
        <Section className="min-w-0 bg-black px-0" aria-label="Our journey">
            <div className="flex w-full justify-center bg-black px-4 sm:px-6">
                <Image
                    src="/images/about/our-journey.jpg"
                    alt="Our journey"
                    width={1600}
                    height={900}
                    className="h-auto w-full max-w-5xl object-contain lg:max-w-6xl"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    priority={false}
                />
            </div>
        </Section>
    );
}
