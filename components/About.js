import React from 'react';

export default function About() {
  return (
    <section id="about" className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-5 bg-white">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e03a6a] mb-4 sm:mb-6 md:mb-8 leading-tight">Healthcare used to be a maze. Now, our VIP Concierge clears the path.</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto px-4">
                     Powered by our parent company, Redirect Health, our health insurance saves you up to 40% on health plans with transparent pricing and no markups. Provide meaningful health benefits for individuals and families for just a few dollars a day, including mental health benefits and virtual primary care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-[#fbe6ed] rounded-2xl sm:rounded-3xl py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e03a6a] mb-1 sm:mb-2">100,000+</span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e03a6a] font-medium text-center">Trusted Members</span>
          </div>
          <div className="bg-[#fbe6ed] rounded-2xl sm:rounded-3xl py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e03a6a] mb-1 sm:mb-2">Available in</span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e03a6a] font-medium text-center">All 50 States</span>
          </div>
          <div className="bg-[#fbe6ed] rounded-2xl sm:rounded-3xl py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 flex flex-col items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#e03a6a] mb-1 sm:mb-2">40%</span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#e03a6a] font-medium text-center">Saving on Plans</span>
          </div>
        </div>
      </div>
    </section>
  );
} 