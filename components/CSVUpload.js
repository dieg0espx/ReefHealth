import { useState } from 'react'
import Papa from 'papaparse'

export default function CSVUpload() {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const [preview, setPreview] = useState(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile)
      setMessage('')
      
      // Preview the CSV data
      Papa.parse(selectedFile, {
        header: true,
        complete: (results) => {
          console.log('CSV parsed results:', results)
          console.log('CSV headers:', results.meta.fields)
          console.log('First few rows:', results.data.slice(0, 3))
          
          // Check if Email Address column exists
          const hasEmailColumn = results.meta.fields && results.meta.fields.includes('Email Address')
          if (!hasEmailColumn) {
            setMessage('❌ Error: CSV must contain "Email Address" column')
            setFile(null)
            setPreview(null)
            return
          }
          
          // Check for valid email addresses
          const validRows = results.data.filter(row => 
            row['Email Address'] && 
            row['Email Address'].trim() !== '' && 
            row['Email Address'].includes('@')
          )
          
          if (validRows.length === 0) {
            setMessage('❌ Error: No valid email addresses found in the CSV file')
            setFile(null)
            setPreview(null)
            return
          }
          
          setPreview(results.data.slice(0, 5)) // Show first 5 rows
          setMessage(`✅ Found ${validRows.length} valid email addresses`)
        },
        error: (error) => {
          console.error('CSV parsing error:', error)
          setMessage(`❌ Error parsing CSV: ${error.message}`)
          setFile(null)
          setPreview(null)
        }
      })
    } else {
      setMessage('Please select a valid CSV file')
      setFile(null)
      setPreview(null)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setMessage('')

    Papa.parse(file, {
      header: true,
      complete: async (results) => {
        try {
          console.log('Uploading CSV data:', results.data.slice(0, 3))
          
          // Filter for valid email addresses
          const validData = results.data.filter(row => 
            row['Email Address'] && 
            row['Email Address'].trim() !== '' && 
            row['Email Address'].includes('@')
          )
          
          console.log('Valid rows to upload:', validData.length)
          
          if (validData.length === 0) {
            setMessage('❌ No valid email addresses found in the CSV file')
            setUploading(false)
            return
          }
          
          const response = await fetch('/api/import-csv', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              csvData: validData
            })
          })

          const result = await response.json()

          if (response.ok) {
            setMessage(`✅ Successfully imported ${result.imported} subscribers`)
            setFile(null)
            setPreview(null)
          } else {
            setMessage(`❌ Error: ${result.error}`)
          }
        } catch (error) {
          setMessage(`❌ Error: ${error.message}`)
        } finally {
          setUploading(false)
        }
      },
      error: (error) => {
        setMessage(`❌ CSV parsing error: ${error.message}`)
        setUploading(false)
      }
    })
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Import CSV Subscribers</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select CSV File
        </label>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {preview && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Preview (First 5 rows):</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  {Object.keys(preview[0] || {}).map((header) => (
                    <th key={header} className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {preview.map((row, index) => (
                  <tr key={index} className="border-b">
                    {Object.values(row).map((value, cellIndex) => (
                      <td key={cellIndex} className="px-3 py-2 text-sm text-gray-900">
                        {value || '-'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {file && (
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? 'Importing...' : 'Import Subscribers'}
        </button>
      )}

      {message && (
        <div className={`mt-4 p-3 rounded-md ${
          message.includes('✅') 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {message}
        </div>
      )}

      <div className="mt-4 text-sm text-gray-600">
        <p className="font-semibold mb-2">Expected CSV Format:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Email Address (required)</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Birthday</li>
          <li>Company</li>
        </ul>
      </div>
    </div>
  )
} 