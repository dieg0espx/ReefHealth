-- Migration to update subscribers table structure for CSV import
-- Run these commands in your Supabase SQL Editor

-- 1. Add new columns to match CSV structure
ALTER TABLE subscribers 
ADD COLUMN IF NOT EXISTS address VARCHAR,
ADD COLUMN IF NOT EXISTS phone_number VARCHAR,
ADD COLUMN IF NOT EXISTS birthday DATE,
ADD COLUMN IF NOT EXISTS company VARCHAR;

-- 2. Update existing subscribers to have 'active' status
UPDATE subscribers SET status = 'active' WHERE status = 'Subscribed';

-- 3. Change default status to 'active'
ALTER TABLE subscribers ALTER COLUMN status SET DEFAULT 'active';

-- 4. Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_status ON subscribers(status);
CREATE INDEX IF NOT EXISTS idx_subscribers_company ON subscribers(company);

-- 5. Verify the changes
SELECT 
  column_name, 
  data_type, 
  is_nullable, 
  column_default
FROM information_schema.columns 
WHERE table_name = 'subscribers' 
ORDER BY ordinal_position; 