import { Hero } from "./components/Hero";
import { OurPartners } from "./components/OurPartners";
import { TechnologyStrategyCta } from "./components/TechnologyStrategyCta";
import { WhyPartnerWithCywarden } from "./components/WhyPartnerWithCywarden";

export default function PartnerPage() {
    return (
        <main className="min-w-0 max-w-[100vw] overflow-x-clip">
            <Hero />
            <WhyPartnerWithCywarden />
            <OurPartners />
            <TechnologyStrategyCta />
        </main>
    );
}
