-- Update subscribers table to match CSV structure
ALTER TABLE subscribers 
ADD COLUMN IF NOT EXISTS address VARCHAR,
ADD COLUMN IF NOT EXISTS phone_number VARCHAR,
ADD COLUMN IF NOT EXISTS birthday DATE,
ADD COLUMN IF NOT EXISTS company VARCHAR;

-- Update existing subscribers to have 'active' status
UPDATE subscribers SET status = 'active' WHERE status = 'Subscribed';

-- Change default status to 'active'
ALTER TABLE subscribers ALTER COLUMN status SET DEFAULT 'active';

-- Add index for better performance on common queries
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_status ON subscribers(status);
CREATE INDEX IF NOT EXISTS idx_subscribers_company ON subscribers(company); 