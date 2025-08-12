import { supabase } from './supabase'

// Generate simple tracking pixel URL for email_tracking table
export function generateSimpleTrackingPixel(action = 'open', emailAddress, firstName = null, lastName = null) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.honestaffordablehealthcare.com'
  const params = new URLSearchParams()
  
  if (action) params.append('action', action)
  if (emailAddress) params.append('email_address', emailAddress)
  if (firstName) params.append('first_name', firstName)
  if (lastName) params.append('last_name', lastName)
  
  return `${baseUrl}/api/tracking/simple-pixel?${params.toString()}`
}

// Add simple tracking to email HTML for email_tracking table
export function addSimpleTrackingToEmail(html, action = 'open', emailAddress, firstName = null, lastName = null) {
  let trackedHtml = html

  // Add simple tracking pixel at the end of the email
  const trackingPixel = `<img src="${generateSimpleTrackingPixel(action, emailAddress, firstName, lastName)}" width="1" height="1" style="display:none;" alt="" />`
  
  // Insert tracking pixel before closing body tag
  if (trackedHtml.includes('</body>')) {
    trackedHtml = trackedHtml.replace('</body>', `${trackingPixel}\n</body>`)
  } else {
    // If no body tag, add the pixel at the end
    trackedHtml = trackedHtml + `\n${trackingPixel}`
  }

  // Debug: Log the tracking pixel URL
  console.log('=== SIMPLE TRACKING PIXEL ADDED ===')
  console.log('Action:', action)
  console.log('Email Address:', emailAddress)
  console.log('First Name:', firstName)
  console.log('Last Name:', lastName)
  console.log('Tracking Pixel URL:', generateSimpleTrackingPixel(action, emailAddress, firstName, lastName))
  console.log('HTML contains tracking pixel:', trackedHtml.includes(generateSimpleTrackingPixel(action, emailAddress, firstName, lastName)))
  console.log('==================================')

  return trackedHtml
} 