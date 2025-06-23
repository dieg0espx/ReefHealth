import React, { useState } from 'react';

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 px-4 bg-white border border-black">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center h-full">
          <span className="inline-block bg-[#e03a6a] text-white px-6 py-2 rounded-full font-semibold mb-8 self-start">FAQ</span>
          <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Frequently Asked<br />Questions</h2>
          <p className="text-lg text-gray-500 mb-10 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquet.</p>
          <div className="flex gap-6">
            <button className="bg-[#e03a6a] text-white px-10 py-4 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center gap-2 text-lg">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></button>
            <button className="bg-white border-0 text-[#e03a6a] px-8 py-3 rounded-full font-semibold shadow-none hover:bg-gray-100 transition flex items-center gap-2 text-lg">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`transition-all duration-300 rounded-2xl px-0 py-0 shadow-md ${isOpen ? 'bg-white border-l-8 border-[#e03a6a] scale-[1.03]' : 'bg-[#fbe6ed] border-l-8 border-transparent'} group`}
              >
                <button
                  className="flex items-center justify-between w-full px-8 py-6 text-2xl font-semibold focus:outline-none transition-colors duration-300"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6">
                    <span className={`font-bold text-2xl md:text-3xl w-10 transition-colors duration-300 ${isOpen ? 'text-[#e03a6a]' : 'text-[#e03a6a]/80'}`}>{`0${idx + 1}`}</span>
                    <span className={`text-left transition-colors duration-300 text-base md:text-lg ${isOpen ? 'text-[#e03a6a]' : 'text-[#23182c]'}`}>{faq.question}</span>
                  </div>
                  <span
                    className={`text-2xl font-light transition-transform duration-300 ${isOpen ? 'text-[#e03a6a] rotate-45' : 'text-[#23182c] rotate-0'}`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 px-8 ${isOpen ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                  style={{
                    transitionProperty: 'max-height, opacity, padding',
                  }}
                >
                  <div className="text-lg text-[#23182c]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 