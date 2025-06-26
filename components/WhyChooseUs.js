import React from 'react';
import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left: Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1">
          <Image
            src="/doctor1.jpg"
            alt="Why Choose Us"
            width={700}
            height={500}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Right: Content */}
        <div className="flex flex-col justify-center h-full order-1 lg:order-2">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">Lorem ipsum dolor sit amet consectetur</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquet. Quisque nec tincidunt purus, sed fermentum nisi. Fusce sagittis urna eu tortor dictum, in fermentum velit laoreet. Nulla facilisi. Integer eget eros sit amet sapien posuere efficitur. Etiam sodales metus vel eros posuere, at volutpat orci lacinia. Sed nec quam magna. Donec rhoncus ex eu laoreet sagittis. Etiam ultricies posuere lorem, sed aliquam magna.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="bg-[#e03a6a] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center justify-center gap-2 text-sm sm:text-base">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></button>
            <button className="bg-white border border-[#e03a6a] text-[#e03a6a] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm sm:text-base">Lorem ip <span className="inline-block transform rotate-45">→</span></button>
          </div>
        </div>
      </div>
    </section>
  );
} 