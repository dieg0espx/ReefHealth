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
    <section className="py-16 px-4 bg-white">
      <div className=" mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
          <div>
            <span className="inline-block bg-[#e03a6a] text-white px-6 py-2 rounded-full font-semibold mb-8">Our Services</span>
            <h2 className="text-6xl font-bold text-gray-900 mb-4">Lorem Ipsum</h2>
          </div>
          <div className="flex flex-col items-end gap-4">
            <p className="text-lg text-gray-700 max-w-md mb-4 md:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex gap-4">
              <button className="bg-[#e03a6a] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center gap-2">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></button>
              <button className="bg-white border border-[#e03a6a] text-[#e03a6a] px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center gap-2">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></button>
            </div>
          </div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Card */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#fbe6ed] rounded-3xl p-8 flex flex-col justify-between min-h-[220px]">
              {iconMain}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Lorem Ipsum</h3>
                <p className="text-base text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquet</p>
                <a href="#" className="text-[#e03a6a] font-semibold flex items-center gap-1">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-[#fbe6ed] rounded-3xl p-8 flex flex-col justify-between min-h-[100px]">
                {iconYoga}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Flow Yoga</h3>
                <p className="text-base text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque</p>
                <a href="#" className="text-[#e03a6a] font-semibold flex items-center gap-1">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></a>
              </div>
              <div className="bg-[#fbe6ed] rounded-3xl p-8 flex flex-col justify-between min-h-[100px]">
                {iconStrength}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Strength Circuit</h3>
                <p className="text-base text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque</p>
                <a href="#" className="text-[#e03a6a] font-semibold flex items-center gap-1">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></a>
              </div>
            </div>
          </div>
          {/* Plan Card */}
          <div className="bg-[#e03a6a] rounded-3xl p-8 flex flex-col justify-between min-h-[340px] text-white">
            <div>
              <span className="inline-block mb-4">{iconPlan}</span>
              <h3 className="text-3xl font-bold mb-2">Plan Just For You</h3>
              <p className="text-base mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquet</p>
            </div>
            <a href="#" className="text-white font-semibold flex items-center gap-1 underline underline-offset-4">Get in Touch <span className="inline-block transform rotate-45">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
} 