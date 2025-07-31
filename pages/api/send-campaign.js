import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { campaignId, emails, subject } = req.body;

    // Validate required fields
    if (!campaignId || !emails || !subject) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate emails
    if (!Array.isArray(emails) || emails.length === 0) {
      return res.status(400).json({ error: 'Invalid email list' });
    }

    // Filter valid emails
    const validEmails = emails.filter(email => isValidEmail(email));
    
    if (validEmails.length === 0) {
      return res.status(400).json({ error: 'No valid email addresses provided' });
    }

    // Read the campaign template
    const templatePath = path.join(process.cwd(), 'emails', `${campaignId}.html`);
    
    if (!fs.existsSync(templatePath)) {
      return res.status(404).json({ error: 'Campaign template not found' });
    }

    const htmlContent = fs.readFileSync(templatePath, 'utf8');

    // Gmail transporter configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS 
      }
    });

    let sentCount = 0;
    const errors = [];

    // Send emails to each recipient
    for (const email of validEmails) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: subject,
          html: htmlContent,
        };

        await transporter.sendMail(mailOptions);
        sentCount++;
        
        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`Error sending to ${email}:`, error);
        errors.push({ email, error: error.message });
      }
    }

    return res.status(200).json({
      success: true,
      sentCount,
      totalEmails: validEmails.length,
      errors: errors.length > 0 ? errors : undefined
    });

  } catch (error) {
    console.error('Campaign sending error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 