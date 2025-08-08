-- Create email_opens table for tracking email opens
CREATE TABLE IF NOT EXISTS email_opens (
  id SERIAL PRIMARY KEY,
  campaign_id VARCHAR NOT NULL,
  subscriber_id UUID NOT NULL,
  user_id UUID NOT NULL,
  opened_at TIMESTAMP DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create email_clicks table for tracking email clicks
CREATE TABLE IF NOT EXISTS email_clicks (
  id SERIAL PRIMARY KEY,
  campaign_id VARCHAR NOT NULL,
  subscriber_id UUID NOT NULL,
  user_id UUID NOT NULL,
  clicked_url TEXT NOT NULL,
  clicked_at TIMESTAMP DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_email_opens_campaign_id ON email_opens(campaign_id);
CREATE INDEX IF NOT EXISTS idx_email_opens_subscriber_id ON email_opens(subscriber_id);
CREATE INDEX IF NOT EXISTS idx_email_opens_user_id ON email_opens(user_id);
CREATE INDEX IF NOT EXISTS idx_email_opens_opened_at ON email_opens(opened_at);

CREATE INDEX IF NOT EXISTS idx_email_clicks_campaign_id ON email_clicks(campaign_id);
CREATE INDEX IF NOT EXISTS idx_email_clicks_subscriber_id ON email_clicks(subscriber_id);
CREATE INDEX IF NOT EXISTS idx_email_clicks_user_id ON email_clicks(user_id);
CREATE INDEX IF NOT EXISTS idx_email_clicks_clicked_at ON email_clicks(clicked_at);

-- Enable Row Level Security
ALTER TABLE email_opens ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_clicks ENABLE ROW LEVEL SECURITY;

-- Create policies for email_opens
CREATE POLICY "Users can view own email opens" ON email_opens
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own email opens" ON email_opens
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policies for email_clicks
CREATE POLICY "Users can view own email clicks" ON email_clicks
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own email clicks" ON email_clicks
  FOR INSERT WITH CHECK (auth.uid() = user_id); 