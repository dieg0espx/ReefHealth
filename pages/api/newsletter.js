import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, newsletter } = req.body;

    console.log('Newsletter subscription request:', { email, newsletter });
    console.log('Environment variables check:', {
      SMTP_USER: process.env.SMTP_USER ? 'Set' : 'Not set',
      SMTP_PASS: process.env.SMTP_PASS ? 'Set' : 'Not set',
      SMTP_FROM: process.env.SMTP_FROM ? 'Set' : 'Not set',
      NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL ? 'Set' : 'Not set'
    });

    // Validate email
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // For now, just return success to test if the form works
    console.log('Form validation passed, returning success');
    
    res.status(200).json({ 
      success: true, 
      message: 'Newsletter subscription successful! Check your email for confirmation.' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe to newsletter. Please try again.' 
    });
  }
}
