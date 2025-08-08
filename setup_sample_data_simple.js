// This script can be run in the browser console after logging in
// or as a Node.js script with proper environment variables

import { supabase } from './lib/supabase.js'

async function setupSampleData() {
  try {
    console.log('Setting up sample data...')

    // Insert sample subscribers (no user_id needed)
    const sampleSubscribers = [
      {
        email: 'john.doe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        status: 'active',
        tags: ['Newsletter', 'Product Updates'],
        address: '123 Main St, City, State 12345',
        phone_number: '+1-555-0123',
        birthday: '1990-05-15',
        company: 'Tech Corp'
      },
      {
        email: 'jane.smith@example.com',
        first_name: 'Jane',
        last_name: 'Smith',
        status: 'active',
        tags: ['Newsletter'],
        address: '456 Oak Ave, City, State 12345',
        phone_number: '+1-555-0124',
        birthday: '1985-08-22',
        company: 'Design Studio'
      },
      {
        email: 'mike.johnson@example.com',
        first_name: 'Mike',
        last_name: 'Johnson',
        status: 'inactive',
        tags: ['Product Updates'],
        address: '789 Pine Rd, City, State 12345',
        phone_number: '+1-555-0125',
        birthday: '1992-03-10',
        company: 'Marketing Inc'
      },
      {
        email: 'sarah.wilson@example.com',
        first_name: 'Sarah',
        last_name: 'Wilson',
        status: 'active',
        tags: ['Newsletter', 'Promotions'],
        address: '321 Elm St, City, State 12345',
        phone_number: '+1-555-0126',
        birthday: '1988-11-05',
        company: 'Consulting Group'
      },
      {
        email: 'alex.brown@example.com',
        first_name: 'Alex',
        last_name: 'Brown',
        status: 'active',
        tags: ['Product Updates', 'Promotions'],
        address: '654 Maple Dr, City, State 12345',
        phone_number: '+1-555-0127',
        birthday: '1995-07-18',
        company: 'Startup Co'
      },
      {
        email: 'emily.davis@example.com',
        first_name: 'Emily',
        last_name: 'Davis',
        status: 'active',
        tags: ['Newsletter'],
        address: '987 Cedar Ln, City, State 12345',
        phone_number: '+1-555-0128',
        birthday: '1991-12-03',
        company: 'Creative Agency'
      },
      {
        email: 'david.miller@example.com',
        first_name: 'David',
        last_name: 'Miller',
        status: 'active',
        tags: ['Product Updates'],
        address: '147 Birch Way, City, State 12345',
        phone_number: '+1-555-0129',
        birthday: '1987-04-25',
        company: 'Software Solutions'
      },
      {
        email: 'lisa.garcia@example.com',
        first_name: 'Lisa',
        last_name: 'Garcia',
        status: 'inactive',
        tags: ['Promotions'],
        address: '258 Spruce Ct, City, State 12345',
        phone_number: '+1-555-0130',
        birthday: '1993-09-14',
        company: 'Retail Store'
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

    // Insert sample email stats (no user_id needed)
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
        sent_date: new Date().toISOString()
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
        sent_date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
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
        sent_date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
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
        sent_date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString()
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
        sent_date: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString()
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

    // Insert sample segments (no user_id needed)
    const sampleSegments = [
      {
        name: 'Newsletter Subscribers',
        description: 'Subscribers to our weekly newsletter',
        subscriber_count: 2847,
        criteria: { tags: ['Newsletter'] }
      },
      {
        name: 'Product Updates',
        description: 'Interested in product updates and features',
        subscriber_count: 1245,
        criteria: { tags: ['Product Updates'] }
      },
      {
        name: 'Promotions',
        description: 'Subscribers who engage with promotional content',
        subscriber_count: 892,
        criteria: { tags: ['Promotions'] }
      },
      {
        name: 'Inactive',
        description: 'Subscribers with no activity in 30+ days',
        subscriber_count: 156,
        criteria: { last_activity: '30+ days' }
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