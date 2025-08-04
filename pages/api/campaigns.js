import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('email_stats')
        .select('*')
        .order('sent_date', { ascending: false })

      if (error) throw error

      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else if (req.method === 'POST') {
    try {
      const { campaign_name, campaign_id, sent_count, open_count, click_count, bounce_count } = req.body

      // Calculate rates
      const open_rate = sent_count > 0 ? ((open_count / sent_count) * 100).toFixed(2) : 0
      const click_rate = sent_count > 0 ? ((click_count / sent_count) * 100).toFixed(2) : 0

      const { data, error } = await supabase
        .from('email_stats')
        .insert([
          {
            campaign_name,
            campaign_id,
            sent_count,
            open_count,
            click_count,
            bounce_count,
            open_rate: parseFloat(open_rate),
            click_rate: parseFloat(click_rate)
          }
        ])
        .select()

      if (error) throw error

      res.status(201).json(data[0])
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
} 