import React from 'react';

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
  <i className="bi bi-currency-dollar text-3xl mb-4 text-white"></i>
);

export default function Services() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
      <div className=" mx-auto">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8">
          <div className="mb-6 lg:mb-0">
            <span className="inline-block bg-[#e03a6a] text-white px-4 sm:px-6 py-2 rounded-full font-semibold mb-6 sm:mb-8 text-sm sm:text-base">The 5 Pillars</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Reef Benefits</h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-base sm:text-lg text-gray-700 max-w-md mb-4 lg:mb-0">Comprehensive health coverage that goes beyond traditional insurance.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button className="bg-[#e03a6a] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center justify-center gap-2 text-sm sm:text-base">Get Started <i className="bi bi-arrow-up-right"></i></button>
              <button className="bg-white border border-[#e03a6a] text-[#e03a6a] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm sm:text-base">Learn More <i className="bi bi-arrow-up-right"></i></button>
            </div>
          </div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Card */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#fbe6ed] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[220px]">
              {iconMedical}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Medical</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">24/7/365 virtual primary care, urgent care, and telehealth. No fee generic medications and hospital coverage included.</p>
                <a href="#" className="text-[#e03a6a] font-semibold flex items-center gap-1 text-sm sm:text-base">Learn More <i className="bi bi-arrow-up-right"></i></a>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="bg-[#fbe6ed] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[100px]">
                {iconMental}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Mental</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">Nationwide mental health benefits and virtual support for your wellbeing.</p>
                <a href="#" className="text-[#e03a6a] font-semibold flex items-center gap-1 text-sm sm:text-base">Learn More <i className="bi bi-arrow-up-right"></i></a>
              </div>
              <div className="bg-[#fbe6ed] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[100px]">
                {iconPhysical}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Physical</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">Access to 20k+ gyms and 4k virtual fitness classes nationwide.</p>
                <a href="#" className="text-[#e03a6a] font-semibold flex items-center gap-1 text-sm sm:text-base">Learn More <i className="bi bi-arrow-up-right"></i></a>
              </div>
            </div>
          </div>
          {/* Financial Card */}
          <div className="bg-[#e03a6a] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[340px] text-white">
            <div>
              <span className="inline-block mb-4">{iconFinancial}</span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Financial + Social</h3>
              <p className="text-sm sm:text-base mb-6 sm:mb-8">Save $5,000+ through 400+ national wellness discounts. Plus networking opportunities for owners and franchisees.</p>
            </div>
            <a href="#" className="text-white font-semibold flex items-center gap-1 underline underline-offset-4 text-sm sm:text-base">Get in Touch <i className="bi bi-arrow-up-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
} 