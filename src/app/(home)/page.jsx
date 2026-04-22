import { Hero } from "./components/Hero";
import { OurAlliance } from "./components/OurAlliance";
import { SecurityChanllanges } from "./components/SecurityChanllanges";
import { WhatWeDeliver } from "./components/WhatWeDeliver";
import { ConsultationApproachGroup } from "./components/ConsultationApproachGroup";
import { BusinessImpact } from "./components/BusinessImpact";
import { EndRisk } from "./components/EndRisk";
import { LeadersTestimonials } from "./components/LeadersTestimonials";
import { WhyCywarden } from "./components/WhyCywarden";
import { SecurityPostureCta } from "./components/SecurityPostureCta";

export default function Home() {
  return (
    <main className="min-w-0 max-w-[100vw] overflow-x-clip">
      <Hero />
      <OurAlliance />
      <SecurityChanllanges />
      <WhatWeDeliver />
      <ConsultationApproachGroup />
      <EndRisk />
      <BusinessImpact />
      <LeadersTestimonials />
      <WhyCywarden />
      <SecurityPostureCta />
    </main>
  );
}