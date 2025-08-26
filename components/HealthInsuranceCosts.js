import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HealthInsuranceCosts() {
  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 w-full">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-5">
          <div className="flex flex-col lg:flex-row items-stretch min-h-[600px] relative">
            {/* Left Column - White Background */}
            <div className="flex-1 bg-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center relative">
              {/* Large Vertical $603B Text on Right Side - Hidden on Mobile */}
              <div className="hidden md:block absolute right-0 translate-x-16 md:translate-x-20 lg:translate-x-24 top-1/2 -translate-y-1/2 text-[6rem] lg:text-[8rem] font-black leading-none tracking-tight text-black/90 transform rotate-90 z-0 pointer-events-none">
                $603B
              </div>
              
              <div className="max-w-2xl sm:mr-16 md:mr-20 lg:mr-24 text-center sm:text-left">
                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
                  <span className="text-main-pink">Health insurance costs</span>{' '}
                  <span className="text-main-pink">your business a</span>{' '}
                  <span className="text-main-pink">fortune</span>{' '}
                  <span className="text-black">because middlemen take a cut.</span>
                </h2>

                {/* First Body Paragraph */}
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  It's a dinosaur model that profited{' '}
                  <span className="font-bold">billions last year alone</span>. You're left with the bill, and that's IF you're even covered. Healthcare shouldn't feel like financial roulette every time you go see the doctor.
                </p>

                {/* Second Body Paragraph */}
                                  <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                    <span className="font-bold">You deserve better.</span> So do individuals and families.
                  </p>

                {/* Call to Action Button */}
                <Link href="/contact" className="bg-main-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-main-pink/90 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-fit mx-auto sm:mx-0">
                  Get Better Healthcare
                  <i className="bi bi-arrow-right text-lg sm:text-xl"></i>
                </Link>
              </div>
            </div>

            {/* Circular Image - Predominantly on white, extending into pink - Hidden on Mobile */}
            <div className="hidden md:block absolute left-[58%] top-1/2 -translate-y-1/2 z-20">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                <Image 
                  src="/stock/iStock-2166712407 (1).jpg" 
                  alt="Medical Professional" 
                  width={400} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Narrow Pink Background with Caption */}
            <div className="w-full lg:w-1/3 bg-main-pink relative overflow-hidden">
              {/* Small Caption Text - Bottom Right */}
              <div className="absolute right-4 md:right-6 bottom-6 md:bottom-8 z-10">
                <p className="text-white text-sm md:text-base leading-snug max-w-[200px] font-semibold">
                  Health Insurance<br />
                  profited a whopping<br />
                  $603B in 2024<br />
                  alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section - Health Assurance */}
      <section className="py-12 sm:py-16 md:py-20 w-full" style={{ backgroundColor: '#262325' }}>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-5">
          <div className="flex flex-col lg:flex-row items-center min-h-[600px] gap-8 lg:gap-12">
                         {/* Left Column - Image */}
             <div className="flex-1 flex justify-center">
              <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg">
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                  <Image 
                    src="/stock/iStock-2151967049.jpg" 
                    alt="Mother and daughter with doctor" 
                    width={400} 
                    height={600} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="max-w-2xl sm:mr-16 md:mr-20 lg:mr-24 text-center sm:text-left">
                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
                  <span className="text-white">We changed the game so you get assurance, </span>
                  <span className="text-main-pink">not more </span>
                  <span className="text-main-pink">"insurance."</span>
                </h2>

                {/* First Body Paragraph */}
                <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 leading-relaxed">
                  <span className="font-bold">What if going to the doctor was as easy as flipping on a light switch?</span> No guessing, no surprises—just care when you need it, without the financial headache.
                </p>

                {/* Second Body Paragraph */}
                <p className="text-lg sm:text-xl text-white mb-8 sm:mb-10 leading-relaxed">
                  <span className="font-bold">That's health assurance</span> - Preventative care, real coverage, and benefits you can trust—all at a fraction of the cost.
                </p>

                {/* Call to Action Button */}
                <button className="bg-main-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-main-pink/90 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-fit mx-auto sm:mx-0">
                  Get Healthcare you can Trust
                  <i className="bi bi-arrow-right text-lg sm:text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line Section */}
      <section className="py-12 sm:py-16 md:py-20 w-full bg-white">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-5">
          <div className="flex flex-col lg:flex-row items-center min-h-[600px] gap-8 lg:gap-12 relative">
                         {/* Left Column - Text Content */}
             <div className="flex-1 flex flex-col justify-center">
               <div className="max-w-6xl text-center sm:text-left mt-8 lg:mt-12 sm:ml-8 lg:ml-16">
                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
                  <span className="text-main-pink">The bottom line?</span>
                </h2>

                {/* Sub Headline */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 text-black">
                  Save money on healthcare + offer top benefits for better retention.
                </h3>

                                 {/* Body Paragraph */}
                 <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                   From healthcare coverage you can trust to gym memberships, mental health, and more, Reef health benefits is about to save your business a lot of money.
                 </p>

                                 {/* Call to Action Button */}
                 <Link href="/contact" className="bg-main-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-main-pink/90 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-fit mx-auto sm:mx-0">
                   Save money on healthcare
                   <i className="bi bi-arrow-right text-lg sm:text-xl"></i>
                 </Link>
              </div>
            </div>

                         {/* Right Column - Image with Pink Background */}
             <div className="flex-1 flex justify-center sm:justify-end items-center relative p-8 lg:p-12">
               <div className="relative w-full max-w-xs lg:max-w-sm xl:max-w-md sm:-translate-x-16 lg:-translate-x-28">
                {/* Pink Accent Block - Behind the photo card */}
                <div 
                  className="absolute bg-main-pink rounded-[28px] w-[60%] h-[60%] -bottom-6 -right-6 z-0"
                  aria-hidden="true"
                ></div>
                
                {/* Photo Card */}
                <div className="relative bg-white rounded-[28px] overflow-hidden shadow-lg aspect-[4/5] z-10">
                  <Image 
                    src="/stock/iStock-2148812508.jpg" 
                    alt="Woman looking down at tablet while working" 
                    width={540} 
                    height={675} 
                    className="w-full h-full object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
