# Juno AI Waitlist - Supabase Setup Guide

## Database Schema

You need to create a table called `waitlist` in your Supabase database with the following structure:

### SQL to create the table:

```sql
-- Create the waitlist table
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(50) DEFAULT 'website'
);

-- Create an index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Create an index on created_at for analytics
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts (for public waitlist signup)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy to allow service role to read all data
CREATE POLICY "Allow service role to read all" ON waitlist
  FOR SELECT 
  TO service_role
  USING (true);
```

## Environment Variables Setup

Add these variables to your `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Admin API Key for accessing waitlist data
ADMIN_API_KEY=your_secure_random_string_here

# Email configuration (if using Gmail)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your_app_password
ADMIN_EMAIL=admin@yourdomain.com
```

## How to get Supabase credentials:

1. Go to [https://supabase.com](https://supabase.com)
2. Create a new project or use an existing one
3. Go to Settings > API
4. Copy the following:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`

## Features Implemented

### ✅ Duplicate Prevention
- Emails are stored in lowercase to prevent case-sensitive duplicates
- Unique constraint on email column
- API returns `409` status for duplicate signups

### ✅ Email Validation
- Server-side email format validation
- Client-side HTML5 validation

### ✅ Admin API
- GET `/api/admin/waitlist` to retrieve all waitlist data
- Requires `x-api-key` header for authentication
- Returns stats and list of all subscribers

### ✅ Error Handling
- Proper error messages for different scenarios
- User-friendly error display in the UI

## Usage

### For Users:
Users can sign up through the waitlist form on your website. They'll see:
- Success message if signup is successful
- Error message if email is already registered
- Loading state during submission

### For Admins:
To access waitlist data, make a GET request to `/api/admin/waitlist` with the API key:

```bash
curl -H "x-api-key: your_admin_api_key" http://localhost:3000/api/admin/waitlist
```

### Response format:
```json
{
  "stats": {
    "total": 150,
    "recent": 12
  },
  "waitlist": [
    {
      "email": "user@example.com",
      "created_at": "2025-01-01T10:00:00Z",
      "source": "website"
    }
  ],
  "message": "Waitlist data retrieved successfully"
}
```

## Security Notes

- The service role key should never be exposed to the client
- Row Level Security (RLS) is enabled on the table
- API key authentication for admin endpoints
- Emails are stored in lowercase for consistency
