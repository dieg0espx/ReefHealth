import React from 'react';
import Image from 'next/image';

export default function Hero2() {
  return (
    <section
      className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[85vh] flex flex-col justify-end overflow-hidden rounded-b-3xl p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center w-full h-full z-0">
        <div className="relative w-full h-full">
          <Image
            src="/sport-woman.jpg"
            alt="About Reef Health"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-cover object-center opacity-100 rounded-b-3xl"
            priority
          />
        </div>
      </div>

      {/* Mobile-only overlay */}
      <div className="absolute inset-0 bg-black/30 z-10 sm:hidden"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[120px]">

        {/* Main Text */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col items-start mb-6 lg:mb-0 text-center lg:text-left w-full lg:w-auto">
            <span className="bg-white/10 border border-white/20 text-white px-3 sm:px-4 py-1 rounded-full mb-4 text-xs sm:text-sm mx-auto lg:mx-0"><i className="bi bi-building"></i> About Reef Health</span>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2">
              Fixing the broken<br className="hidden sm:block" />health insurance system
            </h1>
          </div>
          <div className="flex flex-col items-center lg:items-end mt-6 lg:mt-10 w-full lg:w-auto">
            <p className="text-white text-sm sm:text-base mb-4 lg:mb-2 text-center lg:text-right max-w-md">
              We remove the middleman, use real-time tech for efficient care access, and provide transparent pricing with no markups.
            </p>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-[#e03a6a] rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center gap-2 text-sm sm:text-base">
              Learn More
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 