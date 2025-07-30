import React, { useState } from 'react'
import { useRouter } from 'next/router';

function OurHistory() {
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState(0); // Track which accordion item is open

  const handleFranchiseClick = () => {
    // Navigate to contact page with franchise interest
    router.push("/contact?plan=Franchise&interest=franchise");
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const accordionItems = [
    {
      id: 0,
      title: "No Fees",
      subtitle: "No Royalties or Ad Fund Fees",
      description: "Keep more of your earnings with our unique franchise model that eliminates traditional royalty and advertising fund fees that other franchises charge."
    },
    {
      id: 1,
      title: "Low Cost",
      subtitle: "Low-Cost Entry",
      description: "Start your franchise with minimal upfront investment. Our affordable entry point makes it accessible for entrepreneurs at any level."
    },
    {
      id: 2,
      title: "Earnings",
      subtitle: "Earn $15–$28/mo per Member",
      description: "Generate consistent recurring revenue with our proven membership model. The more members you serve, the more you earn."
    },
    {
      id: 3,
      title: "Support",
      subtitle: "Prebuilt Lead Pipeline",
      description: "Fast-track your success with our established lead generation system that helps you scale quickly and efficiently from day one."
    },
    {
      id: 4,
      title: "Network",
      subtitle: "Join Successful Owners",
      description: "Become part of our growing community of successful franchise owners who are making a real difference in their local business communities."
    }
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? -1 : id);
  };

  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 bg-white">
        <div className='flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center py-10 sm:py-16 lg:py-20 gap-8 lg:gap-12'>
            <div className="flex flex-col justify-center w-full h-full order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">Franchise Opportunities</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-xl">Join our growing network of successful franchise owners. With no royalties, low-cost entry, and proven earning potential, Reef Health offers one of the best franchise opportunities in the health benefits industry.</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button 
                  onClick={handleFranchiseClick}
                  className="bg-[#e03a6a] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer hover:scale-105 transform duration-200"
                >
                  Become a Franchisee <i className="bi bi-arrow-right"></i>
                </button>
                <button 
                  onClick={scrollToAbout}
                  className="bg-white border border-[#e03a6a] text-[#e03a6a] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer hover:scale-105 transform duration-200"
                >
                  Learn More <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className='w-full space-y-4 sm:space-y-6 lg:space-y-[30px] order-1 lg:order-2'>
                {accordionItems.map((item) => (
                  <div key={item.id} className='bg-light-pink rounded-2xl overflow-hidden'>
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className='w-full p-4 sm:p-5 text-left flex items-center justify-between hover:bg-pink-50 transition-colors duration-200'
                    >
                      <div className='flex-1'>
                        <h3 className='text-main-pink text-lg sm:text-xl font-bold mb-1'>{item.title}</h3>
                        <h3 className='text-gray-900 text-lg sm:text-xl font-medium'>{item.subtitle}</h3>
                      </div>
                      <div className='ml-4 flex-shrink-0'>
                        <svg 
                          className={`w-5 h-5 text-main-pink transform transition-transform duration-200 ${openAccordion === item.id ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openAccordion === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className='p-4 sm:p-5 pt-0'>
                        <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default OurHistory