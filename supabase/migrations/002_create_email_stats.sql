-- Create email_stats table
CREATE TABLE IF NOT EXISTS email_stats (
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

-- Enable Row Level Security
ALTER TABLE email_stats ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to see only their own email stats
CREATE POLICY "Users can view own email stats" ON email_stats
  FOR SELECT USING (auth.uid() = user_id);

-- Create policy to allow users to insert their own email stats
CREATE POLICY "Users can insert own email stats" ON email_stats
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policy to allow users to update their own email stats
CREATE POLICY "Users can update own email stats" ON email_stats
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policy to allow users to delete their own email stats
CREATE POLICY "Users can delete own email stats" ON email_stats
  FOR DELETE USING (auth.uid() = user_id); 