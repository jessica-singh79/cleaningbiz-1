/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person submitting the form
      - `email` (text) - Email address of the submitter
      - `phone` (text) - Phone number of the submitter
      - `created_at` (timestamptz) - Timestamp when the submission was created
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert their contact information
    - Only authenticated admin users can read all submissions
    
  3. Notes
    - This table stores contact form submissions from the website
    - Allows anonymous insertion so customers can submit without authentication
    - Data is protected and can only be viewed by authenticated users
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
