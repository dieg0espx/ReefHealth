const { createClient } = require('@supabase/supabase-js')

// Initialize Supabase client with hardcoded credentials (same as setup_database.js)
const supabaseUrl = 'https://lfciibuxwrasrsgypztn.supabase.co'
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmY2lpYnV4d3Jhc3JzZ3lwenRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDMwMTc2NiwiZXhwIjoyMDY5ODc3NzY2fQ.EY1mYWA9KCNdz7sl9G070jLXjD5GgkzloH8Uvo9OCbI'

const supabase = createClient(supabaseUrl, serviceRoleKey)

async function updateTrackingTables() {
  try {
    console.log('Starting database schema update...')
    
    // Drop existing tables
    console.log('Dropping existing tracking tables...')
    await supabase.rpc('exec_sql', { sql: 'DROP TABLE IF EXISTS email_clicks;' })
    await supabase.rpc('exec_sql', { sql: 'DROP TABLE IF EXISTS email_opens;' })
    
    // Create simplified email_opens table
    console.log('Creating simplified email_opens table...')
    await supabase.rpc('exec_sql', { sql: `
      CREATE TABLE IF NOT EXISTS email_opens (
        id SERIAL PRIMARY KEY,
        campaign_id VARCHAR NOT NULL,
        user_id UUID NOT NULL,
        opened_at TIMESTAMP DEFAULT NOW(),
        ip_address INET,
        user_agent TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    ` })
    
    // Create simplified email_clicks table
    console.log('Creating simplified email_clicks table...')
    await supabase.rpc('exec_sql', { sql: `
      CREATE TABLE IF NOT EXISTS email_clicks (
        id SERIAL PRIMARY KEY,
        campaign_id VARCHAR NOT NULL,
        user_id UUID NOT NULL,
        clicked_url TEXT NOT NULL,
        clicked_at TIMESTAMP DEFAULT NOW(),
        ip_address INET,
        user_agent TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    ` })
    
    // Create indexes
    console.log('Creating indexes...')
    await supabase.rpc('exec_sql', { sql: `
      CREATE INDEX IF NOT EXISTS idx_email_opens_campaign_id ON email_opens(campaign_id);
      CREATE INDEX IF NOT EXISTS idx_email_opens_user_id ON email_opens(user_id);
      CREATE INDEX IF NOT EXISTS idx_email_opens_opened_at ON email_opens(opened_at);
      CREATE INDEX IF NOT EXISTS idx_email_clicks_campaign_id ON email_clicks(campaign_id);
      CREATE INDEX IF NOT EXISTS idx_email_clicks_user_id ON email_clicks(user_id);
      CREATE INDEX IF NOT EXISTS idx_email_clicks_clicked_at ON email_clicks(clicked_at);
    ` })
    
    // Enable RLS
    console.log('Enabling Row Level Security...')
    await supabase.rpc('exec_sql', { sql: `
      ALTER TABLE email_opens ENABLE ROW LEVEL SECURITY;
      ALTER TABLE email_clicks ENABLE ROW LEVEL SECURITY;
    ` })
    
    // Create policies
    console.log('Creating RLS policies...')
    await supabase.rpc('exec_sql', { sql: `
      DROP POLICY IF EXISTS "Users can view own email opens" ON email_opens;
      DROP POLICY IF EXISTS "Users can insert own email opens" ON email_opens;
      DROP POLICY IF EXISTS "Users can view own email clicks" ON email_clicks;
      DROP POLICY IF EXISTS "Users can insert own email clicks" ON email_clicks;
      
      CREATE POLICY "Users can view own email opens" ON email_opens
        FOR SELECT USING (auth.uid() = user_id);
      
      CREATE POLICY "Users can insert own email opens" ON email_opens
        FOR INSERT WITH CHECK (auth.uid() = user_id);
      
      CREATE POLICY "Users can view own email clicks" ON email_clicks
        FOR SELECT USING (auth.uid() = user_id);
      
      CREATE POLICY "Users can insert own email clicks" ON email_clicks
        FOR INSERT WITH CHECK (auth.uid() = user_id);
    ` })
    
    console.log('Database schema update completed successfully!')
    
    // Test the tables
    console.log('Testing table creation...')
    const { data: testData, error: testError } = await supabase
      .from('email_opens')
      .insert({
        campaign_id: 'test-campaign',
        user_id: '00000000-0000-0000-0000-000000000000', // Valid UUID format
        opened_at: new Date().toISOString(),
        ip_address: '127.0.0.1',
        user_agent: 'Test User Agent'
      })
      .select()
    
    if (testError) {
      console.error('Test insert failed:', testError)
    } else {
      console.log('Test insert successful:', testData)
      
      // Clean up test data
      await supabase
        .from('email_opens')
        .delete()
        .eq('campaign_id', 'test-campaign')
        .eq('user_id', '00000000-0000-0000-0000-000000000000')
      
      console.log('Test data cleaned up')
    }
    
  } catch (error) {
    console.error('Error updating database schema:', error)
  }
}

// Run the update
updateTrackingTables() 