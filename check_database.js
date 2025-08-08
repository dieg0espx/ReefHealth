// Check database and add sample data if needed
import { supabase } from './lib/supabase.js'

async function checkDatabase() {
  try {
    console.log('🔍 Checking database...')
    
    // Check if we can connect to the database
    const { data, error } = await supabase
      .from('subscribers')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('❌ Database connection error:', error)
      return
    }
    
    console.log('✅ Database connection successful')
    
    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError) {
      console.error('❌ Error getting user:', userError)
      return
    }
    
    if (!user) {
      console.log('⚠️ No authenticated user found')
      console.log('Please log in first at: http://localhost:3000/login')
      return
    }
    
    console.log('👤 Current user ID:', user.id)
    console.log('👤 Current user email:', user.email)
    
    // Check total subscribers in database
    const { count: totalSubscribers, error: countError } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
    
    if (countError) {
      console.error('❌ Error counting subscribers:', countError)
      return
    }
    
    console.log(`📊 Total subscribers in database: ${totalSubscribers}`)
    
    // Check subscribers for current user
    const { data: userSubscribers, error: subError } = await supabase
      .from('subscribers')
      .select('*')
      .eq('user_id', user.id)
    
    if (subError) {
      console.error('❌ Error fetching user subscribers:', subError)
      return
    }
    
    console.log(`👥 Subscribers for current user: ${userSubscribers?.length || 0}`)
    
    if (userSubscribers && userSubscribers.length > 0) {
      console.log('📋 Sample subscriber:', userSubscribers[0])
    } else {
      console.log('📝 No subscribers found for current user. Adding sample data...')
      await addSampleData(user.id)
    }
    
    // Check segments
    const { data: segments, error: segError } = await supabase
      .from('segments')
      .select('*')
      .eq('user_id', user.id)
    
    if (segError) {
      console.error('❌ Error fetching segments:', segError)
    } else {
      console.log(`🏷️ Segments for current user: ${segments?.length || 0}`)
      if (segments && segments.length === 0) {
        console.log('📝 No segments found. Adding sample segments...')
        await addSampleSegments(user.id)
      }
    }
    
  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

async function addSampleData(userId) {
  try {
    console.log('📝 Adding sample subscribers...')
    
    const sampleSubscribers = [
      {
        email: 'john.doe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        status: 'active',
        tags: ['Newsletter', 'Product Updates'],
        user_id: userId
      },
      {
        email: 'jane.smith@example.com',
        first_name: 'Jane',
        last_name: 'Smith',
        status: 'active',
        tags: ['Newsletter'],
        user_id: userId
      },
      {
        email: 'mike.johnson@example.com',
        first_name: 'Mike',
        last_name: 'Johnson',
        status: 'inactive',
        tags: ['Product Updates'],
        user_id: userId
      },
      {
        email: 'sarah.wilson@example.com',
        first_name: 'Sarah',
        last_name: 'Wilson',
        status: 'active',
        tags: ['Newsletter', 'Promotions'],
        user_id: userId
      },
      {
        email: 'alex.brown@example.com',
        first_name: 'Alex',
        last_name: 'Brown',
        status: 'active',
        tags: ['Product Updates', 'Promotions'],
        user_id: userId
      }
    ]

    const { data: subscribers, error } = await supabase
      .from('subscribers')
      .insert(sampleSubscribers)
      .select()

    if (error) {
      console.error('❌ Error inserting subscribers:', error)
    } else {
      console.log('✅ Inserted', subscribers.length, 'sample subscribers')
    }
  } catch (error) {
    console.error('❌ Error adding sample data:', error)
  }
}

async function addSampleSegments(userId) {
  try {
    console.log('📝 Adding sample segments...')
    
    const sampleSegments = [
      {
        name: 'Newsletter Subscribers',
        description: 'Subscribers to our weekly newsletter',
        subscriber_count: 3,
        criteria: { tags: ['Newsletter'] },
        user_id: userId
      },
      {
        name: 'Product Updates',
        description: 'Interested in product updates and features',
        subscriber_count: 3,
        criteria: { tags: ['Product Updates'] },
        user_id: userId
      },
      {
        name: 'Promotions',
        description: 'Subscribers who engage with promotional content',
        subscriber_count: 2,
        criteria: { tags: ['Promotions'] },
        user_id: userId
      }
    ]

    const { data: segments, error } = await supabase
      .from('segments')
      .insert(sampleSegments)
      .select()

    if (error) {
      console.error('❌ Error inserting segments:', error)
    } else {
      console.log('✅ Inserted', segments.length, 'sample segments')
    }
  } catch (error) {
    console.error('❌ Error adding sample segments:', error)
  }
}

checkDatabase() 