import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const icon = (
  <i className="bi bi-clipboard-check text-3xl mb-4 text-[#e03a6a]"></i>
);

// Plan features based on the image description
const planFeatures = {
  "Starter": [
    "Health + Fitness Classes at 20k facilities + 4k virtual classes",
    "Health and Wellness Discounts, up to 40% off at 400 national retailers",
    "Members Only, Owner Networking",
    "24/7/365 Telehealth Primary Care",
    "24/7 Medical Concierge",
    "No fee generic medications",
    "Urgent Care",
    "Hospital Coverage"
  ],
  "Foundation": [
    "Health + Fitness Classes at 20k facilities + 4k virtual classes",
    "Health and Wellness Discounts, up to 40% off at 400 national retailers",
    "Members Only, Owner Networking",
    "24/7/365 Telehealth Primary Care",
    "24/7 Medical Concierge",
    "No fee generic medications",
    "Urgent Care",
    "Hospital Coverage"
  ],
  "iPremium": [
    "Health + Fitness Classes at 20k facilities + 4k virtual classes",
    "Health and Wellness Discounts, up to 40% off at 400 national retailers",
    "Members Only, Owner Networking",
    "24/7/365 Telehealth Primary Care",
    "24/7 Medical Concierge",
    "No fee generic medications",
    "Urgent Care",
    "Hospital Coverage"
  ],
  "iPremium PLUS": [
    "Health + Fitness Classes at 20k facilities + 4k virtual classes",
    "Health and Wellness Discounts, up to 40% off at 400 national retailers",
    "Members Only, Owner Networking",
    "24/7/365 Telehealth Primary Care",
    "24/7 Medical Concierge",
    "No fee generic medications",
    "Urgent Care",
    "Hospital Coverage"
  ]
};

// Feature emphasis mapping (which features are included for each plan)
const featureEmphasis = {
  "Starter": {
    "Health + Fitness Classes at 20k facilities + 4k virtual classes": true,
    "Health and Wellness Discounts, up to 40% off at 400 national retailers": true,
    "Members Only, Owner Networking": true,
    "24/7/365 Telehealth Primary Care": false,
    "24/7 Medical Concierge": false,
    "No fee generic medications": false,
    "Urgent Care": false,
    "Hospital Coverage": false
  },
  "Foundation": {
    "Health + Fitness Classes at 20k facilities + 4k virtual classes": true,
    "Health and Wellness Discounts, up to 40% off at 400 national retailers": true,
    "Members Only, Owner Networking": true,
    "24/7/365 Telehealth Primary Care": true,
    "24/7 Medical Concierge": true,
    "No fee generic medications": false,
    "Urgent Care": false,
    "Hospital Coverage": false
  },
  "iPremium": {
    "Health + Fitness Classes at 20k facilities + 4k virtual classes": true,
    "Health and Wellness Discounts, up to 40% off at 400 national retailers": true,
    "Members Only, Owner Networking": true,
    "24/7/365 Telehealth Primary Care": true,
    "24/7 Medical Concierge": true,
    "No fee generic medications": true,
    "Urgent Care": false,
    "Hospital Coverage": false
  },
  "iPremium PLUS": {
    "Health + Fitness Classes at 20k facilities + 4k virtual classes": true,
    "Health and Wellness Discounts, up to 40% off at 400 national retailers": true,
    "Members Only, Owner Networking": true,
    "24/7/365 Telehealth Primary Care": true,
    "24/7 Medical Concierge": true,
    "No fee generic medications": true,
    "Urgent Care": true,
    "Hospital Coverage": true
  }
};

export default function Pricing() {
  const router = useRouter();
  const [selectedAgeRange, setSelectedAgeRange] = useState('18-44');
  const [selectedCoverage, setSelectedCoverage] = useState('Primary Member Only');

  // Static pricing data to ensure it works
  const pricingData = {
    "18-44": {
      "Primary Member Only": {
        "Starter": 29,
        "Foundation": 99,
        "iPremium": 199,
        "iPremium PLUS": 479
      },
      "Primary Member + Spouse": {
        "Starter": 29,
        "Foundation": 189,
        "iPremium": 349,
        "iPremium PLUS": 919
      },
      "Primary Member + Child(ren)": {
        "Starter": 29,
        "Foundation": 189,
        "iPremium": 349,
        "iPremium PLUS": 919
      },
      "Primary Member + Family": {
        "Starter": 29,
        "Foundation": 269,
        "iPremium": 499,
        "iPremium PLUS": 1299
      }
    },
    "45-59": {
      "Primary Member Only": {
        "Starter": 29,
        "Foundation": 99,
        "iPremium": 199,
        "iPremium PLUS": 479
      },
      "Primary Member + Spouse": {
        "Starter": 29,
        "Foundation": 189,
        "iPremium": 349,
        "iPremium PLUS": 919
      },
      "Primary Member + Child(ren)": {
        "Starter": 29,
        "Foundation": 189,
        "iPremium": 349,
        "iPremium PLUS": 919
      },
      "Primary Member + Family": {
        "Starter": 29,
        "Foundation": 269,
        "iPremium": 499,
        "iPremium PLUS": 1299
      }
    },
    "60-64": {
      "Primary Member Only": {
        "Starter": 29,
        "Foundation": 99,
        "iPremium": 199,
        "iPremium PLUS": 579
      },
      "Primary Member + Spouse": {
        "Starter": 29,
        "Foundation": 189,
        "iPremium": 349,
        "iPremium PLUS": 1029
      },
      "Primary Member + Child(ren)": {
        "Starter": 29,
        "Foundation": 189,
        "iPremium": 349,
        "iPremium PLUS": 1029
      },
      "Primary Member + Family": {
        "Starter": 29,
        "Foundation": 269,
        "iPremium": 499,
        "iPremium PLUS": 1399
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
    <section id="pricing" className="py-8 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">Choose Your Plan</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-4">Affordable small business health insurance with transparent pricing and no markups. All plans include comprehensive coverage.</p>
        </div>

        {/* Selection Controls */}
        <div className="mb-6 sm:mb-8 md:mb-10 bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <label className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
                Step 1: Select your age range:
              </label>
              <select
                value={selectedAgeRange}
                onChange={(e) => setSelectedAgeRange(e.target.value)}
                className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e03a6a] focus:border-[#e03a6a] text-xs sm:text-sm md:text-base"
              >
                <option value="18-44">18 to 44</option>
                <option value="45-59">45 to 59</option>
                <option value="60-64">60 to 64</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <label className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
                Step 2: Select your coverage:
              </label>
              <select
                value={selectedCoverage}
                onChange={(e) => setSelectedCoverage(e.target.value)}
                className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e03a6a] focus:border-[#e03a6a] text-xs sm:text-sm md:text-base"
              >
                {availableCoverageOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {Object.entries(currentPricing).map(([planName, price], idx) => (
            <div
              key={planName}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#e03a6a] mb-2">{planName}</h3>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">${price}.00</div>
              
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
                {planFeatures[planName]?.map((feature, i) => {
                  const isIncluded = featureEmphasis[planName]?.[feature];
                  return (
                    <li key={i} className={`text-xs sm:text-sm md:text-base ${isIncluded ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                      {feature}
                    </li>
                  );
                })}
              </ul>

              <button 
                onClick={() => handlePlanSelection(planName, price)}
                className="w-full bg-[#e03a6a] text-white py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-full font-semibold hover:bg-[#d12e5c] transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base cursor-pointer hover:scale-105 transform"
              >
                Enroll Now <i className="bi bi-arrow-up-right text-xs sm:text-sm md:text-base"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 