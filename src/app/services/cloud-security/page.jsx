import { CloudSecurityCta } from "./components/CloudSecurityCta";
import { Hero } from "./components/Hero";
import { OurApproach } from "./components/OurApproach";
import { ValueDelivered } from "./components/ValueDelivered";

export default function CloudSecurityPage() {
    return (
        <main className="min-w-0 max-w-[100vw] overflow-x-clip">
            <Hero />
            <OurApproach />
            <ValueDelivered />
            <CloudSecurityCta />
        </main>
    );
}
