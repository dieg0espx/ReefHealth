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
    <div className="">
      <section className=" flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 ">
        <div className=" mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Image with Benefit Callouts */}
            <div className="relative">
              <div className="relative">
                <Image
                  src="/doctor4.jpg"
                  alt="Healthcare professional in medical scrubs"
                  width={600}
                  height={600}
                  className="w-full aspect-square rounded-2xl object-cover"
                  priority
                />
                
                {/* Benefit Callouts Overlay */}
                <div className="absolute -left-10 top-[30%] space-y-3">
                  <div className="bg-blue-500 text-white pl-5 pr-10 py-4 rounded-full flex items-center gap-2 text-sm font-medium shadow-lg">
                    <i className="bi bi-plus-circle"></i>
                    24/7 Healthcare
                  </div>
                  <div className="bg-main-pink text-white pl-5 pr-10 py-4 rounded-full flex items-center gap-2 text-sm font-medium shadow-lg">
                    <i className="bi bi-heart"></i>
                    Wellness Benefits
                  </div>
                  <div className="bg-purple-500 text-white pl-5 pr-10 py-4 rounded-full flex items-center gap-2 text-sm font-medium shadow-lg">
                    <i className="bi bi-currency-dollar"></i>
                    40% avg savings
                  </div>
                  <div className="bg-green-500 text-white pl-5 pr-10 py-4 rounded-full flex items-center gap-2 text-sm font-medium shadow-lg">
                    <i className="bi bi-file-earmark"></i>
                    As low as $1/day
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="flex flex-col space-y-6">
              {/* Trust Indicator */}
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <i className="bi bi-heart text-black"></i>
                <span>trusted by +100k members</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-main-pink">Small business</span>{' '}
                <span className="text-main-pink">health benefits for</span>{' '}
                <span className="text-black">as low as <span className="font-black">$1/day.</span></span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-700 max-w-lg">
                Save money and offer better benefits from health insurance to gym memberships, all for 40% less than other providers.
              </p>

              {/* CTA Button */}
              <button 
                onClick={scrollToPricing}
                className="bg-main-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-main-pink/90 transition-colors flex items-center gap-2 w-fit"
              >
                Get Started
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="bg-gray-100 py-8 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-700 font-medium">
              Trusted by
            </div>
            
            <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
              {/* Company Logos */}
              <div className="text-red-600 font-bold text-lg">Chick-fil-A</div>
              <div className="text-red-600 font-bold text-lg">Jimmy John&rsquo;s</div>
              <div className="text-yellow-500 font-bold text-2xl">M</div>
              <div className="text-green-600 font-bold text-sm">College Hunks</div>
              <div className="text-blue-600 font-bold text-lg">MaidPro</div>
            </div>
            
            <div className="text-sm text-gray-700 font-medium">
              +100,000 MEMBERS
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 