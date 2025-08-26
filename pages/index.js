import React from 'react'
import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import OurTeam from '@/components/OurTeam'
import HealthInsuranceCosts from '@/components/HealthInsuranceCosts'
import TrustedBrands from '@/components/TrustedBrands'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Faq from '@/components/FAQ'
import WhyWeTheBest from '@/components/WhyWeTheBest'
import MemberPortalCTA from '@/components/MemberPortalCTA'
function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Reef Health Benefits - Affordable Small Business Health Insurance",
    "description": "Hate health insurance? Then you'll love Reef Health. Affordable small business health insurance for just a few dollars a day. Save up to 40% with transparent pricing and 24/7 telehealth access.",
    "url": "https://reefhealth.com/",
    "mainEntity": {
      "@type": "Organization",
      "name": "Reef Health Benefits",
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter Plan",
          "price": "29",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "29",
            "priceCurrency": "USD",
            "unitText": "MONTH"
          }
        },
        {
          "@type": "Offer", 
          "name": "Foundation Plan",
          "price": "99",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "99",
            "priceCurrency": "USD",
            "unitText": "MONTH"
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Reef Health Benefits - Affordable Small Business Health Insurance | Save Up to 40%</title>
        <meta name="description" content="Hate health insurance? Then you'll love Reef Health. Affordable small business health insurance for just a few dollars a day. Save up to 40% with transparent pricing, 24/7 telehealth access, and comprehensive wellness benefits. Trusted by 100,000+ members." />
        <meta name="keywords" content="health insurance, affordable health insurance, health plans, telehealth, health benefits, transparent pricing, individual health coverage, family health coverage" />
        
        {/* Additional SEO tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://reefhealth.com/" />
        <meta name="theme-color" content="#EE2966" />
        
        {/* Structured Data for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <main className='max-w-[1500px] mx-auto px-4 sm:px-6 md:px-5 space-y-8 sm:space-y-10'>
        <Hero />
        <TrustedBrands />
        <HealthInsuranceCosts />
        <Testimonials />
        <About />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <WhyWeTheBest />
        <MemberPortalCTA />
        <Faq />
      </main>
    </>
  )
}

export default Home
