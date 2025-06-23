import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="
        relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        min-h-[85vh] flex flex-col  justify-end
        bg-main-pink overflow-hidden rounded-b-3xl p-10
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center w-full h-full z-0">
        <div className="relative w-4/5 h-2/3">
          <Image
            src="/hero.png"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-cover object-center opacity-80 rounded-b-3xl"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full mt-[120px]">

        {/* Main Text */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mx-auto px-10">
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <span className="bg-white/10 border border-white/20 text-white px-4 py-1 rounded-full mb-4 text-sm">• Lorem Ipsum</span>
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-2">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</h1>
          </div>
          <div className="flex flex-col items-end mt-10">
            <p className="text-white text-base mb-2 text-right max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquet. Quisque</p>
            <button className="mt-2 px-8 py-3 bg-white text-[#e03a6a] rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center gap-2">
              Contact Now
              <span className="inline-block transform rotate-45">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 