import { supabase } from './supabase'

// Dashboard statistics
export async function getDashboardStats(userId) {
  try {
    // Get total subscribers
    const { count: totalSubscribers } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })

    // Get active subscribers (status = 'Subscribed' or 'active')
    const { count: activeSubscribers } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
      .in('status', ['Subscribed', 'active'])

    // Get email stats for calculations
    const { data: emailStats } = await supabase
      .from('email_stats')
      .select('*')
      .order('sent_date', { ascending: false })
      .limit(10)

    // Calculate totals
    const totalEmailsSent = emailStats?.reduce((sum, stat) => sum + (stat.sent_count || 0), 0) || 0
    const totalOpens = emailStats?.reduce((sum, stat) => sum + (stat.open_count || 0), 0) || 0
    const totalClicks = emailStats?.reduce((sum, stat) => sum + (stat.click_count || 0), 0) || 0

    // Calculate averages
    const avgOpenRate = totalEmailsSent > 0 ? ((totalOpens / totalEmailsSent) * 100).toFixed(1) : 0
    const avgClickRate = totalEmailsSent > 0 ? ((totalClicks / totalEmailsSent) * 100).toFixed(1) : 0

    // Get recent activity (last 30 days)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    
    const { count: newThisMonth } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
      .gte('subscribed_at', thirtyDaysAgo.toISOString())

    return {
      totalEmailsSent: totalEmailsSent.toLocaleString(),
      activeSubscribers: activeSubscribers?.toLocaleString() || '0',
      avgOpenRate: `${avgOpenRate}%`,
      avgClickRate: `${avgClickRate}%`,
      newThisMonth: newThisMonth || 0,
      totalSubscribers: totalSubscribers || 0
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return {
      totalEmailsSent: '0',
      activeSubscribers: '0',
      avgOpenRate: '0%',
      avgClickRate: '0%',
      newThisMonth: 0,
      totalSubscribers: 0
    }
  }
}

// Recent email performance
export async function getRecentEmailStats(userId) {
  try {
    const { data: emailStats } = await supabase
      .from('email_stats')
      .select('*')
      .order('sent_date', { ascending: false })
      .limit(5)

    return emailStats?.map(stat => ({
      id: stat.id,
      name: stat.campaign_name,
      sent: stat.sent_count?.toLocaleString() || '0',
      openRate: `${stat.open_rate || 0}%`,
      clickRate: `${stat.click_rate || 0}%`,
      sentDate: new Date(stat.sent_date).toLocaleDateString()
    })) || []
  } catch (error) {
    console.error('Error fetching recent email stats:', error)
    return []
  }
}

// Subscribers data
export async function getSubscribers(userId) {
  try {
    console.log('🔍 getSubscribers called with userId:', userId)
    
    // Get all subscribers from the database
    const { data: subscribers, error } = await supabase
      .from('subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false })

    if (error) {
      console.error('❌ Supabase error fetching subscribers:', error)
      return []
    }

    console.log('📊 Raw subscribers from database:', subscribers)
    
    const mappedSubscribers = subscribers?.map(sub => ({
      id: sub.id,
      email: sub.email,
      firstName: sub.first_name || '',
      lastName: sub.last_name || '',
      company: sub.company || '',
      status: sub.status || 'active',
      subscribedAt: sub.subscribed_at ? new Date(sub.subscribed_at).toLocaleDateString() : 'N/A',
      lastActivity: sub.last_activity ? new Date(sub.last_activity).toLocaleDateString() : 'N/A',
      tags: sub.tags || []
    })) || []
    
    console.log('📊 Mapped subscribers:', mappedSubscribers)
    return mappedSubscribers
  } catch (error) {
    console.error('❌ Error fetching subscribers:', error)
    return []
  }
}

// Add new subscriber
export async function addSubscriber(userId, subscriberData) {
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .insert({
        email: subscriberData.email,
        first_name: subscriberData.firstName,
        last_name: subscriberData.lastName,
        company: subscriberData.company || '',
        status: subscriberData.status || 'active',
        tags: subscriberData.tags || []
      })
      .select()

    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('Error adding subscriber:', error)
    throw error
  }
}

// Update subscriber
export async function updateSubscriber(userId, subscriberId, updates) {
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .update({
        email: updates.email,
        first_name: updates.firstName,
        last_name: updates.lastName,
        company: updates.company || '',
        status: updates.status,
        tags: updates.tags,
        last_activity: new Date().toISOString()
      })
      .eq('id', subscriberId)
      .select()

    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('Error updating subscriber:', error)
    throw error
  }
}

// Delete subscriber
export async function deleteSubscriber(userId, subscriberId) {
  try {
    const { error } = await supabase
      .from('subscribers')
      .delete()
      .eq('id', subscriberId)

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error deleting subscriber:', error)
    throw error
  }
}

// Segments data
export async function getSegments(userId) {
  try {
    console.log('🔍 getSegments called with userId:', userId)
    
    const { data: segments, error } = await supabase
      .from('segments')
      .select('*')
      .order('name')

    if (error) {
      console.error('❌ Supabase error fetching segments:', error)
      return []
    }

    console.log('🏷️ Raw segments from database:', segments)
    
    const mappedSegments = segments?.map(segment => ({
      id: segment.id,
      name: segment.name,
      count: segment.subscriber_count || 0,
      description: segment.description || ''
    })) || []
    
    console.log('🏷️ Mapped segments:', mappedSegments)
    return mappedSegments
  } catch (error) {
    console.error('❌ Error fetching segments:', error)
    return []
  }
}

// Campaigns data
export async function getCampaigns(userId) {
  try {
    const { data: emailStats } = await supabase
      .from('email_stats')
      .select('*')
      .order('sent_date', { ascending: false })

    return emailStats?.map(stat => ({
      id: stat.campaign_id || stat.id.toString(),
      name: stat.campaign_name,
      description: `Campaign sent on ${new Date(stat.sent_date).toLocaleDateString()}`,
      filename: `${stat.campaign_id || stat.id}.html`,
      sentDate: new Date(stat.sent_date).toLocaleDateString(),
      status: 'Sent',
      sentCount: stat.sent_count,
      openRate: stat.open_rate,
      clickRate: stat.click_rate
    })) || []
  } catch (error) {
    console.error('Error fetching campaigns:', error)
    return []
  }
}

// Get all subscribers (without user filtering) - for debugging
export async function getAllSubscribers() {
  try {
    console.log('🔍 getAllSubscribers called')
    
    const { data: subscribers, error } = await supabase
      .from('subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false })

    if (error) {
      console.error('❌ Supabase error fetching all subscribers:', error)
      return []
    }

    console.log('📊 All subscribers from database:', subscribers)
    
    const mappedSubscribers = subscribers?.map(sub => ({
      id: sub.id,
      email: sub.email,
      firstName: sub.first_name || '',
      lastName: sub.last_name || '',
      status: sub.status,
      subscribedAt: sub.subscribed_at ? new Date(sub.subscribed_at).toLocaleDateString() : 'N/A',
      lastActivity: sub.last_activity ? new Date(sub.last_activity).toLocaleDateString() : 'N/A',
      tags: sub.tags || []
    })) || []
    
    console.log('📊 Mapped all subscribers:', mappedSubscribers)
    return mappedSubscribers
  } catch (error) {
    console.error('❌ Error fetching all subscribers:', error)
    return []
  }
}

// Get subscriber counts for dashboard
export async function getSubscriberCounts(userId) {
  try {
    console.log('🔍 getSubscriberCounts called with userId:', userId)
    
    // Total subscribers
    const { count: totalSubscribers, error: totalError } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })

    if (totalError) {
      console.error('❌ Error counting total subscribers:', totalError)
    }

    // Active subscribers
    const { count: activeSubscribers, error: activeError } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
      .in('status', ['Subscribed', 'active', 'Active'])

    if (activeError) {
      console.error('❌ Error counting active subscribers:', activeError)
    }

    // New this month
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    
    const { count: newThisMonth, error: newError } = await supabase
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
      .gte('subscribed_at', thirtyDaysAgo.toISOString())

    if (newError) {
      console.error('❌ Error counting new subscribers:', newError)
    }

    // Total segments
    const { count: totalSegments, error: segmentsError } = await supabase
      .from('segments')
      .select('*', { count: 'exact', head: true })

    if (segmentsError) {
      console.error('❌ Error counting segments:', segmentsError)
    }

    const counts = {
      totalSubscribers: totalSubscribers || 0,
      activeSubscribers: activeSubscribers || 0,
      newThisMonth: newThisMonth || 0,
      totalSegments: totalSegments || 0
    }
    
    console.log('📈 Subscriber counts:', counts)
    return counts
  } catch (error) {
    console.error('❌ Error fetching subscriber counts:', error)
    return {
      totalSubscribers: 0,
      activeSubscribers: 0,
      newThisMonth: 0,
      totalSegments: 0
    }
  }
}

// Get tracking statistics for dashboard
export async function getDashboardTrackingStats(userId) {
  try {
    // Get total opens across all campaigns
    const { count: totalOpens } = await supabase
      .from('email_opens')
      .select('*', { count: 'exact', head: true })

    // Get total clicks across all campaigns
    const { count: totalClicks } = await supabase
      .from('email_clicks')
      .select('*', { count: 'exact', head: true })

    // Get unique opens (by subscriber)
    const { data: uniqueOpens } = await supabase
      .from('email_opens')
      .select('subscriber_id')

    const uniqueOpensCount = uniqueOpens ? new Set(uniqueOpens.map(o => o.subscriber_id)).size : 0

    // Get unique clicks (by subscriber)
    const { data: uniqueClicks } = await supabase
      .from('email_clicks')
      .select('subscriber_id')

    const uniqueClicksCount = uniqueClicks ? new Set(uniqueClicks.map(c => c.subscriber_id)).size : 0

    return {
      totalOpens: totalOpens || 0,
      totalClicks: totalClicks || 0,
      uniqueOpens: uniqueOpensCount,
      uniqueClicks: uniqueClicksCount
    }
  } catch (error) {
    console.error('Error fetching dashboard tracking stats:', error)
    return {
      totalOpens: 0,
      totalClicks: 0,
      uniqueOpens: 0,
      uniqueClicks: 0
    }
  }
} 