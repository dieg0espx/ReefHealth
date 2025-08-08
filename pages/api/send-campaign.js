import { addTrackingToEmail } from '../../lib/tracking'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { campaignId, userId, emailHtml, recipientEmail, recipientName } = req.body

    if (!campaignId || !userId || !emailHtml || !recipientEmail) {
      return res.status(400).json({ error: 'Missing required parameters' })
    }

    // Add tracking to the email HTML (simplified - no subscriber ID)
    const trackedHtml = addTrackingToEmail(emailHtml, campaignId, userId)
    
    // Debug: Log email details
    console.log('=== EMAIL SENDING DEBUG ===')
    console.log('Original HTML length:', emailHtml.length)
    console.log('Tracked HTML length:', trackedHtml.length)
    console.log('Tracking added:', trackedHtml !== emailHtml)
    console.log('========================')

    // Create email subject based on campaign
    const subject = `Test Email - ${campaignId} Campaign`

    // Create a test account for development
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

    const mailOptions = {
      from: process.env.EMAIL_USER || 'test@ethereal.email',
      to: recipientEmail,
      subject: subject,
      html: trackedHtml,
      headers: {
        'X-Campaign-ID': campaignId,
        'X-User-ID': userId
      }
    }

    try {
      const info = await transporter.sendMail(mailOptions)
      
      console.log('Email sent successfully:', {
        messageId: info.messageId,
        to: recipientEmail,
        subject,
        campaignId,
        hasTracking: trackedHtml !== emailHtml
      })

      // If using ethereal email, provide the preview URL
      let previewUrl = null
      if (info.messageId && !process.env.EMAIL_USER) {
        previewUrl = `https://ethereal.email/message/${info.messageId}`
      }

      res.status(200).json({ 
        success: true, 
        message: 'Email sent successfully',
        trackingEnabled: true,
        details: {
          to: recipientEmail,
          subject,
          campaignId,
          hasTracking: trackedHtml !== emailHtml,
          messageId: info.messageId,
          previewUrl
        }
      })
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      
      // If Gmail fails, try with a different approach
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        res.status(500).json({ 
          error: 'Email service not configured. Please set EMAIL_USER and EMAIL_PASS environment variables for Gmail, or use a different email service.' 
        })
      } else {
        res.status(500).json({ 
          error: `Failed to send email: ${emailError.message}` 
        })
      }
    }

  } catch (error) {
    console.error('Error sending campaign:', error)
    res.status(500).json({ error: 'Failed to send campaign' })
  }
} 