const https = require('https')

const supabaseUrl = 'https://lfciibuxwrasrsgyztn.supabase.co'
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmY2lpYnV4d3Jhc3JzZ3lwenRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDMwMTc2NiwiZXhwIjoyMDY5ODc3NzY2fQ.EY1mYWA9KCNdz7sl9G070jLXjD5GgkzloH8Uvo9OCbI'

function makeRequest(path, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'lfciibuxwrasrsgyztn.supabase.co',
      port: 443,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${serviceRoleKey}`,
        'apikey': serviceRoleKey
      }
    }

    if (body) {
      const postData = JSON.stringify(body)
      options.headers['Content-Length'] = Buffer.byteLength(postData)
    }

    const req = https.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data)
          resolve(jsonData)
        } catch (e) {
          resolve({ data, status: res.statusCode })
        }
      })
    })

    req.on('error', (err) => {
      reject(err)
    })

    if (body) {
      req.write(JSON.stringify(body))
    }
    req.end()
  })
}

async function setupDatabase() {
  try {
    console.log('Setting up database via REST API...')

    // Test connection
    console.log('Testing connection...')
    const testResponse = await makeRequest('/rest/v1/')
    console.log('✅ Connection successful')

    // Since we can't create tables via REST API, let's provide the SQL
    console.log('\n📋 Please run the following SQL in your Supabase dashboard:')
    console.log('\nGo to: https://supabase.com/dashboard/project/lfciibuxwrasrsgyztn/sql')
    console.log('\nCopy and paste this SQL:')
    
    const sql = `
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



INSERT INTO segments (name, description, subscriber_count, criteria) VALUES
('Newsletter Subscribers', 'Subscribers to our weekly newsletter', 2847, '{"tags": ["Newsletter"]}'),
('Product Updates', 'Interested in product updates and features', 1245, '{"tags": ["Product Updates"]}'),
('Promotions', 'Subscribers who engage with promotional content', 892, '{"tags": ["Promotions"]}'),
('Inactive', 'Subscribers with no activity in 30+ days', 156, '{"last_activity": "30+ days"}');
    `
    
    console.log(sql)
    console.log('\n🎉 After running this SQL, your database will be ready!')
    console.log('You can then test your dashboard at http://localhost:3000')

  } catch (error) {
    console.error('Setup failed:', error)
  }
}

setupDatabase() 