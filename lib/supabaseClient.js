import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pimqcohvjfhadzaxadxq.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpbXFjb2h2amZoYWR6YXhhZHhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNDUyOTEsImV4cCI6MjA5MDkyMTI5MX0._7m3cKjJ8pBrRj7xWWXRn6KkX5ZPisQJxgOcoh2WfwE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
