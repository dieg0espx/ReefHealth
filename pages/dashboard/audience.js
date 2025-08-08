import { useState, useEffect } from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'
import DashboardLayout from '../../components/DashboardLayout'
import { useAuth } from '../../contexts/AuthContext'
import { getSubscribers, getSegments, getSubscriberCounts, addSubscriber, updateSubscriber, deleteSubscriber } from '../../lib/dashboard'

export default function Audience() {
  const { user } = useAuth()
  const [subscribers, setSubscribers] = useState([])
  const [segments, setSegments] = useState([])
  const [subscriberCounts, setSubscriberCounts] = useState({
    totalSubscribers: 0,
    activeSubscribers: 0,
    newThisMonth: 0,
    totalSegments: 0
  })
  const [activeTab, setActiveTab] = useState('subscribers')
  const [showAddSubscriber, setShowAddSubscriber] = useState(false)
  const [showCsvUpload, setShowCsvUpload] = useState(false)
  const [csvData, setCsvData] = useState([])
  const [csvFileName, setCsvFileName] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [dragOver, setDragOver] = useState(false)
  const [loading, setLoading] = useState(true)
  const [newSubscriber, setNewSubscriber] = useState({
    email: '',
    firstName: '',
    lastName: '',
    tags: []
  })

  useEffect(() => {
    const fetchAudienceData = async () => {
      if (!user?.id) return
      
      setLoading(true)
      try {
        const [subscribersData, segmentsData, countsData] = await Promise.all([
          getSubscribers(user.id),
          getSegments(user.id),
          getSubscriberCounts(user.id)
        ])

        setSubscribers(subscribersData)
        setSegments(segmentsData)
        setSubscriberCounts(countsData)
      } catch (error) {
        console.error('Error fetching audience data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAudienceData()
  }, [user?.id])

  const handleAddSubscriber = async () => {
    if (!user?.id) return

    try {
      const newSub = await addSubscriber(user.id, newSubscriber)
      setSubscribers([newSub, ...subscribers])
      setNewSubscriber({ email: '', firstName: '', lastName: '', tags: [] })
      setShowAddSubscriber(false)
      
      // Refresh counts
      const counts = await getSubscriberCounts(user.id)
      setSubscriberCounts(counts)
    } catch (error) {
      console.error('Error adding subscriber:', error)
      alert('Failed to add subscriber. Please try again.')
    }
  }

  const handleUpdateSubscriber = async (subscriberId, updates) => {
    if (!user?.id) return

    try {
      const updatedSub = await updateSubscriber(user.id, subscriberId, updates)
      setSubscribers(subscribers.map(sub => 
        sub.id === subscriberId ? updatedSub : sub
      ))
    } catch (error) {
      console.error('Error updating subscriber:', error)
      alert('Failed to update subscriber. Please try again.')
    }
  }

  const handleDeleteSubscriber = async (subscriberId) => {
    if (!user?.id) return

    if (!confirm('Are you sure you want to delete this subscriber?')) return

    try {
      await deleteSubscriber(user.id, subscriberId)
      setSubscribers(subscribers.filter(sub => sub.id !== subscriberId))
      
      // Refresh counts
      const counts = await getSubscriberCounts(user.id)
      setSubscriberCounts(counts)
    } catch (error) {
      console.error('Error deleting subscriber:', error)
      alert('Failed to delete subscriber. Please try again.')
    }
  }

  const handleCsvUpload = async () => {
    if (!user?.id || csvData.length === 0) return

    setUploading(true)
    try {
      // Add each subscriber from CSV
      const addedSubscribers = []
      const errors = []
      
      for (let i = 0; i < csvData.length; i++) {
        const row = csvData[i]
        try {
          const subscriberData = {
            email: row.email || row.Email || row.EMAIL,
            firstName: row.firstName || row['First Name'] || row['first_name'] || row['First Name'] || '',
            lastName: row.lastName || row['Last Name'] || row['last_name'] || row['Last Name'] || '',
            tags: row.tags ? row.tags.split(',').map(tag => tag.trim()) : []
          }
          
          if (subscriberData.email) {
            const newSub = await addSubscriber(user.id, subscriberData)
            addedSubscribers.push(newSub)
          }
          
          // Update progress
          setUploadProgress(Math.round(((i + 1) / csvData.length) * 100))
        } catch (error) {
          console.error(`Error adding subscriber from CSV row ${i + 1}:`, error)
          errors.push(`Row ${i + 1}: ${error.message}`)
        }
      }

      // Update the subscribers list
      setSubscribers([...addedSubscribers, ...subscribers])
      
      // Refresh counts
      const counts = await getSubscriberCounts(user.id)
      setSubscriberCounts(counts)
      
      // Close modal and reset
      setShowCsvUpload(false)
      setCsvData([])
      setCsvFileName('')
      setUploadProgress(0)
      
      // Show results
      let message = `Successfully added ${addedSubscribers.length} subscribers from CSV!`
      if (errors.length > 0) {
        message += `\n\n${errors.length} rows failed to import:\n${errors.slice(0, 5).join('\n')}`
        if (errors.length > 5) {
          message += `\n... and ${errors.length - 5} more errors`
        }
      }
      
      alert(message)
    } catch (error) {
      console.error('Error uploading CSV:', error)
      alert('Failed to upload CSV. Please check the file format and try again.')
    } finally {
      setUploading(false)
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (!file) return
    processFile(file)
  }

  const processFile = (file) => {
    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      return
    }

    // Check file type
    if (!file.name.toLowerCase().endsWith('.csv')) {
      alert('Please select a CSV file')
      return
    }

    setCsvFileName(file.name)
    const reader = new FileReader()
    
    reader.onload = (e) => {
      try {
        const text = e.target.result
        const lines = text.split('\n').filter(line => line.trim())
        
        if (lines.length < 2) {
          alert('CSV file must have at least a header row and one data row')
          return
        }
        
        const headers = lines[0].split(',').map(header => header.trim())
        
        // Check if email column exists
        const emailColumn = headers.find(header => 
          header.toLowerCase().includes('email')
        )
        
        if (!emailColumn) {
          alert('CSV file must contain an "Email" column')
          return
        }
        
        const data = lines.slice(1).map((line, index) => {
          const values = line.split(',').map(value => value.trim())
          const row = {}
          headers.forEach((header, headerIndex) => {
            row[header] = values[headerIndex] || ''
          })
          return row
        }).filter(row => {
          // Filter out rows without email
          const email = row.email || row.Email || row.EMAIL
          return email && email.includes('@')
        })
        
        if (data.length === 0) {
          alert('No valid email addresses found in the CSV file')
          return
        }
        
        setCsvData(data)
      } catch (error) {
        console.error('Error parsing CSV:', error)
        alert('Error parsing CSV file. Please check the file format.')
      }
    }
    
    reader.readAsText(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      processFile(files[0])
    }
  }

  const getStatusColor = (status) => {
    return status === 'Subscribed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  }

  if (loading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className="space-y-6 p-5">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-500 mt-2">Loading audience data...</p>
              </div>
            </div>
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6 p-5">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Audience</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your subscribers and create targeted segments.
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowCsvUpload(true)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Import CSV
              </button>
              <button
                onClick={() => setShowAddSubscriber(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Subscriber
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Subscribers</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{subscriberCounts.totalSubscribers.toLocaleString()}</dd>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Active</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{subscriberCounts.activeSubscribers.toLocaleString()}</dd>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">New This Month</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{subscriberCounts.newThisMonth.toLocaleString()}</dd>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Segments</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{subscriberCounts.totalSegments.toLocaleString()}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white shadow rounded-lg">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('subscribers')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'subscribers'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Subscribers
                </button>
                <button
                  onClick={() => setActiveTab('segments')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'segments'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Segments
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'subscribers' && (
                <div className="overflow-hidden">
                  {subscribers.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Subscriber
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Subscribed
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Activity
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tags
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {subscribers.map((subscriber) => (
                          <tr key={subscriber.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm font-medium">
                                    {subscriber.firstName.charAt(0)}{subscriber.lastName.charAt(0)}
                                  </span>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {subscriber.firstName} {subscriber.lastName}
                                  </div>
                                  <div className="text-sm text-gray-500">{subscriber.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(subscriber.status)}`}>
                                {subscriber.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {subscriber.subscribedAt}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {subscriber.lastActivity}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex flex-wrap gap-1">
                                {subscriber.tags.map((tag, index) => (
                                  <span key={index} className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                              <button 
                                onClick={() => handleDeleteSubscriber(subscriber.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-8">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No subscribers yet</h3>
                      <p className="mt-1 text-sm text-gray-500">Add your first subscriber to get started.</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'segments' && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {segments.length > 0 ? (
                    segments.map((segment) => (
                      <div key={segment.id} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-medium text-gray-900">{segment.name}</h3>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {segment.count} subscribers
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{segment.description}</p>
                        <div className="flex space-x-2">
                          <button className="text-sm text-blue-600 hover:text-blue-900">View Subscribers</button>
                          <button className="text-sm text-gray-600 hover:text-gray-900">Edit</button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No segments yet</h3>
                      <p className="mt-1 text-sm text-gray-500">Create your first segment to organize your subscribers.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Add Subscriber Modal */}
          {showAddSubscriber && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Subscriber</h3>
                  <form onSubmit={(e) => { e.preventDefault(); handleAddSubscriber(); }}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          value={newSubscriber.email}
                          onChange={(e) => setNewSubscriber({...newSubscriber, email: e.target.value})}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">First Name</label>
                          <input
                            type="text"
                            value={newSubscriber.firstName}
                            onChange={(e) => setNewSubscriber({...newSubscriber, firstName: e.target.value})}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Last Name</label>
                          <input
                            type="text"
                            value={newSubscriber.lastName}
                            onChange={(e) => setNewSubscriber({...newSubscriber, lastName: e.target.value})}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setShowAddSubscriber(false)}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                      >
                        Add Subscriber
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* CSV Upload Modal */}
          {showCsvUpload && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="relative top-20 mx-auto p-5 border w-[600px] shadow-lg rounded-md bg-white">
                <div className="mt-3">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Import Subscribers from CSV</h3>
                  
                  {csvData.length === 0 ? (
                    <div className="space-y-4">
                                             <div 
                         className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                           dragOver 
                             ? 'border-blue-400 bg-blue-50' 
                             : 'border-gray-300'
                         }`}
                         onDragOver={handleDragOver}
                         onDragLeave={handleDragLeave}
                         onDrop={handleDrop}
                       >
                         <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                         </svg>
                         <div className="mt-4">
                           <label htmlFor="csv-file" className="cursor-pointer">
                             <span className="text-blue-600 hover:text-blue-500 font-medium">Click to upload</span>
                             <span className="text-gray-500"> or drag and drop</span>
                           </label>
                           <p className="text-xs text-gray-500 mt-1">CSV files only</p>
                         </div>
                         <input
                           id="csv-file"
                           type="file"
                           accept=".csv"
                           onChange={handleFileChange}
                           className="hidden"
                         />
                       </div>
                      
                                             <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                         <h4 className="text-sm font-medium text-blue-800 mb-2">CSV Format Requirements:</h4>
                         <ul className="text-sm text-blue-700 space-y-1">
                           <li>• First row should contain headers (Email, First Name, Last Name, Tags)</li>
                           <li>• Email is required, other fields are optional</li>
                           <li>• Tags should be comma-separated if multiple</li>
                           <li>• Maximum file size: 5MB</li>
                         </ul>
                         <div className="mt-3 pt-3 border-t border-blue-200">
                           <a 
                             href="/subscribers-template.csv" 
                             download
                             className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                           >
                             📥 Download CSV Template
                           </a>
                         </div>
                       </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">File: <span className="font-medium">{csvFileName}</span></p>
                          <p className="text-sm text-gray-600">{csvData.length} subscribers ready to import</p>
                        </div>
                        <button
                          onClick={() => {
                            setCsvData([])
                            setCsvFileName('')
                          }}
                          className="text-sm text-red-600 hover:text-red-800"
                        >
                          Remove File
                        </button>
                      </div>
                      
                                             {uploading ? (
                         <div className="space-y-4">
                           <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                             <div className="flex items-center justify-between mb-2">
                               <span className="text-sm font-medium text-blue-800">Uploading subscribers...</span>
                               <span className="text-sm text-blue-600">{uploadProgress}%</span>
                             </div>
                             <div className="w-full bg-blue-200 rounded-full h-2">
                               <div 
                                 className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                                 style={{ width: `${uploadProgress}%` }}
                               ></div>
                             </div>
                           </div>
                         </div>
                       ) : (
                         <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-md">
                           <table className="min-w-full divide-y divide-gray-200">
                             <thead className="bg-gray-50 sticky top-0">
                               <tr>
                                 <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                 <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">First Name</th>
                                 <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Last Name</th>
                                 <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tags</th>
                               </tr>
                             </thead>
                             <tbody className="bg-white divide-y divide-gray-200">
                               {csvData.slice(0, 10).map((row, index) => (
                                 <tr key={index} className="hover:bg-gray-50">
                                   <td className="px-3 py-2 text-sm text-gray-900">{row.email || row.Email || row.EMAIL || ''}</td>
                                   <td className="px-3 py-2 text-sm text-gray-900">{row.firstName || row['First Name'] || row['first_name'] || ''}</td>
                                   <td className="px-3 py-2 text-sm text-gray-900">{row.lastName || row['Last Name'] || row['last_name'] || ''}</td>
                                   <td className="px-3 py-2 text-sm text-gray-900">{row.tags || ''}</td>
                                 </tr>
                               ))}
                               {csvData.length > 10 && (
                                 <tr>
                                   <td colSpan="4" className="px-3 py-2 text-sm text-gray-500 text-center">
                                     ... and {csvData.length - 10} more rows
                                   </td>
                                 </tr>
                               )}
                             </tbody>
                           </table>
                         </div>
                       )}
                    </div>
                  )}
                  
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowCsvUpload(false)
                        setCsvData([])
                        setCsvFileName('')
                      }}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                                                              {csvData.length > 0 && !uploading && (
                       <button
                         onClick={handleCsvUpload}
                         className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                       >
                         Import {csvData.length} Subscribers
                       </button>
                     )}
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