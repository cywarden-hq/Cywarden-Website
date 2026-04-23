import { AppSecurityCta } from "./components/AppSecurityCta";
import { Hero } from "./components/Hero";
import { ProvenOutcomes } from "./components/ProvenOutcomes";
import { SecuringSupplyChain } from "./components/SecuringSupplyChain";

export default function ApplicationSecurityPage() {
    return (
        <main className="min-w-0 max-w-[100vw] overflow-x-clip">
            <Hero />
            <SecuringSupplyChain />
            <ProvenOutcomes />
            <AppSecurityCta />
        </main>
    );
}
