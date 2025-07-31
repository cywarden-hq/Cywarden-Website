"use client";

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const services = [
    "AI Security & Observability",
    "Cloud Security",
    "VAPT & Pen Testing",
    "24*7 SOC Operations",
    "Microsoft Security",
    "GRC Compliance",
    "AI Security & Observability",
    "AI Security & Observability",
    "AI Security & Observability"
  ];

  const companyLinks = [
    "About",
    "Careers",
    "Blog",
    "Podcasts"
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      />
      <footer className="overflow-hidden relative w-full bg-[#132146] h-[672px] max-md:h-auto max-md:min-h-[600px] z-[10]">
        <div className="flex relative justify-between items-start px-20 pt-16 pb-0 z-[2] max-md:flex-col max-md:gap-10 max-md:px-10 max-md:pt-10 max-md:pb-0 max-sm:gap-8 max-sm:px-5 max-sm:pt-8 max-sm:pb-0">
          
          {/* Footer Logo Section */}
          <section className="w-[300px] max-md:w-full max-md:text-center">
            <Image
              src="/cywardenLogoWhite.svg"
              alt="Cywarden Logo"
              width={307}
              height={43}
              className="mb-28 h-[43px] w-[307px] max-md:mb-8 max-sm:h-auto max-sm:w-[250px]"
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
            <p className="mb-8 text-sm font-medium leading-5 text-neutral-400 w-[300px] max-md:mb-5 max-md:w-full max-md:text-center max-sm:text-xs">
              Protecting organizations worldwide with 24×7 monitoring, advanced
              threat detection, and trusted expertise.
            </p>
            
            {/* Social Media Buttons */}
            <nav className="inline-flex gap-2 items-start h-10 w-[184px] max-md:justify-center max-md:w-full">
              <button className="flex justify-center items-center p-2 w-10 h-10 rounded">
                <i className="ti ti-brand-facebook text-2xl text-stone-200" />
              </button>
              <button className="flex justify-center items-center p-2 w-10 h-10 rounded">
                <i className="ti ti-brand-linkedin text-2xl text-stone-200" />
              </button>
              <button className="flex justify-center items-center p-2 w-10 h-10 rounded">
                <i className="ti ti-brand-youtube text-2xl text-stone-200" />
              </button>
              <button className="flex justify-center items-center p-2 w-10 h-10 rounded">
                <i className="ti ti-brand-instagram text-2xl text-stone-200" />
              </button>
            </nav>
          </section>
          
          <div className="flex gap-24 items-start max-md:flex-col max-md:gap-8 max-md:w-full">
            
            {/* Services Section */}
            <nav className="flex flex-col gap-3.5 items-start max-md:text-center">
              <h3 className="mb-2 text-2xl font-medium leading-8 text-slate-50 max-sm:text-lg">
                Services
              </h3>
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm font-medium leading-5 text-neutral-400 max-sm:text-xs hover:text-neutral-300 transition-colors"
                >
                  {service}
                </a>
              ))}
            </nav>
            
            {/* Company Section */}
            <nav className="flex flex-col gap-3.5 items-start max-md:text-center">
              <h3 className="mb-2 text-2xl font-medium leading-8 text-slate-50 max-sm:text-lg">
                Company
              </h3>
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm font-medium leading-5 text-neutral-400 max-sm:text-xs hover:text-neutral-300 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
            
            {/* Contact Section */}
            <section className="flex flex-col gap-3.5 items-start max-md:text-center">
              <h3 className="mb-2 text-2xl font-medium leading-8 text-slate-50 max-sm:text-lg">
                Contact Us
              </h3>

              <address className="mb-3 text-sm leading-5 text-stone-300 max-sm:text-xs not-italic">
                Cywarden Inc.
                <br />
                11501 Dublin Blvd Suite 200b, Dublin, CA 94568, United States
              </address>

              <div className="flex flex-col gap-2.5 mb-10">
                <a
                  href="tel:+19254140853"
                  className="text-sm font-medium leading-5 text-stone-200 max-sm:text-xs hover:text-stone-100 transition-colors"
                >
                  +1 925 414 0853
                </a>
                <a
                  href="mailto:care@cywarden.com"
                  className="text-sm font-medium leading-5 text-stone-100 max-sm:text-xs hover:text-white transition-colors"
                >
                  care@cywarden.com
                </a>
              </div>

              <address className="mb-3 text-sm leading-5 text-stone-300 max-sm:text-xs not-italic">
                Cywarden Global Services Pvt. Ltd.
                <br />
                Ground Floor, GR Tower, Industrial Area, Sector 75, Mohali,
                Punjab 140308, India
              </address>

              <div className="flex flex-col gap-2.5 mb-10">
                <a
                  href="tel:+918558885265"
                  className="text-sm font-medium leading-5 text-stone-200 max-sm:text-xs hover:text-stone-100 transition-colors"
                >
                  +91 85588 85265
                </a>
                <a
                  href="mailto:info@cywarden.com"
                  className="text-sm font-medium leading-5 text-stone-100 max-sm:text-xs hover:text-white transition-colors"
                >
                  info@cywarden.com
                </a>
              </div>
            </section>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="absolute bottom-0 left-0 w-full z-[2]">
          <div>
            <svg
              width="1258"
              height="2"
              viewBox="0 0 1258 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[91px] top-[588px] w-[1258px] h-[2px]"
              style={{ stroke: '#F5FEFF', strokeWidth: '1px' }}
            >
              <path d="M0 1H1258" stroke="#F5FEFF" />
            </svg>
          </div>
          <p className="absolute h-6 text-base font-medium leading-6 text-center left-[568px] text-white text-opacity-70 top-[606px] w-[289px] max-md:bottom-5 max-md:top-auto max-md:left-2/4 max-md:text-center max-md:-translate-x-2/4 max-sm:left-5 max-sm:text-sm max-sm:w-[calc(100%_-_40px)]">
            @copyright 2025. All Rights Reserved
          </p>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 pointer-events-none size-full z-[1]">
          <div className="absolute left-2 font-extrabold bg-clip-text h-[281px] opacity-[0.11] text-[210px] top-[488px] tracking-[23.1px] w-full text-transparent bg-gradient-to-r from-white to-gray-300">
            CYWARDEN
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 