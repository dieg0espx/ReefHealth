// Test database connection and data
import { supabase } from './lib/supabase.js'

async function testDatabaseConnection() {
  try {
    console.log('Testing database connection...')
    
    // Test basic connection
    const { data, error } = await supabase
      .from('subscribers')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('Database connection error:', error)
      return
    }
    
    console.log('✅ Database connection successful')
    
    // Check if we have any subscribers
    const { count, error: countError } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
    
    if (countError) {
      console.error('Error counting subscribers:', countError)
      return
    }
    
    console.log(`📊 Total subscribers in database: ${count}`)
    
    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError) {
      console.error('Error getting user:', userError)
      return
    }
    
    if (!user) {
      console.log('⚠️ No authenticated user found')
      return
    }
    
    console.log('👤 Current user ID:', user.id)
    
    // Check subscribers for current user
    const { data: userSubscribers, error: subError } = await supabase
      .from('subscribers')
      .select('*')
      .eq('user_id', user.id)
    
    if (subError) {
      console.error('Error fetching user subscribers:', subError)
      return
    }
    
    console.log(`👥 Subscribers for current user: ${userSubscribers?.length || 0}`)
    
    if (userSubscribers && userSubscribers.length > 0) {
      console.log('Sample subscriber:', userSubscribers[0])
    }
    
  } catch (error) {
    console.error('Unexpected error:', error)
  }
}

testDatabaseConnection() 