import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

vi.mock('next/image', () => ({
  default: ({ alt }: { alt: string }) => <div data-testid="mock-image">{alt}</div>,
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}))

import { CTASection } from '@/components/sections/cta-section'
import { HeroSection } from '@/components/sections/hero-section'
import { StatsSection } from '@/components/sections/stats-section'
import { ProblemSection } from '@/components/sections/problem-section'
import { ValuePropSection } from '@/components/sections/value-prop-section'
import { TeamSection } from '@/components/sections/team-section'

describe('CTASection', () => {
  it('should render heading, description, and contact link', () => {
    render(<CTASection />)

    expect(
      screen.getByRole('heading', { name: /ready to build your product\?/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/get a free 30-minute consultation/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /schedule free consultation/i })).toHaveAttribute(
      'href',
      '/contact'
    )
  })
})

describe('HeroSection', () => {
  it('should render heading and links to /contact and /services', () => {
    render(<HeroSection />)

    expect(
      screen.getByRole('heading', { name: /1-stop software solution services/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get started/i })).toHaveAttribute('href', '/contact')
    expect(screen.getByRole('link', { name: /view pricing/i })).toHaveAttribute('href', '/services')
  })
})

describe('StatsSection', () => {
  it('should render 3 stats: 60%, 4 Hours, 100%', () => {
    render(<StatsSection />)

    expect(screen.getByText('60%')).toBeInTheDocument()
    expect(screen.getByText('4 Hours')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })
})

describe('ProblemSection', () => {
  it('should render heading and list 4 problems', () => {
    render(<ProblemSection />)

    expect(screen.getByRole('heading', { name: /the problem we solve/i })).toBeInTheDocument()

    const problems = [
      'Expensive overhead with layers of managers and sales teams',
      'Communication gaps between sales and developers',
      'Slow iteration due to long feedback loops',
      'Hidden costs where you pay for meetings, not code',
    ]

    problems.forEach(problem => {
      expect(screen.getByText(problem)).toBeInTheDocument()
    })
  })
})

describe('ValuePropSection', () => {
  it('should render heading and 4 value prop cards', () => {
    render(<ValuePropSection />)

    expect(
      screen.getByRole('heading', { name: /our unique value proposition/i })
    ).toBeInTheDocument()

    const valuePropTitles = ['Direct Communication', 'Reduced Costs', 'Lean Team', 'Full Ownership']

    valuePropTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })
})

describe('TeamSection', () => {
  it('should render heading and team member cards', () => {
    render(<TeamSection />)

    expect(screen.getByRole('heading', { name: /meet your direct team/i })).toBeInTheDocument()

    expect(screen.getAllByText('Pyae Sone Win').length).toBeGreaterThan(0)
    expect(screen.getAllByText('May Thin Lwin').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Yamin Khine').length).toBeGreaterThan(0)
  })
})
