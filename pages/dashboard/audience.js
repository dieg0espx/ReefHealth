import { useState, useEffect } from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'
import DashboardLayout from '../../components/DashboardLayout'
import CSVColumnMapper from '../../components/CSVColumnMapper'
import { useAuth } from '../../contexts/AuthContext'
import { getSubscribers, getSegments, getSubscriberCounts, getAllSubscribers, addSubscriber, updateSubscriber, deleteSubscriber } from '../../lib/dashboard'

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
  const [showEditSubscriber, setShowEditSubscriber] = useState(false)
  const [editingSubscriber, setEditingSubscriber] = useState(null)
  const [showCsvUpload, setShowCsvUpload] = useState(false)
  const [showColumnMapper, setShowColumnMapper] = useState(false)
  const [csvData, setCsvData] = useState([])
  const [csvFileName, setCsvFileName] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [dragOver, setDragOver] = useState(false)
  const [loading, setLoading] = useState(true)
  const [sortField, setSortField] = useState('')
  const [sortDirection, setSortDirection] = useState('asc')
  const [newSubscriber, setNewSubscriber] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    status: 'Subscribed'
  })

  useEffect(() => {
    const fetchAudienceData = async () => {
      console.log('🔍 Fetching audience data...')
      console.log('👤 Current user:', user)
      
      if (!user?.id) {
        console.log('❌ No user ID found, skipping fetch')
        return
      }
      
      setLoading(true)
      try {
        console.log('📊 Fetching subscribers...')
        const subscribersData = await getSubscribers(user.id)
        console.log('📊 Subscribers data:', subscribersData)
        
        console.log('📈 Fetching counts...')
        const countsData = await getSubscriberCounts(user.id)
        console.log('📈 Counts data:', countsData)

        setSubscribers(subscribersData)
        setSubscriberCounts(countsData)
      } catch (error) {
        console.error('❌ Error fetching audience data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAudienceData()
  }, [user])

  const handleAddSubscriber = async () => {
    if (!user?.id) return

    try {
      const newSub = await addSubscriber(user.id, newSubscriber)
      setSubscribers([newSub, ...subscribers])
      setNewSubscriber({ email: '', firstName: '', lastName: '', company: '', status: 'Subscribed' })
      setShowAddSubscriber(false)
      
      // Refresh counts
      const counts = await getSubscriberCounts(user.id)
      setSubscriberCounts(counts)
    } catch (error) {
      console.error('Error adding subscriber:', error)
      alert('Failed to add subscriber. Please try again.')
    }
  }

  const handleEditSubscriber = (subscriber) => {
    setEditingSubscriber({
      id: subscriber.id,
      email: subscriber.email,
      firstName: subscriber.firstName || '',
      lastName: subscriber.lastName || '',
      company: subscriber.company || '',
      status: subscriber.status || 'Subscribed'
    })
    setShowEditSubscriber(true)
  }

  const handleUpdateSubscriber = async () => {
    if (!user?.id || !editingSubscriber) return

    try {
      const updatedSub = await updateSubscriber(user.id, editingSubscriber.id, {
        email: editingSubscriber.email,
        firstName: editingSubscriber.firstName,
        lastName: editingSubscriber.lastName,
        company: editingSubscriber.company,
        status: editingSubscriber.status
      })
      setSubscribers(subscribers.map(sub => 
        sub.id === editingSubscriber.id ? updatedSub : sub
      ))
      setShowEditSubscriber(false)
      setEditingSubscriber(null)
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
      console.log('Starting CSV upload with data:', csvData.slice(0, 2))
      
      // Use the new import-csv API endpoint
      const response = await fetch('/api/import-csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          csvData: csvData
        })
      })

      const result = await response.json()

      if (response.ok) {
        // Refresh the subscribers list
        const updatedSubscribers = await getSubscribers(user.id)
        setSubscribers(updatedSubscribers)
        
        // Refresh counts
        const counts = await getSubscriberCounts(user.id)
        setSubscriberCounts(counts)
        
        // Close modal and reset
        setShowCsvUpload(false)
        setShowColumnMapper(false)
        setCsvData([])
        setCsvFileName('')
        setUploadProgress(0)
        
        alert(`✅ Successfully imported ${result.imported} subscribers from CSV!`)
      } else {
        console.error('API Error:', result)
        alert(`❌ Error: ${result.error}`)
      }
    } catch (error) {
      console.error('Error uploading CSV:', error)
      alert('Failed to upload CSV. Please check the file format and try again.')
    } finally {
      setUploading(false)
    }
  }

  const handleColumnMappingComplete = async (transformedData) => {
    if (!user?.id) return

    setUploading(true)
    setUploadProgress(0)
    
    try {
      console.log('Starting import with transformed data:', transformedData.slice(0, 2))
      
      const response = await fetch('/api/import-csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          csvData: transformedData
        })
      })

      const result = await response.json()

      if (response.ok) {
        // Refresh the subscribers list
        const updatedSubscribers = await getSubscribers(user.id)
        setSubscribers(updatedSubscribers)
        
        // Refresh counts
        const counts = await getSubscriberCounts(user.id)
        setSubscriberCounts(counts)
        
        // Close modal and reset
        setShowColumnMapper(false)
        setCsvData([])
        setCsvFileName('')
        setUploadProgress(0)
        
        alert(`✅ Successfully imported ${result.imported} subscribers from CSV!`)
      } else {
        console.error('API Error:', result)
        alert(`❌ Error: ${result.error}`)
      }
    } catch (error) {
      console.error('Error importing CSV:', error)
      alert('Failed to import CSV. Please try again.')
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (!file) return
    processFile(file)
  }

  const processFile = (file) => {
    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB')
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
        console.log('Raw CSV text (first 500 chars):', text.substring(0, 500))
        
        const lines = text.split('\n').filter(line => line.trim())
        console.log('Total lines after filtering:', lines.length)
        console.log('First few lines:', lines.slice(0, 3))
        
        if (lines.length < 2) {
          alert('CSV file must have at least a header row and one data row')
          return
        }
        
        const headers = lines[0].split(',').map(header => header.trim().replace(/^"|"$/g, ''))
        console.log('Parsed headers:', headers)
        
        // Check if email column exists - be more flexible
        const emailColumn = headers.find(header => 
          header.toLowerCase().includes('email') || 
          header.toLowerCase() === 'email address' ||
          header.toLowerCase() === 'emailaddress'
        )
        
        if (!emailColumn) {
          console.error('No email column found. Available headers:', headers)
          alert(`CSV file must contain an "Email Address" column. Found headers: ${headers.join(', ')}`)
          return
        }
        
        console.log('Found email column:', emailColumn)
        console.log('CSV headers:', headers)
        
        const data = lines.slice(1).map((line, index) => {
          const values = line.split(',').map(value => value.trim().replace(/^"|"$/g, ''))
          const row = {}
          headers.forEach((header, headerIndex) => {
            row[header] = values[headerIndex] || ''
          })
          return row
        }).filter(row => {
          // Filter out rows without email - check for various email column names
          const email = row['Email Address'] || row['EmailAddress'] || row['email address'] || row.email || row.Email || row.EMAIL
          const isValid = email && email.trim() !== '' && email.includes('@')
          
          if (!isValid && email) {
            console.log('Invalid email found:', email)
          }
          
          return isValid
        })
        
        if (data.length === 0) {
          console.error('No valid data found. Sample of first few rows:')
          const sampleRows = lines.slice(1, 4).map((line, index) => {
            const values = line.split(',').map(value => value.trim().replace(/^"|"$/g, ''))
            const row = {}
            headers.forEach((header, headerIndex) => {
              row[header] = values[headerIndex] || ''
            })
            return row
          })
          console.log('Sample rows:', sampleRows)
          alert('No valid email addresses found in the CSV file. Please check that your CSV has an "Email Address" column with valid email addresses.')
          return
        }
        
        console.log('Valid CSV data found:', data.length, 'rows')
        console.log('Sample data:', data.slice(0, 2))
        
        setCsvData(data)
        setShowCsvUpload(false)
        setShowColumnMapper(true)
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
    const activeStatuses = ['Subscribed', 'active', 'Active']
    return activeStatuses.includes(status) ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  }

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const getSortedSubscribers = () => {
    if (!sortField) return subscribers

    return [...subscribers].sort((a, b) => {
      let aValue = a[sortField] || ''
      let bValue = b[sortField] || ''
      
      // Handle name sorting
      if (sortField === 'name') {
        aValue = `${a.firstName || ''} ${a.lastName || ''}`.trim()
        bValue = `${b.firstName || ''} ${b.lastName || ''}`.trim()
      }
      
      // Convert to lowercase for string comparison
      if (typeof aValue === 'string') aValue = aValue.toLowerCase()
      if (typeof bValue === 'string') bValue = bValue.toLowerCase()
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
  }

  const getSortIcon = (field) => {
    if (sortField !== field) {
      return (
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      )
    }
    
    if (sortDirection === 'asc') {
      return (
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      )
    } else {
      return (
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )
    }
  }

  const handleDebugAllSubscribers = async () => {
    try {
      console.log('🔍 Debug: Fetching all subscribers...')
      const allSubscribers = await getAllSubscribers()
      console.log('📊 All subscribers in database:', allSubscribers)
      alert(`Found ${allSubscribers.length} total subscribers in database. Check console for details.`)
    } catch (error) {
      console.error('❌ Error fetching all subscribers:', error)
      alert('Error fetching all subscribers. Check console for details.')
    }
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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
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
          </div>

          {/* Subscribers Table */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="overflow-hidden">
                                  {subscribers.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 w-[30%]"
                            onClick={() => handleSort('name')}
                          >
                            <div className="flex items-center space-x-1">
                              <span>Subscriber</span>
                              {getSortIcon('name')}
                            </div>
                          </th>
                          <th 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 w-[40%]"
                            onClick={() => handleSort('company')}
                          >
                            <div className="flex items-center space-x-1">
                              <span>Company</span>
                              {getSortIcon('company')}
                            </div>
                          </th>
                          <th 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 w-[15%]"
                            onClick={() => handleSort('status')}
                          >
                            <div className="flex items-center space-x-1">
                              <span>Status</span>
                              {getSortIcon('status')}
                            </div>
                          </th>
                          <th className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-[7.5%]">
                            Edit
                          </th>
                          <th className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-[7.5%]">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {getSortedSubscribers().map((subscriber) => (
                          <tr key={subscriber.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap w-[30%]">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-white text-xs font-medium">
                                    {(subscriber.firstName || '').charAt(0)}{(subscriber.lastName || '').charAt(0)}
                                  </span>
                                </div>
                                <div className="ml-3 min-w-0 flex-1">
                                  <div className="text-sm font-medium text-gray-900 truncate">
                                    {subscriber.firstName || ''} {subscriber.lastName || ''}
                                  </div>
                                  <div className="text-sm text-gray-500 truncate">{subscriber.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-[40%]">
                              <div className="text-sm text-gray-900">
                                <span 
                                  className="block truncate" 
                                  title={subscriber.company || '-'}
                                >
                                  {subscriber.company ? 
                                    (subscriber.company.length > 50 ? 
                                      subscriber.company.substring(0, 50) + '...' : 
                                      subscriber.company
                                    ) : 
                                    '-'
                                  }
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap w-[15%]">
                              <span className={`inline-flex px-1 py-0.5 text-xs font-semibold rounded-full ${getStatusColor(subscriber.status)}`}>
                                {subscriber.status}
                              </span>
                            </td>
                            <td className="py-4 whitespace-nowrap w-[7.5%] text-center">
                              <button 
                                onClick={() => handleEditSubscriber(subscriber)}
                                className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                                title="Edit subscriber"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                            </td>
                            <td className="py-4 whitespace-nowrap w-[7.5%] text-center">
                              <button 
                                onClick={() => handleDeleteSubscriber(subscriber.id)}
                                className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                                title="Delete subscriber"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
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
            </div>
          </div>

          {/* Add Subscriber Modal */}
          {showAddSubscriber && (
            <div className="fixed inset-0 bg-black/60  overflow-y-auto h-[calc(100vh + 5px)] top-[-25px] w-full z-50 ">
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
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <input
                          type="text"
                          value={newSubscriber.company}
                          onChange={(e) => setNewSubscriber({...newSubscriber, company: e.target.value})}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                          value={newSubscriber.status}
                          onChange={(e) => setNewSubscriber({...newSubscriber, status: e.target.value})}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                          <option value="active">active</option>
                          <option value="unsubscribed">unsubscribed</option>
                        </select>
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

          {/* Edit Subscriber Modal */}
          {showEditSubscriber && editingSubscriber && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Edit Subscriber</h3>
                  <form onSubmit={(e) => { e.preventDefault(); handleUpdateSubscriber(); }}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          value={editingSubscriber.email}
                          onChange={(e) => setEditingSubscriber({...editingSubscriber, email: e.target.value})}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">First Name</label>
                          <input
                            type="text"
                            value={editingSubscriber.firstName}
                            onChange={(e) => setEditingSubscriber({...editingSubscriber, firstName: e.target.value})}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Last Name</label>
                          <input
                            type="text"
                            value={editingSubscriber.lastName}
                            onChange={(e) => setEditingSubscriber({...editingSubscriber, lastName: e.target.value})}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <input
                          type="text"
                          value={editingSubscriber.company}
                          onChange={(e) => setEditingSubscriber({...editingSubscriber, company: e.target.value})}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                          value={editingSubscriber.status}
                          onChange={(e) => setEditingSubscriber({...editingSubscriber, status: e.target.value})}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                          <option value="active">active</option>
                          <option value="unsubscribed">unsubscribed</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => {
                          setShowEditSubscriber(false)
                          setEditingSubscriber(null)
                        }}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                      >
                        Update Subscriber
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* CSV Upload Modal */}
          {showCsvUpload && (
           <div className="fixed inset-0 bg-black/60  overflow-y-auto h-[calc(100vh + 5px)] top-[-25px] w-full z-50 ">
              <div className="relative top-20 mx-auto p-5 border w-[600px] shadow-lg rounded-md bg-white">
                <div className="mt-3">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Import Subscribers from CSV</h3>
                  
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
                      <h4 className="text-sm font-medium text-blue-800 mb-2">CSV Upload Instructions:</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Upload your CSV file with any column names</li>
                        <li>• You&apos;ll be able to map columns to database fields</li>
                        <li>• Email Address is required, other fields are optional</li>
                        <li>• Maximum file size: 10MB</li>
                      </ul>
                    </div>
                  </div>
                  
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
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Column Mapper Modal */}
          {showColumnMapper && (
           <div className="fixed inset-0 bg-black/60  overflow-y-auto h-[calc(100vh + 5px)] top-[-25px] w-full z-50 ">
              <div className="h-full w-full pt-0 pb-5 px-5 overflow-y-auto">
                <div className="mx-auto w-[95%] max-w-6xl bg-white rounded-lg shadow-lg mt-10">
                                  <CSVColumnMapper
                  csvData={csvData}
                  onMappingComplete={handleColumnMappingComplete}
                  onCancel={() => {
                    setShowColumnMapper(false)
                    setCsvData([])
                    setCsvFileName('')
                  }}
                  uploading={uploading}
                  uploadProgress={uploadProgress}
                />
                </div>
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
} 