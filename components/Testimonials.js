import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    rating: 4,
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipis',
    name: 'Anita Sharma',
    role: 'Lorem Ipsum',
    img: '/doctor1.jpg',
  },
  {
    rating: 5,
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipis',
    name: 'Lena Thompson',
    role: 'Lorem Ipsum',
    img: '/doctor2.jpg',
  },
  {
    rating: 3,
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipis',
    name: 'Monica Delgado',
    role: 'Lorem Ipsum',
    img: '/doctor3.jpg',
  },
  {
    rating: 5,
    title: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipis',
    name: 'Jessica Morgan',
    role: '18 classes',
    img: '/doctor1.jpg',
  },
];

function Stars({ count }) {
  return (
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < count ? 'text-[#e03a6a]' : 'text-gray-300'}>★</span>
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
    <section className="px-4 bg-[#fbe6ed] rounded-3xl mx-2 md:mx-6 p-10">
      <div className="mx-auto text-center">
        <span className="inline-block bg-white text-[#e03a6a] px-6 py-2 rounded-full font-semibold mb-8">• Testimonials</span>
        <h2 className="text-6xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
        <p className="text-lg text-gray-500 mb-12 max-w-4xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Slider {...sliderSettings} className="pb-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-3">
              <div className="bg-white rounded-3xl p-8 text-left flex flex-col justify-between h-full shadow">
                <Stars count={t.rating} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{t.text}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <Image src={t.img} alt={t.name} width={40} height={40} className="rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-black text-base leading-tight">{t.name}</div>
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