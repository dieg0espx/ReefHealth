import { supabase } from '../../lib/supabase'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  try {
    console.log('Received request body size:', JSON.stringify(req.body).length)
    console.log('Request body keys:', Object.keys(req.body))
    
    const { csvData, userId } = req.body

    if (!csvData || !Array.isArray(csvData)) {
      console.error('Invalid csvData:', typeof csvData, csvData ? csvData.length : 'undefined')
      return res.status(400).json({ error: 'CSV data is required and must be an array' })
    }

    console.log('Received CSV data sample:', csvData.slice(0, 2))
    console.log('Total CSV rows:', csvData.length)
    
    // Transform CSV data to match database structure
    const subscribers = csvData.map((row, index) => {
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

      const subscriber = {
        email: row.email,
        first_name: row.first_name,
        last_name: row.last_name,
        address: row.address || null,
        phone_number: row.phone_number || null,
        birthday: parseDate(row.birthday),
        company: row.company || null,
        status: row.status || 'active',
        subscribed_at: row.subscribed_at || new Date().toISOString(),
        last_activity: row.last_activity || new Date().toISOString()
      }
      
      if (index < 3) {
        console.log(`Transformed row ${index}:`, subscriber)
      }
      return subscriber
    }).filter(subscriber => subscriber.email && subscriber.email.trim() !== '') // Filter out empty emails

    console.log('Valid subscribers after filtering:', subscribers.length)
    
    if (subscribers.length === 0) {
      return res.status(400).json({ error: 'No valid subscribers found after processing CSV data' })
    }

    // Insert subscribers in batches to avoid hitting limits
    const batchSize = 50 // Reduced batch size for better performance
    const results = []
    
    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize)
      
      try {
        const { data, error } = await supabase
          .from('subscribers')
          .upsert(batch, { 
            onConflict: 'email',
            ignoreDuplicates: false 
          })
          .select()

        if (error) {
          console.error('Batch import error:', error)
          return res.status(500).json({ 
            error: `Import failed at batch ${Math.floor(i / batchSize) + 1}: ${error.message}` 
          })
        }

        results.push(...data)
        console.log(`Processed batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(subscribers.length / batchSize)}`)
      } catch (error) {
        console.error('Batch processing error:', error)
        return res.status(500).json({ 
          error: `Import failed at batch ${Math.floor(i / batchSize) + 1}: ${error.message}` 
        })
      }
    }

    console.log('🎉 Import completed successfully!')

    res.status(200).json({ 
      message: `Successfully imported ${results.length} subscribers`,
      imported: results.length,
      data: results
    })

  } catch (error) {
    console.error('CSV import error:', error)
    res.status(500).json({ error: error.message })
  }
} 