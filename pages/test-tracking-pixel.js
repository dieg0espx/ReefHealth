import { useState } from 'react'
import { generateTrackingPixel, generateClickTrackingUrl } from '../lib/tracking'

export default function TestTrackingPixel() {
  const [campaignId, setCampaignId] = useState('test-campaign')
  const [userId, setUserId] = useState('test-user-123')
  const [testUrl, setTestUrl] = useState('https://example.com')

  const pixelUrl = generateTrackingPixel(campaignId, userId)
  const clickUrl = generateClickTrackingUrl(testUrl, campaignId, userId)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Tracking Pixel Test</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Parameters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign ID
              </label>
              <input
                type="text"
                value={campaignId}
                onChange={(e) => setCampaignId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User ID
              </label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Test URL (for click tracking)
            </label>
            <input
              type="text"
              value={testUrl}
              onChange={(e) => setTestUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Generated URLs</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tracking Pixel URL</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <code className="text-sm break-all">{pixelUrl}</code>
              </div>
              <div className="mt-2">
                <a 
                  href={pixelUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Test Pixel URL
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Click Tracking URL</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <code className="text-sm break-all">{clickUrl}</code>
              </div>
              <div className="mt-2">
                <a 
                  href={clickUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Test Click URL
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Sample Email HTML with Tracking</h2>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
    <title>Test Email</title>
</head>
<body>
    <h1>Test Email</h1>
    <p>This is a test email with tracking.</p>
    <a href="https://example.com">Click here</a>
    <a href="https://google.com">Google</a>
    <a href="mailto:test@example.com">Email us</a>
</body>
</html>`}
            </pre>
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">With Tracking Added:</h3>
            <div className="bg-gray-100 p-4 rounded-md">
              <pre className="text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
    <title>Test Email</title>
</head>
<body>
    <h1>Test Email</h1>
    <p>This is a test email with tracking.</p>
    <a href="${clickUrl.replace('https://example.com', 'https://example.com')}">Click here</a>
    <a href="${generateClickTrackingUrl('https://google.com', campaignId, userId)}">Google</a>
    <a href="mailto:test@example.com">Email us</a>
    <img src="${pixelUrl}" width="1" height="1" style="display:none;" alt="" />
</body>
</html>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 