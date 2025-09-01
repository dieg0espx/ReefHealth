import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const icon = (
  <i className="bi bi-clipboard-check text-3xl mb-4 text-[#e03a6a]"></i>
);

// Plan features based on the actual pricing structure
const planFeatures = {
  "Foundation": [
    "Access to 20,000+ gyms & 4,000+ virtual fitness classes",
    "Up to 40% off at 400+ wellness retailers",
    "Exclusive wellness perks and discounts",
    "24/7 Virtual Primary Care",
    "$0 generic medications & immunizations",
    "Everyday 1to1® Care Navigation:",
    "White-glove appointment scheduling, referrals, and cost negotiation"
  ],
  "Premium": [
    "Access to 20,000+ gyms & 4,000+ virtual fitness classes",
    "Up to 40% off at 400+ wellness retailers",
    "Exclusive wellness perks and discounts",
    "24/7 Virtual Primary Care",
    "$0 generic medications & immunizations",
    "Everyday 1to1® Care Navigation:",
    "In-office Primary & Urgent Care",
    "Pediatric Care",
    "Annual physicals & well-child visits",
    "12 Chiropractic visits/year",
    "$0 Labs, Mental Health Tele-Counseling, and Rx",
    "Virtual Specialist Curbside Consult"
  ],
  "Premium Plus": [
    "Access to 20,000+ gyms & 4,000+ virtual fitness classes",
    "Up to 40% off at 400+ wellness retailers",
    "Exclusive wellness perks and discounts",
    "24/7 Virtual Primary Care",
    "$0 generic medications & immunizations",
    "Everyday 1to1® Care Navigation:",
    "In-office Primary & Urgent Care",
    "Pediatric Care",
    "Annual physicals & well-child visits",
    "12 Chiropractic visits/year",
    "$0 Labs, Mental Health Tele-Counseling, and Rx",
    "Virtual Specialist Curbside Consult",
    "Hospital coverage for serious medical events",
    "Lower financial risk and out-of-pocket costs"
  ],
  "Dental": [
    "No waiting periods--use immediately, even for pre-existing conditions",
    "Pay the discounted price directly at participating dentists",
    "Dental 40-60% discounts off all dental service",
    "Vision 20-40% off all vision and eyewear or Lasik surgery"
  ]
};

// Feature emphasis mapping (which features are included for each plan)
const featureEmphasis = {
  "Foundation": {
    "Access to 20,000+ gyms & 4,000+ virtual fitness classes": true,
    "Up to 40% off at 400+ wellness retailers": true,
    "Exclusive wellness perks and discounts": true,
    "24/7 Virtual Primary Care": true,
    "$0 generic medications & immunizations": true,
    "Everyday 1to1® Care Navigation:": true,
    "White-glove appointment scheduling, referrals, and cost negotiation": true
  },
  "Premium": {
    "Access to 20,000+ gyms & 4,000+ virtual fitness classes": true,
    "Up to 40% off at 400+ wellness retailers": true,
    "Exclusive wellness perks and discounts": true,
    "24/7 Virtual Primary Care": true,
    "$0 generic medications & immunizations": true,
    "Everyday 1to1® Care Navigation:": true,
    "White-glove appointment scheduling, referrals, and cost negotiation": true,
    "In-office Primary & Urgent Care": true,
    "Pediatric Care": true,
    "Annual physicals & well-child visits": true,
    "12 Chiropractic visits/year": true,
    "$0 Labs, Mental Health Tele-Counseling, and Rx": true,
    "Virtual Specialist Curbside Consult": true
  },
  "Premium Plus": {
    "Access to 20,000+ gyms & 4,000+ virtual fitness classes": true,
    "Up to 40% off at 400+ wellness retailers": true,
    "Exclusive wellness perks and discounts": true,
    "24/7 Virtual Primary Care": true,
    "$0 generic medications & immunizations": true,
    "Everyday 1to1® Care Navigation:": true,
    "White-glove appointment scheduling, referrals, and cost negotiation": true,
    "In-office Primary & Urgent Care": true,
    "Pediatric Care": true,
    "Annual physicals & well-child visits": true,
    "12 Chiropractic visits/year": true,
    "$0 Labs, Mental Health Tele-Counseling, and Rx": true,
    "Virtual Specialist Curbside Consult": true,
    "Hospital coverage for serious medical events": true,
    "Lower financial risk and out-of-pocket costs": true
  },
  "Dental": {
    "No waiting periods--use immediately, even for pre-existing conditions": true,
    "Pay the discounted price directly at participating dentists": true,
    "Dental 40-60% discounts off all dental service": true,
    "Vision 20-40% off all vision and eyewear or Lasik surgery": true
  }
};

export default function Pricing() {
  const router = useRouter();
  const [selectedAgeRange, setSelectedAgeRange] = useState('18-44');
  const [selectedCoverage, setSelectedCoverage] = useState('Primary Member Only');

  // Actual monthly pricing data
  const pricingData = {
    "18-44": {
      "Primary Member Only": {
        "Dental": 15,
        "Foundation": 99,
        "Premium": 199,
        "Premium Plus": 479
      },
      "Primary Member + Spouse": {
        "Dental": 15,
        "Foundation": 189,
        "Premium": 349,
        "Premium Plus": 919
      },
      "Primary Member + Child(ren)": {
        "Dental": 15,
        "Foundation": 189,
        "Premium": 349,
        "Premium Plus": 919
      },
      "Primary Member + Family": {
        "Dental": 15,
        "Foundation": 269,
        "Premium": 499,
        "Premium Plus": 1299
      }
    },
    "45-59": {
      "Primary Member Only": {
        "Dental": 15,
        "Foundation": 99,
        "Premium": 199,
        "Premium Plus": 479
      },
      "Primary Member + Spouse": {
        "Dental": 15,
        "Foundation": 189,
        "Premium": 349,
        "Premium Plus": 919
      },
      "Primary Member + Child(ren)": {
        "Dental": 15,
        "Foundation": 189,
        "Premium": 349,
        "Premium Plus": 919
      },
      "Primary Member + Family": {
        "Dental": 15,
        "Foundation": 269,
        "Premium": 499,
        "Premium Plus": 1299
      }
    },
    "60-64": {
      "Primary Member Only": {
        "Dental": 15,
        "Foundation": 99,
        "Premium": 199,
        "Premium Plus": 579
      },
      "Primary Member + Spouse": {
        "Dental": 15,
        "Foundation": 189,
        "Premium": 349,
        "Premium Plus": 1029
      },
      "Primary Member + Child(ren)": {
        "Dental": 15,
        "Foundation": 189,
        "Premium": 349,
        "Premium Plus": 1029
      },
      "Primary Member + Family": {
        "Dental": 15,
        "Foundation": 269,
        "Premium": 499,
        "Premium Plus": 1399
      }
    }
  };

  const handlePlanSelection = (planTitle, planPrice) => {
    alert(`Great choice! You selected the ${planTitle} plan at $${planPrice}. 

Next steps:
1. Contact our team to complete enrollment
2. Provide company information
3. Start enjoying your benefits

Would you like to contact us now to get started?`);
    
    const shouldContact = confirm("Navigate to contact page to complete enrollment?");
    if (shouldContact) {
      router.push("/contact?plan=" + encodeURIComponent(planTitle));
    }
  };

  const getAvailableCoverageOptions = () => {
    if (!pricingData || !pricingData[selectedAgeRange]) return [];
    return Object.keys(pricingData[selectedAgeRange]);
  };

  const getCurrentPricing = () => {
    if (!pricingData || !pricingData[selectedAgeRange] || !pricingData[selectedAgeRange][selectedCoverage]) {
      return {};
    }
    return pricingData[selectedAgeRange][selectedCoverage];
  };

  const currentPricing = getCurrentPricing();
  const availableCoverageOptions = getAvailableCoverageOptions();

    return (
    <section id="pricing" className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-6 sm:pb-8 md:pb-12 lg:pb-16 px-3 sm:px-4 md:px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 md:mb-6 leading-tight">Choose Your Plan</h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mb-4 sm:mb-6 md:mb-8 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-4">Affordable small business health insurance with transparent pricing and no markups. All plans include comprehensive coverage.</p>
        </div>

        {/* Selection Controls */}
        <div className="mb-4 sm:mb-6 md:mb-8 bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row lg:flex-row gap-2 sm:gap-4 md:gap-6 items-center justify-center">
            <div className="flex flex-col w-full sm:w-auto items-center sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <label className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center sm:text-left">
                Step 1: Select your age range:
              </label>
              <select
                value={selectedAgeRange}
                onChange={(e) => setSelectedAgeRange(e.target.value)}
                className="w-full sm:w-auto px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e03a6a] focus:border-[#e03a6a] text-xs sm:text-sm md:text-base text-black"
              >
                <option value="18-44">18 to 44</option>
                <option value="45-59">45 to 59</option>
                <option value="60-64">60 to 64</option>
              </select>
            </div>

            <div className="flex flex-col w-full sm:w-auto items-center sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <label className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center sm:text-left">
                Step 2: Select your coverage:
              </label>
              <select
                value={selectedCoverage}
                onChange={(e) => setSelectedCoverage(e.target.value)}
                className="w-full sm:w-auto px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e03a6a] focus:border-[#e03a6a] text-xs sm:text-sm md:text-base text-black"
              >
                {availableCoverageOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {Object.entries(currentPricing).map(([planName, price], idx) => (
            <div
              key={planName}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-200 hover:shadow-xl transition-all duration-200 hover:scale-105 flex flex-col h-full"
            >
              {/* Header Section - Responsive Height */}
              <div className="h-12 sm:h-16 md:h-20 lg:h-24 flex items-center justify-center text-center mb-1 sm:mb-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#e03a6a] leading-tight">
                  {planName === "Foundation" ? "Foundation Plan" :
                   planName === "Premium" ? "Premium Plan" :
                   planName === "Premium Plus" ? "Premium Plus Plan" :
                   planName === "Dental" ? "Dental and Vision Plan" : planName}
                </h3>
              </div>

              {/* Price Section - Responsive Height */}
              <div className="h-12 sm:h-16 md:h-20 lg:h-24 flex flex-col items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                {planName === "Dental" && (
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 mb-1">from</div>
                )}
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  {planName === "Dental" ? "$15/month" : `$${price}/month`}
                </div>
              </div>
              
              {/* Features Section - Flexible Height */}
              <div className="flex-grow mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                <div className="text-center mb-3 sm:mb-4">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 border-2 border-[#e03a6a] rounded-full px-3 py-1 inline-block">
                    Benefits Include
                  </h4>
                </div>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  {planFeatures[planName]?.map((feature, i) => {
                    const isIncluded = featureEmphasis[planName]?.[feature];
                    return (
                      <li key={i} className={`text-xs sm:text-sm md:text-base leading-relaxed ${isIncluded ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Button Section - Responsive Height */}
              <div className="h-10 sm:h-12 md:h-14 lg:h-16 flex items-center">
                <button 
                  onClick={() => handlePlanSelection(planName, price)}
                  className="w-full bg-[#e03a6a] text-white py-1.5 sm:py-2 md:py-3 lg:py-4 px-2 sm:px-3 md:px-4 lg:px-6 rounded-full font-semibold hover:bg-[#d12e5c] transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base cursor-pointer hover:scale-105 transform"
                >
                  Enroll Now <i className="bi bi-arrow-up-right text-xs sm:text-sm md:text-base"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 