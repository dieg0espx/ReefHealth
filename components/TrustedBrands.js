import React from 'react';
import Image from 'next/image';

export default function TrustedBrands() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-100 w-full rounded-3xl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-2 sm:px-4 md:px-6 lg:px-8">
          {/* Left Side - Text */}
          <div className="flex-1 text-left px-4 sm:px-6 md:px-8 lg:px-12">
                         <h2 className="text-base sm:text-lg text-gray-500 leading-tight">
               Benefits trusted<br />
               by top brands and<br />
               over 100,000 members<br />
               nation-wide.
             </h2>
          </div>

          {/* Right Side - Logos and Member Count */}
          <div className="flex-1 flex items-center justify-end gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Company Logos */}
            <div className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Chick-fil-A */}
              <div className="flex items-center">
                <Image 
                  src="/logosCompanies/chick_fil_a.svg" 
                  alt="Chick-fil-A" 
                  width={500} 
                  height={250} 
                  className="object-contain filter grayscale opacity-70"
                />
              </div>

              {/* Jimmy John's */}
              <div className="flex items-center">
                <Image 
                  src="/logosCompanies/jimmy-johns.png" 
                  alt="Jimmy John's" 
                  width={500} 
                  height={250} 
                  className="object-contain filter grayscale opacity-70"
                />
              </div>

              {/* McDonald's */}
              <div className="flex items-center">
                <Image 
                  src="/logosCompanies/mc-donalds.png" 
                  alt="McDonald's" 
                  width={500} 
                  height={250} 
                  className="object-contain filter grayscale opacity-70"
                />
              </div>

              {/* College Hunks */}
              <div className="flex items-center">
                <Image 
                  src="/logosCompanies/college-hunks.png" 
                  alt="College Hunks" 
                  width={500} 
                  height={250} 
                  className="object-contain filter grayscale opacity-70"
                />
              </div>

              {/* MaidPro */}
              <div className="flex items-center">
                <Image 
                  src="/logosCompanies/maidpro.svg" 
                  alt="MaidPro" 
                  width={500} 
                  height={250} 
                  className="object-contain filter grayscale opacity-70"
                />
              </div>
            </div>

            {/* Member Count - In the same row as logos */}
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              +100,000 MEMBERS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
