import { Hero } from "./components/Hero";
import { OurApproachSection } from "./components/OurApproachSection";
import { WhatMakesUsDifferent } from "./components/WhatMakesUsDifferent";

export default function IdentityOperationsPage() {
    return (
        <main className="min-w-0 max-w-[100vw] overflow-x-clip bg-black">
            <Hero />
            <OurApproachSection />
            <WhatMakesUsDifferent />
        </main>
    );
}
