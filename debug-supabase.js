// Debug script to test Supabase connection
// Run with: node debug-supabase.js

require('dotenv').config(); // Load from .env if available, or we'll use hardcoded for test

// Try to load from config.js if we can parse it, otherwise use what we know
const SUPABASE_URL = "https://nswmgywvzvsfkuyvwuby.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zd21neXd2enZzZmt1eXZ3dWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5NTgxOTYsImV4cCI6MjA4NjUzNDE5Nn0.thgnS3rdqe49eL87kmXsjBAX92Mg5crijVVDdUoLsKU";

console.log("------------------------------------------");
console.log("🔍 Debugging Supabase Connection");
console.log("------------------------------------------");
console.log(`URL: ${SUPABASE_URL}`);
console.log(`Key: ${SUPABASE_ANON_KEY.substring(0, 20)}...`);

async function testConnection() {
    try {
        // dynamic import for node-fetch if needed, but standard fetch exists in Node 18+
        const response = await fetch(`${SUPABASE_URL}/rest/v1/blessings?select=count`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });

        console.log(`\nStatus Code: ${response.status} ${response.statusText}`);

        if (response.ok) {
            console.log("✅ Connection Successful!");
            const data = await response.json();
            console.log("Data received:", data);
        } else {
            console.log("❌ Connection Failed!");
            const text = await response.text();
            console.log("Response:", text);

            if (response.status === 401) {
                console.log("\n⚠️  Possible Cause: Invalid API Key");
            } else if (response.status === 404) {
                console.log("\n⚠️  Possible Cause: Wrong URL or Project Paused");
            } else if (response.status === 503) {
                console.log("\n⚠️  Possible Cause: Database Paused (Check Supabase Dashboard)");
            }
        }
    } catch (error) {
        console.error("❌ Network Error:", error.message);
    }
}

testConnection();
