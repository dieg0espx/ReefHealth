import React from 'react';
import Image from 'next/image';

export default function TrustedBrands() {
  return (
    <section className="hidden sm:block py-12 sm:py-16 md:py-20 bg-white w-full rounded-3xl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-5">
        <div className="flex items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Text */}
          <h2 className="text-base sm:text-lg text-gray-500 leading-tight">
            Benefits trusted by top brands and over 100,000 members nation-wide.
          </h2>

          {/* Company Logos */}
          <div className="flex items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Chick-fil-A */}
            <div className="flex items-center">
              <Image 
                src="/logosCompanies/chick_fil_a.svg" 
                alt="Chick-fil-A" 
                width={500} 
                height={250} 
                className="object-contain filter grayscale opacity-70 transform scale-75 sm:scale-87.5 md:scale-100 lg:scale-112.5"
              />
            </div>

            {/* Jimmy John's */}
            <div className="flex items-center">
              <Image 
                src="/logosCompanies/jimmy-johns.png" 
                alt="Jimmy John's" 
                width={500} 
                height={250} 
                className="object-contain filter grayscale opacity-70 transform scale-75 sm:scale-87.5 md:scale-100 lg:scale-112.5"
              />
            </div>

            {/* McDonald's */}
            <div className="flex items-center">
              <Image 
                src="/logosCompanies/mc-donalds.png" 
                alt="McDonald's" 
                width={500} 
                height={250} 
                className="object-contain filter grayscale opacity-70 transform scale-75 sm:scale-87.5 md:scale-100 lg:scale-112.5"
              />
            </div>

            {/* College Hunks */}
            <div className="flex items-center">
              <Image 
                src="/logosCompanies/college-hunks.png" 
                alt="College Hunks" 
                width={500} 
                height={250} 
                className="object-contain filter grayscale opacity-70 transform scale-75 sm:scale-87.5 md:scale-100 lg:scale-112.5"
              />
            </div>

            {/* MaidPro */}
            <div className="flex items-center">
              <Image 
                src="/logosCompanies/maidpro.svg" 
                alt="MaidPro" 
                width={500} 
                height={250} 
                className="object-contain filter grayscale opacity-70 transform scale-75 sm:scale-87.5 md:scale-100 lg:scale-112.5"
              />
            </div>
          </div>

          {/* Member Count */}
          <p className="text-gray-600 font-medium text-sm sm:text-base">
            +100,000 MEMBERS
          </p>
        </div>
      </div>
    </section>
  );
}
