import React from 'react'
import { useRouter } from 'next/router';

function OurHistory() {
  const router = useRouter();

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
                  Become a Franchisee <i className="bi bi-arrow-up-right"></i>
                </button>
                <button 
                  onClick={scrollToAbout}
                  className="bg-white border border-[#e03a6a] text-[#e03a6a] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer hover:scale-105 transform duration-200"
                >
                  Learn More <i className="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
            <div className='w-full space-y-4 sm:space-y-6 lg:space-y-[30px] h-[400px] sm:h-[500px] lg:h-[630px] overflow-y-scroll order-1 lg:order-2'>
                <div className='bg-light-pink rounded-2xl p-4 sm:p-5'>
                    <h3 className='text-main-pink text-xl sm:text-2xl font-bold mb-6 sm:mb-8 lg:mb-[100px]'> No Fees </h3>
                    <h3 className='text-gray-900 text-xl sm:text-2xl font-bold'> No Royalties or Ad Fund Fees </h3>
                    <p className='text-gray-500 text-base sm:text-lg'> Keep more of your earnings with our unique franchise model that eliminates traditional royalty and advertising fund fees that other franchises charge.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-4 sm:p-5'>
                    <h3 className='text-main-pink text-xl sm:text-2xl font-bold mb-6 sm:mb-8 lg:mb-[100px]'> Low Cost </h3>
                    <h3 className='text-gray-900 text-xl sm:text-2xl font-bold'> Low-Cost Entry </h3>
                    <p className='text-gray-500 text-base sm:text-lg'> Start your franchise with minimal upfront investment. Our affordable entry point makes it accessible for entrepreneurs at any level.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-4 sm:p-5'>
                    <h3 className='text-main-pink text-xl sm:text-2xl font-bold mb-6 sm:mb-8 lg:mb-[100px]'> Earnings </h3>
                    <h3 className='text-gray-900 text-xl sm:text-2xl font-bold'> Earn $15–$28/mo per Member </h3>
                    <p className='text-gray-500 text-base sm:text-lg'> Generate consistent recurring revenue with our proven membership model. The more members you serve, the more you earn.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-4 sm:p-5'>
                    <h3 className='text-main-pink text-xl sm:text-2xl font-bold mb-6 sm:mb-8 lg:mb-[100px]'> Support </h3>
                    <h3 className='text-gray-900 text-xl sm:text-2xl font-bold'> Prebuilt Lead Pipeline </h3>
                    <p className='text-gray-500 text-base sm:text-lg'> Fast-track your success with our established lead generation system that helps you scale quickly and efficiently from day one.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-4 sm:p-5'>
                    <h3 className='text-main-pink text-xl sm:text-2xl font-bold mb-6 sm:mb-8 lg:mb-[100px]'> Network </h3>
                    <h3 className='text-gray-900 text-xl sm:text-2xl font-bold'> Join Successful Owners </h3>
                    <p className='text-gray-500 text-base sm:text-lg'> Become part of our growing community of successful franchise owners who are making a real difference in their local business communities.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurHistory