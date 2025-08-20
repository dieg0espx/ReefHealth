import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

function Employees() {
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
    "name": "Employee Health Benefits - Reef Health Benefits",
    "description": "Provide affordable employee health benefits starting at $1/day per employee. Comprehensive coverage including health insurance, dental, vision, and wellness programs at 40% less than traditional providers.",
    "url": "https://reefhealth.com/employees",
    "mainEntity": {
      "@type": "Organization",
      "name": "Reef Health Benefits",
      "offers": [
        {
          "@type": "Offer",
          "name": "Business Health Plan",
          "price": "1",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1",
            "priceCurrency": "USD",
            "unitText": "DAY"
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Employee Health Benefits - Business Health Insurance Starting at $1/day | Reef Health</title>
        <meta name="description" content="Provide affordable employee health benefits starting at $1/day per employee. Comprehensive coverage including health insurance, dental, vision, and wellness programs at 40% less than traditional providers." />
        <meta name="keywords" content="employee health benefits, business health insurance, group health plans, employee benefits, health coverage for businesses, affordable health insurance" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://reefhealth.com/employees" />
        <meta name="theme-color" content="#EE2966" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <main className='max-w-[1500px] mx-auto px-4 sm:px-6 md:px-5 space-y-8 sm:space-y-10'>
        {/* Hero Section for Employees/Businesses */}
        <div className="min-h-screen flex flex-col">
          <section className="flex items-center justify-center px-4 sm:px-6 md:px-10 py-8 sm:py-10 flex-1">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                
                {/* Left Side - Image with Benefit Callouts */}
                <div className="relative">
                  <div className="relative">
                    <Image
                      src="/stock/iStock-2217159786.jpg"
                      alt="Business healthcare benefits"
                      width={600}
                      height={800}
                      className="w-full aspect-[3/4] rounded-2xl object-cover object-center sm:object-center object-left"
                      priority
                    />
                    
                    {/* Benefit Callouts Overlay */}
                    <div className="absolute -left-2 sm:-left-3 md:-left-10 top-[20%] sm:top-[30%] space-y-2 sm:space-y-3">
                      <div className="bg-blue-500 text-white pl-3 sm:pl-5 pr-6 sm:pr-10 py-2 sm:py-4 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium shadow-lg">
                        <i className="bi bi-plus-circle text-xs sm:text-sm"></i>
                        <span className="hidden sm:inline">24/7 Healthcare</span>
                        <span className="sm:hidden">24/7 Care</span>
                      </div>
                      <div className="bg-main-pink text-white pl-3 sm:pl-5 pr-6 sm:pr-10 py-2 sm:py-4 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium shadow-lg">
                        <i className="bi bi-heart text-xs sm:text-sm"></i>
                        <span className="hidden sm:inline">Wellness Benefits</span>
                        <span className="sm:hidden">Wellness</span>
                      </div>
                      <div className="bg-purple-500 text-white pl-3 sm:pl-5 pr-6 sm:pr-10 py-2 sm:py-4 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium shadow-lg">
                        <i className="bi bi-currency-dollar text-xs sm:text-sm"></i>
                        <span className="hidden sm:inline">40% avg savings</span>
                        <span className="sm:hidden">40% off</span>
                      </div>
                      <div className="bg-green-500 text-white pl-3 sm:pl-5 pr-6 sm:pr-10 py-2 sm:py-4 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium shadow-lg">
                        <i className="bi bi-file-earmark text-xs sm:text-sm"></i>
                        <span className="hidden sm:inline">As low as $1/day</span>
                        <span className="sm:hidden">$1/day</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Text Content for Employees/Businesses */}
                <div className="flex flex-col space-y-6 sm:space-y-8">
                  {/* Main Headline */}
                  <div className="space-y-3 sm:space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="text-main-pink">Small business</span>{' '}
                      <span className="text-main-pink">health benefits</span>{' '}
                      <span className="text-black">that actually</span>{' '}
                      <span className="text-main-pink font-black">work.</span>
                    </h1>
                    
                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl text-gray-600 font-medium">
                      From <span className="text-main-pink font-bold">$1/day</span> per employee
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg">
                    Stop overpaying for health benefits. Provide comprehensive coverage including health insurance, dental, vision, and wellness programs at 40% less than traditional providers.
                  </p>

                  {/* Key Benefits Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-main-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-check-lg text-main-pink text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">No setup fees</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-main-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-check-lg text-main-pink text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">Instant quotes</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-main-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-check-lg text-main-pink text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">24/7 support</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-main-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-check-lg text-main-pink text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">Cancel anytime</span>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button 
                      onClick={scrollToPricing}
                      className="bg-main-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-main-pink/90 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Get Your Free Quote
                      <i className="bi bi-arrow-right text-lg sm:text-xl"></i>
                    </button>
                    
                    <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:border-main-pink hover:text-main-pink transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3">
                      <i className="bi bi-envelope text-lg sm:text-xl"></i>
                      Contact Us
                    </button>
                  </div>

                  {/* Social Proof */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm text-gray-600">Join 2,500+ businesses</span>
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

        {/* Business Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Businesses Choose Reef Health
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Provide competitive benefits that attract and retain top talent while saving money
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-main-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-graph-up text-2xl text-main-pink"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Save 40% on Costs</h3>
                <p className="text-gray-600">Reduce your health benefit expenses while providing better coverage for your employees</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-main-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-people text-2xl text-main-pink"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Attract Top Talent</h3>
                <p className="text-gray-600">Competitive benefits help you stand out and hire the best employees</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-main-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bi bi-shield-check text-2xl text-main-pink"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Meet all regulatory requirements with our comprehensive compliance support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional sections can be added here */}
        <div id="pricing" className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Health Plans</h2>
            <p className="text-lg text-gray-600 mb-8">Choose the plan that works best for your business</p>
            {/* Add pricing component here */}
          </div>
        </div>
      </main>
    </>
  )
}

export default Employees
