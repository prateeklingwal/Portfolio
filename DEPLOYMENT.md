# Deployment Guide - Prateek Lingwal Portfolio

This guide will walk you through deploying your portfolio website to Vercel and getting a live link.

## Prerequisites

- A GitHub account
- A Vercel account (free tier available)
- Your portfolio code pushed to a GitHub repository

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Code to GitHub
\`\`\`bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/prateek-portfolio.git

# Push to GitHub
git push -u origin main
\`\`\`

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Next.js project

### Step 3: Configure Deployment
1. **Project Name**: `prateek-portfolio` (or your preferred name)
2. **Framework Preset**: Next.js (auto-detected)
3. **Root Directory**: `./` (default)
4. **Build Command**: `npm run build` (auto-filled)
5. **Output Directory**: `.next` (auto-filled)
6. **Install Command**: `npm install` (auto-filled)

### Step 4: Deploy
1. Click "Deploy"
2. Wait for the build process to complete (usually 1-3 minutes)
3. Your live link will be generated: `https://prateek-portfolio-xyz.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
\`\`\`bash
npm install -g vercel
\`\`\`

### Step 2: Login to Vercel
\`\`\`bash
vercel login
\`\`\`

### Step 3: Deploy
\`\`\`bash
# Navigate to your project directory
cd prateek-portfolio

# Deploy to Vercel
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? prateek-portfolio
# - Directory? ./
\`\`\`

### Step 4: Production Deployment
\`\`\`bash
# Deploy to production
vercel --prod
\`\`\`

## Custom Domain (Optional)

### Step 1: Purchase Domain
- Buy a domain from providers like Namecheap, GoDaddy, or Google Domains

### Step 2: Add Domain in Vercel
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Step 3: Configure DNS
- Add the provided DNS records to your domain provider
- Wait for DNS propagation (can take up to 48 hours)

## Environment Variables (If Needed)

If your portfolio uses any environment variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables:
   - `NEXT_PUBLIC_SITE_URL`: Your live site URL
   - Any other environment variables your project needs

## Automatic Deployments

Once connected to GitHub:
- Every push to the `main` branch triggers a production deployment
- Pull requests create preview deployments
- You get a unique URL for each deployment

## Monitoring Your Deployment

### Vercel Dashboard Features:
- **Analytics**: View page views, performance metrics
- **Functions**: Monitor API routes and serverless functions
- **Deployments**: View deployment history and logs
- **Domains**: Manage custom domains and SSL certificates

## Troubleshooting

### Common Issues:

1. **Build Fails**
   \`\`\`bash
   # Check build locally first
   npm run build
   \`\`\`

2. **404 Errors**
   - Ensure all file paths are correct
   - Check that all components are properly exported

3. **Styling Issues**
   - Verify Tailwind CSS is properly configured
   - Check that all CSS files are imported

4. **Performance Issues**
   - Optimize images using Next.js Image component
   - Enable compression in next.config.js

### Getting Help:
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify responsive design on different devices
- [ ] Check theme toggle functionality
- [ ] Test contact form (if applicable)
- [ ] Verify resume download link
- [ ] Test all external links (LinkedIn, GitHub, etc.)
- [ ] Check page loading speed
- [ ] Verify SEO meta tags

## Updating Your Live Site

To update your deployed portfolio:

1. Make changes to your code locally
2. Test changes: `npm run dev`
3. Commit and push to GitHub:
   \`\`\`bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   \`\`\`
4. Vercel automatically deploys the changes
5. Your live site updates within minutes

## Sample Live URLs

After deployment, your portfolio will be accessible at:
- **Vercel subdomain**: `https://prateek-portfolio-abc123.vercel.app`
- **Custom domain** (if configured): `https://prateeklingwal.com`

---

**Need Help?** If you encounter any issues during deployment, refer to the troubleshooting section above or check the Vercel documentation for detailed guides.
