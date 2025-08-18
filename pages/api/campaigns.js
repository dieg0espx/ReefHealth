import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const campaignsDir = path.join(process.cwd(), 'campaings')
    const files = fs.readdirSync(campaignsDir)
    
    const campaigns = files
      .filter(file => file.endsWith('.html'))
      .map(file => {
        const filePath = path.join(campaignsDir, file)
        const content = fs.readFileSync(filePath, 'utf8')
        
        // Extract title from HTML
        const titleMatch = content.match(/<title>(.*?)<\/title>/i)
        const title = titleMatch ? titleMatch[1] : file.replace('.html', '')
        
        // Extract description from meta tag
        const descMatch = content.match(/<meta name="description" content="(.*?)"/i)
        const description = descMatch ? descMatch[1] : ''
        
        return {
          id: file.replace('.html', ''),
          name: title,
          filename: file,
          description: description,
          content: content,
          createdAt: fs.statSync(filePath).birthtime.toISOString().split('T')[0]
        }
      })
    
    res.status(200).json(campaigns)
  } catch (error) {
    console.error('Error reading campaigns:', error)
    res.status(500).json({ message: 'Error reading campaigns' })
  }
}

