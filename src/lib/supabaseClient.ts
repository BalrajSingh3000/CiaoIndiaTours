import { createClient } from '@supabase/supabase-js'

// Read from Vite env vars. Define these in your .env file:
// VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  // Fail fast in dev to surface missing configuration
  // eslint-disable-next-line no-console
  console.warn(
    'Supabase env vars are not set. Please define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  )
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '')


