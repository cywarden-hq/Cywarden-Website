import * as React from "react";

// StatCard Component (merged from StatCard.tsx)
interface StatCardProps {
  iconSrc: string;
  iconAlt: string;
  number: string;
  title: string;
  subtitle?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  iconSrc,
  iconAlt,
  number,
  title,
  subtitle
}) => {
  return (
    <article className="flex relative flex-col items-center w-full max-md:min-w-[250px] max-md:w-[45%] max-sm:w-full max-sm:max-w-[300px]">
      <img
        src={iconSrc}
        alt={iconAlt}
        className="shrink-0 mb-2.5 w-16 h-[54px] max-sm:w-12 max-sm:h-10"
      />
      <div className="flex flex-col gap-1.5 justify-center items-center w-full">
        <div className="flex justify-center items-start">
          <div className="text-3xl font-bold leading-[65px] text-slate-950 max-sm:text-3xl max-sm:leading-[50px]">
            {number}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[238px] max-sm:w-full">
          <p className="text-lg font-bold leading-6 text-center text-slate-950 max-sm:text-base max-sm:leading-6">
            {title}
          </p>
          {subtitle && (
            <p className="text-lg font-bold leading-6 text-center text-slate-950 max-sm:text-base max-sm:leading-6">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

// Main OurROI Component (merged from RoiSection.tsx)
export default function OurRoi() {
  return (
    <>
      <section className="flex flex-col gap-16 items-center justify-center p-20 w-full max-w-full max-md:gap-12 max-md:px-16 max-md:pt-10 max-md:pb-20 max-sm:gap-10 max-sm:px-5 max-sm:pt-8 max-sm:pb-16">
        <header className="flex flex-row gap-5 tracking-tighter text-center max-md:text-5xl max-sm:text-4xl max-sm:tracking-tighter">
          <span className="font-medium text-[64px]">Our</span>
          <span className="font-extrabold text-[64px] text-orange-500">ROI</span>
        </header>
        <div className="flex mt-[10px] gap-20 items-start w-full max-md:flex-wrap max-md:gap-20 max-md:justify-center max-sm:flex-col max-sm:gap-8 max-sm:items-center">
          <StatCard
            iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/7128e77780584ea46b3aece80fc551e937619b58?width=128"
            iconAlt="Years of experience icon"
            number="25 years"
            title="of pioneering digital growth"
          />
          <StatCard
            iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/8ec364ecda1d36195c1fa7752578db76c9d4ecf4?width=114"
            iconAlt="Satisfied clients icon"
            number="2,000+"
            title="Satisfied Clients Across"
            subtitle="Industries"
          />
          <StatCard
            iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/881504e07f88830d6e14d91f23a66cf8342d8c42?width=116"
            iconAlt="Countries reached icon"
            number="21"
            title="Countries Where Our"
            subtitle="Solutions Impact Lives"
          />
          <StatCard
            iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/515f98e89629dbb975142b6511b66a7cdea1f0b7?width=116"
            iconAlt="Continents reached icon"
            number="4"
            title="Continents Reached with Our"
            subtitle="Digital Innovations"
          />
        </div>
      </section>
    </>
  );
}