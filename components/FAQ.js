import React, { useState } from 'react';

const faqs = [
  {
    question: 'How easy is the enrollment process?',
    answer: 'Our enrollment process is designed to be simple and straightforward. You can get started in just a few steps: book a call, build your plan, and onboard to start saving.'
  },
  {
    question: 'What kind of savings can I get?',
    answer: 'You can save up to 40% on small business health plans compared to traditional insurance, with transparent pricing and no markups.'
  },
  {
    question: 'Can I personalize my plan?',
    answer: 'Yes! We offer multiple plan options from Starter ($29/mo) to Premium+ ($479/mo) to fit your specific business needs and budget.'
  },
  {
    question: 'What if I\'m already enrolled in a group health plan?',
    answer: 'We can help you evaluate your current plan and potentially transition to a more cost-effective and comprehensive Reef Health plan that better serves your team.'
  },
  {
    question: 'Do you only work with franchises?',
    answer: 'No, we work with all types of small businesses. While we offer franchise opportunities, our health plans are available to any qualifying small business.'
  },
  {
    question: 'Can you help reduce employee turnover?',
    answer: 'Yes! Meaningful health benefits are proven to increase employee satisfaction and retention. Our comprehensive coverage helps you attract and keep top talent.'
  },
  {
    question: 'How do Reef Health plans compare to traditional health insurance?',
    answer: 'Reef removes the middleman, uses real-time tech for efficient care access, offers transparent pricing with no markups, and we\'re the end-provider—not a reseller.'
  },
  {
    question: 'Do Reef Health plans cover family members?',
    answer: 'Yes, our plans can include coverage for family members. Contact us to discuss family coverage options that work for your specific situation.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:833-353-7333';
  };

  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <span className="inline-block bg-[#e03a6a] text-white px-4 sm:px-6 py-2 rounded-full font-semibold mb-6 sm:mb-8 text-sm sm:text-base">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">Frequently Asked<br />Questions</h2>
          <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-10 max-w-xl mx-auto">Got questions about Reef Health? We've got answers. Find out how we're different from traditional health insurance.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button 
              onClick={scrollToPricing}
              className="bg-[#e03a6a] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer hover:scale-105 transform duration-200"
            >
              Get Started <i className="bi bi-arrow-up-right"></i>
            </button>
            <button 
              onClick={handleCallClick}
              className="bg-white border border-[#e03a6a] text-[#e03a6a] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer hover:scale-105 transform duration-200"
            >
              Call (833)-353-7333 <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>
        </div>
        
        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl transition-all duration-200 ${isOpen ? 'border-[#e03a6a] bg-white shadow-lg' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}
              >
                <button
                  className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-bold text-lg transition-colors duration-200 ${isOpen ? 'text-[#e03a6a]' : 'text-gray-600'}`}>
                      {`0${idx + 1}`}
                    </span>
                    <span className={`font-semibold text-base transition-colors duration-200 ${isOpen ? 'text-[#e03a6a]' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <span className={`text-xl font-light ml-4 transition-all duration-200 ${isOpen ? 'text-[#e03a6a] transform rotate-180' : 'text-gray-600'}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 animate-fadeIn">
                    <div className="pl-10 text-gray-700 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 