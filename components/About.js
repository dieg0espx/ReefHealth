import React from 'react';

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-5 bg-white">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e03a6a] mb-6 sm:mb-8">About us</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-12 sm:mb-16 max-w-5xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquet. Quisque nec tincidunt purus, sed fermentum nisi. Fusce sagittis urna eu tortor dictum, in fermentum velit laoreet. Nulla facilisi. Integer eget eros sit amet sapien posuere efficitur. Etiam sodales metus vel eros posuere, at volutpat orci lacinia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-[#fbe6ed] rounded-3xl py-8 sm:py-10 md:py-12 px-4 sm:px-6 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e03a6a] mb-2">250+</span>
            <span className="text-base sm:text-lg text-[#e03a6a] font-medium">Lorem Ipsum</span>
          </div>
          <div className="bg-[#fbe6ed] rounded-3xl py-8 sm:py-10 md:py-12 px-4 sm:px-6 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e03a6a] mb-2">1,000+</span>
            <span className="text-base sm:text-lg text-[#e03a6a] font-medium">Lorem Ipsum</span>
          </div>
          <div className="bg-[#fbe6ed] rounded-3xl py-8 sm:py-10 md:py-12 px-4 sm:px-6 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e03a6a] mb-2">4.9/5</span>
            <span className="text-base sm:text-lg text-[#e03a6a] font-medium">Lorem Ipsum</span>
          </div>
        </div>
      </div>
    </section>
  );
} 