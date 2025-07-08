import React from 'react';

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-5 bg-white">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e03a6a] mb-6 sm:mb-8">Why Choose Reef</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-12 sm:mb-16 max-w-5xl mx-auto">
          Save up to 40% on small business health plans with transparent pricing and no markups. Reduce employee turnover with meaningful health benefits starting at $29/mo, including mental health benefits and virtual primary care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-[#fbe6ed] rounded-3xl py-8 sm:py-10 md:py-12 px-4 sm:px-6 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e03a6a] mb-2">100,000+</span>
            <span className="text-base sm:text-lg text-[#e03a6a] font-medium">Trusted Members</span>
          </div>
          <div className="bg-[#fbe6ed] rounded-3xl py-8 sm:py-10 md:py-12 px-4 sm:px-6 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e03a6a] mb-2">40%</span>
            <span className="text-base sm:text-lg text-[#e03a6a] font-medium">Savings on Plans</span>
          </div>
          <div className="bg-[#fbe6ed] rounded-3xl py-8 sm:py-10 md:py-12 px-4 sm:px-6 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e03a6a] mb-2">$29</span>
            <span className="text-base sm:text-lg text-[#e03a6a] font-medium">Starting Price</span>
          </div>
        </div>
      </div>
    </section>
  );
} 