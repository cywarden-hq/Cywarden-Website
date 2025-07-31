"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme switcher functionality
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="bg-white dark:bg-[#132146] shadow-[0_4px_0_rgba(228,244,253,0.40)] w-full relative">
      <div className="flex justify-between items-center px-10 py-5 lg:px-[101px] lg:py-[20px]">
        {/* Logo */}
        <div className="flex items-center h-[41px] py-1">
          <Image 
            src="/cywardenLogoBlack.svg" 
            alt="Cywarden Logo" 
            width={240}
            height={34}
            className="w-60 h-[34px] aspect-[120/17] dark:hidden"
            priority
          />
          <Image 
            src="/cywardenLogoWhite.svg" 
            alt="Cywarden Logo" 
            width={240}
            height={34}
            className="w-60 h-[34px] aspect-[120/17] hidden dark:block"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center h-[60px] gap-4">
          <div className="flex items-center h-[60px] px-[34px] py-[15px] rounded-lg">
            <div className="flex items-center gap-8">
              <Link 
                href="/about" 
                className="text-[#262626] dark:text-stone-200 font-inter text-xl font-normal leading-[150%] cursor-pointer hover:opacity-80 transition-opacity"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-[#262626] dark:text-stone-200 font-inter text-xl font-normal leading-[150%] cursor-pointer hover:opacity-80 transition-opacity"
              >
                Services
              </Link>
              <Link 
                href="/partner" 
                className="text-[#262626] dark:text-stone-200 font-inter text-xl font-normal leading-[150%] cursor-pointer hover:opacity-80 transition-opacity"
              >
                Partner
              </Link>
              <Link 
                href="/resources" 
                className="text-[#262626] dark:text-stone-200 font-inter text-xl font-normal leading-[150%] cursor-pointer hover:opacity-80 transition-opacity"
              >
                Resources
              </Link>
              <Link 
                href="/ai-solutions" 
                className="text-[#262626] dark:text-stone-200 font-inter text-xl font-normal leading-[150%] cursor-pointer hover:opacity-80 transition-opacity"
              >
                AI Solutions
              </Link>
            </div>
          </div>
          
          {/* Theme Toggle Slider */}
          <div className="flex-shrink-0">
            <div className="relative">
              <button 
                onClick={toggleTheme}
                className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle theme"
              >
                {/* Slider Handle */}
                <div className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 translate-x-1 dark:translate-x-8">
                  {/* Sun Icon */}
                  <svg 
                    className="absolute inset-0 m-auto w-3 h-3 text-yellow-500 transition-opacity opacity-100 dark:opacity-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  
                  {/* Moon Icon */}
                  <svg 
                    className="absolute inset-0 m-auto w-3 h-3 text-blue-400 transition-opacity opacity-0 dark:opacity-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-2xl text-[#262626] dark:text-stone-200 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="ti ti-menu-2"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#132146] border-t border-gray-200 dark:border-gray-700 px-10 py-6">
          <div className="flex flex-col gap-6">
            <Link 
              href="/about" 
              className="text-[#262626] dark:text-stone-200 font-inter text-xl font-normal leading-[150%] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="text-[#262626] dark:text-stone-200 font-inter text-xl font-normal leading-[150%] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/partner" 
              className="text-[#262626] dark:text-stone-200 font-inter text-xl font-normal leading-[150%] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner
            </Link>
            <Link 
              href="/resources" 
              className="text-[#262626] dark:text-stone-200 font-inter text-xl font-normal leading-[150%] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/ai-solutions" 
              className="text-[#262626] dark:text-stone-200 font-inter text-xl font-normal leading-[150%] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Solutions
            </Link>
            
            {/* Mobile Theme Toggle Slider */}
            <div className="flex justify-center">
              <div className="relative">
                <button 
                  onClick={toggleTheme}
                  className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Toggle theme"
                >
                  {/* Slider Handle */}
                  <div className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 translate-x-1 dark:translate-x-8">
                    {/* Sun Icon */}
                    <svg 
                      className="absolute inset-0 m-auto w-3 h-3 text-yellow-500 transition-opacity opacity-100 dark:opacity-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    
                    {/* Moon Icon */}
                    <svg 
                      className="absolute inset-0 m-auto w-3 h-3 text-blue-400 transition-opacity opacity-0 dark:opacity-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;