import { Hero } from "./components/Hero";
import { ProactiveThreatIdentification } from "./components/ProactiveThreatIdentification";
import { ThreatModelingApproachGlowStack } from "./components/ThreatModelingApproachGlowStack";
import { WhyThreatModelingMatters } from "./components/WhyThreatModelingMatters";
import { ThreatModelingCta } from "./components/ThreatModelingCta";

export default function ThreatModelingPage() {
    return (
        <main className="min-w-0 max-w-[100vw] overflow-x-clip">
            <Hero />
            <ThreatModelingApproachGlowStack>
                <ProactiveThreatIdentification />
                <WhyThreatModelingMatters />
            </ThreatModelingApproachGlowStack>
            <ThreatModelingCta />
        </main>
    );
}
