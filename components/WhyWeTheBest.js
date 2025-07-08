import React from 'react';
import Image from 'next/image';

export default function WhyWeTheBest() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left: Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg h-full order-2 lg:order-1">
          <Image
            src="/doctorOnPhone.jpg"
            alt="How It Works"
            width={700}
            height={700}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Right: Content */}
        <div className="flex flex-col justify-center h-full order-1 lg:order-2">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">How It Works</h2>
          <div className="space-y-6 mb-8 sm:mb-10">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#e03a6a] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Book Your Call / Apply to Join</h3>
                <p className="text-base text-gray-700">Start your journey with a simple call or application to join our network of satisfied members.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#e03a6a] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Build Your Plan</h3>
                <p className="text-base text-gray-700">Customize your health benefits package to fit your business needs and budget perfectly.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#e03a6a] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Onboard + Save / Enjoy</h3>
                <p className="text-base text-gray-700">Complete the quick onboarding process and start saving money while enjoying comprehensive health benefits.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="bg-[#e03a6a] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center justify-center gap-2 text-sm sm:text-base">Get Started <i className="bi bi-arrow-up-right"></i></button>
            <button className="bg-white border border-[#e03a6a] text-[#e03a6a] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm sm:text-base">Call (833)-353-7333 <i className="bi bi-arrow-up-right"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
} 