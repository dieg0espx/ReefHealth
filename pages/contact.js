import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import Head from 'next/head'
import React from 'react'
import Testimonials from '@/components/Testimonials'

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
        <Testimonials />
        <FAQ />
      </main>
    </>
  )
}

export default Contact