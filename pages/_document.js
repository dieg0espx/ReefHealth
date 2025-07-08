import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Header";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        {/* Bootstrap Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-white.png" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Global meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Reef Health Benefits" />
        <meta name="copyright" content="© 2025 Everyday Care Franchise LLC dba Reef Health" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Reef Health Benefits",
              "url": "https://reefhealth.com",
              "logo": "https://reefhealth.com/logo-white.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-833-353-7333",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.instagram.com/reefhealth",
                "https://www.linkedin.com/company/reefhealth",
                "https://www.youtube.com/reefhealth"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "description": "Affordable small business health insurance with transparent pricing, 24/7 telehealth, and comprehensive wellness benefits. Trusted by 100,000+ members."
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
