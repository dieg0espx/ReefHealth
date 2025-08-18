import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-5 bg-white">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e03a6a] mb-4 sm:mb-6 md:mb-8 leading-tight">Healthcare was a maze. We brought a bulldozer</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto px-4">
          Powered by our parent company, Redirect Health, our health insurance saves you up to 40% on small business health plans with transparent pricing and no markups. Reduce employee turnover with meaningful health benefits starting at $29/mo, including mental health benefits and virtual primary care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-[#fbe6ed] rounded-2xl sm:rounded-3xl py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e03a6a] mb-1 sm:mb-2">100,000+</span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e03a6a] font-medium text-center">Trusted Members</span>
          </div>
          <div className="bg-[#fbe6ed] rounded-2xl sm:rounded-3xl py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e03a6a] mb-1 sm:mb-2">40%</span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e03a6a] font-medium text-center">Savings on Plans</span>
          </div>
          <div className="bg-[#fbe6ed] rounded-2xl sm:rounded-3xl py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e03a6a] mb-1 sm:mb-2">$29</span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e03a6a] font-medium text-center">Starting Price</span>
          </div>
        </div>
      </div>
    </section>
  );
} 