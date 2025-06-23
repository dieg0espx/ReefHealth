import React from 'react';

const icon = (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#e03a6a] mb-4"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6" /></svg>
);

const packages = [
  {
    title: 'Lorem Ipsum',
    subtitle: 'Lorem Ipsum',
    price: '$199.00 USD',
    features: [
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
    ],
    highlight: false,
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Lorem Ipsum',
    price: '$299.00 USD',
    features: [
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
    ],
    highlight: true,
    label: 'Lorem Ipsum',
  },
  {
    title: 'Lorem Ipsum',
    subtitle: 'Lorem Ipsum',
    price: '$249.00 USD',
    features: [
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto text-center">
        <span className="inline-block bg-[#e03a6a] text-white px-6 py-2 rounded-full font-semibold mb-8">Lorem Ipsum</span>
        <h2 className="text-6xl font-bold text-gray-900 mb-6">Lorem Ipsum</h2>
        <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-10 flex flex-col items-start shadow transition-all duration-300 ${pkg.highlight ? 'bg-[#e03a6a] text-white scale-105 z-10 relative' : 'bg-[#fbe6ed] text-[#e03a6a]'}`}
            >
              {pkg.highlight && (
                <span className="absolute top-6 left-1/2 -translate-x-1/2 bg-white text-[#e03a6a] px-4 py-1 rounded-full font-semibold text-sm mb-4">{pkg.label}</span>
              )}
              <span>{icon}</span>
              <h3 className={`text-3xl font-bold mb-1 ${pkg.highlight ? 'text-white' : 'text-[#1a1a1a]'}`}>{pkg.title}</h3>
              <div className={`mb-6 text-base ${pkg.highlight ? 'text-white/80' : 'text-[#1a1a1a]/70'}`}>{pkg.subtitle}</div>
              <div className={`text-3xl font-bold mb-8 ${pkg.highlight ? 'text-white' : 'text-[#e03a6a]'}`}>{pkg.price}</div>
              <button className={`w-full flex items-center justify-between px-6 py-3 rounded-full font-semibold mb-8 border ${pkg.highlight ? 'bg-white text-[#e03a6a] border-white' : 'bg-white text-[#e03a6a] border-[#e03a6a]'}`}>
                Lorem Ipsum <span className="inline-block transform rotate-45">→</span>
              </button>
              <ul className="w-full space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-2 ${pkg.highlight ? 'text-white font-semibold' : 'text-[#e03a6a]'}`}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 