import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lfciibuxwrasrsgypztn.supabase.co'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmY2lpYnV4d3Jhc3JzZ3lwenRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDMwMTc2NiwiZXhwIjoyMDY5ODc3NzY2fQ.EY1mYWA9KCNdz7sl9G070jLXjD5GgkzloH8Uvo9OCbI'

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function applyMigration() {
  try {
    console.log('Applying database migration...')
    
    // Add new columns
    console.log('Adding new columns...')
    const alterTableResult = await supabase.rpc('exec_sql', {
      sql: `
        ALTER TABLE subscribers 
        ADD COLUMN IF NOT EXISTS address VARCHAR,
        ADD COLUMN IF NOT EXISTS phone_number VARCHAR,
        ADD COLUMN IF NOT EXISTS birthday DATE,
        ADD COLUMN IF NOT EXISTS company VARCHAR;
      `
    })
    
    if (alterTableResult.error) {
      console.error('Error adding columns:', alterTableResult.error)
    } else {
      console.log('✅ Columns added successfully')
    }
    
    // Update existing subscribers status
    console.log('Updating existing subscribers status...')
    const updateStatusResult = await supabase.rpc('exec_sql', {
      sql: `UPDATE subscribers SET status = 'active' WHERE status = 'Subscribed';`
    })
    
    if (updateStatusResult.error) {
      console.error('Error updating status:', updateStatusResult.error)
    } else {
      console.log('✅ Status updated successfully')
    }
    
    // Change default status
    console.log('Changing default status...')
    const changeDefaultResult = await supabase.rpc('exec_sql', {
      sql: `ALTER TABLE subscribers ALTER COLUMN status SET DEFAULT 'active';`
    })
    
    if (changeDefaultResult.error) {
      console.error('Error changing default:', changeDefaultResult.error)
    } else {
      console.log('✅ Default status changed successfully')
    }
    
    // Add indexes
    console.log('Adding indexes...')
    const indexes = [
      'CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);',
      'CREATE INDEX IF NOT EXISTS idx_subscribers_status ON subscribers(status);',
      'CREATE INDEX IF NOT EXISTS idx_subscribers_company ON subscribers(company);'
    ]
    
    for (const indexSQL of indexes) {
      const indexResult = await supabase.rpc('exec_sql', { sql: indexSQL })
      if (indexResult.error) {
        console.error('Error creating index:', indexResult.error)
      } else {
        console.log('✅ Index created successfully')
      }
    }
    
    console.log('🎉 Migration completed successfully!')
    
    // Test the new structure
    const { data, error } = await supabase
      .from('subscribers')
      .select('email, first_name, last_name, address, phone_number, birthday, company, status')
      .limit(1)
    
    if (error) {
      console.error('Error testing table structure:', error)
    } else {
      console.log('✅ Table structure verified - new columns are available')
      console.log('Sample data structure:', data[0] || 'No data yet')
    }
    
  } catch (error) {
    console.error('Migration failed:', error)
  }
}

applyMigration() 