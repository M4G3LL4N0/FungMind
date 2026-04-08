import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

import { ENV } from '@/lib/env';

export function createBrowserSupabaseClient() {
  return createSupabaseClient(
    ENV.supabase.url,
    ENV.supabase.anonKey,
    {
      db: {
        schema: "fungmind"
      },
      auth: {
        persistSession: false,
        autoRefreshToken: true
      }
    }
  );
}
