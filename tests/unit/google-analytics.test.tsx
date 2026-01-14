import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render } from '@testing-library/react'
import { GoogleAnalytics } from '@/components/google-analytics'

interface MockScriptProps {
  id?: string
  src?: string
  children?: React.ReactNode
  dangerouslySetInnerHTML?: { __html: string }
}

vi.mock('next/script', () => ({
  default: ({ id, src, children, dangerouslySetInnerHTML }: MockScriptProps) => {
    if (src) {
      return <div data-testid="ga-script" data-src={src} />
    }
    if (dangerouslySetInnerHTML) {
      return <div data-testid={id} />
    }
    return <div data-testid={id}>{children}</div>
  },
}))

describe('GoogleAnalytics component', () => {
  const originalEnv = process.env

  beforeEach(() => {
    vi.resetModules()
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('should return null when NEXT_PUBLIC_GA_MEASUREMENT_ID is not set', () => {
    delete process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

    const { container } = render(<GoogleAnalytics />)

    expect(container.firstChild).toBeNull()
  })

  it('should render scripts when NEXT_PUBLIC_GA_MEASUREMENT_ID is set', () => {
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'G-TEST123'

    const { getByTestId } = render(<GoogleAnalytics />)

    expect(getByTestId('ga-script')).toBeInTheDocument()
    expect(getByTestId('google-analytics')).toBeInTheDocument()
  })

  it('should include the measurement ID in the script src', () => {
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'G-TEST123'

    const { getByTestId } = render(<GoogleAnalytics />)
    const script = getByTestId('ga-script')

    expect(script).toHaveAttribute('data-src', expect.stringContaining('G-TEST123'))
  })

  it('should include gtag configuration in inline script', () => {
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'G-TEST123'

    const { getByTestId } = render(<GoogleAnalytics />)
    const inlineScript = getByTestId('google-analytics')

    expect(inlineScript).toBeInTheDocument()
  })
})
