import React from 'react';
import Image from 'next/image';

function MemberPortalCTA() {
  return (
    <div className="w-full mt-16 bg-main-pink rounded-2xl p-8 text-white text-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/stock/iStock-2166712407 (1).jpg"
          alt="Member Portal Background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6">
          <i className="bi bi-person-circle text-4xl text-white/80 mb-4 block"></i>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Already a Member?</h3>
          <p className="text-lg text-pink-100 mb-6">
            Access your member dashboard, discounts, wellness tools, and more through our Member Portal.
          </p>
        </div>
        <button 
          onClick={() => window.location.href = '/portal'}
          className="bg-white text-main-pink px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 hover:scale-105"
        >
          Access Member Portal
          <i className="bi bi-arrow-up-right"></i>
        </button>
      </div>
    </div>
  );
}

export default MemberPortalCTA; 