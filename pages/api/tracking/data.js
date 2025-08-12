export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { action, email_address, limit = 100 } = req.query

    // Import Supabase client
    const { createClient } = require('@supabase/supabase-js')
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    // Build query
    let query = supabase
      .from('email_tracking')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(parseInt(limit))

    // Add filters if provided
    if (action) {
      query = query.eq('action', action)
    }
    if (email_address) {
      query = query.eq('email_address', email_address)
    }


    const { data, error } = await query

    if (error) {
      console.error('Error fetching tracking data:', error)
      return res.status(500).json({ error: 'Failed to fetch tracking data' })
    }

    // Get summary statistics
    const { count: totalCount } = await supabase
      .from('email_tracking')
      .select('*', { count: 'exact', head: true })

    const { data: actionStats } = await supabase
      .from('email_tracking')
      .select('action')
      .then(result => {
        if (result.data) {
          const stats = {}
          result.data.forEach(item => {
            stats[item.action] = (stats[item.action] || 0) + 1
          })
          return { data: stats }
        }
        return { data: {} }
      })

    res.status(200).json({
      data,
      summary: {
        total_count: totalCount || 0,
        action_stats: actionStats || {},
        filtered_count: data.length
      }
    })

  } catch (error) {
    console.error('Error in tracking data API:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
