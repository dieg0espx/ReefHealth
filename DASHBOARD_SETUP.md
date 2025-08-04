# Dashboard Setup Instructions

## Prerequisites

1. Create a Supabase project at https://supabase.com
2. Get your project URL and anon key from the Supabase dashboard

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Replace `your_supabase_url_here` and `your_supabase_anon_key_here` with your actual Supabase project credentials.

## Database Setup

In your Supabase dashboard, create the following tables:

### subscribers table
```sql
CREATE TABLE subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  first_name VARCHAR,
  last_name VARCHAR,
  status VARCHAR DEFAULT 'Subscribed',
  subscribed_at TIMESTAMP DEFAULT NOW(),
  last_activity TIMESTAMP DEFAULT NOW(),
  tags TEXT[],
  user_id UUID REFERENCES auth.users(id)
);
```

### email_stats table
```sql
CREATE TABLE email_stats (
  id SERIAL PRIMARY KEY,
  campaign_name VARCHAR NOT NULL,
  campaign_id VARCHAR,
  sent_count INTEGER DEFAULT 0,
  open_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0,
  bounce_count INTEGER DEFAULT 0,
  open_rate DECIMAL(5,2) DEFAULT 0.00,
  click_rate DECIMAL(5,2) DEFAULT 0.00,
  sent_date TIMESTAMP DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);
```

### segments table
```sql
CREATE TABLE segments (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT,
  subscriber_count INTEGER DEFAULT 0,
  criteria JSONB,
  user_id UUID REFERENCES auth.users(id)
);
```

## Features

### Authentication
- Email/password authentication with Supabase
- Protected routes for dashboard access
- Automatic redirect to login for unauthenticated users

### Dashboard Sections

1. **Overview** (`/dashboard`)
   - Key metrics and statistics
   - Recent email performance
   - Quick action buttons

2. **Campaigns** (`/dashboard/campaigns`)
   - View campaign statistics
   - Track email performance metrics
   - Campaign analytics

3. **Audience** (`/dashboard/audience`)
   - Manage subscribers
   - Create segments
   - View subscriber analytics
   - Add new subscribers

### Navigation
- Responsive sidebar navigation
- Mobile-friendly design
- User profile and logout functionality

## Running the Application

1. Install dependencies:
```bash
npm install
```

2. Set up your environment variables in `.env.local`

3. Run the development server:
```bash
npm run dev
```

4. Visit `http://localhost:3000/login` to access the dashboard

## Usage

1. Sign up for a new account at `/signup`
2. Verify your email (check your inbox)
3. Sign in at `/login`
4. Access the dashboard at `/dashboard`

The dashboard is fully protected and requires authentication to access any dashboard pages.

## Data Flow

- **Authentication:** Handled by Supabase Auth
- **Audience:** Subscribers stored in Supabase
- **Email Stats:** Campaign performance metrics stored in Supabase
- **Campaign Content:** Managed externally (not stored in Supabase) 