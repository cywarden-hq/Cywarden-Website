import { Hero } from "./components/Hero";
import { OurApproach } from "./components/OurApproach";
import { StructuredPathToCompliance } from "./components/StructuredPathToCompliance";
import { ComplianceFrameworks } from "./components/ComplianceFrameworks";
import { ComplianceCta } from "./components/ComplianceCta";

export default function GovernanceRiskAndCompliancePage() {
    return (
        <main className="min-w-0 max-w-[100vw] overflow-x-clip bg-black">
            <Hero />
            <OurApproach />
            <StructuredPathToCompliance />
            <ComplianceFrameworks />
            <ComplianceCta />
        </main>
    );
}
