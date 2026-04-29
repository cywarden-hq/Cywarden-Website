import { Hero } from "./components/Hero";
import { ImpactByNumbers } from "./components/ImpactByNumbers";
import { MissionVision } from "./components/MissionVision";
import { LeadershipTeam } from "./components/LeadershipTeam";
import { OurJourney } from "./components/OurJourney";

export default function AboutPage() {
    return (
        <main className="min-w-0">
            <Hero />
            <ImpactByNumbers />
            <MissionVision />
            <OurJourney />
            <LeadershipTeam />
        </main>
    );
}