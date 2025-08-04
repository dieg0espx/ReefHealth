import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('subscribers')
        .select('*')
        .order('subscribed_at', { ascending: false })

      if (error) throw error

      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else if (req.method === 'POST') {
    try {
      const { email, first_name, last_name, tags } = req.body

      const { data, error } = await supabase
        .from('subscribers')
        .insert([
          {
            email,
            first_name,
            last_name,
            tags: tags || [],
            status: 'Subscribed'
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