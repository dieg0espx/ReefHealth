import React from 'react';
import Image from 'next/image';

interface RightStatPanelProps {
  stat?: string;
  caption?: string;
  imgSrc: string;
  imgAlt?: string;
  bgColorClass?: string;
}

export default function RightStatPanel({
  stat = "$603B",
  caption = "Health Insurance profited a whopping $603B in 2024 alone.",
  imgSrc,
  imgAlt = "surgeon in operating room",
  bgColorClass = "bg-[#F71984]"
}: RightStatPanelProps) {
  return (
    <div className={`relative isolate overflow-hidden ${bgColorClass} w-full lg:w-5/12 min-h-[520px] flex items-stretch`}>
      {/* Huge vertical number */}
      <span 
        className="absolute left-0 -translate-x-10 md:-translate-x-12 lg:-translate-x-16 top-1/2 -translate-y-1/2 text-[22rem] lg:text-[26rem] font-black leading-none tracking-tight text-black/90 transform -rotate-90 z-0 pointer-events-none"
        aria-hidden="true"
      >
        {stat}
      </span>

      {/* Circular image */}
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={260}
        height={260}
        className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 w-[160px] h-[160px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full object-cover ring-4 ring-white z-10"
      />

      {/* Caption */}
      <p className="absolute right-6 md:right-8 bottom-6 md:bottom-8 text-white text-sm md:text-base leading-snug max-w-[260px] font-semibold z-10">
        {caption}
      </p>
    </div>
  );
}
