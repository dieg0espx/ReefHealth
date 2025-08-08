import { generateTrackingPixel, generateClickTrackingUrl } from '../../../lib/tracking'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { campaign_id, subscriber_id, user_id, test_url } = req.query

    if (!campaign_id || !subscriber_id || !user_id) {
      return res.status(400).json({ error: 'Missing required parameters' })
    }

    const trackingPixel = generateTrackingPixel(campaign_id, subscriber_id, user_id)
    const clickTrackingUrl = test_url ? generateClickTrackingUrl(test_url, campaign_id, subscriber_id, user_id) : null

    res.status(200).json({
      tracking_pixel: trackingPixel,
      click_tracking_url: clickTrackingUrl,
      parameters: {
        campaign_id,
        subscriber_id,
        user_id,
        test_url
      }
    })

  } catch (error) {
    console.error('Error generating test tracking URLs:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
} 