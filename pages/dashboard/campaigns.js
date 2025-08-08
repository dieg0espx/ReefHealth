import { useState, useEffect } from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'
import DashboardLayout from '../../components/DashboardLayout'
import { useAuth } from '../../contexts/AuthContext'
import { getCampaignTrackingStats, addTrackingToEmail } from '../../lib/tracking'

export default function Campaigns() {
  const { user } = useAuth()
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [campaignHtml, setCampaignHtml] = useState('')
  const [trackingStats, setTrackingStats] = useState(null)
  const [loading, setLoading] = useState(false)
  const [sendingTest, setSendingTest] = useState(false)
  const [activeTab, setActiveTab] = useState('preview')
  const [testEmail, setTestEmail] = useState('')
  const [showTestModal, setShowTestModal] = useState(false)

  // Campaign list with metadata
  const campaigns = [
    {
      id: '24k-list',
      name: '24K List Campaign',
      description: 'Healthcare solutions for small business teams',
      filename: '24k-list.html',
      sentDate: '2024-01-20',
      status: 'Sent',
      sentCount: 24000
    },
    {
      id: 'seamless-ai',
      name: 'Seamless AI Campaign',
      description: 'AI-powered healthcare solutions',
      filename: 'seamless-ai.html',
      sentDate: '2024-01-15',
      status: 'Sent',
      sentCount: 15000
    },
    {
      id: 'franchisor',
      name: 'Franchisor Campaign',
      description: 'Healthcare solutions for franchise businesses',
      filename: 'franchisor.html',
      sentDate: '2024-01-10',
      status: 'Sent',
      sentCount: 8000
    },
    {
      id: 'campaing1',
      name: 'Campaign 1',
      description: 'General healthcare campaign',
      filename: 'campaing1.html',
      sentDate: '2024-01-05',
      status: 'Sent',
      sentCount: 12000
    }
  ]

  const loadCampaignHtml = async (filename) => {
    setLoading(true)
    try {
      const response = await fetch(`/emails/${filename}`)
      if (response.ok) {
        const html = await response.text()
        setCampaignHtml(html)
      } else {
        console.error('Failed to load campaign HTML')
        setCampaignHtml('<div class="p-8 text-center text-gray-500">Failed to load campaign preview</div>')
      }
    } catch (error) {
      console.error('Error loading campaign:', error)
      setCampaignHtml('<div class="p-8 text-center text-gray-500">Error loading campaign preview</div>')
    }
    setLoading(false)
  }

  const loadTrackingStats = async (campaignId) => {
    if (!user?.id) return
    
    try {
      const stats = await getCampaignTrackingStats(user.id, campaignId)
      setTrackingStats(stats)
    } catch (error) {
      console.error('Error loading tracking stats:', error)
      setTrackingStats(null)
    }
  }

  const handleCampaignSelect = (campaign) => {
    setSelectedCampaign(campaign)
    loadCampaignHtml(campaign.filename)
    loadTrackingStats(campaign.id)
  }

  useEffect(() => {
    // Select first campaign by default
    if (campaigns.length > 0 && !selectedCampaign) {
      handleCampaignSelect(campaigns[0])
    }
  }, [])

  const formatPercentage = (value, total) => {
    if (!total || total === 0) return '0%'
    return `${((value / total) * 100).toFixed(1)}%`
  }

  const handleSendTest = async () => {
    if (!selectedCampaign || !testEmail || !user?.id) return

    setSendingTest(true)
    try {
      // Generate a test subscriber ID
      const testSubscriberId = `test-${Date.now()}`
      
      // Add tracking to the campaign HTML
      const trackedHtml = addTrackingToEmail(campaignHtml, selectedCampaign.id, testSubscriberId, user.id)

      const response = await fetch('/api/send-campaign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campaignId: selectedCampaign.id,
          subscriberId: testSubscriberId,
          userId: user.id,
          emailHtml: trackedHtml,
          recipientEmail: testEmail,
          recipientName: 'Test Recipient'
        })
      })

      if (response.ok) {
        const result = await response.json()
        let message = `Test email sent successfully!\n\nTo: ${result.details?.to}\nCampaign: ${result.details?.campaignId}\nTracking: ${result.details?.hasTracking ? 'Enabled' : 'Disabled'}`
        
        if (result.details?.previewUrl) {
          message += `\n\nPreview URL: ${result.details.previewUrl}\n\nThis is a test email service. Click the preview URL to see the email.`
        } else {
          message += `\n\nCheck your inbox and the tracking tab to see results.`
        }
        
        alert(message)
        setShowTestModal(false)
        setTestEmail('')
      } else {
        const error = await response.json()
        alert(`Failed to send test email: ${error.error}`)
      }
    } catch (error) {
      console.error('Error sending test email:', error)
      alert('Failed to send test email. Please try again.')
    } finally {
      setSendingTest(false)
    }
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="h-full flex w-full">
          {/* Campaign List - Left Side */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Campaigns</h2>
              <p className="text-sm text-gray-500 mt-1">Select a campaign to preview and track</p>
            </div>

            {/* Campaign List */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-2">
                {campaigns.map((campaign) => (
                  <div
                    key={campaign.id}
                    onClick={() => handleCampaignSelect(campaign)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      selectedCampaign?.id === campaign.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{campaign.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{campaign.description}</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs text-gray-400">{campaign.sentDate}</span>
                          <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            {campaign.status}
                          </span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          Sent: {campaign.sentCount.toLocaleString()}
                        </div>
                      </div>
                      {selectedCampaign?.id === campaign.id && (
                        <div className="ml-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Campaign Preview - Right Side */}
          <div className="flex-1 flex flex-col">
            {/* Preview Header */}
            <div className="bg-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">
                    {selectedCampaign?.name || 'Select a Campaign'}
                  </h1>
                  {selectedCampaign && (
                    <p className="text-sm text-gray-500 mt-1">
                      {selectedCampaign.description} • Sent {selectedCampaign.sentDate}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Export
                  </button>
                  <button 
                    onClick={() => setShowTestModal(true)}
                    disabled={!selectedCampaign}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Test
                  </button>
                </div>
              </div>

              {/* Tabs */}
              {selectedCampaign && (
                <div className="mt-6">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab('preview')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'preview'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => setActiveTab('tracking')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'tracking'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Tracking
                    </button>
                  </nav>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-gray-50 overflow-hidden">
              {activeTab === 'preview' ? (
                // Campaign HTML Preview
                loading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                      <p className="text-gray-500 mt-2">Loading campaign preview...</p>
                    </div>
                  </div>
                ) : campaignHtml ? (
                  <div className="h-full w-full">
                    <div 
                      className="campaign-preview h-full w-full"
                      dangerouslySetInnerHTML={{ __html: campaignHtml }}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-500">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No campaign selected</h3>
                      <p className="mt-1 text-sm text-gray-500">Choose a campaign from the list to preview it.</p>
                    </div>
                  </div>
                )
              ) : (
                // Tracking Statistics
                <div className="p-6">
                  {trackingStats ? (
                    <div className="space-y-6">
                      {/* Summary Stats */}
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                          <div className="p-5">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-5 w-0 flex-1">
                                <dl>
                                  <dt className="text-sm font-medium text-gray-500 truncate">Total Opens</dt>
                                  <dd className="text-2xl font-semibold text-gray-900">{trackingStats.totalOpens.toLocaleString()}</dd>
                                  <dd className="text-sm text-gray-500">
                                    {formatPercentage(trackingStats.totalOpens, selectedCampaign?.sentCount)}
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                          <div className="p-5">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-5 w-0 flex-1">
                                <dl>
                                  <dt className="text-sm font-medium text-gray-500 truncate">Total Clicks</dt>
                                  <dd className="text-2xl font-semibold text-gray-900">{trackingStats.totalClicks.toLocaleString()}</dd>
                                  <dd className="text-sm text-gray-500">
                                    {formatPercentage(trackingStats.totalClicks, selectedCampaign?.sentCount)}
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                          <div className="p-5">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-5 w-0 flex-1">
                                <dl>
                                  <dt className="text-sm font-medium text-gray-500 truncate">Unique Opens</dt>
                                  <dd className="text-2xl font-semibold text-gray-900">{trackingStats.uniqueOpens.toLocaleString()}</dd>
                                  <dd className="text-sm text-gray-500">
                                    {formatPercentage(trackingStats.uniqueOpens, selectedCampaign?.sentCount)}
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                          <div className="p-5">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-5 w-0 flex-1">
                                <dl>
                                  <dt className="text-sm font-medium text-gray-500 truncate">Unique Clicks</dt>
                                  <dd className="text-2xl font-semibold text-gray-900">{trackingStats.uniqueClicks.toLocaleString()}</dd>
                                  <dd className="text-sm text-gray-500">
                                    {formatPercentage(trackingStats.uniqueClicks, selectedCampaign?.sentCount)}
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/* Recent Opens */}
                        <div className="bg-white shadow rounded-lg">
                          <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Recent Opens</h3>
                          </div>
                          <div className="p-6">
                            {trackingStats.recentOpens.length > 0 ? (
                              <div className="space-y-3">
                                {trackingStats.recentOpens.map((open, index) => (
                                  <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                      <span className="text-sm text-gray-600">
                                        Subscriber {open.subscriber_id.slice(0, 8)}...
                                      </span>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                      {new Date(open.opened_at).toLocaleDateString()}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-sm text-gray-500">No recent opens</p>
                            )}
                          </div>
                        </div>

                        {/* Recent Clicks */}
                        <div className="bg-white shadow rounded-lg">
                          <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Recent Clicks</h3>
                          </div>
                          <div className="p-6">
                            {trackingStats.recentClicks.length > 0 ? (
                              <div className="space-y-3">
                                {trackingStats.recentClicks.map((click, index) => (
                                  <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                      <div>
                                        <span className="text-sm text-gray-600">
                                          Subscriber {click.subscriber_id.slice(0, 8)}...
                                        </span>
                                        <div className="text-xs text-gray-500 truncate max-w-xs">
                                          {click.clicked_url}
                                        </div>
                                      </div>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                      {new Date(click.clicked_at).toLocaleDateString()}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-sm text-gray-500">No recent clicks</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="text-gray-500 mt-2">Loading tracking data...</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Send Test Email Modal */}
          {showTestModal && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Send Test Email</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Test Email Address
                      </label>
                      <input
                        type="email"
                        value={testEmail}
                        onChange={(e) => setTestEmail(e.target.value)}
                        placeholder="Enter email address to send test to"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                      <h4 className="text-sm font-medium text-blue-800 mb-2">Test Email Details:</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Campaign: {selectedCampaign?.name}</li>
                        <li>• Tracking will be enabled</li>
                        <li>• Opens and clicks will be recorded</li>
                        <li>• Test subscriber ID will be generated</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowTestModal(false)
                        setTestEmail('')
                      }}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSendTest}
                      disabled={!testEmail || sendingTest}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {sendingTest ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Test Email'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
} 