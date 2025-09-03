# Netlify Deployment Guide

This project is configured for easy deployment to Netlify.

## Quick Deploy

### Option 1: Deploy with Git (Recommended)

1. Push your code to GitHub (already done)
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select the `MCERQUA/bbs` repository
5. Netlify will auto-detect the build settings from `netlify.toml`
6. Click "Deploy site"

### Option 2: Manual Deploy

1. Build the project locally:
   ```bash
   npm install
   npm run build
   ```
2. Drag the `dist` folder to Netlify's deployment area

## Build Settings (Auto-configured)

These settings are already configured in `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 20
- **Redirects**: Configured for React SPA

## Environment Variables

If you need environment variables:

1. Go to Site Settings > Environment Variables
2. Add variables with `VITE_` prefix (e.g., `VITE_API_KEY`)
3. Reference `.env.example` for available options

## Custom Domain

To add a custom domain:

1. Go to Domain Settings
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Features Configured

✅ React SPA routing (redirects)
✅ Security headers
✅ Asset caching
✅ Build optimization
✅ TypeScript support
✅ Tailwind CSS v4

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

If build fails:

1. Check Node version (requires v20)
2. Clear cache in Netlify dashboard
3. Check build logs for errors
4. Ensure all dependencies are in `package.json`

## Support

- [Netlify Docs](https://docs.netlify.com)
- [Vite + Netlify Guide](https://vitejs.dev/guide/static-deploy.html#netlify)