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

-- Enable Row Level Security
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to see only their own subscribers
CREATE POLICY "Users can view own subscribers" ON subscribers
  FOR SELECT USING (auth.uid() = user_id);

-- Create policy to allow users to insert their own subscribers
CREATE POLICY "Users can insert own subscribers" ON subscribers
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policy to allow users to update their own subscribers
CREATE POLICY "Users can update own subscribers" ON subscribers
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policy to allow users to delete their own subscribers
CREATE POLICY "Users can delete own subscribers" ON subscribers
  FOR DELETE USING (auth.uid() = user_id); 