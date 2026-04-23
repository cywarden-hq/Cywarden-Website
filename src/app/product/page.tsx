import { Hero } from "./components/Hero";
import { DashboardShowcase } from "./components/DashboardShowcase";
import { TheChallenge } from "./components/TheChallenge";
import { FleetAgentsSection } from "./components/FleetAgentsSection";
import { PlatformImpact } from "./components/PlatformImpact";
import { ProductDemoCta } from "./components/ProductDemoCta";

export default function ProductPage() {
    return (
        <main className="min-w-0 max-w-[100vw] overflow-x-clip">
            <Hero />
            <DashboardShowcase />
            <TheChallenge />
            <FleetAgentsSection />
            <PlatformImpact />
            <ProductDemoCta />
        </main>
    );
}
