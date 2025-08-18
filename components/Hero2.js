import React from 'react';
import Image from 'next/image';

export default function Hero2() {
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
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] overflow-hidden ">
      

      {/* Main Content - Two Column Layout */}
      <div className="relative z-20 min-h-[85vh] sm:min-h-[90vh] flex items-center py-8 sm:py-12">
        <div className="w-full  mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
             
              {/* Main Headline */}
              <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] sm:leading-[0.9] tracking-tight">
                  <span className="block mb-1 sm:mb-2">Born from a</span>
                  <span className="block text-main-pink">
                    health insurance
                  </span>
                  <span className="block">company that</span>
                  <span className="block text-[#e03a6a]">changed the game</span>
                </h1>
              </div>

              {/* Description */}
              <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-full lg:max-w-lg">
                Powered by Redirect Health, we remove the middle man, use real-time tech for efficient care access, and provide transparent pricing with 0% deductible.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <button 
                  onClick={scrollToAbout}
                  className="group relative overflow-hidden bg-[#e03a6a] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 min-h-[48px] sm:min-h-[52px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    Learn More
                    <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e03a6a] to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button 
                  onClick={() => window.location.href = 'tel:833-353-7333'}
                  className="group relative overflow-hidden bg-transparent border-2 border-[#e03a6a] text-[#e03a6a] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-[#e03a6a] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 min-h-[48px] sm:min-h-[52px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    <i className="bi bi-telephone"></i>
                    <span className="hidden xs:inline">Call </span>(833)-353-7333
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 pt-4 sm:pt-6 animate-fade-in-up" style={{animationDelay: '1s'}}>
                <div className="text-center sm:text-left">
                  <div className="text-[#e03a6a] text-xl sm:text-2xl md:text-3xl font-bold mb-1">100,000+</div>
                  <div className="text-gray-500 text-xs sm:text-sm md:text-base">Trusted Members</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-[#e03a6a] text-xl sm:text-2xl md:text-3xl font-bold mb-1">40%</div>
                  <div className="text-gray-500 text-xs sm:text-sm md:text-base">Average Savings</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-[#e03a6a] text-xl sm:text-2xl md:text-3xl font-bold mb-1">24/7</div>
                  <div className="text-gray-500 text-xs sm:text-sm md:text-base">Care Access</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual Elements */}
            <div className="relative flex items-center justify-center order-1 lg:order-2 lg:justify-end animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              {/* Main Image */}
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                  <Image
                    src="/female-doctor.jpg"
                    alt="Reef Health - Transforming Healthcare"
                    width={800}
                    height={900}
                    className="object-cover w-full aspect-square"
                    priority
                  />
                  
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e03a6a]/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating cards around image - responsive positioning and sizing */}
                <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg sm:shadow-xl animate-float-slow">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 md:w-10 sm:h-8 md:h-10 bg-[#e03a6a]/10 rounded-full flex items-center justify-center">
                      <i className="bi bi-heart-pulse text-[#e03a6a] text-xs sm:text-sm"></i>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs sm:text-sm font-bold text-gray-900">Health Coverage</div>
                      <div className="text-xs text-gray-500">24/7 Access</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg sm:shadow-xl animate-float-reverse">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 md:w-10 sm:h-8 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="bi bi-currency-dollar text-green-600 text-xs sm:text-sm"></i>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs sm:text-sm font-bold text-gray-900">Save 40%</div>
                      <div className="text-xs text-gray-500">On Plans</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-4 sm:-left-8 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg sm:shadow-xl animate-float-medium">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 md:w-10 sm:h-8 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="bi bi-people text-blue-600 text-xs sm:text-sm"></i>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs sm:text-sm font-bold text-gray-900">100k+ Members</div>
                      <div className="text-xs text-gray-500">Trusted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-8px) translateX(-3px) rotate(1deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(8px) translateX(-5px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }

        /* Custom responsive breakpoints */
        @media (min-width: 475px) {
          .xs\:inline {
            display: inline;
          }
        }

        /* Enhanced mobile animations - reduced motion for better performance */
        @media (max-width: 640px) {
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          
          .animate-float-medium {
            animation: float-medium 6s ease-in-out infinite;
          }
          
          .animate-float-reverse {
            animation: float-reverse 7s ease-in-out infinite;
          }
        }

        /* Reduce animations on very small screens for performance */
        @media (max-width: 375px) {
          .animate-float-slow,
          .animate-float-medium,
          .animate-float-reverse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
} 