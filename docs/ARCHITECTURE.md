# Architecture

## Technology Stack

### Frontend

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion (future)

### Backend (Future)

- **Runtime**: Node.js 20+
- **Framework**: Next.js API Routes
- **Database**: PostgreSQL (Prisma ORM)
- **Auth**: NextAuth.js
- **File Storage**: Vercel Blob Storage

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Marketing pages route group
│   │   ├── layout.tsx      # Shared marketing layout
│   │   └── page.tsx        # Home page
│   ├── api/                # API routes
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Layout components (Navbar, Footer)
│   ├── sections/           # Page sections (Hero, Features)
│   └── shared/             # Shared components
├── lib/
│   ├── utils.ts            # Utility functions
│   └── constants.ts        # App constants
├── data/                   # Static data files
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript types
└── config/                 # Configuration files
```

## Design Patterns

### Component Patterns

- **Server Components**: Use by default for static content
- **Client Components**: Only for interactivity (useState, useEffect)
- **Compound Components**: For complex UI patterns
- **Render Props**: For flexible component composition

### State Management

- **Local State**: React hooks (useState, useReducer)
- **URL State**: Next.js searchParams for filters
- **Server State**: Future - React Query for API data

### Data Fetching

- **Static Data**: Import directly or use `generateStaticParams()`
- **Dynamic Data**: Next.js API routes with caching
- **Real-time**: Future - Server-Sent Events or WebSockets

## Performance Optimization

### Code Splitting

- Automatic with Next.js App Router
- Dynamic imports for large components
- Route-based splitting

### Image Optimization

- `next/image` for all images
- WebP/AVIF formats
- Lazy loading
- Responsive sizing

### Font Optimization

- `next/font` for Google Fonts
- Self-hosted fonts for custom typefaces
- Font subsetting for smaller bundles

### Caching Strategy

- Static pages: Revalidate on demand
- API routes: Incremental Static Regeneration
- Data fetching: Cache headers and revalidation

## Security Best Practices

- Environment variables for secrets
- Content Security Policy (CSP) headers
- HTTPS only in production
- Input validation with Zod
- SQL injection prevention with parameterized queries
- XSS prevention with React's built-in escaping
- CORS configuration for API routes

## Accessibility (WCAG 2.1 AA)

- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast (4.5:1 minimum)
- Alt text for images
- Form labels and error messages
- Screen reader testing

## Deployment Strategy

- **Platform**: Vercel (recommended)
- **CI/CD**: GitHub Actions
- **Environment Management**: Multiple environments (dev, staging, prod)
- **Monitoring**: Future - Vercel Analytics + Sentry
- **Error Tracking**: Future - Sentry

## Testing Strategy

- **Unit Tests**: Vitest + React Testing Library
- **E2E Tests**: Playwright
- **Visual Regression**: Storybook + Chromatic (future)
- **Accessibility Testing**: axe-core
- **Performance Testing**: Lighthouse CI

## Internationalization (Future)

- Framework: next-intl
- Default locale: en-US
- Supported locales: To be determined
- Content translation: MDX or CMS
