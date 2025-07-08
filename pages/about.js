import FAQ from '@/components/FAQ'
import Hero2 from '@/components/Hero2'
import OurHistory from '@/components/OurHistory'
import OurTeam from '@/components/OurTeam'
import Testimonials from '@/components/Testimonials'
import WhyWeTheBest from '@/components/WhyWeTheBest'
import Head from 'next/head'
import React from 'react'

function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Reef Health Benefits - Fixing the Broken Health Insurance System",
    "description": "Learn how Reef Health is revolutionizing small business health insurance with transparent pricing, direct care access, and franchise opportunities.",
    "url": "https://reefhealth.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Reef Health Benefits",
      "description": "Fixing the broken health insurance system by removing the middleman, using real-time tech for efficient care access, and providing transparent pricing with no markups."
    }
  };

  return (
    <>
      <Head>
        <title>About Reef Health Benefits - Fixing the Broken Health Insurance System</title>
        <meta name="description" content="Learn how Reef Health is revolutionizing small business health insurance. We remove the middleman, use real-time tech for efficient care access, and provide transparent pricing with no markups. Discover our franchise opportunities." />
        <meta name="keywords" content="about reef health, health insurance revolution, transparent health insurance, franchise opportunities, health benefits company, direct care access" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reefhealth.com/about" />
        <meta property="og:title" content="About Reef Health Benefits - Fixing the Broken Health Insurance System" />
        <meta property="og:description" content="Learn how Reef Health is revolutionizing small business health insurance with transparent pricing and direct care access." />
        <meta property="og:image" content="https://reefhealth.com/hero.png" />
        <meta property="og:site_name" content="Reef Health Benefits" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://reefhealth.com/about" />
        <meta property="twitter:title" content="About Reef Health Benefits - Fixing the Broken Health Insurance System" />
        <meta property="twitter:description" content="Learn how Reef Health is revolutionizing small business health insurance with transparent pricing and direct care access." />
        <meta property="twitter:image" content="https://reefhealth.com/hero.png" />

        {/* Additional SEO tags */}
        <link rel="canonical" href="https://reefhealth.com/about" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className='max-w-[1500px] mx-auto md:px-5'>
        <Hero2 />
        <OurTeam />
        <WhyWeTheBest />
        <OurHistory />
        <Testimonials />
        <FAQ />
      </main>
    </>
  )
}

export default About