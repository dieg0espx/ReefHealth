import React from 'react';
import Image from 'next/image';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Plans', href: '#pricing' },
  { name: 'Signup', href: '#pricing' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLinkClick = (href) => {
    if (href === '#pricing') {
      scrollToPricing();
    } else if (href.startsWith('#')) {
      // Handle other anchor links
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Normal navigation
      window.location.href = href;
    }
  };

  return (
    <div>
             {/* Cover Image Section */}
       <div className="relative max-w-[1500px] mx-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-3xl overflow-hidden mb-[40px] z-10 border border-white/40 flex flex-col justify-center">
         <Image
           src="/stock/iStock-2183708457.jpg"
           alt="Doctor on Phone"
           fill
           className="object-cover object-center"
           priority
         />
        {/* Overlay - Clean on desktop, enhanced on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 sm:bg-black/30 z-10" />
        
        {/* Mobile-only floating elements */}
        <div className="absolute inset-0 z-15 pointer-events-none sm:hidden">
          {/* Floating circles */}
          <div className="absolute top-8 left-8 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-16 right-12 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-32 left-12 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          
          {/* Gradient orbs */}
          <div className="absolute top-1/4 right-8 w-16 h-16 bg-gradient-to-r from-main-pink/20 to-pink-300/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 left-6 w-12 h-12 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-lg"></div>
        </div>
        
                 {/* Content */}
         <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-12 sm:px-6 md:px-8 lg:px-4 text-center">
           <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight drop-shadow-lg animate-slide-up sm:animate-none max-w-4xl mx-auto">
             Join 100,000+ members who chose Reef Health for better coverage
           </h2>
           <button 
             onClick={scrollToPricing}
             className="group flex items-center justify-center bg-white text-main-pink px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition-all duration-300 mx-auto lg:mx-0 text-sm sm:text-base cursor-pointer hover:scale-105"
           >
             Get Started <i className="bi bi-arrow-up-right"></i>
           </button>
         </div>
      </div>
      {/* Footer */}
      <footer className="bg-main-pink text-white pt-8 sm:pt-12 md:pt-14 lg:pt-16 pb-4 sm:pb-6 px-4 sm:px-6 mt-6 sm:mt-8 md:mt-10 rounded-t-2xl sm:rounded-t-3xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 md:gap-10">
          {/* Left: Links */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-3 sm:gap-2 mb-4 md:mb-6 lg:mb-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2 sm:gap-3 md:gap-2 text-center md:text-left">
              {links.map((link, idx) => (
                <button 
                  key={idx} 
                  onClick={() => handleLinkClick(link.href)}
                  className="text-white text-xs sm:text-sm hover:underline transition cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
                                {/* Center: Logo */}
            <div className="flex-1 flex flex-col items-center order-first md:order-none mb-4 md:mb-0">
              <Image 
                src="/logo-white.png" 
                alt="Reef Logo" 
                width={200} 
                height={80} 
                className="w-[120px] h-auto sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px]" 
                style={{ objectFit: 'contain' }}
              />
            </div>
          {/* Right: Contact Info */}
          <div className="flex-1 flex flex-col items-center md:items-end justify-center lg:justify-end gap-3 sm:gap-2">
            <div className="text-white text-sm font-medium text-center md:text-right">Contact Us</div>
            <a 
              href="tel:833-353-7333" 
              className="text-white hover:text-gray-200 transition cursor-pointer text-sm text-center md:text-right"
            >
              (833) 353-7333
            </a>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="text-white hover:text-gray-200 transition cursor-pointer text-sm hover:underline text-center md:text-right"
            >
              Get in Touch
            </button>
            <div className="mt-4 pt-4 border-t border-white/20 w-full text-center md:text-right">
              <div className="text-white text-sm font-medium mb-2">Already a Member?</div>
              <button 
                onClick={() => window.location.href = '/portal'}
                className="bg-white text-main-pink px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-1 sm:gap-2 mx-auto md:mx-0 md:ml-auto hover:scale-105"
              >
                Member Portal
                <i className="bi bi-arrow-up-right text-xs sm:text-sm"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-white/80 mt-4 sm:mt-6 md:mt-8 px-4">
          © 2025 Everyday Care Franchise LLC dba Reef Health. All rights reserved.
        </div>
      </footer>
      
   
    </div>
  );
} 