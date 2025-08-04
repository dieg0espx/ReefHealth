import { useState, useEffect } from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'
import DashboardLayout from '../../components/DashboardLayout'

export default function Campaigns() {
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [campaignHtml, setCampaignHtml] = useState('')
  const [loading, setLoading] = useState(false)

  // Campaign list with metadata
  const campaigns = [
    {
      id: '24k-list',
      name: '24K List Campaign',
      description: 'Healthcare solutions for small business teams',
      filename: '24k-list.html',
      sentDate: '2024-01-20',
      status: 'Sent'
    },
    {
      id: 'seamless-ai',
      name: 'Seamless AI Campaign',
      description: 'AI-powered healthcare solutions',
      filename: 'seamless-ai.html',
      sentDate: '2024-01-15',
      status: 'Sent'
    },
    {
      id: 'franchisor',
      name: 'Franchisor Campaign',
      description: 'Healthcare solutions for franchise businesses',
      filename: 'franchisor.html',
      sentDate: '2024-01-10',
      status: 'Sent'
    },
    {
      id: 'campaing1',
      name: 'Campaign 1',
      description: 'General healthcare campaign',
      filename: 'campaing1.html',
      sentDate: '2024-01-05',
      status: 'Sent'
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

  const handleCampaignSelect = (campaign) => {
    setSelectedCampaign(campaign)
    loadCampaignHtml(campaign.filename)
  }

  useEffect(() => {
    // Select first campaign by default
    if (campaigns.length > 0 && !selectedCampaign) {
      handleCampaignSelect(campaigns[0])
    }
  }, [])

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="h-full flex w-full border border-red-500">
          {/* Campaign List - Left Side */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Campaigns</h2>
              <p className="text-sm text-gray-500 mt-1">Select a campaign to preview</p>
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
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                    Send Test
                  </button>
                </div>
              </div>
            </div>

            {/* Campaign HTML Preview - Full Size */}
            <div className="flex-1 bg-gray-50 overflow-hidden">
              {loading ? (
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
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
} 