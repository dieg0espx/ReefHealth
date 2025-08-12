require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

async function applyEmailTrackingMigration() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  try {
    console.log('Applying email_tracking table migration...')
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing')
    console.log('Service Role Key:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Set' : 'Missing')
    
    // Read the migration file
    const migrationPath = path.join(__dirname, 'supabase', 'migrations', '007_create_email_tracking_table.sql')
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8')
    
    // Execute the migration
    const { data, error } = await supabase.rpc('exec_sql', { sql: migrationSQL })
    
    if (error) {
      console.error('Error applying migration:', error)
      return
    }
    
    console.log('✅ Email tracking table migration applied successfully!')
    
    // Verify the table exists
    const { data: tableCheck, error: tableError } = await supabase
      .from('email_tracking')
      .select('*')
      .limit(1)
    
    if (tableError) {
      console.error('❌ Table verification failed:', tableError)
    } else {
      console.log('✅ Email tracking table verified and ready to use!')
    }
    
  } catch (error) {
    console.error('Error in migration script:', error)
  }
}

// Run the migration
applyEmailTrackingMigration()
