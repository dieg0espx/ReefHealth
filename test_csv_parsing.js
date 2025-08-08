// Test CSV parsing with the exact column names
const testCsvData = `Email Address,First Name,Last Name,Address,Phone Number,Birthday,Company
MKNOBELOCK@MSKCOMPANIES.COM,Mike,Knobelok,,713-817-5649,,
andy@leadershipalignmentpartners.com,Andy,Shirk,,13095334000,,Bloom Growth
christopher@buttontrans.com,Chris,Reading,,,Button Transportation
hildrethkd@yahoo.com,Kristen,Hildreth,,13307239688,,Medina County Health Department
mike@customflavors.com,Mike,Wendling,,19492767995,,Custom Flavors`

console.log('Testing CSV parsing...')

// Simulate the parsing logic from the audience page
const lines = testCsvData.split('\n').filter(line => line.trim())
console.log('Total lines:', lines.length)
console.log('Lines:', lines)

const headers = lines[0].split(',').map(header => header.trim())
console.log('Headers:', headers)

// Check for email column
const emailColumn = headers.find(header => 
  header.toLowerCase().includes('email') || 
  header.toLowerCase() === 'email address' ||
  header.toLowerCase() === 'emailaddress'
)
console.log('Found email column:', emailColumn)

// Parse data rows
const data = lines.slice(1).map((line, index) => {
  const values = line.split(',').map(value => value.trim())
  const row = {}
  headers.forEach((header, headerIndex) => {
    row[header] = values[headerIndex] || ''
  })
  return row
}).filter(row => {
  // Filter out rows without email
  const email = row['Email Address'] || row['EmailAddress'] || row['email address'] || row.email || row.Email || row.EMAIL
  const isValid = email && email.trim() !== '' && email.includes('@')
  
  console.log(`Row email: "${email}", valid: ${isValid}`)
  
  return isValid
})

console.log('Valid rows found:', data.length)
console.log('Sample data:', data.slice(0, 2))

console.log('✅ Test completed successfully!') 