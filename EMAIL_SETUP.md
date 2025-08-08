# Email Setup Guide

## Development Mode (Default)

The application uses Ethereal Email for development, which is a fake SMTP service that captures emails for testing. No setup is required for development.

When you send a test email, you'll receive a preview URL that you can click to see the email.

## Production Mode (Gmail)

To send real emails, follow these steps:

### 1. Enable 2-Factor Authentication
- Go to your Google Account settings
- Enable 2-factor authentication

### 2. Generate an App Password
- Go to Google Account > Security
- Under "2-Step Verification", click "App passwords"
- Generate a new app password for "Mail"
- Copy the 16-character password

### 3. Set Environment Variables
Create a `.env.local` file in your project root:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### 4. Restart the Development Server
```bash
npm run dev
```

## Alternative Email Services

You can also use other email services by modifying the transporter configuration in `pages/api/send-campaign.js`:

### SendGrid
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
})
```

### Mailgun
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.mailgun.org',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS
  }
})
```

## Testing

1. Go to the Campaigns page
2. Select a campaign
3. Click "Send Test"
4. Enter your email address
5. Click "Send Test Email"

The email will be sent with tracking enabled, and you can view the results in the Tracking tab. 