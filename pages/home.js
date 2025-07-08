import React from 'react'
import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import OurTeam from '@/components/OurTeam'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Faq from '@/components/FAQ'
import Footer from '@/components/Footer'

function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Reef Health Benefits - Affordable Small Business Health Insurance",
    "description": "Hate health insurance? Then you'll love Reef Health. Affordable small business health insurance starting at $29/mo. Save up to 40% with transparent pricing and 24/7 telehealth access.",
    "url": "https://reefhealth.com/home",
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
        <meta name="description" content="Hate health insurance? Then you'll love Reef Health. Affordable small business health insurance starting at $29/mo. Save up to 40% with transparent pricing, 24/7 telehealth access, and comprehensive wellness benefits. Trusted by 100,000+ members." />
        <meta name="keywords" content="small business health insurance, affordable health insurance, business health plans, telehealth, health benefits, transparent pricing, employee benefits, health coverage" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reefhealth.com/home" />
        <meta property="og:title" content="Reef Health Benefits - Affordable Small Business Health Insurance" />
        <meta property="og:description" content="Save up to 40% on health insurance with transparent pricing and 24/7 telehealth access. Starting at $29/mo." />
        <meta property="og:image" content="https://reefhealth.com/hero.png" />
        <meta property="og:site_name" content="Reef Health Benefits" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://reefhealth.com/home" />
        <meta property="twitter:title" content="Reef Health Benefits - Affordable Small Business Health Insurance" />
        <meta property="twitter:description" content="Save up to 40% on health insurance with transparent pricing and 24/7 telehealth access. Starting at $29/mo." />
        <meta property="twitter:image" content="https://reefhealth.com/hero.png" />

        {/* Additional SEO tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://reefhealth.com/home" />
        <meta name="theme-color" content="#e03a6a" />
        
        {/* Structured Data for Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <main className='max-w-[1500px] mx-auto md:px-5'>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <OurTeam />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
    </>
  )
}

export default Home