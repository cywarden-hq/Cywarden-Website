import HeroSection from "./home/components/Hero";
import OurServices from "./home/components/OurServices";
import OurSecurityJourney  from "./home/components/OurSecurityJourney";
import OurPartners from "./home/components/OurPartners";
import OurRoi from "./home/components/OurRoi";
import GetStartedSection from "./home/components/GetStarted";
import OurTestimonials from "./home/components/OurTestimonials";

export default function Home() {
  return (
    <div className="relative bg-gray-50">
      <HeroSection />
      <OurServices />
      <OurSecurityJourney />
      <OurPartners />
      <OurRoi />
      <OurTestimonials />
      <GetStartedSection />
    </div>
  );  
}
