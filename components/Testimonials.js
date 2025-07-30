import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    rating: 5,
    title: 'No Regrets Switching',
    text: 'We switched from Blue Cross and have no regrets. The coverage is comprehensive and the cost savings are significant.',
    name: 'Jason H.',
    role: 'Business Owner',
    img: '/doctor1.jpg',
  },
  {
    rating: 5,
    title: 'Reduced Employee Turnover',
    text: 'Reef helped reduce employee turnover significantly. Our team loves the benefits and it shows in their retention.',
    name: 'Paul J.',
    role: 'HR Director',
    img: '/doctor2.jpg',
  },
  {
    rating: 5,
    title: 'Huge Value & Convenience',
    text: 'Huge value and incredible convenience. The platform is easy to use and the benefits are exactly what we needed.',
    name: 'Nathan S.',
    role: 'Small Business Owner',
    img: '/doctor3.jpg',
  },
  {
    rating: 5,
    title: 'Easy Appointments',
    text: 'Easy to schedule appointments and the 24/7 telehealth access has been a game-changer for our team.',
    name: 'Hilary J.',
    role: 'Operations Manager',
    img: '/doctor1.jpg',
  },
  {
    rating: 5,
    title: 'Saved Thousands',
    text: 'Saved us thousands compared to our previous plan while providing better coverage and more benefits.',
    name: 'Verne H.',
    role: 'Franchise Owner',
    img: '/doctor4.jpg',
  },
];

function Stars({ count }) {
  return (
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <i key={i} className={`bi ${i < count ? 'bi-star-fill text-[#e03a6a]' : 'bi-star text-gray-300'}`}></i>
      ))}
    </div>
  );
}

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,  
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Testimonials() {
  return (
    <section className="bg-light-pink rounded-3xl px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 mt-10">What Our Members Say</h2>
        <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-4xl mx-auto">Real feedback from business owners and employees who&apos;ve experienced the Reef difference in their health coverage.</p>
        <Slider {...sliderSettings} className="pb-6 sm:pb-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-2 sm:px-3">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-left flex flex-col justify-between shadow h-[350px] sm:h-[380px]">
                <div>
                  <Stars count={t.rating} />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{t.title}</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{t.text}</p>
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <Image src={t.img} alt={t.name} width={40} height={40} className="rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-black text-sm sm:text-base leading-tight">{t.name}</div>
                    <div className="text-gray-500 text-xs leading-tight">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
} 