import React from 'react';
import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
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
        <div className="flex flex-col justify-center h-full">
          
          <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Lorem ipsum dolor sit amet consectetur</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquet. Quisque nec tincidunt purus, sed fermentum nisi. Fusce sagittis urna eu tortor dictum, in fermentum velit laoreet. Nulla facilisi. Integer eget eros sit amet sapien posuere efficitur. Etiam sodales metus vel eros posuere, at volutpat orci lacinia. Sed nec quam magna. Donec rhoncus ex eu laoreet sagittis. Etiam ultricies posuere lorem, sed aliquam magna.</p>
          <div className="flex gap-6">
            <button className="bg-[#e03a6a] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center gap-2">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></button>
            <button className="bg-white border border-[#e03a6a] text-[#e03a6a] px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center gap-2">Lorem ip <span className="inline-block transform rotate-45">→</span></button>
          </div>
        </div>
      </div>
    </section>
  );
} 