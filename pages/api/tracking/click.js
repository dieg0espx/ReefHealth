export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { campaign_id, subscriber_id, user_id, url } = req.query

    if (!campaign_id || !subscriber_id || !user_id || !url) {
      console.error('Missing required parameters:', { campaign_id, subscriber_id, user_id, url })
      return res.status(400).json({ error: 'Missing required parameters' })
    }

    // Decode the URL
    const decodedUrl = decodeURIComponent(url)

    // Import Supabase client
    const { createClient } = require('@supabase/supabase-js')
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    // Record the click event
    const { error: clickError } = await supabase
      .from('email_clicks')
      .insert({
        campaign_id,
        subscriber_id,
        user_id,
        clicked_url: decodedUrl,
        clicked_at: new Date().toISOString(),
        ip_address: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        user_agent: req.headers['user-agent']
      })

    if (clickError) {
      console.error('Error recording email click:', clickError)
    }

    // Update email_stats table
    const { data: existingStats } = await supabase
      .from('email_stats')
      .select('click_count')
      .eq('campaign_id', campaign_id)
      .eq('user_id', user_id)
      .single()

    if (existingStats) {
      await supabase
        .from('email_stats')
        .update({ 
          click_count: existingStats.click_count + 1,
          click_rate: ((existingStats.click_count + 1) / existingStats.sent_count * 100).toFixed(2)
        })
        .eq('campaign_id', campaign_id)
        .eq('user_id', user_id)
    }

    // Redirect to the original URL
    res.redirect(decodedUrl)

  } catch (error) {
    console.error('Error in click tracking:', error)
    
    // If there's an error, still try to redirect to the URL if available
    const { url } = req.query
    if (url) {
      const decodedUrl = decodeURIComponent(url)
      res.redirect(decodedUrl)
    } else {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
} 