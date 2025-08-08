export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { campaign_id, user_id } = req.query

    if (!campaign_id || !user_id) {
      console.error('Missing required parameters:', { campaign_id, user_id })
      return res.status(400).json({ error: 'Missing required parameters' })
    }

    // Import Supabase client
    const { createClient } = require('@supabase/supabase-js')
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    // Record the open event (simplified - just campaign and user)
    const { error: openError } = await supabase
      .from('email_opens')
      .insert({
        campaign_id,
        user_id,
        opened_at: new Date().toISOString(),
        ip_address: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        user_agent: req.headers['user-agent']
      })

    if (openError) {
      console.error('Error recording email open:', openError)
    }

    // Update email_stats table
    const { data: existingStats } = await supabase
      .from('email_stats')
      .select('open_count, sent_count')
      .eq('campaign_id', campaign_id)
      .eq('user_id', user_id)
      .single()

    if (existingStats) {
      await supabase
        .from('email_stats')
        .update({ 
          open_count: existingStats.open_count + 1,
          open_rate: ((existingStats.open_count + 1) / existingStats.sent_count * 100).toFixed(2)
        })
        .eq('campaign_id', campaign_id)
        .eq('user_id', user_id)
    } else {
      // Create new stats record if it doesn't exist
      await supabase
        .from('email_stats')
        .insert({
          campaign_id,
          user_id,
          open_count: 1,
          sent_count: 1,
          open_rate: 100.00,
          sent_date: new Date().toISOString()
        })
    }

    // Return a 1x1 transparent GIF
    const transparentGif = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64')
    
    res.setHeader('Content-Type', 'image/gif')
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    res.setHeader('Pragma', 'no-cache')
    res.setHeader('Expires', '0')
    res.send(transparentGif)

  } catch (error) {
    console.error('Error in tracking pixel:', error)
    
    // Still return the transparent GIF even if tracking fails
    const transparentGif = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64')
    res.setHeader('Content-Type', 'image/gif')
    res.send(transparentGif)
  }
} 