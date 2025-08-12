export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { action, email_address, campaign, first_name, last_name } = req.query

    // Import Supabase client
    const { createClient } = require('@supabase/supabase-js')
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    // Log the tracking event
    console.log('=== SIMPLE TRACKING PIXEL HIT ===')
    console.log('Action:', action || 'open')
    console.log('Email Address:', email_address)
    console.log('Campaign:', campaign)
    console.log('First Name:', first_name)
    console.log('Last Name:', last_name)
    
    // Insert tracking data into email_tracking table
    const { data: insertData, error: trackingError } = await supabase
      .from('email_tracking')
      .insert({
        action: action || 'open',
        email_address: email_address,
        campaign: campaign,
        first_name: first_name || null,
        last_name: last_name || null
      })
      .select()

    if (trackingError) {
      console.error('Error recording tracking event:', trackingError)
      console.error('Error details:', trackingError.message, trackingError.details, trackingError.hint)
    } else {
      console.log('Successfully recorded tracking event:', insertData)
    }
    console.log('================================')

    // Return a 1x1 transparent GIF
    const transparentGif = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64')
    
    res.setHeader('Content-Type', 'image/gif')
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    res.setHeader('Pragma', 'no-cache')
    res.setHeader('Expires', '0')
    res.send(transparentGif)

  } catch (error) {
    console.error('Error in simple tracking pixel:', error)
    
    // Still return the transparent GIF even if tracking fails
    const transparentGif = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64')
    res.setHeader('Content-Type', 'image/gif')
    res.send(transparentGif)
  }
}
