import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gfzwqughjmmpwxpantcn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmendxdWdoam1tcHd4cGFudGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NzcwNzQsImV4cCI6MjA4MzQ1MzA3NH0.dEp3ONOPKfcDOzhG43B4YAUQiq_woflKw9WILpqiIVM";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
