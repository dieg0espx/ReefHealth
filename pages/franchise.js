import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TrustedBrands from '@/components/TrustedBrands'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'

function Franchise() {
  const [expandedSections, setExpandedSections] = useState({
    medical: false,
    physical: false,
    social: false
  });

  const [newsletterForm, setNewsletterForm] = useState({
    email: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState(null);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleNewsletterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewsletterForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNewsletterMessage(null);

    console.log('Submitting newsletter form:', newsletterForm);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsletterForm),
      });

      const data = await response.json();

      if (response.ok) {
        setNewsletterMessage({
          type: 'success',
          text: 'Thank you for subscribing! Please check your email for confirmation.'
        });
        setNewsletterForm({ email: '', newsletter: false });
      } else {
        setNewsletterMessage({
          type: 'error',
          text: data.message || 'Failed to subscribe. Please try again.'
        });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setNewsletterMessage({
        type: 'error',
        text: 'An error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Franchise Opportunities - Reef Health Benefits",
    "description": "Join the Reef Health franchise network. Own your own health benefits business with proven systems, training, and support. Start earning while helping others access affordable healthcare.",
    "url": "https://reefhealth.com/franchise",
    "mainEntity": {
      "@type": "Organization",
      "name": "Reef Health Benefits",
      "offers": [
        {
          "@type": "Offer",
          "name": "Franchise Opportunity",
          "description": "Own your own health benefits business"
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Franchise Opportunities - Own Your Health Benefits Business | Reef Health</title>
        <meta name="description" content="Join the Reef Health franchise network. Own your own health benefits business with proven systems, training, and support. Start earning while helping others access affordable healthcare." />
        <meta name="keywords" content="franchise opportunities, health benefits franchise, business ownership, healthcare franchise, franchise business" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://reefhealth.com/franchise" />
        <meta name="theme-color" content="#EE2966" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <main>
                 {/* Hero Section - Franchise */}
         <section className="bg-main-pink min-h-screen flex items-center mb-0">
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                         <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center">
              
                             {/* Left Side - Phone Image */}
               <div className="relative order-1 lg:order-1 lg:col-span-2 flex justify-center lg:justify-start">
                  <div className="relative">
                    <Image
                     src="/phone.png"
                     alt="Benefits Home App on Phone"
                     width={700}
                     height={1400}
                     className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] h-auto"
                      priority
                    />
                      </div>
                      </div>

                             {/* Right Side - Content */}
               <div className="order-2 lg:order-2 lg:col-span-3 text-white">
                {/* Review Section */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm">4.6 out of +3500 reviews</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">Google</span>
                    <div className="flex text-yellow-300">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                  {/* Main Headline */}
                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                   <span className="block">Franchise the evolution</span>
                   <span className="block">of small business health</span>
                   <span className="block">benefits.</span>
                    </h1>
                    
                {/* Sub-headline */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl">
                  Build a <strong>profitable franchise</strong> by offering SMBs up to <strong>40% savings</strong> on the leading health benefits, saving them endless time + money on turnover.
                </p>

                                 {/* Primary CTA Button */}
                 <button className="bg-white text-main-pink px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 mb-4">
                   Become a Franchisee
                    </button>
                    
                 {/* Secondary CTA Link */}
                 <div className="mt-4">
                   <Link href="/" className="text-main-pink hover:text-white underline text-base sm:text-lg transition-colors duration-300">
                     Join as a business
                   </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

         {/* Trusted Brands Section */}
         <TrustedBrands />

         {/* New Section - Healthcare Savings */}
         <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-gray-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
               {/* Left Side - Text Content */}
               <div className="space-y-4 sm:space-y-6">
                 {/* Main Headline */}
                 <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                   <span className="text-main-pink">We save American</span>
                   <span className="text-main-pink"> companies</span>
                   <span className="text-black"> a fortune on</span>
                   <span className="text-black"> healthcare + benefits.</span>
              </h2>

                 {/* First Paragraph */}
                 <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                   <strong>Employees demand healthcare</strong> forcing employers to choose between spending a fortune on coverage or risk high turnover costs by not offering it.
                 </p>

                 {/* Second Paragraph */}
                 <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                   <strong>Reef empower employers</strong> to get affordable care and benefits for as low as $29/mo helping the businesses and the employees.
                 </p>

                 {/* CTA Button */}
                 <button className="bg-main-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-pink-600 transition-all duration-300">
                   Get Started
                 </button>
              </div>

               {/* Right Side - Image */}
               <div className="relative">
                 {/* Pink accent block - positioned behind the image */}
                 <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-main-pink rounded-lg z-0"></div>
                 {/* Image - positioned to overlay the pink square */}
                 <div className="relative rounded-2xl overflow-hidden z-10">
                   <Image
                     src="/stock/iStock-1036131880.jpg"
                     alt="Woman working with tablet in office"
                     width={600}
                     height={400}
                     className="w-full h-auto"
                   />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reef Benefits Section - 5 Pillars */}
          <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  What are Reef Benefits? <span className="text-main-pink">5 pillars of better health.</span>
                </h2>
              </div>

                            {/* Pillars Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Medical & Mental Pillar */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical & Mental</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <svg className="w-8 h-8 text-main-pink" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v2H7V5zm0 4h6v2H7V9zm0 4h6v2H7v-2z"/>
                      </svg>
                      <svg className="w-8 h-8 text-main-pink" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Powered by Redirect Health, our medical and mental benefits are loved by over 30,000 members nationwide for both small businesses and individual members, offering a blend of in person and 24/7/365 virtual care.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <button 
                      onClick={() => toggleSection('medical')}
                      className="flex items-center justify-between w-full font-semibold text-gray-900 mb-3 hover:text-main-pink transition-colors"
                    >
                      <span>Includes</span>
                      <svg 
                        className={`w-5 h-5 transform transition-transform ${expandedSections.medical ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${expandedSections.medical ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Pediatric Care</li>
                        <li>• 24/7/365 Telehealth Primary Care</li>
                        <li>• 24/7 Care Medical Concierge</li>
                        <li>• Annual Physicals</li>
                        <li>• Lab Work + X-Rays</li>
                        <li>• No fee generic medications</li>
                        <li>• Mental Health Counseling</li>
                        <li>• In-office Primary and Urgent Care</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Physical & Financial Pillar */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Physical & Financial</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <svg className="w-8 h-8 text-main-pink" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                      </svg>
                      <svg className="w-8 h-8 text-main-pink" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Unlock access to thousands of top tier gym memberships, online classes, and wellness discounts at +400 national retailers, totaling over $5000 in savings.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <button 
                      onClick={() => toggleSection('physical')}
                      className="flex items-center justify-between w-full font-semibold text-gray-900 mb-3 hover:text-main-pink transition-colors"
                    >
                      <span>Includes</span>
                      <svg 
                        className={`w-5 h-5 transform transition-transform ${expandedSections.physical ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${expandedSections.physical ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Gym Membership access at +20k facilities, nationwide</li>
                        <li>• + 4k online virtual fitness classes</li>
                        <li>• Up to 40% off at +400 national wellness retailers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Social Pillar */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Social</h3>
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-main-pink" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Enjoy our members only networking for small business owners + franchisees who are part of the club.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <button 
                      onClick={() => toggleSection('social')}
                      className="flex items-center justify-between w-full font-semibold text-gray-900 mb-3 hover:text-main-pink transition-colors"
                    >
                      <span>Includes</span>
                      <svg 
                        className={`w-5 h-5 transform transition-transform ${expandedSections.social ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${expandedSections.social ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Members only networking for small business owners + franchisees who are part of the club</li>
                        <li>• Expand your network with the top owners in the nation</li>
                        <li>• Included in our $29/mo plan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* Why Franchise Section */}
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 items-center">
              {/* Image on the left */}
              <div className="relative mb-6 sm:mb-8 lg:mb-0 order-1 lg:order-1">
                <div className="relative z-10">
                  <Image
                    src="/stock/iStock-1306977756 (1).jpg"
                    alt="Two men shaking hands in a business setting"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-tl-2xl rounded-bl-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-32 h-32 sm:w-40 sm:h-40 bg-main-pink rounded-lg z-0"></div>
              </div>

              {/* Content on the right */}
              <div className="lg:pl-6 xl:pl-8 order-2 lg:order-2">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Why franchise? <span className="text-main-pink">No brick + mortar overhead. No royalties. No ad fund fees.</span> <span className="font-normal">Just low cost entry and a prebuilt lead pipeline.</span>
                </h2>
                <button className="bg-main-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-pink-700 transition-colors mb-4 sm:mb-6">
                  Get Started Today
                </button>
                                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 sm:gap-4">
                   <span className="text-xs sm:text-sm text-gray-600">Built by the same team that launched</span>
                   <div className="flex items-center gap-2 sm:gap-3">
                     <Image
                       src="/logo2.png"
                       alt="Company Logo"
                       width={210}
                       height={70}
                       className="h-11 sm:h-14 w-auto"
                     />
                     <Image
                       src="/eat-the-frog-logo.png"
                       alt="Eat The Frog Logo"
                       width={210}
                       height={70}
                       className="h-11 sm:h-14 w-auto"
                     />
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sound too good to be true Section */}
        <section className="bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Section */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
              {/* Left Side - Headline */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Sound too good to be true? <span className="text-main-pink">We&apos;ve heard that one before.</span>
                </h2>
              </div>
              
              {/* Right Side - Supporting Text */}
              <div>
                <p className="text-base sm:text-lg text-white leading-relaxed">
                  You&apos;re probably wondering what businesses have to give up to get lower rates? The answer... nothing. We are able to beat the costs of big healthcare benefit providers like BlueCross BlueShield by 40% on average with the same coverage if not better.
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-gray-600 mb-12"></div>

            {/* Middle Section */}
            <div className="text-left mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Here&apos;s how we do it
              </h3>
            </div>

            {/* Bottom Section - Two Cards */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Left Card */}
              <div className="bg-gray-800 rounded-2xl p-6 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-main-pink rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <Image
                      src="/chain.png"
                      alt="Chain Link Icon"
                      width={32}
                      height={32}
                      className="w-6 h-6 sm:w-8 sm:h-8 brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                    We remove the middle man.
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  Very few of the healthcare benefit companies out there are simply middle men that resell other people&apos;s benefits / policies / networks. To run their business, they have to drastically mark up the costs they receive from their partners. But we don&apos;t. We are the actual end-provider of these services so we don&apos;t have to mark up our plans...which means we can pass the savings back to you.
                </p>
              </div>

              {/* Right Card */}
              <div className="bg-gray-800 rounded-2xl p-6 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-main-pink rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <Image
                      src="/settings.png"
                      alt="Settings Icon"
                      width={32}
                      height={32}
                      className="w-6 h-6 sm:w-8 sm:h-8 brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                    We evolved the dinosaur model of insurance + healthcare.
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  You&apos;ve dealt with insurance providers...efficiency is one of the last words you&apos;d use to describe them. But we&apos;re different. We use real-time technology to help us help our members get the healthcare they need from people in their network as quickly as possible to reduce time and money expense.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pink Banner Section */}
        <section className="bg-black">
          <div className="bg-main-pink py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-white text-lg sm:text-xl font-medium">
                Prefer to just give us a call? Drop us a line and we&apos;re happy to chat{' '}
                <a href="tel:833-353-7333" className="font-bold hover:underline">
                  (833)-353-7333
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section with Custom Title */}
        <section className="bg-gray-50 rounded-3xl px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="mx-auto text-center">
                         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-main-pink mb-4 sm:mb-6 mt-10">Proven + loved by over 100,000 covered members.</h2>
            <Slider 
              dots={true}
              arrows={false}
              infinite={true}
              speed={500}
              autoplay={true}
              autoplaySpeed={2000}
              slidesToShow={4}
              slidesToScroll={1}
              responsive={[
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
              ]}
              className="pb-6 sm:pb-8"
            >
              {[
                {
                  rating: 5,
                  title: 'Game-Changing Benefits',
                  text: 'The comprehensive coverage and 24/7 access have been a game-changer for our business. Our employees love the convenience.',
                  name: 'Sarah M.',
                  role: 'HR Director',
                  img: '/stock/iStock-2148812508.jpg',
                },
                {
                  rating: 5,
                  title: 'Huge Value & Convenience',
                  text: 'Huge value and incredible convenience. The platform is easy to use and the benefits are exactly what we needed.',
                  name: 'Nathan S.',
                  role: 'Small Business Owner',
                  img: '/stock/iStock-1312635558.jpg',
                },
                {
                  rating: 5,
                  title: 'Easy Appointments',
                  text: 'Easy to schedule appointments and the 24/7 telehealth access has been a game-changer for our team.',
                  name: 'Hilary J.',
                  role: 'Operations Manager',
                  img: '/stock/iStock-1306977756 (1).jpg',
                },
                {
                  rating: 5,
                  title: 'Saved Thousands',
                  text: 'Saved us thousands compared to our previous plan while providing better coverage and more benefits.',
                  name: 'Verne H.',
                  role: 'Franchise Owner',
                  img: '/stock/iStock-1036131880.jpg',
                },
              ].map((t, idx) => (
                <div key={idx} className="px-2 sm:px-3 py-5">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 text-left flex flex-col justify-between shadow h-[350px] sm:h-[380px]">
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`bi ${i < t.rating ? 'bi-star-fill text-[#e03a6a]' : 'bi-star text-gray-300'}`}></i>
                        ))}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{t.title}</h3>
                      <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">{t.text}</p>
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

        {/* Signup Banner Section */}
        <section className="bg-gray-100">
          <div className="relative bg-gray-900 py-16 sm:py-20 md:py-24">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
              backgroundImage: 'url(/stock/iStock-2183708457.jpg)',
              filter: 'brightness(0.3)'
            }}></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Signup businesses. <span className="font-normal">Earn on every employee.</span>
              </h2>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <Pricing />

        {/* Newsletter Subscription Banner */}
        <section className="bg-main-pink py-6 sm:py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left Side - Text */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                  Want to learn more? Subscribe to<br />
                  our newsletter.
                </h2>
              </div>

              {/* Right Side - Subscription Form */}
              <div className="bg-main-pink rounded-2xl p-4 sm:p-6 md:p-8">
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-pink-200 mb-2">
                      Email (required)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={newsletterForm.email}
                      onChange={handleNewsletterChange}
                      required
                      className="w-full px-4 py-3 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 bg-pink-100 placeholder-pink-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={newsletterForm.newsletter}
                      onChange={handleNewsletterChange}
                      className="mt-1 h-4 w-4 text-white focus:ring-white border-pink-200 rounded-full"
                    />
                    <label htmlFor="newsletter" className="text-sm text-pink-200">
                      Sign up for news and updates
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                  
                  {newsletterMessage && (
                    <div className={`text-sm text-center p-2 rounded ${newsletterMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {newsletterMessage.text}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">
          <FAQ />
        </div>
      </main>
    </>
  )
}

export default Franchise
