import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Header";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        {/* Bootstrap Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Global meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Reef Health Benefits" />
        <meta name="copyright" content="© 2025 Everyday Care Franchise LLC dba Reef Health" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reefhealth.com/" />
        <meta property="og:title" content="Reef Health Benefits - Affordable Small Business Health Insurance | Save Up to 40%" />
        <meta property="og:description" content="Hate health insurance? Then you'll love Reef Health. Affordable small business health insurance starting at $29/mo. Save up to 40% with transparent pricing and 24/7 telehealth access." />
        <meta property="og:image" content="https://reefhealth.com/miniature.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Reef Health Benefits" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reef Health Benefits - Affordable Small Business Health Insurance | Save Up to 40%" />
        <meta name="twitter:description" content="Hate health insurance? Then you'll love Reef Health. Affordable small business health insurance starting at $29/mo. Save up to 40% with transparent pricing and 24/7 telehealth access." />
        <meta name="twitter:image" content="https://reefhealth.com/miniature.png" />
        
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
