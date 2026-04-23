import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const eyebrow = "Why Cywarden";

const heading = "A Different Kind of Security Partner";

const subtext =
  "We do not sell products. We build security programs that work — programs that are governed, measured, and evolved alongside your business.";

const pillars = [
  {
    title: "Global Delivery, Local Context",
    body:
      "Operations across the US, Europe, and APAC with regional expertise in regulatory requirements, data residency, and cultural expectations. We scale with you, wherever you operate.",
  },
  {
    title: "Human Expertise, AI-Amplified",
    body:
      "Our SOC analysts and GRC consultants are supported by machine learning models that accelerate detection, reduce noise, and automate low-value tasks. The result: faster decisions, not slower ones.",
  },
  {
    title: "Governance-First Mindset",
    body:
      "Every control we implement maps to a risk. Every process aligns with recognized frameworks. We build security programs that survive leadership changes, audits, and board scrutiny.",
  },
  {
    title: "Certified Practitioners, Not Generalists",
    body:
      "CISA, CISM, ISO Lead Auditor, and cloud-native security certifications across our team. We embed senior practitioners with your organization — not junior analysts behind a dashboard.",
  },
  {
    title: "Tool-Agnostic, Outcome-Focused",
    body:
      "We deploy the platforms that fit your scale and maturity — not the vendor that pays us the highest margin. Your stack should serve your security goals, not the other way around.",
  },
  {
    title: "Partnership, Not Projects",
    body:
      "Our engagements do not end at delivery. We operate as a continuous extension of your team — adapting to new threats, evolving compliance requirements, and shifting business priorities.",
  },
];

const eyebrowStyle = {
  backgroundImage:
    "linear-gradient(90deg, rgb(255, 60, 0) 0%, rgb(254, 119, 2) 100%)",
};

/** Figma: 0% #004CFF → 100% #00AEFF */
const evenCardBorderGradient = {
  backgroundImage: "linear-gradient(90deg, #00AEFF 0%, #004CFF 100%)",
};

const oddCardBorderGradient = {
  backgroundImage: "linear-gradient(90deg, #004CFF 0%, #00AEFF 100%)",
};

export function WhyCywarden() {
  return (
    <Section
      as="section"
      size="lg"
      className="relative overflow-hidden bg-black text-white"
      aria-labelledby="why-cywarden-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[min(100%,880px)] -translate-x-1/2 rounded-full bg-[#0080FF] opacity-[0.14] blur-[110px]"
        aria-hidden
      />

      <Container as="div" className="relative z-10 min-w-0">
        <header className="mx-auto max-w-full text-center sm:max-w-[880px]">
          <p
            className="bg-clip-text font-heading text-xs font-bold tracking-wide text-transparent sm:text-[13px]"
            style={eyebrowStyle}
          >
            {eyebrow}
          </p>
          <h2
            id="why-cywarden-heading"
            className="mt-3 text-balance font-heading text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[clamp(1.875rem,2.4vw,2.5rem)] xl:text-[40px]"
          >
            {heading}
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-[760px] text-white/75 sm:mt-6">
            {subtext}
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 md:gap-6 lg:mt-16 lg:gap-6 xl:gap-8">
          {pillars.map((item, index) => (
            <div
              key={item.title}
              className="h-full min-h-0 rounded-3xl p-px"
              style={index % 2 === 0 ? evenCardBorderGradient : oddCardBorderGradient}
            >
              <article className="flex h-full min-h-0 flex-col rounded-[calc(1.5rem-1px)] bg-black px-6 py-7 text-left sm:px-8 sm:py-8 md:px-10 md:py-10">
                <h3 className="text-balance font-heading text-xl font-bold leading-snug text-white sm:text-2xl md:text-[28px] md:leading-tight">
                  {item.title}
                </h3>
                <p className="mt-5 font-sans text-[15px] font-normal leading-relaxed text-white sm:text-base">
                  {item.body}
                </p>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
