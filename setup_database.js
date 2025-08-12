const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://lfciibuxwrasrsgyztn.supabase.co'
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmY2lpYnV4d3Jhc3JzZ3lwenRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDMwMTc2NiwiZXhwIjoyMDY5ODc3NzY2fQ.EY1mYWA9KCNdz7sl9G070jLXjD5GgkzloH8Uvo9OCbI'

const supabase = createClient(supabaseUrl, serviceRoleKey)

async function setupDatabase() {
  try {
    console.log('Setting up database...')

    // Create subscribers table
    console.log('Creating subscribers table...')
    const { error: subscribersError } = await supabase.rpc('exec_sql', {
      sql: `
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
      `
    })

    if (subscribersError) {
      console.log('Subscribers table error:', subscribersError)
    } else {
      console.log('✅ Subscribers table created')
    }



    // Create segments table
    console.log('Creating segments table...')
    const { error: segmentsError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS segments (
          id SERIAL PRIMARY KEY,
          name VARCHAR NOT NULL,
          description TEXT,
          subscriber_count INTEGER DEFAULT 0,
          criteria JSONB,
          user_id UUID REFERENCES auth.users(id)
        );
      `
    })

    if (segmentsError) {
      console.log('Segments table error:', segmentsError)
    } else {
      console.log('✅ Segments table created')
    }

    // Enable RLS
    console.log('Enabling Row Level Security...')
    const { error: rlsError } = await supabase.rpc('exec_sql', {
      sql: `
        ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
        ALTER TABLE segments ENABLE ROW LEVEL SECURITY;
      `
    })

    if (rlsError) {
      console.log('RLS error:', rlsError)
    } else {
      console.log('✅ Row Level Security enabled')
    }

    // Create policies
    console.log('Creating policies...')
    const { error: policiesError } = await supabase.rpc('exec_sql', {
      sql: `
        -- Subscribers policies
        DROP POLICY IF EXISTS "Users can view own subscribers" ON subscribers;
        CREATE POLICY "Users can view own subscribers" ON subscribers
          FOR SELECT USING (auth.uid() = user_id);

        DROP POLICY IF EXISTS "Users can insert own subscribers" ON subscribers;
        CREATE POLICY "Users can insert own subscribers" ON subscribers
          FOR INSERT WITH CHECK (auth.uid() = user_id);

        DROP POLICY IF EXISTS "Users can update own subscribers" ON subscribers;
        CREATE POLICY "Users can update own subscribers" ON subscribers
          FOR UPDATE USING (auth.uid() = user_id);

        DROP POLICY IF EXISTS "Users can delete own subscribers" ON subscribers;
        CREATE POLICY "Users can delete own subscribers" ON subscribers
          FOR DELETE USING (auth.uid() = user_id);



        -- Segments policies
        DROP POLICY IF EXISTS "Users can view own segments" ON segments;
        CREATE POLICY "Users can view own segments" ON segments
          FOR SELECT USING (auth.uid() = user_id);

        DROP POLICY IF EXISTS "Users can insert own segments" ON segments;
        CREATE POLICY "Users can insert own segments" ON segments
          FOR INSERT WITH CHECK (auth.uid() = user_id);

        DROP POLICY IF EXISTS "Users can update own segments" ON segments;
        CREATE POLICY "Users can update own segments" ON segments
          FOR UPDATE USING (auth.uid() = user_id);

        DROP POLICY IF EXISTS "Users can delete own segments" ON segments;
        CREATE POLICY "Users can delete own segments" ON segments
          FOR DELETE USING (auth.uid() = user_id);
      `
    })

    if (policiesError) {
      console.log('Policies error:', policiesError)
    } else {
      console.log('✅ Policies created')
    }

    // Insert sample data
    console.log('Inserting sample data...')
    const { error: sampleDataError } = await supabase.rpc('exec_sql', {
      sql: `
        INSERT INTO subscribers (email, first_name, last_name, status, tags) VALUES
        ('john.doe@example.com', 'John', 'Doe', 'Subscribed', ARRAY['Newsletter', 'Product Updates']),
        ('jane.smith@example.com', 'Jane', 'Smith', 'Subscribed', ARRAY['Newsletter']),
        ('mike.johnson@example.com', 'Mike', 'Johnson', 'Unsubscribed', ARRAY['Product Updates']),
        ('sarah.wilson@example.com', 'Sarah', 'Wilson', 'Subscribed', ARRAY['Newsletter', 'Promotions'])
        ON CONFLICT (email) DO NOTHING;
      `
    })

    if (sampleDataError) {
      console.log('Sample data error:', sampleDataError)
    } else {
      console.log('✅ Sample subscribers inserted')
    }



    const { error: segmentsDataError } = await supabase.rpc('exec_sql', {
      sql: `
        INSERT INTO segments (name, description, subscriber_count, criteria) VALUES
        ('Newsletter Subscribers', 'Subscribers to our weekly newsletter', 2847, '{"tags": ["Newsletter"]}'),
        ('Product Updates', 'Interested in product updates and features', 1245, '{"tags": ["Product Updates"]}'),
        ('Promotions', 'Subscribers who engage with promotional content', 892, '{"tags": ["Promotions"]}'),
        ('Inactive', 'Subscribers with no activity in 30+ days', 156, '{"last_activity": "30+ days"}')
        ON CONFLICT DO NOTHING;
      `
    })

    if (segmentsDataError) {
      console.log('Segments data error:', segmentsDataError)
    } else {
      console.log('✅ Sample segments inserted')
    }

    console.log('🎉 Database setup complete!')
    console.log('You can now test your dashboard at http://localhost:3000')

  } catch (error) {
    console.error('Setup failed:', error)
  }
}

setupDatabase() 