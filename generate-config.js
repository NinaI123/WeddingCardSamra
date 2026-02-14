const fs = require('fs');

// This script generates config.js from environment variables
// It runs during the build process on Render

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('❌ ERROR: SUPABASE_URL and SUPABASE_ANON_KEY environment variables must be set!');
    console.error('Please add them in your Render dashboard under Environment settings.');
    process.exit(1);
}

const configContent = `// Supabase Configuration
// IMPORTANT: This file is auto-generated from environment variables
// Do not edit manually - it will be overwritten on each build

window.CONFIG = {
    SUPABASE_URL: "${SUPABASE_URL}",
    SUPABASE_ANON_KEY: "${SUPABASE_ANON_KEY}"
};
`;

try {
    fs.writeFileSync('config.js', configContent);
    console.log('✅ config.js generated successfully from environment variables');
    console.log(`   SUPABASE_URL: ${SUPABASE_URL}`);
    console.log(`   SUPABASE_ANON_KEY: ${SUPABASE_ANON_KEY.substring(0, 20)}...`);
} catch (error) {
    console.error('❌ ERROR: Failed to write config.js:', error.message);
    process.exit(1);
}
