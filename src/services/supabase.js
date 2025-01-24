import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vrdfrjiytphxrdyjahow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyZGZyaml5dHBoeHJkeWphaG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NTMyMDQsImV4cCI6MjA1MzEyOTIwNH0.tatIV0UD_BJ9Oj_4lyCNvw86OEKb6X94sKdXyIN4IEY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
