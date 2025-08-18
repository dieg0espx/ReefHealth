import React from 'react';
import Image from 'next/image';

export default function TraditionalInsuranceProblem() {
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
    <section className="relative py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#e03a6a] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-pink-50 border border-pink-200 rounded-full text-pink-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
            The Real Problem
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Traditional Health Insurance
            <span className="block text-[#e03a6a]">Is Broken</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For decades, health insurance has been sold as "protection" — but for employers and employees, 
            it's become an expensive trap that delivers less value every year.
          </p>
        </div>

        {/* Problems Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The 6 Major Problems
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These issues cost you money, time, and peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-main-pink rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
              </div>
              <div className="pt-8">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Skyrocketing Premiums</h4>
                <p className="text-gray-600 leading-relaxed">Every year costs go up by 10-18%, yet coverage rarely improves. It's like paying more for less.</p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-main-pink rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
              </div>
              <div className="pt-8">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Huge Out-of-Pocket Costs</h4>
                <p className="text-gray-600 leading-relaxed">Deductibles and co-pays so high that people avoid care entirely, defeating the purpose of having insurance.</p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-main-pink rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
              </div>
              <div className="pt-8">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Confusing Rules & Fine Print</h4>
                <p className="text-gray-600 leading-relaxed">Networks, pre-approvals, surprise bills, and hidden clauses leave you guessing about real costs.</p>
              </div>
            </div>

            {/* Problem 4 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-main-pink rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
              </div>
              <div className="pt-8">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Inefficient & Wasteful</h4>
                <p className="text-gray-600 leading-relaxed">Layers of middlemen inflate costs while delaying care and adding bureaucratic red tape.</p>
              </div>
            </div>

            {/* Problem 5 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-main-pink rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
              </div>
              <div className="pt-8">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">One-Size-Fits-All Plans</h4>
                <p className="text-gray-600 leading-relaxed">Pricing bias against small businesses and high-headcount industries makes coverage unaffordable.</p>
              </div>
            </div>

            {/* Problem 6 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-main-pink rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
              </div>
              <div className="pt-8">
                <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Broken System</h4>
                <p className="text-gray-600 leading-relaxed">The result? Employers pay more, employees get less, and the healthcare system stays broken.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reef Solution Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-[#e03a6a] to-[#d12e5c] rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden ">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"></div>
            </div>
            
            <div className="relative text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                The Reef Solution
              </div>
              <h3 className="text-4xl lg:text-6xl font-bold mb-6">
                We Flip the Model
              </h3>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
                Reef removes the bloat, confusion, and inflated pricing of traditional insurance to deliver 
                healthcare that actually works.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">Transparent, Predictable Pricing</h4>
              <p className="text-center opacity-90 leading-relaxed">Flat monthly rates—no guessing, no surprise bills, no hidden fees.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">Virtual-First Care, 24/7/365</h4>
              <p className="text-center opacity-90 leading-relaxed">Access to doctors, urgent care, specialists, and mental health support anytime, anywhere.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">Minimal or $0 Out-of-Pocket</h4>
              <p className="text-center opacity-90 leading-relaxed">No one skips treatment because of cost. Period.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">Personal Care Navigation</h4>
              <p className="text-center opacity-90 leading-relaxed">We handle scheduling, referrals, cost negotiations, and follow-ups so you never navigate alone.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">Nationwide Access</h4>
              <p className="text-center opacity-90 leading-relaxed">Same pricing in every state, without punishing small groups or specific industries.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">Whole-Family Coverage</h4>
              <p className="text-center opacity-90 leading-relaxed">Affordable plans that protect your entire household—not just the employee.</p>
            </div>
          </div>
          </div>
        </div>

        {/* Value Promise Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 lg:p-16 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e03a6a]/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#e03a6a]/10 border border-[#e03a6a]/20 rounded-full text-[#e03a6a] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#e03a6a] rounded-full mr-2"></span>
              Our Promise to You
            </div>
            <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Lower costs. Better care.
              <span className="block text-[#e03a6a]">Zero confusion.</span>
            </h3>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              With Reef, you're not buying "insurance"—you're getting healthcare that actually works. 
              We protect your people, reduce your costs, and eliminate the hidden traps that make 
              traditional insurance so expensive and frustrating.
            </p>
            <div className="text-3xl lg:text-4xl font-bold text-gray-900">
              That's the Reef difference.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
