export default function Banner() {
  return (
    <nav className="w-full bg-[#3E5FBC] px-6 py-1.5 lg:px-[90px] lg:py-1.5">
      <div className="flex items-center justify-between w-full h-9">
        {/* Left side - Security solutions text */}
        <div className="flex-1 max-w-[681px]">
          <p className="text-white font-inter text-base sm:text-lg lg:text-xl font-medium leading-[150%] truncate">
            Our security solutions scale seamlessly across cloud and hybrid setups
          </p>
        </div>

        {/* Right side - Navigation buttons */}
        <div className="hidden md:flex items-center gap-3 ml-4">
          <button className="flex items-center justify-center px-6 py-3.5 rounded-lg text-[#F5FEFF] font-inter text-base font-bold leading-[150%] hover:bg-white/10 transition-colors">
            What's New
          </button>
          
          <button className="flex items-center justify-center px-6 py-3.5 rounded-lg text-[#F5FEFF] font-inter text-base font-bold leading-[150%] hover:bg-white/10 transition-colors">
            Contact Us
          </button>
          
          <button className="flex items-center justify-center px-2 py-1 rounded-lg border border-white bg-white/20 shadow-[0_4px_4px_rgba(92,139,170,0.2)] text-[#F5FEFF] font-inter text-base font-bold leading-[150%] hover:bg-white/30 transition-colors">
            Under Attack?
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
