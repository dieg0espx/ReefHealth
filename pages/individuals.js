import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import TraditionalInsuranceProblem from '@/components/TraditionalInsuranceProblem'

function Individuals() {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Individual Health Insurance - Reef Health Benefits",
    "description": "Get affordable individual health insurance for just a few dollars a day. Comprehensive coverage with 24/7 telehealth access, wellness benefits, and transparent pricing.",
    "url": "https://reefhealth.com/individuals",
    "mainEntity": {
      "@type": "Organization",
      "name": "Reef Health Benefits",
      "offers": [
        {
          "@type": "Offer",
          "name": "Individual Starter Plan",
          "price": "29",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "29",
            "priceCurrency": "USD",
            "unitText": "MONTH"
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Individual Health Insurance - Affordable Coverage for Just a Few Dollars a Day | Reef Health</title>
        <meta name="description" content="Get affordable individual health insurance for just a few dollars a day. Comprehensive coverage with 24/7 telehealth access, wellness benefits, and transparent pricing. No setup fees, instant quotes." />
        <meta name="keywords" content="individual health insurance, personal health coverage, affordable health plans, telehealth, wellness benefits, health insurance quotes" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://reefhealth.com/individuals" />
        <meta name="theme-color" content="#EE2966" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <main className='max-w-[1500px] mx-auto px-3 sm:px-4 md:px-6 space-y-6 sm:space-y-8 md:space-y-10'>
        {/* Hero Section for Individuals */}
        <div className="md:pt-20 flex flex-col">
          <section className="flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-10 py-6 sm:py-8 md:py-10 flex-1">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
                
                {/* Left Side - Image with Benefit Callouts */}
                <div className="relative order-2 lg:order-1">
                  <div className="relative">
                    <Image
                      src="/sport-woman.jpg"
                      alt="Individual healthcare coverage"
                      width={600}
                      height={600}
                      className="w-full aspect-square rounded-xl sm:rounded-2xl object-cover object-center"
                      priority
                    />
                    
                    {/* Benefit Callouts Overlay */}
                    <div className="absolute -left-1 sm:-left-2 md:-left-3 lg:-left-10 top-[15%] sm:top-[20%] md:top-[30%] space-y-1.5 sm:space-y-2 md:space-y-3">
                      <div className="bg-blue-500 text-white pl-2 sm:pl-3 md:pl-5 pr-4 sm:pr-6 md:pr-10 py-1.5 sm:py-2 md:py-4 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium shadow-lg">
                        <i className="bi bi-plus-circle text-xs sm:text-sm"></i>
                        <span className="hidden sm:inline">24/7 Healthcare</span>
                        <span className="sm:hidden">24/7 Care</span>
                      </div>
                      <div className="bg-main-pink text-white pl-2 sm:pl-3 md:pl-5 pr-4 sm:pr-6 md:pr-10 py-1.5 sm:py-2 md:py-4 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium shadow-lg">
                        <i className="bi bi-heart text-xs sm:text-sm"></i>
                        <span className="hidden sm:inline">Wellness Benefits</span>
                        <span className="sm:hidden">Wellness</span>
                      </div>
                      <div className="bg-purple-500 text-white pl-2 sm:pl-3 md:pl-5 pr-4 sm:pr-6 md:pr-10 py-1.5 sm:py-2 md:py-4 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium shadow-lg">
                        <i className="bi bi-currency-dollar text-xs sm:text-sm"></i>
                        <span className="hidden sm:inline">Just a few dollars a day</span>
                        <span className="sm:hidden">Just a few dollars a day</span>
                      </div>
                      <div className="bg-green-500 text-white pl-2 sm:pl-3 md:pl-5 pr-4 sm:pr-6 md:pr-10 py-1.5 sm:py-2 md:py-4 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium shadow-lg">
                        <i className="bi bi-file-earmark text-xs sm:text-sm"></i>
                        <span className="hidden sm:inline">No setup fees</span>
                        <span className="sm:hidden">No fees</span>
                      </div>
                    </div>
                  </div>
                </div>

                                 {/* Right Side - Text Content for Individuals */}
                 <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
                   {/* Main Headline */}
                   <div className="space-y-2 sm:space-y-3 md:space-y-4">
                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                       <span className="text-main-pink">Individual</span>{' '}
                       <span className="text-main-pink">health insurance</span>{' '}
                       <span className="text-black">that fits</span>{' '}
                       <span className="text-main-pink font-black">your life.</span>
                     </h1>
                     
                     {/* Subheadline */}
                     <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">
                       Starting at <span className="text-main-pink font-bold">just a few dollars a day</span>
                     </p>
                   </div>

                   {/* Description */}
                   <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
                     Get comprehensive health coverage designed for individuals. Enjoy 24/7 telehealth access, wellness programs, and transparent pricing without the hassle of traditional insurance.
                   </p>

                   {/* Key Benefits Grid */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-md">
                     <div className="flex items-center gap-2 sm:gap-3">
                       <div className="w-5 h-5 sm:w-6 md:w-8 sm:h-5 md:h-6 lg:h-8 bg-main-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                         <i className="bi bi-check-lg text-main-pink text-xs sm:text-sm"></i>
                       </div>
                       <span className="text-xs sm:text-sm font-medium text-gray-700">No setup fees</span>
                     </div>
                     <div className="flex items-center gap-2 sm:gap-3">
                       <div className="w-5 h-5 sm:w-6 md:w-8 sm:h-5 md:h-6 lg:h-8 bg-main-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                         <i className="bi bi-check-lg text-main-pink text-xs sm:text-sm"></i>
                       </div>
                       <span className="text-xs sm:text-sm font-medium text-gray-700">Instant quotes</span>
                     </div>
                     <div className="flex items-center gap-2 sm:gap-3">
                       <div className="w-5 h-5 sm:w-6 md:w-8 sm:h-5 md:h-6 lg:h-8 bg-main-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                         <i className="bi bi-check-lg text-main-pink text-xs sm:text-sm"></i>
                       </div>
                       <span className="text-xs sm:text-sm font-medium text-gray-700">24/7 telehealth</span>
                     </div>
                     <div className="flex items-center gap-2 sm:gap-3">
                       <div className="w-5 h-5 sm:w-6 md:w-8 sm:h-5 md:h-6 lg:h-8 bg-main-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                         <i className="bi bi-check-lg text-main-pink text-xs sm:text-sm"></i>
                       </div>
                       <span className="text-xs sm:text-sm font-medium text-gray-700">Cancel anytime</span>
                     </div>
                   </div>

                   {/* CTA Section */}
                   <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                     <button 
                       onClick={scrollToPricing}
                       className="bg-main-pink text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-main-pink/90 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                     >
                       Get Your Free Quote
                       <i className="bi bi-arrow-right text-sm sm:text-lg md:text-xl"></i>
                     </button>
                     
                     <button className="border-2 border-gray-300 text-gray-700 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:border-main-pink hover:text-main-pink transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3">
                       <i className="bi bi-envelope text-sm sm:text-lg md:text-xl"></i>
                       Contact Us
                     </button>
                   </div>

                   {/* Social Proof */}
                   <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 md:gap-6 pt-3 sm:pt-4 border-t border-gray-200">
                     <div className="flex items-center gap-2">
                       <span className="text-xs sm:text-sm text-gray-600">Join 50,000+ individuals</span>
                     </div>
                     
                     <div className="flex items-center gap-1">
                       <div className="flex text-yellow-400">
                         <i className="bi bi-star-fill text-xs sm:text-sm"></i>
                         <i className="bi bi-star-fill text-xs sm:text-sm"></i>
                         <i className="bi bi-star-fill text-xs sm:text-sm"></i>
                         <i className="bi bi-star-fill text-xs sm:text-sm"></i>
                         <i className="bi bi-star-fill text-xs sm:text-sm"></i>
                       </div>
                       <span className="text-xs sm:text-sm text-gray-600 ml-1">4.9/5 rating</span>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </section>
        </div>

        {/* The Real Problem Section */}
        <TraditionalInsuranceProblem />

        {/* Additional sections can be added here */}
      </main>
    </>
  )
}

export default Individuals
