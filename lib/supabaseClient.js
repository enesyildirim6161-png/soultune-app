import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pimqcohvjfhadzaxadxq.supabase.co"
const supabaseAnonKey = "sb_publishable_FkOaYTu0rhGgs1paPSyrag_SSKC4kel"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
