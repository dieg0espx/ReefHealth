-- Complete Database Setup for Dashboard
-- Run this in your Supabase SQL Editor

-- Create subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
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

-- Create segments table
CREATE TABLE IF NOT EXISTS segments (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT,
  subscriber_count INTEGER DEFAULT 0,
  criteria JSONB,
  user_id UUID REFERENCES auth.users(id)
);

-- Enable Row Level Security on all tables
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE segments ENABLE ROW LEVEL SECURITY;

-- Create policies for subscribers table
CREATE POLICY "Users can view own subscribers" ON subscribers
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscribers" ON subscribers
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscribers" ON subscribers
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own subscribers" ON subscribers
  FOR DELETE USING (auth.uid() = user_id);

-- Create policies for email_stats table
CREATE POLICY "Users can view own email stats" ON email_stats
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own email stats" ON email_stats
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own email stats" ON email_stats
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own email stats" ON email_stats
  FOR DELETE USING (auth.uid() = user_id);

-- Create policies for segments table
CREATE POLICY "Users can view own segments" ON segments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own segments" ON segments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own segments" ON segments
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own segments" ON segments
  FOR DELETE USING (auth.uid() = user_id);

-- Insert some sample data for testing
INSERT INTO subscribers (email, first_name, last_name, status, tags) VALUES
('john.doe@example.com', 'John', 'Doe', 'Subscribed', ARRAY['Newsletter', 'Product Updates']),
('jane.smith@example.com', 'Jane', 'Smith', 'Subscribed', ARRAY['Newsletter']),
('mike.johnson@example.com', 'Mike', 'Johnson', 'Unsubscribed', ARRAY['Product Updates']),
('sarah.wilson@example.com', 'Sarah', 'Wilson', 'Subscribed', ARRAY['Newsletter', 'Promotions']);

INSERT INTO email_stats (campaign_name, campaign_id, sent_count, open_count, click_count, bounce_count, open_rate, click_rate) VALUES
('Welcome Series', 'welcome-001', 2847, 698, 91, 12, 24.50, 3.20),
('Product Launch', 'product-002', 2847, 742, 117, 8, 26.10, 4.10),
('Holiday Promotion', 'holiday-003', 2847, 569, 85, 15, 20.00, 3.00),
('Newsletter #15', 'newsletter-015', 2847, 654, 98, 10, 23.00, 3.40);

INSERT INTO segments (name, description, subscriber_count, criteria) VALUES
('Newsletter Subscribers', 'Subscribers to our weekly newsletter', 2847, '{"tags": ["Newsletter"]}'),
('Product Updates', 'Interested in product updates and features', 1245, '{"tags": ["Product Updates"]}'),
('Promotions', 'Subscribers who engage with promotional content', 892, '{"tags": ["Promotions"]}'),
('Inactive', 'Subscribers with no activity in 30+ days', 156, '{"last_activity": "30+ days"}'); 