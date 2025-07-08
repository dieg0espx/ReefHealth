import React from 'react';
import Image from 'next/image';

const links = [
  { name: 'Home', href: '/home' },
  { name: 'Plans', href: '#pricing' },
  { name: 'Signup', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Contact', href: '/contact' },
];

const social = [
  {
    name: 'Instagram',
    href: '#',
    icon: <i className="bi bi-instagram text-2xl"></i>,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: <i className="bi bi-linkedin text-2xl"></i>,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: <i className="bi bi-youtube text-2xl"></i>,
  },
];

export default function Footer() {
  return (
    <div>
      {/* Cover Image Section */}
      <div className="relative max-w-[1500px] mx-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-3xl overflow-hidden mb-[40px]  z-10 border border-white/40 flex flex-col justify-end pb-4 sm:pb-6 md:pb-8 lg:pb-10">
        <Image
          src="/doctorOnPhone.jpg"
          alt="Doctor on Phone"
          layout="fill"
          objectFit="cover"
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
          <div className="absolute top-1/4 right-8 w-16 h-16 bg-gradient-to-r from-[#e03a6a]/20 to-pink-300/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 left-6 w-12 h-12 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-lg"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 md:px-8 lg:px-4 text-center py-8 sm:py-10 md:py-12 lg:py-0">
          <span className="inline-block bg-white/20 backdrop-blur-sm sm:backdrop-blur-none text-white px-3 sm:px-4 md:px-6 py-2 rounded-full font-semibold mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base border border-white/30 sm:border-transparent shadow-lg sm:shadow-none animate-fade-in sm:animate-none">Ready to Get Started?</span>
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight drop-shadow-lg animate-slide-up sm:animate-none">
            Join 100,000+ members who chose
            <br className='hidden md:block'/>
            Reef Health for better coverage
          </h2>
          <button className="group flex items-center justify-center bg-white text-[#e03a6a] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition-all duration-300 mx-auto lg:mx-0 text-sm sm:text-base">
            Get Started <i className="bi bi-arrow-up-right"></i>
          </button>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#e03a6a] text-white pt-12 sm:pt-14 md:pt-16 pb-4 sm:pb-6 px-4 sm:px-6 mt-8 sm:mt-10 rounded-t-3xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10">
          {/* Left: Links */}
          <div className="flex-1 flex flex-col items-start gap-2 mb-6 lg:mb-0">
            {links.map((link, idx) => (
              <a key={idx} href={link.href} className="text-white text-sm hover:underline transition">{link.name}</a>
            ))}
          </div>
          {/* Center: Logo */}
          <div className="flex-1 flex flex-col items-center">
            <Image src="/logo-white.png" alt="Reef Logo" width={150} height={150} />
          </div>
          {/* Right: Social */}
          <div className="flex-1 flex flex-row lg:flex-col items-center lg:items-end justify-center lg:justify-end gap-4 lg:gap-3">
            {social.map((item, idx) => (
              <a key={idx} href={item.href} className="inline-block text-white hover:text-gray-200 transition" aria-label={item.name}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-xs text-white/80 mt-6 sm:mt-8">
          © 2025 Everyday Care Franchise LLC dba Reef Health. All rights reserved.
        </div>
      </footer>
      
   
    </div>
  );
} 