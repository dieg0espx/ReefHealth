import { addSimpleTrackingToEmail } from '../../lib/tracking'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { campaignId, emails, subject, userId } = req.body

    if (!campaignId || !emails || !Array.isArray(emails) || emails.length === 0) {
      return res.status(400).json({ error: 'Missing required parameters: campaignId and emails array' })
    }

    // Normalize emails array - handle both string emails and object emails
    const normalizedEmails = emails.map(email => {
      if (typeof email === 'string') {
        return { email, first_name: null, last_name: null }
      }
      return {
        email: email.email,
        first_name: email.first_name || null,
        last_name: email.last_name || null
      }
    })

    // Load the email template
    const templatePath = path.join(process.cwd(), 'emails', `${campaignId}.html`)
    let emailHtml
    
    try {
      emailHtml = fs.readFileSync(templatePath, 'utf8')
    } catch (error) {
      console.error('Error loading email template:', error)
      return res.status(404).json({ error: `Email template not found for campaign: ${campaignId}` })
    }

    // Create email transporter
    let transporter
    
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // Use Gmail if credentials are provided
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      })
    } else {
      // For development, create a test account
      const testAccount = await nodemailer.createTestAccount()
      
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      })
    }

    const results = []
    let sentCount = 0
    let errorCount = 0

    // Process emails in batches to avoid overwhelming the email service
    const batchSize = 10
    for (let i = 0; i < normalizedEmails.length; i += batchSize) {
      const batch = normalizedEmails.slice(i, i + batchSize)
      
      // Process batch in parallel
      const batchPromises = batch.map(async (recipient) => {
        try {
          // Personalize the email content
          let personalizedHtml = emailHtml
          
          // Replace personalization placeholders
          if (recipient.first_name) {
            personalizedHtml = personalizedHtml.replace(/<<\s*Test First Name\s*>>/g, recipient.first_name)
            personalizedHtml = personalizedHtml.replace(/<<\s*First Name\s*>>/g, recipient.first_name)
            // Also handle variations without spaces
            personalizedHtml = personalizedHtml.replace(/<<Test First Name>>/g, recipient.first_name)
            personalizedHtml = personalizedHtml.replace(/<<First Name>>/g, recipient.first_name)
          }
          if (recipient.last_name) {
            personalizedHtml = personalizedHtml.replace(/<<\s*Last Name\s*>>/g, recipient.last_name)
            personalizedHtml = personalizedHtml.replace(/<<Last Name>>/g, recipient.last_name)
          }
          
          // Debug: Log the personalization
          console.log('=== PERSONALIZATION DEBUG ===')
          console.log('Original template contains placeholder:', emailHtml.includes('<< Test First Name >>'))
          console.log('Personalized HTML contains placeholder:', personalizedHtml.includes('<< Test First Name >>'))
          console.log('First name:', recipient.first_name)
          console.log('Last name:', recipient.last_name)
          console.log('================================')
          
          // Replace the tracking pixel placeholder with the actual URL for this recipient
          const trackingPixelUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.honestaffordablehealthcare.com'}/api/tracking/simple-pixel?action=open&email_address=${encodeURIComponent(recipient.email)}&campaign=${encodeURIComponent(campaignId)}&first_name=${encodeURIComponent(recipient.first_name || '')}&last_name=${encodeURIComponent(recipient.last_name || '')}`
          const trackedHtml = personalizedHtml.replace('{{TRACKING_PIXEL_URL}}', trackingPixelUrl)
          
          // Debug: Log the tracking pixel replacement
          console.log('=== TRACKING PIXEL DEBUG ===')
          console.log('Template contains tracking pixel placeholder:', personalizedHtml.includes('{{TRACKING_PIXEL_URL}}'))
          console.log('Final HTML contains tracking pixel placeholder:', trackedHtml.includes('{{TRACKING_PIXEL_URL}}'))
          console.log('Final HTML contains tracking pixel URL:', trackedHtml.includes(trackingPixelUrl))
          console.log('Tracking pixel URL:', trackingPixelUrl)
          console.log('================================')

          const mailOptions = {
            from: process.env.EMAIL_USER || 'test@ethereal.email',
            to: recipient.email,
            subject: subject || `Campaign: ${campaignId}`,
            html: trackedHtml,
            headers: {
              'X-Campaign-ID': campaignId,
              'X-User-ID': userId || 'system'
            }
          }

          const info = await transporter.sendMail(mailOptions)
          
          console.log('Email sent successfully:', {
            messageId: info.messageId,
            to: recipient.email,
            campaignId,
            hasTracking: true,
            firstName: recipient.first_name,
            lastName: recipient.last_name
          })

          return {
            email: recipient.email,
            success: true,
            messageId: info.messageId,
            previewUrl: info.messageId && !process.env.EMAIL_USER 
              ? `https://ethereal.email/message/${info.messageId}` 
              : null
          }
        } catch (error) {
          console.error(`Error sending email to ${recipient.email}:`, error)
          return {
            email: recipient.email,
            success: false,
            error: error.message
          }
        }
      })

      // Wait for batch to complete
      const batchResults = await Promise.all(batchPromises)
      results.push(...batchResults)
      
      // Count successes and failures
      batchResults.forEach(result => {
        if (result.success) {
          sentCount++
        } else {
          errorCount++
        }
      })

      // Add a small delay between batches to be respectful to email services
      if (i + batchSize < normalizedEmails.length) {
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }

    console.log('=== CAMPAIGN SENDING COMPLETE ===')
    console.log('Campaign ID:', campaignId)
    console.log('Total emails:', normalizedEmails.length)
    console.log('Successfully sent:', sentCount)
    console.log('Failed:', errorCount)
    console.log('================================')

    res.status(200).json({ 
      success: true, 
      message: `Campaign sent successfully! ${sentCount} emails sent, ${errorCount} failed.`,
      sentCount,
      errorCount,
      totalCount: normalizedEmails.length,
      results
    })

  } catch (error) {
    console.error('Error sending campaign:', error)
    res.status(500).json({ error: 'Failed to send campaign' })
  }
} 