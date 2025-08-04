import { readFileSync } from 'fs'
import { join } from 'path'

export default function handler(req, res) {
  const { path } = req.query
  
  if (!path || path.length === 0) {
    return res.status(404).json({ error: 'File not found' })
  }

  const filename = Array.isArray(path) ? path.join('/') : path
  
  try {
    // Read the HTML file from the emails folder
    const filePath = join(process.cwd(), 'emails', filename)
    const fileContent = readFileSync(filePath, 'utf8')
    
    // Set appropriate headers for HTML content
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.setHeader('Cache-Control', 'public, max-age=3600') // Cache for 1 hour
    
    res.status(200).send(fileContent)
  } catch (error) {
    console.error('Error reading email file:', error)
    res.status(404).json({ error: 'File not found' })
  }
} 