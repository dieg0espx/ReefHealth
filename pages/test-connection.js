import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '../lib/supabase'

export default function TestConnection() {
  const [status, setStatus] = useState('Testing...')
  const [error, setError] = useState(null)
  const [details, setDetails] = useState({})

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Show environment variables (without exposing the full key)
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const hasAnonKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        
        setDetails({
          url: supabaseUrl,
          hasKey: hasAnonKey,
          urlValid: supabaseUrl?.startsWith('https://') && supabaseUrl?.includes('.supabase.co')
        })

        // Test basic connection
        const { data, error } = await supabase.from('subscribers').select('count').limit(1)
        
        if (error) {
          setError(error.message)
          setStatus('Connection failed')
        } else {
          setStatus('Connection successful! Supabase is working.')
        }
      } catch (err) {
        setError(err.message)
        setStatus('Connection failed')
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Supabase Connection Test
          </h2>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">Status: {status}</p>
            {error && (
              <div className="text-red-600 text-sm">
                Error: {error}
              </div>
            )}
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Configuration Details:</h3>
            <div className="space-y-2 text-xs">
              <div>
                <span className="font-medium">URL:</span> 
                <span className={details.urlValid ? 'text-green-600' : 'text-red-600'}>
                  {details.urlValid ? 'Valid' : 'Invalid'}
                </span>
                <div className="text-gray-500 mt-1 break-all">{details.url}</div>
              </div>
              <div>
                <span className="font-medium">API Key:</span> 
                <span className={details.hasKey ? 'text-green-600' : 'text-red-600'}>
                  {details.hasKey ? 'Present' : 'Missing'}
                </span>
              </div>
            </div>
          </div>

          {!details.urlValid && (
            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
              <p className="text-sm text-yellow-800">
                <strong>Issue detected:</strong> Your Supabase URL appears to be invalid or the project may be paused/deleted.
              </p>
              <p className="text-xs text-yellow-700 mt-2">
                Please check your Supabase dashboard and update your .env.local file with the correct project URL and key.
              </p>
            </div>
          )}
        </div>

        <div className="text-center space-y-2">
          <Link href="/login" className="text-blue-600 hover:text-blue-500 block">
            Go to Login
          </Link>
          <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 block text-sm">
            Check Supabase Dashboard
          </a>
        </div>
      </div>
    </div>
  )
} 