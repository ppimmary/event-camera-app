import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client for use in the browser (safe, limited access)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export type Event = {
  id: string
  host_name: string
  event_name: string
  shot_limit: number
  reveal_at: string
  created_at: string
}

export type Participant = {
  id: string
  event_id: string
  name: string
  session_token: string
  photos_taken: number
  joined_at: string
}

export type Photo = {
  id: string
  event_id: string
  participant_id: string
  storage_path: string
  filter: string
  taken_at: string
}
