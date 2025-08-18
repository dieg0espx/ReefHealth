import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { campaignId, email } = req.body

  if (!campaignId || !email) {
    return res.status(400).json({ message: 'Campaign ID and email are required' })
  }

  try {
    // Read the campaign HTML file
    const fs = require('fs')
    const path = require('path')
    const campaignPath = path.join(process.cwd(), 'campaings', `${campaignId}.html`)
    
    if (!fs.existsSync(campaignPath)) {
      return res.status(404).json({ message: 'Campaign not found' })
    }

    const campaignContent = fs.readFileSync(campaignPath, 'utf8')
    
    // Extract title from HTML
    const titleMatch = campaignContent.match(/<title>(.*?)<\/title>/i)
    const subject = titleMatch ? titleMatch[1] : `Test Campaign: ${campaignId}`

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Send email
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: `[TEST] ${subject}`,
      html: campaignContent,
    })

    console.log('Test email sent:', info.messageId)

    res.status(200).json({ 
      message: 'Test campaign sent successfully',
      messageId: info.messageId 
    })

  } catch (error) {
    console.error('Error sending test campaign:', error)
    res.status(500).json({ 
      message: 'Error sending test campaign',
      error: error.message 
    })
  }
}
