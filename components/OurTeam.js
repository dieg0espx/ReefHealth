import React from 'react';
import Image from 'next/image';

const team = [
  {
    name: 'Ellie Wilson',
    role: 'Lorem Ipsum',
    img: '/doctor2.jpg',
  },
  {
    name: 'Emily Davis',
    role: 'Lorem Ipsum',
    img: '/doctor3.jpg',
  },
  {
    name: 'Ruby Johnson',
    role: 'Lorem Ipsum',
    img: '/doctor4.jpg',
  },
];

export default function OurTeam() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
      <div className="mx-auto text-center">
        <span className="inline-block bg-[#e03a6a] text-white px-4 sm:px-6 py-2 rounded-full font-semibold mb-6 sm:mb-8 text-sm sm:text-base">Our Team</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-3xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          {/* <button className="absolute left-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition">
            <span className="text-[#e03a6a] text-2xl">&#8592;</span>
          </button> */}
          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {team.map((member, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden shadow-lg relative group">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-64 sm:h-80 md:h-96"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-white text-base sm:text-lg">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          {/* <button className="absolute right-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition">
            <span className="text-[#e03a6a] text-2xl">&#8594;</span>
          </button> */}
        </div>
      </div>
    </section>
  );
} 