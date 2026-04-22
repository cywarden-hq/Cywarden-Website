import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

/** Files in `public/images/home/logos/` only — no placeholders. */
const allianceLogos = [
  {
    name: "New Relic",
    src: "/images/home/logos/new-relic-vector-logo-seeklogo/new-relic-seeklogo.svg",
    width: 160,
    height: 40,
  },
  {
    name: "Wiz",
    src: "/images/home/logos/Wiz/Wiz_idBjx9EkM3_0.svg",
    width: 88,
    height: 40,
  },
  {
    name: "Datadog",
    src: "/images/home/logos/Datadog/Datadog_idgCeU7PkE_0.svg",
    width: 160,
    height: 40,
  },
  {
    name: "CrowdStrike",
    src: "/images/home/logos/CrowdStrike/CrowdStrike_idrqIbgDi9_0.svg",
    width: 180,
    height: 36,
  },
  {
    name: "Palo Alto Networks",
    src: "/images/home/logos/paloalto-networks-vector-logo-seeklogo/paloalto-networks-seeklogo.svg",
    width: 180,
    height: 36,
  },
  {
    name: "Check Point",
    src: "/images/home/logos/Check_Point_Software/Check_Point_Software_idEY0AFs4R_0.svg",
    width: 150,
    height: 40,
  },
  {
    name: "Elastic",
    src: "/images/home/logos/Elastic/Elastic_idfLGwYVvT_0.svg",
    width: 130,
    height: 40,
  },
  {
    name: "Microsoft",
    src: "/images/home/logos/Microsoft-logo_rgb_c-gray.png",
    width: 140,
    height: 36,
  },
  {
    name: "AWS",
    src: "/images/home/logos/icons8-aws-logo-96.png",
    width: 72,
    height: 48,
  },
  {
    name: "Google Cloud",
    src: "/images/home/logos/google_cloud-ar21.svg",
    width: 180,
    height: 40,
  },
  {
    name: "Cisco",
    src: "/images/home/logos/1280px-Cisco_logo_blue_2016.svg.png",
    width: 72,
    height: 40,
  },
  {
    name: "CyberArk",
    src: "/images/home/logos/CyberArk/CyberArk_idjwvacdSL_1.svg",
    width: 130,
    height: 40,
  },
  {
    name: "Okta",
    src: "/images/home/logos/Okta_logo_(2023).svg",
    width: 100,
    height: 40,
  },
  {
    name: "Exabeam",
    src: "/images/home/logos/Exabeam/Exabeam_id5OPoWchn_0.svg",
    width: 140,
    height: 36,
  },
];

function LogoMark({ name, src, width, height }) {
  return (
    <span className="relative inline-flex h-9 shrink-0 items-center sm:h-11 md:h-12">
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className={cn(
          "h-7 w-auto max-h-7 object-contain object-center opacity-95 sm:h-8 sm:max-h-8 md:h-9 md:max-h-9",
          "grayscale brightness-0 invert",
        )}
        aria-hidden
      />
      <span className="sr-only">{name}</span>
    </span>
  );
}

export function OurAlliance() {
  const track = [...allianceLogos, ...allianceLogos];

  return (
    <Section
      as="section"
      size="md"
      className="relative overflow-hidden bg-[#030d1a] text-white"
      aria-labelledby="our-alliances-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[4.5rem] h-[73px] w-[517px] max-w-[90vw] -translate-x-1/2 rounded-full bg-[rgba(0,128,255,0.73)] blur-[100px] md:top-[5.5rem] md:blur-[140px]"
        aria-hidden
      />

      <Container as="div" className="relative z-10 min-w-0">
        <h2
          id="our-alliances-heading"
          className="text-center font-heading text-[clamp(1.5rem,4vw,2rem)] font-bold leading-[1.23] text-white"
        >
          Our Strategic Alliances
        </h2>
      </Container>

      <div
        className="group relative z-10 mt-10 w-full md:mt-14"
        aria-label="Partner logos"
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-16 bg-gradient-to-r from-[#030d1a] to-transparent sm:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-16 bg-gradient-to-l from-[#030d1a] to-transparent sm:w-24"
          aria-hidden
        />

        <div className="min-w-0 overflow-hidden py-2">
          <div className="alliance-marquee-track flex items-center gap-8 px-4 sm:gap-12 sm:px-6 md:gap-16 lg:gap-20 xl:gap-24">
            {track.map((logo, index) => (
              <LogoMark
                key={`${logo.name}-${index}`}
                name={logo.name}
                src={logo.src}
                width={logo.width}
                height={logo.height}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 bg-[linear-gradient(to_top,#030d1a_0%,transparent_100%),repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_48px)] opacity-80"
        aria-hidden
      />
    </Section>
  );
}
