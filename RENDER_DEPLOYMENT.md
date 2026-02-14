# Wedding Card Deployment Instructions

## Quick Setup for Render

### 1. Push Your Code to GitHub

```bash
git add .
git commit -m "Add build script for Render deployment"
git push
```

**Note:** `config.js` will NOT be pushed (it's in `.gitignore`). This is correct!

---

### 2. Configure Render

1. **Go to your Render dashboard**: https://dashboard.render.com
2. **Find your web service** (the wedding card site)
3. **Click on it** to open settings

#### Add Environment Variables:

1. Click **"Environment"** in the left sidebar
2. Click **"Add Environment Variable"**
3. Add these two variables:

   **Variable 1:**
   - Key: `SUPABASE_URL`
   - Value: `https://nswmgywvzvsfkuyvwuby.supabase.co`

   **Variable 2:**
   - Key: `SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zd21neXd2enZzZmt1eXZ3dWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5NTgxOTYsImV4cCI6MjA4NjUzNDE5Nn0.thgnS3rdqe49eL87kmXsjBAX92Mg5crijVVDdUoLsKU`

4. Click **"Save Changes"**

#### Update Build Command:

1. Click **"Settings"** in the left sidebar
2. Find **"Build Command"**
3. Change it to:
   ```bash
   node generate-config.js
   ```
4. Click **"Save Changes"**

---

### 3. Deploy

Click **"Manual Deploy"** → **"Deploy latest commit"**

The build will:
1. Run `generate-config.js`
2. Create `config.js` from your environment variables
3. Deploy your site with the config file

---

## How It Works

- **Locally**: You use the `config.js` file (not in Git)
- **On Render**: The build script creates `config.js` from environment variables
- **Security**: API keys are never in your Git repository ✅

---

## Troubleshooting

### Build fails with "SUPABASE_URL must be set"
→ You forgot to add environment variables in Render. Go back to step 2.

### Site loads but forms don't work
→ Check the browser console for errors. The Supabase credentials might be wrong.

### "config.js not found" error
→ Make sure the build command is set to `node generate-config.js`

---

## Testing After Deployment

1. Open your Render URL (e.g., `https://your-site.onrender.com`)
2. Press F12 to open browser console
3. Check for any errors
4. Test the Blessings form
5. Test the RSVP form
6. Verify data appears in your Supabase dashboard
