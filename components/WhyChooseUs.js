import React from 'react';
import Image from 'next/image';

export default function WhyChooseUs() {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left: Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1">
          <Image
            src="/doctor1.jpg"
            alt="What Makes Reef Different"
            width={700}
            height={500}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Right: Content */}
        <div className="flex flex-col justify-center h-full order-1 lg:order-2">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">What Makes Reef Different</h2>
          <div className="space-y-4 mb-8 sm:mb-10">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#e03a6a] rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-base sm:text-lg text-gray-700">Removes the middleman in business health plans</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#e03a6a] rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-base sm:text-lg text-gray-700">Uses real-time tech for efficient care access</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#e03a6a] rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-base sm:text-lg text-gray-700">Transparent pricing with no markups</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#e03a6a] rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-base sm:text-lg text-gray-700">We&apos;re the end-provider—not a reseller</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button 
              onClick={scrollToPricing}
              className="bg-[#e03a6a] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              Get Started <i className="bi bi-arrow-up-right"></i>
            </button>
            <button 
              onClick={scrollToAbout}
              className="bg-white border border-[#e03a6a] text-[#e03a6a] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              Learn More <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 