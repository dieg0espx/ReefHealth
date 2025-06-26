import React from 'react';

const iconYoga = (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#e03a6a] mb-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-6m0 0l-2 2m2-2l2 2m-2-2V8m0 0l-2 2m2-2l2 2" /></svg>
);
const iconStrength = (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#e03a6a] mb-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18V6m12 12V6M6 6l12 12" /></svg>
);
const iconMain = (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#e03a6a] mb-4"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6" /></svg>
);
const iconPlan = (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white mb-4"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6" /></svg>
);

export default function Services() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
      <div className=" mx-auto">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8">
          <div className="mb-6 lg:mb-0">
            <span className="inline-block bg-[#e03a6a] text-white px-4 sm:px-6 py-2 rounded-full font-semibold mb-6 sm:mb-8 text-sm sm:text-base">Our Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Lorem Ipsum</h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-base sm:text-lg text-gray-700 max-w-md mb-4 lg:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button className="bg-[#e03a6a] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center justify-center gap-2 text-sm sm:text-base">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></button>
              <button className="bg-white border border-[#e03a6a] text-[#e03a6a] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm sm:text-base">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></button>
            </div>
          </div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Card */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#fbe6ed] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[220px]">
              {iconMain}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Lorem Ipsum</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquet</p>
                <a href="#" className="text-[#e03a6a] font-semibold flex items-center gap-1 text-sm sm:text-base">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></a>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="bg-[#fbe6ed] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[100px]">
                {iconYoga}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Flow Yoga</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque</p>
                <a href="#" className="text-[#e03a6a] font-semibold flex items-center gap-1 text-sm sm:text-base">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></a>
              </div>
              <div className="bg-[#fbe6ed] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[100px]">
                {iconStrength}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Strength Circuit</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque</p>
                <a href="#" className="text-[#e03a6a] font-semibold flex items-center gap-1 text-sm sm:text-base">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></a>
              </div>
            </div>
          </div>
          {/* Plan Card */}
          <div className="bg-[#e03a6a] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[340px] text-white">
            <div>
              <span className="inline-block mb-4">{iconPlan}</span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Plan Just For You</h3>
              <p className="text-sm sm:text-base mb-6 sm:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquet</p>
            </div>
            <a href="#" className="text-white font-semibold flex items-center gap-1 underline underline-offset-4 text-sm sm:text-base">Get in Touch <span className="inline-block transform rotate-45">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
} 