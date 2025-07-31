"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const handleContactClick = () => {
    // Handle contact button click
    console.log("Contact button clicked");
  };

  return (
    <section className="overflow-hidden relative w-full bg-[#132146] h-[580px] max-md:h-[500px] max-sm:h-[400px]">
      <Image
        src="/heroBackgroundDesign.svg"
        alt="Cybersecurity background"
        fill
        className="object-cover z-1"
        priority
      />
      
      {/* Hero Content */}
      <main className="flex absolute z-2 top-2/4 left-2/4 flex-col gap-[20px] justify-center items-center -translate-x-2/4 -translate-y-2/4 h-[301px] w-[1094px] max-md:gap-4 max-md:max-w-[800px] max-md:w-[90%] max-sm:gap-3 max-sm:px-5 max-sm:py-0 max-sm:w-[95%]">
        
        {/* Hero Heading */}
        <header className="flex flex-col md:gap-[20px] gap-[80px] justify-center items-center w-[592px] max-md:w-full max-md:max-w-[500px]">
          <div className="w-[1089px] h-[55px] max-md:w-full">
            <h1 className="font-semibold text-[56px] leading-[55px] tracking-[-0.02em] text-white text-center mx-auto max-md:text-5xl max-sm:text-3xl">
              Smarter Cybersecurity services for the
            </h1>
          </div>
          <div className="w-[592px] h-[72px]">
            <h2 className="text-6xl font-bold tracking-tighter text-center text-orange-500 h-[72px] w-full max-md:text-5xl max-md:tracking-tighter max-sm:text-3xl max-sm:tracking-tighter">
              Cloud First Era
            </h2>
          </div>
        </header>
        
        {/* Hero Description */}
        <p className="text-2xl leading-9 text-center text-zinc-300 text-opacity-80 w-[1089px] max-md:w-full max-md:text-xl max-sm:text-base max-sm:leading-6">
          In today's evolving threat landscape, securing cloud environments is
          a continuous, multi-faceted journey—but you don't have to navigate
          it alone.
        </p>
        
        {/* Contact Button */}
        <button
          className="flex gap-2 justify-center items-center px-6 py-3.5 bg-indigo-700 rounded-lg cursor-pointer h-[42px] w-[147px] max-sm:px-5 max-sm:py-2.5 max-sm:h-[38px] max-sm:w-[120px] hover:bg-indigo-800 transition-colors"
          onClick={handleContactClick}
          type="button"
        >
          <span className="shrink-0 w-24 text-base leading-6 font-bold text-slate-50 max-sm:w-20 max-sm:text-sm">
            Contact US
          </span>
        </button>
      </main>
    </section>
  );
};

export default Hero; 