# Campaign Management Setup

This guide will help you set up the email campaign system.

## Email Service Configuration

The system is configured to use Gmail for sending campaigns.

### Gmail Setup

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Create a `.env.local` file in your project root with:
   ```
   EMAIL_USER=info@honestaffordablehealthcare.com
   EMAIL_PASS=bfdnvahlvxozgcug
   ```

## Usage

1. Navigate to `/campaigns` in your application
2. Select a campaign from the available templates
3. Enter the email subject
4. Paste your email list (one email per line)
5. Click "Send Campaign"

## Available Campaigns

- **24K List Campaign**: High-value prospect campaign
- **Seamless AI Campaign**: AI-powered healthcare solutions
- **Franchisor Campaign**: Franchise opportunities
- **General Campaign 1**: General marketing campaign

## Security Notes

- Email credentials are stored in environment variables (`.env.local`)
- Never commit `.env.local` to version control
- Monitor your Gmail sending limits (500 emails/day for regular accounts)
- Consider rate limiting for production use

## Troubleshooting

- Check your email service credentials
- Verify your email templates exist in the `emails/` folder
- Monitor the console for error messages
- Test with a small email list first 