-- Create segments table
CREATE TABLE IF NOT EXISTS segments (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT,
  subscriber_count INTEGER DEFAULT 0,
  criteria JSONB,
  user_id UUID REFERENCES auth.users(id)
);

-- Enable Row Level Security
ALTER TABLE segments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to see only their own segments
CREATE POLICY "Users can view own segments" ON segments
  FOR SELECT USING (auth.uid() = user_id);

-- Create policy to allow users to insert their own segments
CREATE POLICY "Users can insert own segments" ON segments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policy to allow users to update their own segments
CREATE POLICY "Users can update own segments" ON segments
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policy to allow users to delete their own segments
CREATE POLICY "Users can delete own segments" ON segments
  FOR DELETE USING (auth.uid() = user_id); 