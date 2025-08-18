import React from 'react';
import { useRouter } from 'next/router';

const iconMedical = (
  <i className="bi bi-heart-pulse text-3xl mb-4 text-[#e03a6a]"></i>
);
const iconMental = (
  <i className="bi bi-brain text-3xl mb-4 text-[#e03a6a]"></i>
);
const iconPhysical = (
  <i className="bi bi-lightning text-3xl mb-4 text-[#e03a6a]"></i>
);
const iconFinancial = (
  <i className="bi bi-currency-dollar text-3xl mb-4 text-purple-600"></i>
);

export default function Services() {
  const router = useRouter();

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

  const handleContactClick = () => {
    router.push("/contact");
  };

  const handleServiceLearnMore = (service) => {
    // You can customize this to show modals or navigate to specific service pages
    alert(`Learn more about ${service} benefits! Contact us for detailed information.`);
  };

  return (
    <section className="py-8 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">Your new health benefits</h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3 sm:gap-4">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md mb-3 sm:mb-4 lg:mb-0">Comprehensive coverage with $0 deductibles.</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto">
              <button 
                onClick={scrollToPricing}
                className="bg-[#e03a6a] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base cursor-pointer"
              >
                Get Started <i className="bi bi-arrow-right text-xs sm:text-sm md:text-base"></i>
              </button>
              <button 
                onClick={scrollToAbout}
                className="bg-white border border-[#e03a6a] text-[#e03a6a] px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base cursor-pointer"
              >
                Learn More <i className="bi bi-arrow-right text-xs sm:text-sm md:text-base"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Card */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
              {iconMedical}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Medical</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4">24/7/365 virtual primary care, urgent care, and telehealth. No fee generic medications and hospital coverage included.</p>
                <button 
                  onClick={() => handleServiceLearnMore('Medical')}
                  className="text-[#e03a6a] font-semibold flex items-center gap-1 text-xs sm:text-sm md:text-base cursor-pointer hover:underline"
                >
                  Learn More <i className="bi bi-arrow-right text-xs sm:text-sm md:text-base"></i>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
              <div className="bg-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-[90px] sm:min-h-[100px]">
                {iconMental}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Mental</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4">Nationwide mental health benefits and virtual support for your wellbeing.</p>
                <button 
                  onClick={() => handleServiceLearnMore('Mental Health')}
                  className="text-[#e03a6a] font-semibold flex items-center gap-1 text-xs sm:text-sm md:text-base cursor-pointer hover:underline"
                >
                  Learn More <i className="bi bi-arrow-right text-xs sm:text-sm md:text-base"></i>
                </button>
              </div>
              <div className="bg-green-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-[90px] sm:min-h-[100px]">
                {iconPhysical}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Physical</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4">Access to 20k+ gyms and 4k virtual fitness classes nationwide.</p>
                <button 
                  onClick={() => handleServiceLearnMore('Physical Wellness')}
                  className="text-[#e03a6a] font-semibold flex items-center gap-1 text-xs sm:text-sm md:text-base cursor-pointer hover:underline"
                >
                  Learn More <i className="bi bi-arrow-right text-xs sm:text-sm md:text-base"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Financial Card */}
          <div className="bg-purple-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-[250px] sm:min-h-[280px] md:min-h-[340px] text-purple-900">
            <div>
              <span className="inline-block mb-3 sm:mb-4">{iconFinancial}</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Financial + Social</h3>
              <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8">Save $5,000+ through 400+ national wellness discounts. Plus networking opportunities for owners and franchisees.</p>
            </div>
            <button 
              onClick={handleContactClick}
              className="text-purple-700 font-semibold flex items-center gap-1 underline underline-offset-4 text-xs sm:text-sm md:text-base cursor-pointer hover:text-purple-900"
            >
              Get in Touch <i className="bi bi-arrow-right text-xs sm:text-sm md:text-base"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 