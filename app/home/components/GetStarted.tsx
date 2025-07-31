import * as React from "react";

export const GetStarted: React.FC = () => {
  return (
    <section className="relative flex overflow-hidden flex-col items-center justify-center mt-20 pb-20">
      {/* Background Decorative Images */}
      <img
        src="/getStarted/dots-top-left.svg"
        alt="Decorative element"
        className="absolute top-0 left-0 object-contain h-[96px] w-[398px]"
      />
      
      <img
        src="/getStarted/dots-bottom-right.svg"
        alt="Decorative element"
        className="absolute bottom-0 right-0 object-contain h-[96px] w-[398px]"
      />

      <img
        src="/getStarted/vector.svg"
        alt="Decorative element"
        className="absolute bottom-0 left-0 top-[5em] object-contain h-[40em] z-[9999] pointer-events-none"
      />

      {/* Main Content - All Text in Single Centered Column */}
      <div className="flex flex-col items-center justify-center mt-18 pb-18 gap-8 max-w-4xl mx-auto px-8 z-10">
        {/* Heading */}
        <h1 className="tracking-tighter text-center max-md:text-4xl">
          <span className="text-black font-semibold text-[48px]">How Do </span>
          <span className="text-[#FF7700] font-bold text-[48px]">I get Started?</span>
        </h1>

        {/* Description Text */}
        <p className="text-xl leading-7 text-center text-neutral-700 max-w-3xl">
          Is your cloud environment secure? Request a 1-Week Cloud Security
          Assessment to analyze your current security posture across
          architecture, network, identity, data, and tools.
        </p>

        {/* Contact Button */}
        <button className="px-9 py-3 rounded-lg bg-gray-200 hover:ring-2 hover:ring-blue-400 text-2xl font-medium text-slate-950 transition-all duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default GetStarted; 