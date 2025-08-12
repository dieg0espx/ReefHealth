import { useState } from 'react'
import { generateSimpleTrackingPixel } from '../lib/tracking'

export default function TestSimpleTracking() {
  const [testData, setTestData] = useState({
    action: 'open',
    email_address: 'test@example.com',
    campaign: 'welcome-campaign'
  })

  const [trackingUrl, setTrackingUrl] = useState('')
  const [testResults, setTestResults] = useState([])

  const generateUrl = () => {
    const url = generateSimpleTrackingPixel(
      testData.action,
      testData.email_address,
      testData.campaign
    )
    setTrackingUrl(url)
  }

  const testTrackingPixel = async () => {
    if (!trackingUrl) return

    try {
      const response = await fetch(trackingUrl)
      const result = {
        timestamp: new Date().toISOString(),
        status: response.status,
        success: response.ok,
        url: trackingUrl
      }
      setTestResults(prev => [result, ...prev.slice(0, 9)]) // Keep last 10 results
    } catch (error) {
      const result = {
        timestamp: new Date().toISOString(),
        status: 'Error',
        success: false,
        error: error.message,
        url: trackingUrl
      }
      setTestResults(prev => [result, ...prev.slice(0, 9)])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Simple Tracking Pixel Test</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Parameters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Action
              </label>
              <select
                value={testData.action}
                onChange={(e) => setTestData(prev => ({ ...prev, action: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="open">Open</option>
                <option value="click">Click</option>
                <option value="unsubscribe">Unsubscribe</option>
                <option value="bounce">Bounce</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={testData.email_address}
                onChange={(e) => setTestData(prev => ({ ...prev, email_address: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="test@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign
              </label>
              <input
                type="text"
                value={testData.campaign}
                onChange={(e) => setTestData(prev => ({ ...prev, campaign: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="welcome-campaign"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={generateUrl}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Generate URL
            </button>
            
            {trackingUrl && (
              <button
                onClick={testTrackingPixel}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Test Pixel
              </button>
            )}
          </div>
        </div>

        {trackingUrl && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Generated Tracking URL</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <code className="text-sm text-gray-800 break-all">{trackingUrl}</code>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              This URL will record a tracking event in the email_tracking table when accessed.
            </p>
          </div>
        )}

        {testResults.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Test Results</h2>
            <div className="space-y-2">
              {testResults.map((result, index) => (
                <div key={index} className={`p-3 rounded-md ${result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {result.success ? 'Success' : 'Error'}
                      </span>
                      <span className="ml-2 text-sm text-gray-600">
                        Status: {result.status}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{new Date(result.timestamp).toLocaleTimeString()}</span>
                  </div>
                  {result.error && (
                    <p className="text-sm text-red-600 mt-1">{result.error}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Sample Email HTML</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
    <title>Test Email</title>
</head>
<body>
    <h1>Welcome to our newsletter!</h1>
    <p>This is a test email with simple tracking.</p>
    <a href="https://example.com">Visit our website</a>
    
    <!-- Simple tracking pixel -->
    <img src="${trackingUrl || 'YOUR_TRACKING_URL_HERE'}" width="1" height="1" style="display:none;" alt="" />
</body>
</html>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
