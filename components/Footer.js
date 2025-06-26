import React from 'react';
import Image from 'next/image';

const links = [
  { name: 'Home', href: '#' },
  { name: 'Plans', href: '#' },
  { name: 'Signup Terms+Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Contact', href: '#' },
];

const social = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2"/><circle cx="12" cy="12" r="5" strokeWidth="2"/><circle cx="17" cy="7" r="1.5" fill="currentColor"/></svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2"/><path d="M7 10v6M7 7v.01M11 10v6m0-6h2.5a2.5 2.5 0 012.5 2.5V16" strokeWidth="2"/></svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2"/><path d="M10 9.5v5l4.5-2.5-4.5-2.5z" fill="currentColor"/></svg>
    ),
  },
];

export default function Footer() {
  return (
    <div>
      {/* Cover Image Section */}
      <div className="relative max-w-[1500px] mx-auto min-h-[400px] md:min-h-[600px] rounded-3xl overflow-hidden mb-[-60px] z-10 border border-white/40 flex flex-col justify-end pb-6 md:pb-10">
        <Image
          src="/doctorOnPhone.jpg"
          alt="Doctor on Phone"
          layout="fill"
          objectFit="cover"
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-2 md:px-4 text-center py-10 md:py-0">
          <span className="inline-block bg-white/20 text-white px-4 md:px-6 py-2 rounded-full font-semibold mb-4 md:mb-6 text-sm md:text-base">Lorem Ipsum</span>
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">Lorem ipsum dolor sit amet, consectetur<br className='hidden md:block'/>Lorem ipsum dolor sit amet, consectetur</h2>
          <button className="mt-4 md:mt-6 px-6 md:px-8 py-2 md:py-3 bg-white text-[#e03a6a] rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center gap-2 text-sm md:text-base">
            Contact Now <span className="inline-block transform rotate-45">→</span>
          </button>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#e03a6a] text-white pt-16 pb-6 px-4 mt-10 rounded-t-3xl mt-[100px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Left: Links */}
          <div className="flex-1 flex flex-col items-start gap-2 mb-8 md:mb-0">
            {links.map((link, idx) => (
              <a key={idx} href={link.href} className="text-white text-sm hover:underline transition">{link.name}</a>
            ))}
          </div>
          {/* Center: Logo */}
          <div className="flex-1 flex flex-col items-center">
            <Image src="/logo-white.png" alt="Reef Logo" width={150} height={150} className="mb-2" />
          </div>
          {/* Right: Social */}
          <div className="flex-1 flex flex-row md:flex-col items-end justify-end gap-4 md:gap-3">
            {social.map((item, idx) => (
              <a key={idx} href={item.href} className="inline-block text-white hover:text-gray-200 transition" aria-label={item.name}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-xs text-white/80 mt-8">
          © 2025 Everyday Care Franchise LLC dba Reef Health. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 