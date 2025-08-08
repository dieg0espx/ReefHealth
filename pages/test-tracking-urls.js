import { useState } from 'react'
import { generateTrackingPixel, generateClickTrackingUrl } from '../lib/tracking'

export default function TestTrackingUrls() {
  const [testData, setTestData] = useState({
    campaign_id: 'test-campaign-123',
    subscriber_id: 'test-subscriber-456',
    user_id: 'test-user-789',
    test_url: 'https://example.com'
  })

  const [trackingUrls, setTrackingUrls] = useState(null)

  const generateUrls = () => {
    const pixelUrl = generateTrackingPixel(
      testData.campaign_id,
      testData.subscriber_id,
      testData.user_id
    )
    
    const clickUrl = generateClickTrackingUrl(
      testData.test_url,
      testData.campaign_id,
      testData.subscriber_id,
      testData.user_id
    )

    setTrackingUrls({
      pixel: pixelUrl,
      click: clickUrl
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Tracking URL Test</h1>
          
          <div className="space-y-6">
            {/* Test Parameters */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Test Parameters</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Campaign ID</label>
                  <input
                    type="text"
                    value={testData.campaign_id}
                    onChange={(e) => setTestData({...testData, campaign_id: e.target.value})}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subscriber ID</label>
                  <input
                    type="text"
                    value={testData.subscriber_id}
                    onChange={(e) => setTestData({...testData, subscriber_id: e.target.value})}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">User ID</label>
                  <input
                    type="text"
                    value={testData.user_id}
                    onChange={(e) => setTestData({...testData, user_id: e.target.value})}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Test URL</label>
                  <input
                    type="text"
                    value={testData.test_url}
                    onChange={(e) => setTestData({...testData, test_url: e.target.value})}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <div>
              <button
                onClick={generateUrls}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Generate Tracking URLs
              </button>
            </div>

            {/* Generated URLs */}
            {trackingUrls && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Generated Tracking URLs</h2>
                
                {/* Tracking Pixel */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Tracking Pixel URL</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <code className="text-sm text-gray-800 break-all">{trackingUrls.pixel}</code>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    This URL serves a 1x1 transparent GIF and tracks email opens when loaded.
                  </p>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-gray-700">Domain Check: </span>
                    <span className={`text-sm ${trackingUrls.pixel.includes('honestaffordablehealthcare.com') ? 'text-green-600' : 'text-red-600'}`}>
                      {trackingUrls.pixel.includes('honestaffordablehealthcare.com') ? '✅ Production Domain' : '❌ Wrong Domain'}
                    </span>
                  </div>
                </div>

                {/* Click Tracking */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Click Tracking URL</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <code className="text-sm text-gray-800 break-all">{trackingUrls.click}</code>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    This URL redirects to the original URL while tracking the click event.
                  </p>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-gray-700">Domain Check: </span>
                    <span className={`text-sm ${trackingUrls.click.includes('honestaffordablehealthcare.com') ? 'text-green-600' : 'text-red-600'}`}>
                      {trackingUrls.click.includes('honestaffordablehealthcare.com') ? '✅ Production Domain' : '❌ Wrong Domain'}
                    </span>
                  </div>
                </div>

                {/* Test Links */}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">Test Links</h3>
                  <div className="space-y-2">
                    <a
                      href={trackingUrls.pixel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Test Tracking Pixel
                    </a>
                    <a
                      href={trackingUrls.click}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-2"
                    >
                      Test Click Tracking
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 