import { Hero } from "./components/Hero";
import { OurApproach } from "./components/OurApproach";
import { WhatWeDeliver } from "./components/WhatWeDeliver";
import { IamCta } from "./components/IamCta";

export default function IdentityAndAccessManagementPage() {
    return (
        <main className="min-w-0 max-w-[100vw] overflow-x-clip">
            <Hero />
            <OurApproach />
            <WhatWeDeliver />
            <IamCta />
        </main>
    );
}