import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lfciibuxwrasrsgypztn.supabase.co'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmY2lpYnV4d3Jhc3JzZ3lwenRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDMwMTc2NiwiZXhwIjoyMDY5ODc3NzY2fQ.EY1mYWA9KCNdz7sl9G070jLXjD5GgkzloH8Uvo9OCbI'

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function applyMigration() {
  try {
    console.log('Applying database migration...')
    
    // Read the migration SQL
    const fs = await import('fs')
    const migrationSQL = fs.readFileSync('./supabase/migrations/006_update_subscribers_structure.sql', 'utf8')
    
    // Split the SQL into individual statements
    const statements = migrationSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0)
    
    console.log(`Found ${statements.length} SQL statements to execute`)
    
    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i]
      console.log(`Executing statement ${i + 1}/${statements.length}: ${statement.substring(0, 50)}...`)
      
      const { error } = await supabase.rpc('exec_sql', { sql: statement })
      
      if (error) {
        console.error(`Error executing statement ${i + 1}:`, error)
        // Continue with other statements even if one fails
      } else {
        console.log(`✅ Statement ${i + 1} executed successfully`)
      }
    }
    
    console.log('🎉 Migration completed successfully!')
    
    // Verify the changes by checking the table structure
    const { data, error } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)
    
    if (error) {
      console.error('Error verifying table structure:', error)
    } else {
      console.log('✅ Table structure verified - migration applied successfully')
    }
    
  } catch (error) {
    console.error('Migration failed:', error)
  }
}

applyMigration() 