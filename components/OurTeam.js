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
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto text-center">
        <span className="inline-block bg-[#e03a6a] text-white px-6 py-2 rounded-full font-semibold mb-8">Our Team</span>
        <h2 className="text-6xl font-bold text-gray-900 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          {/* <button className="absolute left-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition">
            <span className="text-[#e03a6a] text-2xl">&#8592;</span>
          </button> */}
          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full ">
            {team.map((member, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden shadow-lg relative group">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-96"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-white text-lg">{member.role}</p>
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