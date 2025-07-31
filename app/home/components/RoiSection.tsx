import * as React from "react";
import { StatCard } from "./StatCard";

export default function ROISection() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
      <section className="box-border flex flex-col gap-16 items-center pt-7 pr-52 pb-28 pl-52 mx-auto my-0 w-full border border-solid border-zinc-700 border-opacity-60 max-w-[1441px] max-md:gap-12 max-md:px-16 max-md:pt-10 max-md:pb-20 max-sm:gap-10 max-sm:px-5 max-sm:pt-8 max-sm:pb-16">
        <header className="text-6xl tracking-tighter text-center text-zinc-800 max-md:text-5xl max-sm:text-4xl max-sm:tracking-tighter">
          Our
          <h1 className="font-bold text-orange-500">ROI</h1>
        </header>
        <div className="flex gap-5 items-start w-full max-w-[1030px] max-md:flex-wrap max-md:gap-10 max-md:justify-center max-sm:flex-col max-sm:gap-8 max-sm:items-center">
          <StatCard
            iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/7128e77780584ea46b3aece80fc551e937619b58?width=128"
            iconAlt="Years of experience icon"
            number="25years"
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
