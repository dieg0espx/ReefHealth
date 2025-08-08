import { supabase } from './supabase'

// Generate tracking pixel URL for email opens
export function generateTrackingPixel(campaignId, subscriberId, userId) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.honestaffordablehealthcare.com'
  return `${baseUrl}/api/tracking/pixel?campaign_id=${encodeURIComponent(campaignId)}&subscriber_id=${encodeURIComponent(subscriberId)}&user_id=${encodeURIComponent(userId)}`
}

// Generate click tracking URL
export function generateClickTrackingUrl(originalUrl, campaignId, subscriberId, userId) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.honestaffordablehealthcare.com'
  return `${baseUrl}/api/tracking/click?url=${encodeURIComponent(originalUrl)}&campaign_id=${encodeURIComponent(campaignId)}&subscriber_id=${encodeURIComponent(subscriberId)}&user_id=${encodeURIComponent(userId)}`
}

// Add tracking to email HTML
export function addTrackingToEmail(html, campaignId, subscriberId, userId) {
  let trackedHtml = html

  // Add tracking pixel at the end of the email
  const trackingPixel = `<img src="${generateTrackingPixel(campaignId, subscriberId, userId)}" width="1" height="1" style="display:none;" alt="" />`
  
  // Insert tracking pixel before closing body tag
  trackedHtml = trackedHtml.replace('</body>', `${trackingPixel}\n</body>`)

  // Replace all links with tracking URLs
  const linkRegex = /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*?)>/gi
  trackedHtml = trackedHtml.replace(linkRegex, (match, beforeHref, url, afterHref) => {
    // Skip if it's already a tracking URL or if it's a mailto: link
    if (url.includes('/api/tracking/click') || url.startsWith('mailto:')) {
      return match
    }
    
    const trackingUrl = generateClickTrackingUrl(url, campaignId, subscriberId, userId)
    return `<a ${beforeHref}href="${trackingUrl}"${afterHref}>`
  })

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

    // Get unique opens (by subscriber)
    const { data: uniqueOpens } = await supabase
      .from('email_opens')
      .select('subscriber_id')
      .eq('user_id', userId)
      .eq('campaign_id', campaignId)

    const uniqueOpensCount = uniqueOpens ? new Set(uniqueOpens.map(o => o.subscriber_id)).size : 0

    // Get unique clicks (by subscriber)
    const { data: uniqueClicks } = await supabase
      .from('email_clicks')
      .select('subscriber_id')
      .eq('user_id', userId)
      .eq('campaign_id', campaignId)

    const uniqueClicksCount = uniqueClicks ? new Set(uniqueClicks.map(c => c.subscriber_id)).size : 0

    // Get recent activity
    const { data: recentOpens } = await supabase
      .from('email_opens')
      .select('opened_at, subscriber_id')
      .eq('user_id', userId)
      .eq('campaign_id', campaignId)
      .order('opened_at', { ascending: false })
      .limit(10)

    const { data: recentClicks } = await supabase
      .from('email_clicks')
      .select('clicked_at, subscriber_id, clicked_url')
      .eq('user_id', userId)
      .eq('campaign_id', campaignId)
      .order('clicked_at', { ascending: false })
      .limit(10)

    return {
      totalOpens: opensCount || 0,
      totalClicks: clicksCount || 0,
      uniqueOpens: uniqueOpensCount,
      uniqueClicks: uniqueClicksCount,
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