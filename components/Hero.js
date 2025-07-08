import React from 'react';
import Image from 'next/image';

export default function Hero() {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      className="
        relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        min-h-[85vh] flex flex-col justify-end
        bg-main-pink overflow-hidden rounded-b-3xl p-4 sm:p-6 md:p-10 z-1
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center w-full h-full z-0">
        <div className="hidden md:block relative w-4/5 flex items-center justify-center -mt-[150px]">
          <Image
            src="/hero.png"
            alt="Reef Health Benefits affordable small business health insurance hero image"
            className="w-full h-full object-cover object-center rounded-b-3xl"
            width={800}
            height={600}
            priority
          />
        </div>

        <div className="block md:hidden relative w-[100vw] flex items-center justify-center -mt-[30vh]">
          <Image
            src="/hero.png"
            alt="Reef Health Benefits affordable small business health insurance hero image"
            className="w-full h-full  object-center rounded-b-3xl"
            width={400}
            height={300}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full mt-[80px] sm:mt-[100px] md:mt-[120px]">

        {/* Main Text */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col items-start mb-0 lg:mb-0 text-center lg:text-left w-full lg:w-auto ">
            <span className="bg-white/10 border border-white/20 text-white px-3 sm:px-4 py-1 rounded-full mb-4 text-xs sm:text-sm mx-auto lg:mx-0"><i className="bi bi-people-fill"></i> Trusted by 100,000+ members</span>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight mb-2">
              We fixed health insurance.<br className="hidden sm:block" />You&apos;re welcome.
            </h1>
          </div>
          <div className="flex flex-col items-center lg:items-end mt-6 lg:mt-10 w-full lg:w-auto">
            <p className="text-white text-sm sm:text-base mb-4 lg:mb-2 text-center lg:text-right max-w-md">
              Affordable small business health insurance, built to be clear, flexible, and cost-effective. $0 deductibles. One easy platform.
            </p>
            <button 
              onClick={scrollToPricing}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-[#e03a6a] rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              Get Started
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 