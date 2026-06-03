import { supabase, type Event } from '@/lib/supabase'

export type CreateEventInput = {
  host_name: string
  event_name: string
  shot_limit: number
  reveal_at: string
}

export async function createEvent(
  input: CreateEventInput
): Promise<{ event: Event } | { error: string }> {
  const { data, error } = await supabase
    .from('events')
    .insert(input)
    .select()
    .single()

  if (error) return { error: error.message }
  return { event: data }
}

export async function getEventById(eventId: string): Promise<Event | null> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', eventId)
    .single()

  if (error || !data) return null
  return data
}
