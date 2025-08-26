import React from 'react';
import { useRouter } from 'next/router';

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

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            Your new health benefits
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Comprehensive coverage with $0 deductibles
          </p>
          <button 
            onClick={scrollToPricing}
            className="bg-main-pink text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-main-pink/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {/* Medical */}
           <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
             <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
               <div className="text-2xl text-red-700 font-bold">+</div>
             </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Medical</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
              24/7/365 virtual primary care, urgent care, and telehealth. No fee generic medications and hospital coverage included.
            </p>
            <button className="text-main-pink font-semibold text-sm hover:underline mt-auto">
              Learn More →
            </button>
          </div>

                     {/* Mental */}
           <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
               <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
               </svg>
             </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mental</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
              Nationwide mental health benefits and virtual support for your wellbeing.
            </p>
            <button className="text-main-pink font-semibold text-sm hover:underline mt-auto">
              Learn More →
            </button>
          </div>

                     {/* Physical */}
           <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
               <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
             </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Physical</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
              Access to 20k+ gyms and 4k virtual fitness classes nationwide.
            </p>
            <button className="text-main-pink font-semibold text-sm hover:underline mt-auto">
              Learn More →
            </button>
          </div>

                     {/* Financial + Social */}
           <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
             <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
               <div className="text-2xl text-purple-700 font-bold">$</div>
             </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Financial + Social</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
              Save $5,000+ through 400+ national wellness discounts. Plus networking opportunities for owners and franchisees.
            </p>
            <button 
              onClick={handleContactClick}
              className="text-main-pink font-semibold text-sm hover:underline mt-auto"
            >
              Get in Touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 