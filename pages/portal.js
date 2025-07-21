import Head from 'next/head'
import React from 'react'

function Portal() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Member Portal - Reef Health Benefits Login Access",
    "description": "Access your Reef Health Benefits portals including broker login, member login, discounts, and provider search tools.",
    "url": "https://reefhealth.com/portal",
    "mainEntity": {
      "@type": "Organization",
      "name": "Reef Health Benefits"
    }
  };

  const brokerLinks = [
    {
      title: "Broker Store",
      description: "Access broker tools and resources",
      url: "https://www.redirecthealth.com/reefhealth/",
      icon: "bi-shop"
    },
    {
      title: "Fit On Health",
      description: "Fitness and wellness platform",
      url: "https://app.fitonapp.com/",
      icon: "bi-heart-pulse"
    },
    {
      title: "Reef Discounts",
      description: "Member discount portal",
      url: "https://discounts.reefhealth.com/",
      icon: "bi-percent"
    },
    {
      title: "RDH Doctor/Provider Search",
      description: "Find healthcare providers",
      url: "https://providersearch.multiplan.com/",
      icon: "bi-search"
    },
    {
      title: "Dental/Vision",
      description: "Dental and vision benefits",
      url: "https://wholesale.1dental.net/?afmc=1cc&utm_campaign=1cc&utm_source=leaddyno&utm_medium=affiliate",
      icon: "bi-eye"
    },
    {
      title: "Key Documents",
      description: "Important documents and forms",
      url: "https://docs.google.com/spreadsheets/d/11QHc-IkLUlc6a6yyt4RfqqPrD_YI8qanpYS9FQxkCAw/edit?gid=238435203#gid=238435203",
      icon: "bi-file-earmark-text"
    }
  ];

  const memberLinks = [
    {
      title: "RDH App",
      description: "Access your member dashboard",
      url: "https://www.redirecthealth.com/app/",
      icon: "bi-person-circle"
    },
    {
      title: "Fit On Health",
      description: "Fitness and wellness platform",
      url: "https://app.fitonapp.com/",
      icon: "bi-heart-pulse"
    },
    {
      title: "Reef Discounts",
      description: "Member discount portal",
      url: "https://discounts.reefhealth.com/",
      icon: "bi-percent"
    }
  ];

  return (
    <>
      <Head>
        <title>Member Portal - Reef Health Benefits Login Access</title>
        <meta name="description" content="Access your Reef Health Benefits portals including broker login, member login, discounts, and provider search tools. One convenient location for all your health benefit needs." />
        <meta name="keywords" content="reef health portal, member login, broker login, health benefits access, member dashboard, provider search" />
        
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://reefhealth.com/portal" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className='max-w-[1500px] mx-auto md:px-5'>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-main-pink to-pink-600 text-white py-20 px-4 mt-16 rounded-lg mx-4 md:mx-0">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Member Portal</h1>
            <p className="text-xl md:text-2xl text-pink-100">
              Access all your Reef Health Benefits portals in one convenient location
            </p>
          </div>
        </section>

        {/* Broker Login Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Broker Login</h2>
              <p className="text-lg text-gray-600">Access broker tools, resources, and management portals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brokerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border hover:border-main-pink group"
                >
                  <div className="flex items-center mb-4">
                    <i className={`${link.icon} text-2xl text-main-pink mr-4`}></i>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-main-pink transition-colors">
                      {link.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <div className="flex items-center text-main-pink font-medium">
                    Access Portal
                    <i className="bi bi-arrow-up-right ml-2"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Member Login Section */}
        <section className="py-16 px-4 bg-light-pink">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Member Login</h2>
              <p className="text-lg text-gray-600">Access your member benefits and wellness tools</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {memberLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border hover:border-main-pink group"
                >
                  <div className="flex items-center mb-4">
                    <i className={`${link.icon} text-2xl text-main-pink mr-4`}></i>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-main-pink transition-colors">
                      {link.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <div className="flex items-center text-main-pink font-medium">
                    Access Portal
                    <i className="bi bi-arrow-up-right ml-2"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Need Help?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you're having trouble accessing any of these portals or need assistance with your account, 
              our support team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-main-pink text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
            >
              Contact Support
              <i className="bi bi-arrow-right ml-2"></i>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default Portal 