# 🚀 Deployment Guide

## Before Deployment

Make sure you've customized:
- [ ] Your name and bio
- [ ] Work experience
- [ ] Projects
- [ ] Skills
- [ ] Contact information
- [ ] Social media links
- [ ] Email address in contact form

## Option 1: Vercel (Recommended ⭐)

**Fastest and easiest deployment**

### Steps:
1. **Install Vercel CLI:**
   ```
   npm install -g vercel
   ```

2. **Deploy:**
   ```
   cd c:\Users\kavya\kavya-portfolio
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Select framework: **Vite**
   - Confirm settings

4. **Get your URL:**
   Your portfolio will be live at `yourname.vercel.app`

### Benefits:
- ✅ Free hosting
- ✅ Fast CDN
- ✅ Automatic deployments on push
- ✅ Custom domain support
- ✅ Serverless functions

---

## Option 2: Netlify

**Alternative with great UX**

### Steps:
1. **Build your project:**
   ```
   npm run build
   ```

2. **Install Netlify CLI:**
   ```
   npm install -g netlify-cli
   ```

3. **Deploy:**
   ```
   netlify deploy --prod --dir=dist
   ```

4. **Or drag & drop:**
   - Go to https://app.netlify.com
   - Create account
   - Drag `dist` folder to deploy

### Benefits:
- ✅ Free hosting
- ✅ Generous free tier
- ✅ Easy integration
- ✅ Form handling available

---

## Option 3: GitHub Pages

**Free hosting via GitHub**

### Steps:
1. **Create GitHub repository:**
   - Go to github.com
   - Create new repo: `github-username.github.io`

2. **Update vite.config.ts:**
   ```typescript
   export default defineConfig({
     base: '/',
     plugins: [react()],
   })
   ```

3. **Build:**
   ```
   npm run build
   ```

4. **Deploy:**
   ```
   git add dist/
   git commit -m "Deploy portfolio"
   git push
   ```

5. **Your site:**
   Visit `https://github-username.github.io`

---

## Option 4: AWS S3 + CloudFront

**For professional hosting**

### Steps:
1. **Build project:**
   ```
   npm run build
   ```

2. **Create S3 bucket:**
   - Go to AWS Console
   - Create bucket with your domain name
   - Enable static website hosting
   - Upload `dist/` contents

3. **Set up CloudFront:**
   - Create distribution
   - Point to S3 bucket
   - Use custom domain

4. **Your site:** `https://yourdomain.com`

---

## Option 5: Azure Static Web Apps

**Microsoft's hosting solution**

### Steps:
1. **Create Azure account**

2. **Create resource:**
   - Static Web App
   - Connect GitHub repo
   - Build settings:
     - Framework: Vite
     - Build location: `dist`

3. **Automatic deployment:**
   - Every push deploys automatically
   - Custom domain support

---

## Custom Domain Setup

### After deploying, add your domain:

1. **Get domain:**
   - Namecheap
   - GoDaddy
   - Google Domains
   - Etc.

2. **Update DNS:**
   - Point to Vercel/Netlify/AWS
   - Follow their DNS setup guide
   - Wait 24-48 hours for propagation

3. **Add SSL certificate:**
   - Free with Vercel/Netlify
   - Automatic HTTPS enabled

---

## Environment Variables

If you add environment variables later:

1. **Create `.env` file:**
   ```
   VITE_API_URL=https://api.yourdomain.com
   ```

2. **Access in code:**
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. **In deployment:**
   - Vercel: Settings > Environment Variables
   - Netlify: Site settings > Environment
   - AWS: CloudFormation parameters

---

## Performance Tips

### Optimize Images
```bash
npm install -g imagemin-cli
imagemin src/images/* --out-dir=public/images
```

### Analyze Bundle Size
```bash
npm install -D rollup-plugin-visualizer
```

Update `vite.config.ts`:
```typescript
import { visualizer } from "rollup-plugin-visualizer"

export default defineConfig({
  plugins: [react(), visualizer()],
})
```

### Enable Compression
Vercel/Netlify do this automatically ✅

---

## SSL/HTTPS

- **Vercel**: Automatic ✅
- **Netlify**: Automatic ✅
- **GitHub Pages**: Automatic ✅
- **AWS**: Use CloudFront ✅

All HTTPS-enabled! 🔒

---

## Continuous Deployment

### Connect GitHub:

1. **Push to GitHub:**
   ```
   git push origin main
   ```

2. **Automatic deployment:**
   - Vercel: Automatic
   - Netlify: Automatic
   - GitHub Pages: Automatic
   - AWS: Set up CodePipeline

3. **No manual uploads needed!** ✅

---

## Monitoring & Analytics

### Add Analytics:

```typescript
// In src/main.tsx
import { useEffect } from 'react'

useEffect(() => {
  // Google Analytics code here
  window.dataLayer = window.dataLayer || []
  gtag('js', new Date())
  gtag('config', 'GA_ID')
}, [])
```

### Recommended services:
- Google Analytics (Free)
- Vercel Analytics (Free tier)
- Netlify Analytics ($9/month)

---

## Post-Deployment Checklist

- [ ] Portfolio loads in browser
- [ ] All links work
- [ ] Mobile layout looks good
- [ ] Contact form works (or linked)
- [ ] Social links direct correctly
- [ ] Load time < 3 seconds
- [ ] HTTPS enabled
- [ ] Mobile performance tested
- [ ] Desktop performance tested

---

## Troubleshooting Deployment

### Build fails?
```
npm run build --verbose
```

### Port issues?
```
npm run preview -- --port 3000
```

### Dependencies missing?
```
npm install
npm run build
```

### Still having issues?
Check deployment logs in:
- Vercel Dashboard
- Netlify Dashboard
- AWS CloudWatch

---

## Next Steps After Deployment

1. ✅ Share portfolio link
2. ✅ Update LinkedIn
3. ✅ Add to resume
4. ✅ Share on social media
5. ✅ Email to recruiters
6. ✅ Add to GitHub profile

---

**Your portfolio is ready to showcase to the world! 🌍**

Choose a deployment option and get it live today!
