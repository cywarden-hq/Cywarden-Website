import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const leadersEyebrow = "What leaders are saying";

const leadersHeading = "Trusted by Security Leaders Across Industries";

const leadersSubtext =
  "Executive voices from organizations that have worked with Cywarden to transform their security operations.";

const leaderTestimonials = [
  {
    quote:
      "We brought Cywarden in to close a SOC 2 gap that was blocking a major enterprise deal. They did not just get us certified — they rebuilt how we think about compliance. Evidence collection that used to take weeks now runs automatically. Our sales cycle shortened by a full quarter.",
    role: "VP of Engineering",
    company: "Series C SaaS Company — Healthcare Vertical",
  },
  {
    quote:
      "Before Cywarden, our board received a quarterly security report that nobody fully understood. Now we have real-time risk visibility, clear metrics, and a governance framework that lets me answer the hard questions with confidence. They changed how the business sees security.",
    role: "CISO",
    company: "Global Financial Services Firm — 4,000+ Employees",
  },
  {
    quote:
      "We evaluated three managed security providers. Cywarden was the only one that started with our business risks instead of their product catalog. Their team embedded with ours, understood our multi-cloud complexity, and delivered measurable improvements within 90 days.",
    role: "CIO",
    company: "Enterprise Manufacturing — US and APAC Operations",
  },
];

const sectionBg = {
  backgroundImage: "url('/images/home/leaders-testimonial-bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const cardBg = {
  backgroundImage: "url('/images/home/leaders-testimonial-card-bg.png')",
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export function LeadersTestimonials() {
  return (
    <Section
      as="section"
      size="lg"
      className="relative overflow-hidden bg-black text-white"
      aria-labelledby="leaders-testimonials-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={sectionBg}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-[1] h-[320px] w-[min(100%,800px)] -translate-x-1/2 rounded-full bg-[#0080FF] opacity-[0.12] blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-0 z-[1] h-[280px] w-[480px] rounded-full bg-[#0066FF] opacity-[0.1] blur-[100px]"
        aria-hidden
      />

      <Container as="div" className="relative z-10 min-w-0">
        <header className="mx-auto max-w-full text-center sm:max-w-[920px]">
          <p className="section-label">{leadersEyebrow}</p>
          <h2
            id="leaders-testimonials-heading"
            className="mt-3 text-balance font-heading text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[clamp(1.875rem,2.4vw,2.5rem)] xl:text-[40px]"
          >
            {leadersHeading}
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-[720px] text-white/75 sm:mt-6">
            {leadersSubtext}
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:gap-7 lg:mt-16 lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {leaderTestimonials.map((item) => (
            <article
              key={item.role + item.company}
              className="flex h-full min-h-0 flex-col rounded-[20px] border border-white/10 px-5 py-7 text-center shadow-[0_0_40px_-12px_rgba(0,195,255,0.35)] sm:px-7 sm:py-9 md:px-8 md:py-10"
              style={cardBg}
            >
              <p
                className="font-heading text-4xl leading-none text-white/90 sm:text-5xl"
                aria-hidden
              >
                “
              </p>
              <p className="mt-5 flex-1 text-pretty font-sans text-sm leading-[1.55] text-white sm:text-[15px] md:text-base">
                {item.quote}
              </p>
              <p className="mt-8 font-heading text-base font-bold text-white sm:text-lg">
                {item.role}
              </p>
              <p className="mt-2 font-sans text-sm leading-snug text-white/65 sm:text-[15px]">
                {item.company}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
