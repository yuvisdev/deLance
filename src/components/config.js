import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://eutkjqivhzmqsnlqrtyf.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1dGtqcWl2aHptcXNubHFydHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0NzcxMTIsImV4cCI6MjA0MTA1MzExMn0.-c7lxVqcZDIwAhRwfp5gKmQmD1gvCI3r_pBRkRfJE_o";
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
