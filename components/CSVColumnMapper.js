import { useState, useEffect } from 'react'

const DATABASE_FIELDS = [
  { key: 'email', label: 'Email Address', required: true },
  { key: 'first_name', label: 'First Name', required: false },
  { key: 'last_name', label: 'Last Name', required: false },
  { key: 'address', label: 'Address', required: false },
  { key: 'phone_number', label: 'Phone Number', required: false },
  { key: 'birthday', label: 'Birthday', required: false },
  { key: 'company', label: 'Company', required: false }
]

export default function CSVColumnMapper({ csvData, onMappingComplete, onCancel, uploading = false, uploadProgress = 0 }) {
  const [columnMapping, setColumnMapping] = useState({})
  const [csvHeaders, setCsvHeaders] = useState([])
  const [previewData, setPreviewData] = useState([])
  const [isValid, setIsValid] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('active')

  useEffect(() => {
    if (csvData && csvData.length > 0) {
      // Extract headers from the first row
      const headers = Object.keys(csvData[0] || {})
      setCsvHeaders(headers)
      
      // Set default mappings for common column names
      const defaultMapping = {}
      DATABASE_FIELDS.forEach(field => {
        const matchingHeader = headers.find(header => 
          header.toLowerCase().includes(field.key.toLowerCase()) ||
          header.toLowerCase().includes(field.label.toLowerCase())
        )
        if (matchingHeader) {
          defaultMapping[field.key] = matchingHeader
        }
      })
      setColumnMapping(defaultMapping)
      
      // Set preview data (first 5 rows)
      setPreviewData(csvData.slice(0, 5))
    }
  }, [csvData])

  useEffect(() => {
    // Check if required fields are mapped
    const requiredFields = DATABASE_FIELDS.filter(field => field.required)
    const hasRequiredMappings = requiredFields.every(field => 
      columnMapping[field.key] && columnMapping[field.key].trim() !== ''
    )
    setIsValid(hasRequiredMappings)
  }, [columnMapping])

  const handleMappingChange = (databaseField, csvColumn) => {
    setColumnMapping(prev => ({
      ...prev,
      [databaseField]: csvColumn
    }))
  }

  const handleImport = () => {
    if (!isValid) return

    // Helper function to safely parse date
    const parseDate = (dateString) => {
      if (!dateString || dateString.trim() === '') return null
      
      // Check if it looks like a valid date format
      const datePatterns = [
        /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
        /^\d{2}\/\d{2}\/\d{4}$/, // MM/DD/YYYY
        /^\d{2}-\d{2}-\d{4}$/, // MM-DD-YYYY
        /^\d{1,2}\/\d{1,2}\/\d{2,4}$/ // M/D/YY or M/D/YYYY
      ]
      
      const isValidDate = datePatterns.some(pattern => pattern.test(dateString.trim()))
      if (!isValidDate) return null
      
      try {
        const date = new Date(dateString)
        return isNaN(date.getTime()) ? null : date.toISOString().split('T')[0]
      } catch {
        return null
      }
    }

    // Transform CSV data using the mapping
    const transformedData = csvData.map(row => {
      const transformed = {
        status: selectedStatus,
        subscribed_at: new Date().toISOString(),
        last_activity: new Date().toISOString()
      }

      DATABASE_FIELDS.forEach(field => {
        const csvColumn = columnMapping[field.key]
        if (csvColumn && row[csvColumn]) {
          // Special handling for birthday field
          if (field.key === 'birthday') {
            transformed[field.key] = parseDate(row[csvColumn])
          } else {
            transformed[field.key] = row[csvColumn]
          }
        } else {
          transformed[field.key] = null
        }
      })

      return transformed
    }).filter(row => row.email && row.email.trim() !== '')

    onMappingComplete(transformedData)
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md relative">
      {uploading && (
        <div className="absolute top-0 inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Importing Subscribers...</h3>
            <p className="text-gray-600 mb-4">Please wait while we process your data</p>
            <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{uploadProgress}% Complete</p>
          </div>
        </div>
      )}
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Map CSV Columns</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Column Mapping */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Column Mapping</h3>
          <div className="space-y-4">
            {DATABASE_FIELDS.map(field => (
              <div key={field.key} className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <select
                    value={columnMapping[field.key] || ''}
                    onChange={(e) => handleMappingChange(field.key, e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select CSV column...</option>
                    {csvHeaders.map(header => (
                      <option key={header} value={header}>
                        {header}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
          
          {/* Status Selection */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Import Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status for all imported subscribers
                  </label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="active">active</option>
                    <option value="unsubscribed">unsubscribed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Data Preview</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-3">
              Showing first 5 rows with current mapping
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    {DATABASE_FIELDS.map(field => (
                      <th key={field.key} className="text-left py-2 px-2 font-medium text-gray-700">
                        {field.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {previewData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      {DATABASE_FIELDS.map(field => {
                        const csvColumn = columnMapping[field.key]
                        const value = csvColumn ? row[csvColumn] : ''
                        return (
                          <td key={field.key} className="py-2 px-2 text-gray-600">
                            {value || '-'}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Validation and Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {!isValid && (
              <div className="text-red-600 text-sm">
                ⚠️ Please map all required fields (marked with *)
              </div>
            )}
            {isValid && (
              <div className="text-green-600 text-sm">
                ✅ All required fields mapped
              </div>
            )}
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleImport}
              disabled={!isValid || uploading}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? 'Importing...' : `Import ${csvData?.length || 0} Subscribers`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 