import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import Head from 'next/head'
import React from 'react'

function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Reef Health Benefits - Get Started Today",
    "description": "Ready to transform your health benefits? Contact our team to learn about affordable health plans, franchise opportunities, or schedule a consultation.",
    "url": "https://reefhealth.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Reef Health Benefits",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-833-353-7333",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Reef Health Benefits - Get Started Today | Call (833)-353-7333</title>
        <meta name="description" content="Ready to transform your health benefits? Contact our team to learn about affordable health plans starting at $29/mo, franchise opportunities, or schedule a consultation. Call (833)-353-7333 today." />
        <meta name="keywords" content="contact reef health, health insurance consultation, get started, health benefits inquiry, franchise opportunities contact, call reef health" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reefhealth.com/contact" />
        <meta property="og:title" content="Contact Reef Health Benefits - Get Started Today" />
        <meta property="og:description" content="Ready to transform your health benefits? Contact our team today. Call (833)-353-7333." />
        <meta property="og:image" content="https://reefhealth.com/hero.png" />
        <meta property="og:site_name" content="Reef Health Benefits" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://reefhealth.com/contact" />
        <meta property="twitter:title" content="Contact Reef Health Benefits - Get Started Today" />
        <meta property="twitter:description" content="Ready to transform your health benefits? Contact our team today. Call (833)-353-7333." />
        <meta property="twitter:image" content="https://reefhealth.com/hero.png" />

        {/* Additional SEO tags */}
        <link rel="canonical" href="https://reefhealth.com/contact" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className='max-w-[1500px] mx-auto md:px-5'>
        <ContactForm/>
        <FAQ />
      </main>
    </>
  )
}

export default Contact