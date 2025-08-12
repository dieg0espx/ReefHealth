-- Create email_tracking table for simple tracking
CREATE TABLE IF NOT EXISTS email_tracking (
  id SERIAL PRIMARY KEY,
  action VARCHAR NOT NULL DEFAULT 'open',
  email_address VARCHAR NOT NULL,
  campaign VARCHAR NOT NULL,
  first_name VARCHAR,
  last_name VARCHAR,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_email_tracking_action ON email_tracking(action);
CREATE INDEX IF NOT EXISTS idx_email_tracking_email_address ON email_tracking(email_address);
CREATE INDEX IF NOT EXISTS idx_email_tracking_campaign ON email_tracking(campaign);
CREATE INDEX IF NOT EXISTS idx_email_tracking_created_at ON email_tracking(created_at);

-- Enable Row Level Security
ALTER TABLE email_tracking ENABLE ROW LEVEL SECURITY;

-- Create policies for email_tracking (allow all operations for now since this is for tracking)
CREATE POLICY "Allow all operations on email_tracking" ON email_tracking
  FOR ALL USING (true);
