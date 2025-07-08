import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

function Blog() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Reef Health Benefits Blog - Health Insurance Insights",
    "description": "Stay informed with our latest articles on health insurance trends, small business benefits strategies, and how to get the most value from your health plan.",
    "url": "https://reefhealth.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Reef Health Benefits",
      "logo": {
        "@type": "ImageObject",
        "url": "https://reefhealth.com/logo-white.png"
      }
    },
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "Why Traditional Insurance Isn't Working",
        "description": "Discover why traditional health insurance models are failing small businesses and what alternatives exist.",
        "image": "https://reefhealth.com/doctor1.jpg",
        "datePublished": "2024-01-01",
        "author": {
          "@type": "Organization",
          "name": "Reef Health Benefits"
        }
      },
      {
        "@type": "BlogPosting", 
        "headline": "Common Employee Benefits Mistakes",
        "description": "What most small businesses get wrong with employee benefits and how to avoid these costly mistakes.",
        "image": "https://reefhealth.com/doctor2.jpg",
        "datePublished": "2024-01-01",
        "author": {
          "@type": "Organization",
          "name": "Reef Health Benefits"
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Reef Health Benefits Blog - Health Insurance Insights & Small Business Tips</title>
        <meta name="description" content="Stay informed with our latest articles on health insurance trends, small business benefits strategies, and how to get the most value from your health plan. Expert insights from Reef Health Benefits." />
        <meta name="keywords" content="health insurance blog, small business benefits, health insurance trends, employee benefits strategies, health plan tips, business insurance insights" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reefhealth.com/blog" />
        <meta property="og:title" content="Reef Health Benefits Blog - Health Insurance Insights" />
        <meta property="og:description" content="Stay informed with our latest articles on health insurance trends and small business benefits strategies." />
        <meta property="og:image" content="https://reefhealth.com/hero.png" />
        <meta property="og:site_name" content="Reef Health Benefits" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://reefhealth.com/blog" />
        <meta property="twitter:title" content="Reef Health Benefits Blog - Health Insurance Insights" />
        <meta property="twitter:description" content="Stay informed with our latest articles on health insurance trends and small business benefits strategies." />
        <meta property="twitter:image" content="https://reefhealth.com/hero.png" />

        {/* Additional SEO tags */}
        <link rel="canonical" href="https://reefhealth.com/blog" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className='max-w-[1500px] mx-auto md:px-5'>
        <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
          <div className="mx-auto text-center">
            <span className="inline-block bg-light-pink text-main-pink px-4 sm:px-6 py-2 rounded-full font-semibold mb-6 sm:mb-8 text-sm sm:text-base">Our Blog</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">Insights on Health Benefits & Small Business</h1>
            <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-3xl mx-auto">Stay informed with our latest articles on health insurance trends, small business benefits strategies, and how to get the most value from your health plan.</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5' role="main">
            <article className='border border-gray-300 rounded-3xl'>
              <Image src={"/doctor1.jpg"} className='w-full rounded-t-3xl' width={500} height={300} alt="Doctor consultation representing traditional insurance challenges"/>
              <div className='p-4 sm:p-5'>
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2 sm:gap-0'>
                  <h2 className='text-black font-semibold text-lg sm:text-xl'> Why Traditional Insurance Isn't Working </h2>
                  <div className='flex gap-1 flex-wrap'>
                    <span className='bg-main-pink rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> 2024 </span>
                    <span className='bg-gray-700 rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> Business </span>
                  </div>
                </div>
                <p className='text-gray-600 text-sm sm:text-base'> Discover why traditional health insurance models are failing small businesses and what alternatives exist. Learn about the hidden costs, complex processes, and limited options that plague conventional plans.</p>
              </div>
            </article>
            
            <article className='border border-gray-300 rounded-3xl'>
              <Image src={"/doctor2.jpg"} className='w-full rounded-t-3xl' width={500} height={300} alt="HR professional reviewing employee benefits"/>
              <div className='p-4 sm:p-5'>
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2 sm:gap-0'>
                  <h2 className='text-black font-semibold text-lg sm:text-xl'> Common Employee Benefits Mistakes </h2>
                  <div className='flex gap-1 flex-wrap'>
                    <span className='bg-main-pink rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> 2024 </span>
                    <span className='bg-gray-700 rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> HR Tips </span>
                  </div>
                </div>
                <p className='text-gray-600 text-sm sm:text-base'> What most small businesses get wrong with employee benefits and how to avoid these costly mistakes. From overpaying for coverage to choosing the wrong plans, we break down the pitfalls.</p>
              </div>
            </article>
            
            <article className='border border-gray-300 rounded-3xl'>
              <Image src={"/doctor3.jpg"} className='w-full rounded-t-3xl' width={500} height={300} alt="Healthcare professional explaining health plans"/>
              <div className='p-4 sm:p-5'>
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2 sm:gap-0'>
                  <h2 className='text-black font-semibold text-lg sm:text-xl'> Making Health Plans Easy to Understand </h2>
                  <div className='flex gap-1 flex-wrap'>
                    <span className='bg-main-pink rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> 2024 </span>
                    <span className='bg-gray-700 rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> Education </span>
                  </div>
                </div>
                <p className='text-gray-600 text-sm sm:text-base'> Health insurance doesn't have to be complicated. Learn how to decode insurance jargon, compare plans effectively, and make informed decisions about your health coverage options.</p>
              </div>
            </article>
            
            <article className='border border-gray-300 rounded-3xl'>
              <Image src={"/doctor4.jpg"} className='w-full rounded-t-3xl' width={500} height={300} alt="Reef Health innovation in insurance"/>
              <div className='p-4 sm:p-5'>
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2 sm:gap-0'>
                  <h2 className='text-black font-semibold text-lg sm:text-xl'> How Reef is Fixing Broken Insurance </h2>
                  <div className='flex gap-1 flex-wrap'>
                    <span className='bg-main-pink rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> 2024 </span>
                    <span className='bg-gray-700 rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> Innovation </span>
                  </div>
                </div>
                <p className='text-gray-600 text-sm sm:text-base'> Discover how Reef Health is revolutionizing the health insurance industry with transparent pricing, direct care access, and technology-driven solutions that put members first.</p>
              </div>
            </article>
            
            <article className='border border-gray-300 rounded-3xl'>
              <Image src={"/doctorOnPhone.jpg"} className='w-full rounded-t-3xl' width={500} height={300} alt="Doctor providing telehealth consultation"/>
              <div className='p-4 sm:p-5'>
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2 sm:gap-0'>
                  <h2 className='text-black font-semibold text-lg sm:text-xl'> The Future of Telehealth </h2>
                  <div className='flex gap-1 flex-wrap'>
                    <span className='bg-main-pink rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> 2024 </span>
                    <span className='bg-gray-700 rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> Technology </span>
                  </div>
                </div>
                <p className='text-gray-600 text-sm sm:text-base'> Explore how 24/7 telehealth access is changing the healthcare landscape and why virtual primary care is becoming the preferred choice for busy professionals and their families.</p>
              </div>
            </article>
            
            <article className='border border-gray-300 rounded-3xl'>
              <Image src={"/sport-woman.jpg"} className='w-full rounded-t-3xl' width={500} height={300} alt="Woman exercising representing wellness benefits"/>
              <div className='p-4 sm:p-5'>
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2 sm:gap-0'>
                  <h2 className='text-black font-semibold text-lg sm:text-xl'> Wellness Benefits That Actually Work </h2>
                  <div className='flex gap-1 flex-wrap'>
                    <span className='bg-main-pink rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> 2024 </span>
                    <span className='bg-gray-700 rounded-xl text-white px-3 sm:px-5 py-1 text-center text-sm sm:text-base'> Wellness </span>
                  </div>
                </div>
                <p className='text-gray-600 text-sm sm:text-base'> From gym access to mental health support, discover which wellness benefits actually improve employee satisfaction and reduce healthcare costs for your business.</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

export default Blog