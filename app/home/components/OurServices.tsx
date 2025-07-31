"use client";
import React from 'react';

// ServiceCard Component
interface ServiceCardProps {
  title: string;
  description: string;
  iconUrl: string;
  buttonStyle?: 'button';
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconUrl,
  buttonStyle = 'button',
  className = ""
}) => {
  return (
    <article className={`flex flex-col items-center pt-9 pr-2 pb-12 pl-6 rounded-3xl shadow-2xl bg-blue-100/30 max-md:p-6 max-md:w-full max-md:h-auto max-sm:p-5 ${className}`}>
      <div className="flex flex-col gap-9 items-start w-full max-md:gap-5 max-md:w-full max-md:h-auto max-sm:gap-4">
        <div className="flex relative justify-end items-center py-0 pr-0 pl-2 h-[45px]">
          <img
            src={iconUrl}
            alt=""
            className="h-[45px] w-[38px]"
          />
        </div>

        <h2 className="text-2xl font-bold leading-7 text-blue-950 max-sm:text-xl">
          {title}
        </h2>

        <div className="flex flex-col gap-6 items-start self-stretch max-md:w-full">
          <p className="text-base leading-4 text-black max-sm:text-sm">
            {description}
          </p>
        </div>

        {buttonStyle === 'button' ? (
          <button className="flex justify-center items-center pt-0.5 pr-4 pb-0 pl-4 rounded-lg border border-sky-500 border-solid shadow-sm cursor-pointer hover:bg-sky-50 transition-colors">
            <span className="text-base leading-6 text-center text-slate-950">
              Learn More
            </span>
          </button>
        ) : (
          <div className="flex gap-3.5 justify-center items-center">
            <a href="#" className="text-sm tracking-wide text-amber-600 underline cursor-pointer hover:text-amber-700 transition-colors">
              Learn More
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

// Main OurServices Component
const OurServices: React.FC = () => {
  const serviceData = {
    title: "SecOps-as-a-Service",
    description: "24/7 monitoring, threat detection, and incident response to safeguard your business. Our team acts as an extension of yours, leveraging advanced tools to ensure operational efficiency and resilience",
    iconUrl: "https://api.builder.io/api/v1/image/assets/TEMP/58bd87e091d6a30664c019088f179b37ac70232d?width=76"
  };

  return (
    <section className="overflow-hidden relative w-full min-h-[1733px] max-md:px-5 max-md:py-10 max-md:min-h-[auto] max-sm:px-4 max-sm:py-5">
      {/* Background Image */}
      <div
        className="absolute z-0 bg-center bg-no-repeat bg-cover h-[1077px] left-[133px] top-[350px] w-[1175px] max-md:relative max-md:top-0 max-md:left-0 max-md:mx-0 max-md:my-5 max-md:w-full max-md:h-[400px]"
        style={{
          backgroundImage: `url('/ourServicesBackground.svg')`
        }}
      />

      {/* Section Title */}
      <div className="absolute top-20 left-2/4 -translate-x-2/4 h-[77px] w-[391px] z-[2] max-md:relative max-md:top-0 max-md:left-0 max-md:mb-10 max-md:w-full">
        <h1 className={`flex flex-row gap-3 text-6xl tracking-tighter max-md:text-5xl max-md:text-center max-sm:text-4xl`}>
          <div className="text-black">Our</div>
          <div className="font-bold text-orange-500">Services</div>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="absolute h-[1314px] left-1/2 -translate-x-1/2 top-[240px] w-[1200px] z-[1] max-md:grid max-md:relative max-md:top-0 max-md:left-0 max-md:gap-5 max-md:w-full max-md:h-auto max-md:grid-cols-[repeat(2,1fr)] max-sm:gap-4 max-sm:grid-cols-[1fr]">

        {/* First Row - 3 cards with equal spacing */}
        <ServiceCard
          {...serviceData}
          className="absolute top-0 left-0 h-[416px] w-[380px] pt-10 pr-2 pb-24 pl-9 hover:ring-2 hover:ring-blue-200 hover:backdrop-blur-xs max-md:relative max-md:top-auto max-md:left-auto"
        />

        <ServiceCard
          {...serviceData}
          className="absolute top-0 left-[410px] h-[416px] w-[380px] pt-9 pr-16 pb-20 pl-6 hover:ring-2 hover:ring-blue-200 hover:backdrop-blur-xs max-md:relative max-md:top-auto max-md:left-auto"
        />

        <ServiceCard
          {...serviceData}
          className="absolute top-0 left-[820px] h-[416px] w-[380px] pt-9 pr-2.5 pb-12 pl-6 hover:ring-2 hover:ring-blue-200 hover:backdrop-blur-xs max-md:relative max-md:top-auto max-md:left-auto"
        />

        {/* Second Row - 2 cards covering full width */}
        <ServiceCard
          {...serviceData}
          className="absolute left-0 top-[450px] h-[416px] w-[590px] pt-10 pr-72 pb-24 pl-9 hover:ring-2 hover:ring-blue-200 hover:backdrop-blur-xs max-md:relative max-md:top-auto max-md:left-auto"
        />

        <ServiceCard
          {...serviceData}
          className="absolute left-[610px] top-[450px] h-[416px] w-[590px] pt-10 pr-2 pb-24 pl-9 hover:ring-2 hover:ring-blue-200 hover:backdrop-blur-xs max-md:relative max-md:top-auto max-md:left-auto"
        />

        {/* Third Row - 4 cards with equal spacing */}
        <ServiceCard
          {...serviceData}
          className="absolute left-0 top-[890px] h-[424px] w-[285px] pt-9 pr-2.5 pb-12 pl-6 hover:ring-2 hover:ring-blue-200 hover:backdrop-blur-xs max-md:relative max-md:top-auto max-md:left-auto"
        />

        <ServiceCard
          {...serviceData}
          className="absolute left-[305px] top-[890px] h-[424px] w-[285px] pt-9 pr-2.5 pb-12 pl-6 hover:ring-2 hover:ring-blue-200 hover:backdrop-blur-xs max-md:relative max-md:top-auto max-md:left-auto"
        />

        <ServiceCard
          {...serviceData}
          className="absolute left-[610px] top-[890px] h-[424px] w-[285px] pt-9 pr-2.5 pb-12 pl-6 hover:ring-2 hover:ring-blue-200 hover:backdrop-blur-xs max-md:relative max-md:top-auto max-md:left-auto"
        />

        <ServiceCard
          {...serviceData}
          className="absolute left-[915px] top-[890px] h-[424px] w-[285px] pt-9 pr-2.5 pb-12 pl-6 hover:ring-2 hover:ring-blue-200 hover:backdrop-blur-xs max-md:relative max-md:top-auto max-md:left-auto"
        />
      </div>
    </section>
  );
};

export default OurServices;
