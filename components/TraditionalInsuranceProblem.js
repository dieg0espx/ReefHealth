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
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Problem with Traditional Health Insurance
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            For decades, health insurance has been sold as "protection" — but for employers and employees, it's become a trap.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#fbe6ed] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Skyrocketing Premiums</h3>
            <p className="text-gray-600">Every year costs go up by 10-18%, yet coverage rarely improves.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#fbe6ed] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Huge Out-of-Pocket Costs</h3>
            <p className="text-gray-600">Deductibles and co-pays so high that people avoid care entirely.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#fbe6ed] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Confusing Rules</h3>
            <p className="text-gray-600">Networks, pre-approvals, surprise bills, and fine print leave you guessing about the real cost.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#fbe6ed] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Inefficient & Wasteful</h3>
            <p className="text-gray-600">Layers of middlemen inflate costs while delaying care.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#fbe6ed] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">One-Size-Fits-All Plans</h3>
            <p className="text-gray-600">Pricing bias against small businesses and high-headcount industries makes coverage unaffordable.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#fbe6ed] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#e03a6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Broken System</h3>
            <p className="text-gray-600">The result? Employers pay more, employees get less, and the healthcare system stays broken.</p>
          </div>
        </div>

        {/* The Reef Solution Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Reef Solution
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reef flips the model by removing the bloat, confusion, and inflated pricing of traditional insurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e03a6a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Transparent, Predictable Pricing</h4>
              <p className="text-gray-600">Flat monthly rates—no guessing, no surprise bills.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#e03a6a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Virtual-First Care, 24/7/365</h4>
              <p className="text-gray-600">Access to doctors, urgent care, specialists, and mental health support anytime, anywhere.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#e03a6a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Minimal or $0 Out-of-Pocket</h4>
              <p className="text-gray-600">No one skips treatment because of cost.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#e03a6a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Personal Care Navigation</h4>
              <p className="text-gray-600">We handle scheduling, referrals, cost negotiations, and follow-ups so you never navigate the system alone.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#e03a6a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Nationwide Access</h4>
              <p className="text-gray-600">Same pricing in every state, without punishing small groups or specific industries.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#e03a6a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Whole-Family Coverage</h4>
              <p className="text-gray-600">Affordable plans that protect your entire household—not just the employee.</p>
            </div>
          </div>
        </div>

        {/* Value Promise Section */}
        <div className="bg-gradient-to-r from-[#e03a6a] to-[#d12e5c] rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our Value Promise
          </h3>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            With Reef, you're not buying "insurance"—you're getting healthcare that actually works. We protect your people, reduce your costs, and eliminate the hidden traps that make traditional insurance so expensive and frustrating.
          </p>
          <div className="text-2xl sm:text-3xl font-bold mb-8">
            Lower costs. Better care. Zero confusion.
          </div>
          <div className="text-xl font-semibold">
            That's the Reef difference.
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12">
          <button 
            onClick={scrollToPricing}
            className="bg-[#e03a6a] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#d12e5c] transition flex items-center justify-center gap-2 text-lg cursor-pointer hover:scale-105 transform duration-200"
          >
            Get Started Today <i className="bi bi-arrow-up-right"></i>
          </button>
          <button 
            onClick={handleCallClick}
            className="bg-white border-2 border-[#e03a6a] text-[#e03a6a] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 text-lg cursor-pointer hover:scale-105 transform duration-200"
          >
            Call (833)-353-7333 <i className="bi bi-arrow-up-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
