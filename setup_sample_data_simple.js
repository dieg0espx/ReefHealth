// This script can be run in the browser console after logging in
// or as a Node.js script with proper environment variables

import { supabase } from './lib/supabase.js'

async function setupSampleData() {
  try {
    console.log('Setting up sample data...')

    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError || !user) {
      console.error('No authenticated user found. Please log in first.')
      return
    }

    const userId = user.id
    console.log('Using user ID:', userId)

    // Insert sample subscribers
    const sampleSubscribers = [
      {
        email: 'john.doe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        status: 'Subscribed',
        tags: ['Newsletter', 'Product Updates'],
        user_id: userId
      },
      {
        email: 'jane.smith@example.com',
        first_name: 'Jane',
        last_name: 'Smith',
        status: 'Subscribed',
        tags: ['Newsletter'],
        user_id: userId
      },
      {
        email: 'mike.johnson@example.com',
        first_name: 'Mike',
        last_name: 'Johnson',
        status: 'Unsubscribed',
        tags: ['Product Updates'],
        user_id: userId
      },
      {
        email: 'sarah.wilson@example.com',
        first_name: 'Sarah',
        last_name: 'Wilson',
        status: 'Subscribed',
        tags: ['Newsletter', 'Promotions'],
        user_id: userId
      },
      {
        email: 'alex.brown@example.com',
        first_name: 'Alex',
        last_name: 'Brown',
        status: 'Subscribed',
        tags: ['Product Updates', 'Promotions'],
        user_id: userId
      }
    ]

    const { data: subscribers, error: subError } = await supabase
      .from('subscribers')
      .insert(sampleSubscribers)
      .select()

    if (subError) {
      console.error('Error inserting subscribers:', subError)
    } else {
      console.log('Inserted', subscribers.length, 'subscribers')
    }

    // Insert sample email stats
    const sampleEmailStats = [
      {
        campaign_name: 'Welcome Series',
        campaign_id: 'welcome-001',
        sent_count: 2847,
        open_count: 698,
        click_count: 91,
        bounce_count: 12,
        open_rate: 24.5,
        click_rate: 3.2,
        user_id: userId
      },
      {
        campaign_name: 'Product Launch',
        campaign_id: 'product-001',
        sent_count: 2847,
        open_count: 742,
        click_count: 117,
        bounce_count: 8,
        open_rate: 26.1,
        click_rate: 4.1,
        user_id: userId
      },
      {
        campaign_name: 'Holiday Promotion',
        campaign_id: 'holiday-001',
        sent_count: 2847,
        open_count: 569,
        click_count: 85,
        bounce_count: 15,
        open_rate: 20.0,
        click_rate: 3.0,
        user_id: userId
      },
      {
        campaign_name: 'Weekly Newsletter',
        campaign_id: 'newsletter-001',
        sent_count: 2847,
        open_count: 625,
        click_count: 78,
        bounce_count: 10,
        open_rate: 22.0,
        click_rate: 2.7,
        user_id: userId
      },
      {
        campaign_name: 'Feature Update',
        campaign_id: 'feature-001',
        sent_count: 2847,
        open_count: 712,
        click_count: 142,
        bounce_count: 6,
        open_rate: 25.0,
        click_rate: 5.0,
        user_id: userId
      }
    ]

    const { data: emailStats, error: statsError } = await supabase
      .from('email_stats')
      .insert(sampleEmailStats)
      .select()

    if (statsError) {
      console.error('Error inserting email stats:', statsError)
    } else {
      console.log('Inserted', emailStats.length, 'email stats')
    }

    // Insert sample segments
    const sampleSegments = [
      {
        name: 'Newsletter Subscribers',
        description: 'Subscribers to our weekly newsletter',
        subscriber_count: 2847,
        criteria: { tags: ['Newsletter'] },
        user_id: userId
      },
      {
        name: 'Product Updates',
        description: 'Interested in product updates and features',
        subscriber_count: 1245,
        criteria: { tags: ['Product Updates'] },
        user_id: userId
      },
      {
        name: 'Promotions',
        description: 'Subscribers who engage with promotional content',
        subscriber_count: 892,
        criteria: { tags: ['Promotions'] },
        user_id: userId
      },
      {
        name: 'Inactive',
        description: 'Subscribers with no activity in 30+ days',
        subscriber_count: 156,
        criteria: { last_activity: '30+ days' },
        user_id: userId
      }
    ]

    const { data: segments, error: segError } = await supabase
      .from('segments')
      .insert(sampleSegments)
      .select()

    if (segError) {
      console.error('Error inserting segments:', segError)
    } else {
      console.log('Inserted', segments.length, 'segments')
    }

    console.log('Sample data setup complete!')
  } catch (error) {
    console.error('Error setting up sample data:', error)
  }
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.setupSampleData = setupSampleData
}

// Run if this is a Node.js script
if (typeof process !== 'undefined') {
  setupSampleData()
} 