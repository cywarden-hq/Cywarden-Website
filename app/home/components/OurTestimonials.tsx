import * as React from "react";

// FeatureCard Component (merged from FeatureCard.tsx)
interface FeatureCardProps {
  icon: string;
  title: string;
  description: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = "" }) => {
  return (
    <article className={`flex flex-col items-start px-5 py-5 bg-white rounded-3xl shadow-[0px_4px_16px_rgba(7,28,53,0.11)] ${className}`}>
      <img
        src={icon}
        alt=""
        className="object-contain aspect-[0.98] w-[60px]"
      />
      <h3 className="mt-5 text-base font-bold text-zinc-800">
        {title}
      </h3>
      <p className="self-stretch mt-3.5 text-sm leading-5 text-stone-500">
        {description}
      </p>
    </article>
  );
};

// Main OurTestimonials Component (merged from TestimonialsSection.tsx)
const features = [
  {
    icon: "https://api.builder.io/api/v1/image/assets/9de1037908bf4a2c99095ce346491382/abbeaa50a21c8b2c7c5bc9b9e1025294d64a48bc?placeholderIfAbsent=true",
    title: "Cost & Utilization Reporting",
    description: "Track and report modifications in cost and\nresource utilization in real-time, providing\nclear visibility and control over your\nfinancial and operational metrics"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/9de1037908bf4a2c99095ce346491382/5c40b88d65269d24c2ef045c15ea8a382b301408?placeholderIfAbsent=true",
    title: "Data-Driven Recommendations",
    description: "Receive actionable recommendations\nbased on comprehensive data analysis of\nyour AWS environment, optimizing\nresource allocation and cost efficiency"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/9de1037908bf4a2c99095ce346491382/e9665170b34de0f4c87687ece2361c5eef278d32?placeholderIfAbsent=true",
    title: "Service Investigation",
    description: "Gain deep insights into your services with\nadvanced investigation tools that analyze"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/9de1037908bf4a2c99095ce346491382/0098a7fcc8b09985846b0a2f77e1fb1afedfbf23?placeholderIfAbsent=true",
    title: "Data Quality Management",
    description: "Enhance data accuracy with robust\nquality checks, ensuring reliable and\nactionable insights",
    className: "py-5 pr-12 pl-5 max-md:pr-5"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/9de1037908bf4a2c99095ce346491382/a0362383e4cc916bab53b0c6a3670649d1955c41?placeholderIfAbsent=true",
    title: "Budgeting and Forecasting",
    description: "Dynamic budgeting adjusts to cloud\nchanges, while predictive analytics costs\nfrom historical data.",
    className: "py-6"
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/9de1037908bf4a2c99095ce346491382/4929d4fbe708ff8333e58cf6a6c40bf72fc0a874?placeholderIfAbsent=true",
    title: "Auto Remediation",
    description: "Quickly resolve issues with automatic\nremediation of assets, minimizing\ndowntime & maintaining optimal\nperformance with minimal intervention."
  },
  {
    icon: "https://api.builder.io/api/v1/image/assets/9de1037908bf4a2c99095ce346491382/2222126cb6666442d995c5f7237e5f8938b9fd44?placeholderIfAbsent=true",
    title: "Auto Tagging",
    description: "Effortlessly categorize assets with\nautomated tagging, ensuring consistent &\naccurate resource management without\nmanual input"
  }
];

export const OurTestimonials: React.FC = () => {
  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className="flex overflow-hidden flex-col items-center px-20 max-md:px-5">
      <div className="flex z-10 flex-col -mt-3 max-w-full w-[952px]">
        <header className="self-center ml-4 text-6xl font-extrabold tracking-tighter text-black max-md:max-w-full max-md:text-4xl">
          <span style={{ fontWeight: 500, color: 'rgba(44,44,44,1)' }}>Our</span>{" "}
          <span style={{ color: 'rgba(255,119,0,1)' }}>Testimonials</span>
        </header>

        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {/* First Column */}
            <div className="w-[33%] max-md:ml-0 max-md:w-full">
              <div className="max-md:mt-7">
                <FeatureCard
                  icon={features[0].icon}
                  title={features[0].title}
                  description={formatDescription(features[0].description)}
                />
                <div className="mt-5">
                  <FeatureCard
                    icon={features[1].icon}
                    title={features[1].title}
                    description={formatDescription(features[1].description)}
                    className="mt-4"
                  />
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="max-md:mt-7">
                <FeatureCard
                  icon={features[2].icon}
                  title={features[2].title}
                  description={formatDescription(features[2].description)}
                />
                <div className="mt-5">
                  <article className="flex flex-col items-start py-5 pr-12 pl-5 bg-white rounded-3xl shadow-[0px_4px_16px_rgba(7,28,53,0.11)] max-md:pr-5">
                    <img
                      src={features[3].icon}
                      alt=""
                      className="object-contain aspect-[0.98] w-[60px]"
                    />
                    <h3 className="mt-5 text-base font-bold text-zinc-800">
                      {features[3].title}
                    </h3>
                    <p className="mt-3.5 text-sm leading-5 text-stone-500">
                      {formatDescription(features[3].description)}
                    </p>
                  </article>
                </div>
                <div className="mt-5">
                  <article className="flex flex-col items-start px-5 py-6 bg-white rounded-3xl shadow-[0px_4px_16px_rgba(7,28,53,0.11)]">
                    <img
                      src={features[4].icon}
                      alt=""
                      className="object-contain aspect-square w-[60px]"
                    />
                    <h3 className="mt-5 text-base font-bold text-zinc-800">
                      {features[4].title}
                    </h3>
                    <p className="self-stretch mt-3.5 text-sm leading-5 text-stone-500">
                      {formatDescription(features[4].description)}
                    </p>
                  </article>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="grow mt-60 max-md:mt-10">
                <FeatureCard
                  icon={features[5].icon}
                  title={features[5].title}
                  description={formatDescription(features[5].description)}
                  className="mt-5"
                />
                <div className="mt-5">
                  <FeatureCard
                    icon={features[6].icon}
                    title={features[6].title}
                    description={formatDescription(features[6].description)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTestimonials; 