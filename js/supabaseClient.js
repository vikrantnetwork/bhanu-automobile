// Supabase Enterprise Cloud Client
// Connects AutoPulse frontend to Postgres database and Real-time data streams.

const SUPABASE_URL = "https://ktqjpwzozljagujguecy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0cWpwd3pvemxqYWd1amd1ZWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5OTc0NjMsImV4cCI6MjEwMTU3MzQ2M30.v7BHyAc8wSHfa0Kdz7GsuaLjG0dD6LQ3dl3l7mrZPmE";

// Initialize Supabase Client if library is available
if (typeof supabase !== 'undefined' && supabase.createClient) {
  window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log("⚡ Supabase Enterprise Cloud Client Initialized");
} else {
  console.warn("Supabase CDN library not detected. Database features operating in static fallback mode.");
  window.supabaseClient = null;
}
