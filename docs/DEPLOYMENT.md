# Deployment Guide

## Prerequisites

- Node.js 20+ installed
- pnpm package manager
- Git repository configured
- Vercel account (recommended) or deployment platform

## Environment Variables

Create `.env.local` in the project root:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://1stopsoftwaresolution.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email (future)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your_api_key

# Database (future)
DATABASE_URL=postgresql://user:pass@host:5432/dbname

# Analytics (future)
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id
```

## Build Process

### Local Build

```bash
# Install dependencies
pnpm install

# Run type checking
pnpm run typecheck

# Run linting
pnpm run lint

# Build production bundle
pnpm run build
```

### Production Build Artifacts

- `.next/` - Next.js build output
- `public/` - Static assets
- `package.json` - Dependencies

## Deployment Options

### Option 1: Vercel (Recommended)

#### Automatic Deployment

1. Push code to GitHub
2. Import repository in Vercel dashboard
3. Configure environment variables
4. Deploy - Vercel handles everything automatically

#### Manual Deployment

```bash
# Install Vercel CLI
pnpm add -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Vercel Configuration

Add `vercel.json` in project root:

```json
{
  "buildCommand": "pnpm run build",
  "devCommand": "pnpm run dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Option 2: Netlify

```toml
# netlify.toml
[build]
  command = "pnpm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: AWS Amplify

```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - pnpm install
    build:
      commands:
        - pnpm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Option 4: Docker Deployment

```dockerfile
# Dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

```bash
# Build and run
docker build -t 1stop-website .
docker run -p 3000:3000 1stop-website
```

## Pre-Deployment Checklist

- [ ] All tests passing (`pnpm test`)
- [ ] Type checking passing (`pnpm run typecheck`)
- [ ] Linting passing (`pnpm run lint`)
- [ ] Build successful (`pnpm run build`)
- [ ] Environment variables configured
- [ ] Analytics tracking installed
- [ ] SEO metadata complete
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Favicon and OG images optimized
- [ ] SSL certificate valid
- [ ] Domain DNS configured
- [ ] Error monitoring setup (Sentry)
- [ ] Performance monitoring (Vercel Analytics)

## Post-Deployment Verification

### Critical Checks

1. **Homepage Loads**: Navigate to root URL
2. **All Pages Accessible**: Test each route
3. **Images Loading**: Check image optimization
4. **Forms Working**: Test contact form
5. **Mobile Responsive**: Test on mobile devices
6. **Analytics Tracking**: Verify GA/Umami events
7. **SEO Meta Tags**: Check source code

### Performance Tests

```bash
# Run Lighthouse CI
npx lighthouse https://1stopsoftwaresolution.com --view

# Target scores:
# - Performance: 90+
# - Accessibility: 95+
# - Best Practices: 95+
# - SEO: 100
```

### Accessibility Tests

```bash
# Run axe-core
npx axe https://1stopsoftwaresolution.com --tags wcag2a,wcag2aa

# Should have zero critical errors
```

## Monitoring & Observability

### Vercel Analytics (Built-in)

- Page views
- Web Vitals (LCP, FID, CLS)
- Route performance
- Build times

### Error Tracking (Sentry)

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
})
```

### Uptime Monitoring

- UptimeRobot or Pingdom
- Check every 5 minutes
- Alert on downtime > 1 minute

## Rollback Strategy

### Vercel Rollback

1. Go to Deployments in Vercel dashboard
2. Click on previous successful deployment
3. Click "Promote to Production"

### Manual Rollback

```bash
# Revert to previous commit
git revert HEAD

# Push and redeploy
git push origin main
```

## Continuous Deployment

### GitHub Actions CI/CD

The `.github/workflows/ci.yml` file runs on every push:

- Linting
- Type checking
- Testing
- Build verification

For automated deployments to production:

1. Configure repository in Vercel
2. Enable Automatic Deployments
3. Deployments trigger on merge to main branch

### Branch Strategy

```
main           → Production deployment
develop        → Staging deployment
feature/*      → Preview deployments
```

## Troubleshooting

### Build Failures

- Check Node.js version (`node -v`)
- Clear cache: `rm -rf .next node_modules && pnpm install`
- Check for memory issues: Increase `NODE_OPTIONS=--max-old-space-size=4096`

### Runtime Errors

- Check environment variables in deployment dashboard
- Review Vercel deployment logs
- Check browser console for client-side errors
- Verify API route configurations

### Performance Issues

- Enable Next.js analytics
- Check bundle size with `@next/bundle-analyzer`
- Optimize images with `next/image`
- Review code splitting strategy
- Check database query performance

## Scaling Considerations

- Enable Edge Functions for geographically distributed execution
- Use CDN for static assets (Vercel handles this automatically)
- Implement caching strategies for API routes
- Consider moving to Vercel Pro plan for:
  - Faster builds
  - More bandwidth
  - Priority support
  - Advanced analytics

## Cost Estimation

### Vercel Free Plan

- 100GB bandwidth/month
- 6,000 minutes of build time
- 100 serverless function executions/day

### Vercel Pro Plan ($20/month)

- 1TB bandwidth/month
- Unlimited builds
- Unlimited serverless functions
- 100GB Edge Network bandwidth

### Estimation for Traffic

- 10k visitors/month: Free plan sufficient
- 100k visitors/month: Pro plan recommended
- 1M+ visitors/month: Enterprise plan needed
