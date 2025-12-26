# Contributing to 1-Stop Software Solution Services

Thank you for your interest in contributing! This document provides guidelines for contributing to this open-source project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**Bug Report Template:**

```markdown
**Description**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**

- OS: [e.g. macOS, Windows]
- Browser: [e.g. Chrome, Firefox]
- Version: [e.g. 1.0.0]
```

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- A clear description of the enhancement
- Explain why this enhancement would be useful
- Provide examples or mockups if possible

### Pull Requests

#### Before You Start

1. **Check for existing PRs**: Ensure your work isn't being done by someone else
2. **Discuss in issues**: For large changes, open a discussion first
3. **Follow the coding standards**: See below

#### Development Workflow

1. **Fork the repository**

   ```bash
   # Fork on GitHub, then clone your fork
   git clone git@github.com:yourusername/1stopsoftwaresolution-services.git
   cd 1stopsoftwaresolution-services
   ```

2. **Set up development environment**

   ```bash
   # Install dependencies
   pnpm install

   # Start development server
   pnpm run dev
   ```

3. **Create a feature branch**

   ```bash
   # Use conventional commit prefixes
   git checkout -b feat/add-new-feature
   git checkout -b fix/fix-broken-component
   git checkout -b docs/update-readme
   ```

4. **Make your changes**
   - Write clear, concise code
   - Follow existing code patterns
   - Add tests for new functionality
   - Update documentation

5. **Run quality checks**

   ```bash
   # Type checking
   pnpm run typecheck

   # Linting
   pnpm run lint

   # Format code
   pnpm run format

   # Build
   pnpm run build
   ```

6. **Commit your changes**

   ```bash
   # Stage files
   git add .

   # Commit with conventional message
   git commit -m "feat: add new feature for team profiles"
   ```

7. **Push to your fork**

   ```bash
   git push origin feat/add-new-feature
   ```

8. **Create a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Link related issues

#### Pull Request Template

```markdown
## Description

Brief description of changes made.

## Type of Change

- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Related Issues

Fixes #(issue number)

## How Has This Been Tested?

- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Browser testing completed (Chrome, Firefox, Safari)

## Screenshots (if applicable)

## Checklist

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective
- [ ] New and existing unit tests pass locally
- [ ] Any dependent changes have been merged and published
```

## Coding Standards

### TypeScript

- Use TypeScript strict mode
- Avoid `any` - use proper types
- Prefer interfaces for public APIs, types for internal
- Use utility types (Pick, Omit, Partial)
- Type all function parameters and return values

### React Components

```typescript
// Server component (default)
export default function Page() {
  return <div>Content</div>
}

// Client component (for interactivity)
'use client'
import { useState } from 'react'

export default function Interactive() {
  const [state, setState] = useState()
  return <div>{state}</div>
}
```

### Naming Conventions

- **Files**: `kebab-case.tsx`
- **Components**: `PascalCase`
- **Functions/Variables**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Types/Interfaces**: `PascalCase`

### Code Organization

- Keep components focused and small (< 300 lines)
- Extract reusable logic into custom hooks
- Use composition over inheritance
- Follow the existing folder structure

### Styling

- Use Tailwind CSS utility classes
- Combine with `clsx` and `tailwind-merge` for conditional styles
- Follow existing design system patterns
- Ensure mobile-first responsive design

### Import Order

```typescript
// 1. External libraries
import React from 'react'
import Link from 'next/link'

// 2. Internal modules
import { Button } from '@/components/ui/button'

// 3. Type imports
import type { Metadata } from 'next'
```

### Accessibility

- Use semantic HTML (nav, main, footer, article)
- Include ARIA labels when needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain 4.5:1 color contrast ratio

## Testing Guidelines

### Unit Tests

- Test component rendering
- Test user interactions
- Mock external dependencies
- Aim for >80% coverage

```typescript
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

### E2E Tests

- Test critical user flows
- Cross-browser testing
- Visual regression testing

```typescript
import { test, expect } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/1-Stop Software/)
})
```

## Documentation

- Update README.md for user-facing changes
- Update ARCHITECTURE.md for structural changes
- Update DEPLOYMENT.md for deployment changes
- Add comments to complex logic
- Keep API documentation up to date

## Project-Specific Guidelines

### Content Changes

- All content should be in data files (`data/`)
- Hardcoded text should be extracted to constants
- Use TypeScript for type-safe content

### Component Development

- Reuse existing UI components from `components/ui/`
- Create new sections in `components/sections/`
- Follow shadcn/ui patterns

### Adding New Pages

1. Create route in `app/(marketing)/`
2. Add navigation link in Navbar component
3. Update sitemap
4. Add SEO metadata

### Performance

- Use Next.js Image component
- Implement lazy loading
- Optimize bundle size
- Test with Lighthouse

## Getting Help

- **Documentation**: Check `docs/` folder
- **Issues**: Open a GitHub issue
- **Discussions**: Use GitHub Discussions for questions
- **Email**: architect@1stopsoftwaresolution.com

## Recognition

Contributors will be acknowledged in:

- Contributors section in README
- Release notes
- Project website (future)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to 1-Stop Software Solution Services! 🚀
