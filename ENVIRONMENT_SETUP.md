# Environment Setup Guide

## Required Environment Variables

Create a `.env.local` file in your project root with these variables:

```env
# Supabase Configuration (Required)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Email Configuration (Optional - for production email sending)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password

# Application Configuration (Production)
NEXT_PUBLIC_BASE_URL=https://www.honestaffordablehealthcare.com
```

## Production Configuration

For production deployment, make sure to set:

```env
NEXT_PUBLIC_BASE_URL=https://www.honestaffordablehealthcare.com
```

This ensures that:
- Tracking pixels use the correct domain
- Click tracking URLs point to the right server
- Email links work properly in production

## Development Configuration

For local development:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3001
```

## Tracking System

The tracking system generates URLs like:
- **Pixel Tracking**: `https://www.honestaffordablehealthcare.com/api/tracking/pixel?campaign_id=...&subscriber_id=...&user_id=...`
- **Click Tracking**: `https://www.honestaffordablehealthcare.com/api/tracking/click?url=...&campaign_id=...&subscriber_id=...&user_id=...`

## Testing Tracking

1. Send a test email from the Campaigns page
2. Check the email HTML for tracking pixels
3. Click links in the email to test click tracking
4. View tracking data in the Tracking tab

## Troubleshooting

If tracking isn't working:
1. Verify `NEXT_PUBLIC_BASE_URL` is set correctly
2. Check that the API endpoints are accessible
3. Ensure the domain is properly configured in your hosting provider
4. Test with the `/test-tracking` page 