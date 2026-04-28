import { Hero } from "./components/Hero";
import { NetworkOperationsCta } from "./components/NetworkOperationsCta";
import { OurApproach } from "./components/OurApproach";
import { WhatMakesUsDifferent } from "./components/WhatMakesUsDifferent";

export default function NetworkOperationsPage() {
    return (
        <main className="min-w-0 max-w-[100vw] overflow-x-clip bg-black">
            <Hero />
            <OurApproach />
            <WhatMakesUsDifferent />
            <NetworkOperationsCta />
        </main>
    );
}
