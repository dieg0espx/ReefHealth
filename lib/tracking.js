import { supabase } from './supabase'

// Generate tracking pixel URL for email opens
export function generateTrackingPixel(campaignId, userId) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.honestaffordablehealthcare.com'
  return `${baseUrl}/api/tracking/pixel?campaign_id=${encodeURIComponent(campaignId)}&user_id=${encodeURIComponent(userId)}`
}

// Generate click tracking URL
export function generateClickTrackingUrl(originalUrl, campaignId, userId) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.honestaffordablehealthcare.com'
  return `${baseUrl}/api/tracking/click?url=${encodeURIComponent(originalUrl)}&campaign_id=${encodeURIComponent(campaignId)}&user_id=${encodeURIComponent(userId)}`
}

// Add tracking to email HTML
export function addTrackingToEmail(html, campaignId, userId) {
  let trackedHtml = html

  // Add tracking pixel at the end of the email
  const trackingPixel = `<img src="${generateTrackingPixel(campaignId, userId)}" width="1" height="1" style="display:none;" alt="" />`
  
  // Insert tracking pixel before closing body tag
  if (trackedHtml.includes('</body>')) {
    trackedHtml = trackedHtml.replace('</body>', `${trackingPixel}\n</body>`)
  } else {
    // If no body tag, add the pixel at the end
    trackedHtml = trackedHtml + `\n${trackingPixel}`
  }

  // Replace all links with tracking URLs
  const linkRegex = /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*?)>/gi
  trackedHtml = trackedHtml.replace(linkRegex, (match, beforeHref, url, afterHref) => {
    // Skip if it's already a tracking URL or if it's a mailto: link
    if (url.includes('/api/tracking/click') || url.startsWith('mailto:')) {
      return match
    }
    
    const trackingUrl = generateClickTrackingUrl(url, campaignId, userId)
    return `<a ${beforeHref}href="${trackingUrl}"${afterHref}>`
  })

  // Debug: Log the tracking pixel URL
  console.log('=== TRACKING PIXEL ADDED ===')
  console.log('Campaign ID:', campaignId)
  console.log('User ID:', userId)
  console.log('Tracking Pixel URL:', generateTrackingPixel(campaignId, userId))
  console.log('HTML contains tracking pixel:', trackedHtml.includes(generateTrackingPixel(campaignId, userId)))
  console.log('========================')

  return trackedHtml
}

// Get tracking statistics for a campaign
export async function getCampaignTrackingStats(userId, campaignId) {
  try {
    // Get opens count
    const { count: opensCount } = await supabase
      .from('email_opens')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('campaign_id', campaignId)

    // Get clicks count
    const { count: clicksCount } = await supabase
      .from('email_clicks')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('campaign_id', campaignId)

    // Get recent activity (simplified - just timestamps)
    const { data: recentOpens } = await supabase
      .from('email_opens')
      .select('opened_at')
      .eq('user_id', userId)
      .eq('campaign_id', campaignId)
      .order('opened_at', { ascending: false })
      .limit(10)

    const { data: recentClicks } = await supabase
      .from('email_clicks')
      .select('clicked_at, clicked_url')
      .eq('user_id', userId)
      .eq('campaign_id', campaignId)
      .order('clicked_at', { ascending: false })
      .limit(10)

    return {
      totalOpens: opensCount || 0,
      totalClicks: clicksCount || 0,
      uniqueOpens: opensCount || 0, // Simplified - same as total
      uniqueClicks: clicksCount || 0, // Simplified - same as total
      recentOpens: recentOpens || [],
      recentClicks: recentClicks || []
    }
  } catch (error) {
    console.error('Error getting campaign tracking stats:', error)
    return {
      totalOpens: 0,
      totalClicks: 0,
      uniqueOpens: 0,
      uniqueClicks: 0,
      recentOpens: [],
      recentClicks: []
    }
  }
}

// Get subscriber tracking activity
export async function getSubscriberTrackingActivity(userId, subscriberId) {
  try {
    const { data: opens } = await supabase
      .from('email_opens')
      .select('campaign_id, opened_at')
      .eq('user_id', userId)
      .eq('subscriber_id', subscriberId)
      .order('opened_at', { ascending: false })

    const { data: clicks } = await supabase
      .from('email_clicks')
      .select('campaign_id, clicked_at, clicked_url')
      .eq('user_id', userId)
      .eq('subscriber_id', subscriberId)
      .order('clicked_at', { ascending: false })

    return {
      opens: opens || [],
      clicks: clicks || []
    }
  } catch (error) {
    console.error('Error getting subscriber tracking activity:', error)
    return {
      opens: [],
      clicks: []
    }
  }
} 