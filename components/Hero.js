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
    <div className="h-screen flex">
      <section className=" flex items-center justify-center px-4 sm:px-6 md:px-10 py-10 ">
        <div className=" mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Image with Benefit Callouts */}
            <div className="relative">
              <div className="relative">
                <Image
                  src="/stock/iStock-2217159786.jpg"
                  alt="Healthcare professional in medical scrubs"
                  width={600}
                  height={600}
                  className="w-full aspect-square rounded-2xl object-cover object-center sm:object-center object-left"
                  priority
                />
                
                {/* Benefit Callouts Overlay */}
                <div className="absolute -left-3 sm:-left-10 top-[30%] space-y-3">
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

            {/* Right Side - Redesigned Text Content */}
            <div className="flex flex-col space-y-8">
              {/* Trust Badge */}
             

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-main-pink">Small business</span>{' '}
                  <span className="text-main-pink">health benefits</span>{' '}
                  <span className="text-black">that actually</span>{' '}
                  <span className="text-main-pink font-black">work.</span>
                </h1>
                
                {/* Subheadline */}
                <p className="text-xl text-gray-600 font-medium">
                  From <span className="text-main-pink font-bold">$1/day</span> per employee
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                Stop overpaying for health benefits. Get comprehensive coverage including health insurance, dental, vision, and wellness programs at 40% less than traditional providers.
              </p>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-main-pink/10 rounded-full flex items-center justify-center">
                    <i className="bi bi-check-lg text-main-pink text-sm"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">No setup fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-main-pink/10 rounded-full flex items-center justify-center">
                    <i className="bi bi-check-lg text-main-pink text-sm"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Instant quotes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-main-pink/10 rounded-full flex items-center justify-center">
                    <i className="bi bi-check-lg text-main-pink text-sm"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">24/7 support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-main-pink/10 rounded-full flex items-center justify-center">
                    <i className="bi bi-check-lg text-main-pink text-sm"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Cancel anytime</span>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToPricing}
                  className="bg-main-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-main-pink/90 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Your Free Quote
                  <i className="bi bi-arrow-right text-xl"></i>
                </button>
                
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-main-pink hover:text-main-pink transition-all duration-300 flex items-center justify-center gap-3">
                  <i className="bi bi-envelope text-xl"></i>
                  Contact Us
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                 
                  <span className="text-sm text-gray-600">Join 2,500+ businesses</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <span className="text-sm text-gray-600 ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="bg-gray-100 py-8 px-4 sm:px-6 md:px-10 hidden">
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