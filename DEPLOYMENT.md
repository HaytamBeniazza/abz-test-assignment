# 🚀 Deployment Guide

This guide covers deployment options for the ABZ.agency test assignment.

## 📋 Pre-deployment Checklist

✅ Production build works (`npm run build`)  
✅ All components are functional  
✅ API integration is complete  
✅ Performance optimizations are in place  
✅ Git repository is initialized  

## 🌐 Deployment Options

### 1. Netlify (Recommended)

**Automatic Deployment from Git:**

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings are already configured in `netlify.toml`
6. Deploy!

**Manual Deployment:**

```bash
# Build the project
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### 2. Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 3. GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

## 📊 Performance Monitoring

After deployment, test your site with:

### Google PageSpeed Insights
- Visit: https://pagespeed.web.dev/
- Enter your deployed URL
- Target: All green scores

### Google Lighthouse
- Open Chrome DevTools
- Go to Lighthouse tab
- Run audit for mobile and desktop
- Target: 90+ in all categories

### WebPageTest
- Visit: https://webpagetest.org/
- Test your site from multiple locations
- Target: A+ grades

## 🔧 Environment Variables

If you need to configure API endpoints:

### Netlify
1. Go to Site Settings → Environment variables
2. Add `VITE_API_BASE_URL` if needed

### Vercel
1. Go to Project Settings → Environment Variables
2. Add variables as needed

### Local Development
Create `.env.local`:
```
VITE_API_BASE_URL=https://frontend-test-assignment-api.abz.agency/api/v1
```

## 📈 Performance Tips

### Cache Optimization
- Static assets cached for 1 year
- HTML files with no cache for updates
- Configured in `netlify.toml`

### Bundle Analysis
```bash
# Analyze bundle size
npm run build -- --analyze
```

### Image Optimization
- Images are optimized automatically
- WebP format support when available
- Lazy loading implemented

## 🔒 Security Headers

Configured in `netlify.toml`:
- X-Frame-Options: DENY
- X-XSS-Protection: enabled
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 📝 Post-Deployment Checklist

After deployment, verify:

✅ Site loads correctly on all devices  
✅ All navigation links work  
✅ User registration form submits successfully  
✅ User list loads and pagination works  
✅ Images load properly  
✅ Mobile responsiveness  
✅ Performance scores are green  
✅ No console errors  

## 🆘 Troubleshooting

### Common Issues

**Build Fails:**
- Check Node.js version (18+)
- Clear node_modules and reinstall
- Check for syntax errors

**API Errors:**
- Verify API endpoint URL
- Check CORS settings
- Ensure token generation works

**Performance Issues:**
- Check image sizes and formats
- Verify code splitting is working
- Check for unused dependencies

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify API responses in Network tab
3. Test on different devices/browsers
4. Check deployment logs

---

**Happy Deploying! 🎉** 