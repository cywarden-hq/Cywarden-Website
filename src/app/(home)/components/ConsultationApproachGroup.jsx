import { ConsultationCta } from "./ConsultationCta";
import { OurApproach } from "./OurApproach";

const sharedBackgroundSrc = "/images/home/our-approach-bg.png";

export function ConsultationApproachGroup() {
  return (
    <section
      className="relative min-w-0 overflow-x-clip text-white"
      aria-label="Security consultation and our approach"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sharedBackgroundSrc})` }}
        aria-hidden
      />
      <div className="relative z-[1]">
        <ConsultationCta />
        <OurApproach />
      </div>
    </section>
  );
}
