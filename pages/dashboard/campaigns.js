import { useState, useEffect } from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'
import DashboardLayout from '../../components/DashboardLayout'
import { useAuth } from '../../contexts/AuthContext'

export default function Campaigns() {
  const { user } = useAuth()
  const [campaigns, setCampaigns] = useState([])
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showTestModal, setShowTestModal] = useState(false)
  const [testEmail, setTestEmail] = useState('')
  const [sendingTest, setSendingTest] = useState(false)

  useEffect(() => {
    fetchCampaigns()
  }, [])

  const fetchCampaigns = async () => {
    try {
      const response = await fetch('/api/campaigns')
      if (response.ok) {
        const data = await response.json()
        setCampaigns(data)
        if (data.length > 0) {
          setSelectedCampaign(data[0])
        }
      }
    } catch (error) {
      console.error('Error fetching campaigns:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return '-'
    return new Date(dateString).toLocaleDateString()
  }

  const handleSendTest = async (e) => {
    e.preventDefault()
    if (!testEmail.trim()) return

    setSendingTest(true)
    try {
      const response = await fetch('/api/send-test-campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          campaignId: selectedCampaign.id,
          email: testEmail
        })
      })

      const data = await response.json()

      if (response.ok) {
        alert(`Test campaign sent successfully to ${testEmail}!`)
        setShowTestModal(false)
        setTestEmail('')
      } else {
        throw new Error(data.message || 'Failed to send test campaign')
      }
    } catch (error) {
      console.error('Error sending test campaign:', error)
      alert(`Error sending test campaign: ${error.message}`)
    } finally {
      setSendingTest(false)
    }
  }

  if (loading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-500 mt-2">Loading campaigns...</p>
            </div>
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="h-screen flex flex-col">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
                <p className="mt-1 text-sm text-gray-500">
                  View and manage your email campaigns
                </p>
              </div>
              <div className="text-sm text-gray-500">
                {campaigns.length} campaigns available
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Campaign List</h2>
                <div className="space-y-2">
                  {campaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      onClick={() => setSelectedCampaign(campaign)}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedCampaign?.id === campaign.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {campaign.name}
                          </h3>
                          {campaign.description && (
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {campaign.description}
                            </p>
                          )}
                          <p className="text-xs text-gray-400 mt-2">
                            {formatDate(campaign.createdAt)}
                          </p>
                        </div>
                        <div className="ml-2 flex-shrink-0">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Campaign Preview */}
            <div className="flex-1 bg-gray-50 overflow-y-auto">
              {selectedCampaign ? (
                <div className="h-full flex flex-col">
                  {/* Campaign Header */}
                  <div className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                          {selectedCampaign.name}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          Created: {formatDate(selectedCampaign.createdAt)}
                        </p>
                      </div>
                                             <div className="flex space-x-2">
                         <button 
                           onClick={() => setShowTestModal(true)}
                           className="px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100"
                         >
                           Send Test
                         </button>
                         <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                           Send Campaign
                         </button>
                       </div>
                    </div>
                  </div>

                  {/* Campaign Content */}
                  <div className="flex-1 p-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                        <h3 className="text-sm font-medium text-gray-700">Campaign Preview</h3>
                      </div>
                                             <div className="p-4">
                         <div 
                           className="campaign-preview"
                           dangerouslySetInnerHTML={{ __html: selectedCampaign.content }}
                         />
                       </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-400 mb-4">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Campaign Selected</h3>
                    <p className="text-gray-500">Select a campaign from the sidebar to preview it.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Send Test Modal */}
        {showTestModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Send Test Campaign</h3>
                <form onSubmit={handleSendTest} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={testEmail}
                      onChange={(e) => setTestEmail(e.target.value)}
                      placeholder="Enter email address for test"
                      className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm text-gray-600">
                      <strong>Campaign:</strong> {selectedCampaign?.name}
                    </p>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowTestModal(false)
                        setTestEmail('')
                      }}
                      disabled={sendingTest}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={sendingTest || !testEmail.trim()}
                      className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {sendingTest ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        'Send Test'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </DashboardLayout>
    </ProtectedRoute>
  )
}
