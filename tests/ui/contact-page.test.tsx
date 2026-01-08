import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import React from 'react'
import ContactPage from '@/app/(marketing)/contact/page'
import { sendContactEmail } from '@/app/(marketing)/contact/actions'

// Mock the server action
vi.mock('@/app/(marketing)/contact/actions', () => ({
  sendContactEmail: vi.fn(),
}))

// Mock Next.js script component
vi.mock('next/script', () => ({
  default: () => null,
}))

// Mock UI components to simplify testing
const MockSelectContext = React.createContext<{ onValueChange: (v: string) => void }>({
  onValueChange: () => {},
})

vi.mock('@/components/ui/select', () => ({
  Select: ({
    children,
    onValueChange,
  }: {
    children: React.ReactNode
    onValueChange: (v: string) => void
  }) => (
    <MockSelectContext.Provider value={{ onValueChange }}>
      <div data-testid="mock-select">{children}</div>
    </MockSelectContext.Provider>
  ),
  SelectTrigger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SelectValue: ({ placeholder }: { placeholder: string }) => <span>{placeholder}</span>,
  SelectContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SelectItem: ({ value, children }: { value: string; children: React.ReactNode }) => {
    const { onValueChange } = React.useContext(MockSelectContext)
    return (
      <button type="button" onClick={() => onValueChange(value)} data-value={value}>
        {children}
      </button>
    )
  },
}))

describe('ContactPage Integration Test', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(sendContactEmail).mockResolvedValue({ success: true })
  })

  // 1. Render Test
  it('should render the contact form with all fields and a submit button', () => {
    render(<ContactPage />)

    expect(screen.getByLabelText('Name *')).toBeInTheDocument()
    expect(screen.getByLabelText('Email *')).toBeInTheDocument()
    expect(screen.getByLabelText('Company / Startup Name')).toBeInTheDocument()
    expect(screen.getByText('Select a type')).toBeInTheDocument()
    expect(screen.getByText('Select a range')).toBeInTheDocument()
    expect(screen.getByLabelText('Project Description *')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  // 2. Client-Side Validation
  it('should show required field errors if the form is submitted empty', () => {
    render(<ContactPage />)

    // Check for required attributes
    expect(screen.getByLabelText('Name *')).toBeRequired()
    expect(screen.getByLabelText('Email *')).toBeRequired()
    expect(screen.getByLabelText('Project Description *')).toBeRequired()
  })

  it('should show an invalid email error for a poorly formatted email address', () => {
    render(<ContactPage />)
    const emailInput = screen.getByLabelText('Email *')

    fireEvent.change(emailInput, { target: { value: 'not-an-email' } })
    expect(emailInput).toBeInvalid()

    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } })
    expect(emailInput).toBeValid()
  })

  it('should disable the submit button while the form is submitting', async () => {
    let resolveAction: (value: any) => void = () => {}
    vi.mocked(sendContactEmail).mockImplementation(() => {
      return new Promise(resolve => {
        resolveAction = resolve
      })
    })

    render(<ContactPage />)

    // Fill form
    fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'Test User' } })
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText('Project Description *'), {
      target: { value: 'Test message' },
    })

    fireEvent.click(screen.getByText('MVP Development'))

    const submitButton = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submitButton)

    // Should be disabled immediately
    await waitFor(() => {
      expect(submitButton).toBeDisabled()
      expect(screen.getByText(/sending.../i)).toBeInTheDocument()
    })

    // Resolve with error to keep the button mounted
    await act(async () => {
      resolveAction({ success: false, error: 'Keep button' })
    })

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled()
    })
  })

  // 3. Success Scenario
  it('should call the sendContactEmail server action with correct data upon valid submission', async () => {
    render(<ContactPage />)

    // Fill form
    fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('Company / Startup Name'), {
      target: { value: 'Acme Inc' },
    })
    fireEvent.change(screen.getByLabelText('Project Description *'), {
      target: { value: 'I need a website.' },
    })

    // Select Project Type and Budget
    fireEvent.click(screen.getByText('SaaS Platform'))
    fireEvent.click(screen.getByText('$10,000 - $25,000'))

    // Submit
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(sendContactEmail).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Acme Inc',
        projectType: 'saas',
        budget: '10k-25k',
        message: 'I need a website.',
      })
    })

    // 4. Success Message and Clear Form
    await waitFor(() => {
      expect(screen.getByText(/message sent!/i)).toBeInTheDocument()
      expect(screen.queryByLabelText('Name *')).not.toBeInTheDocument() // Form is replaced by success message
    })
  })

  // 5. Error Scenario
  it('should display an error message if the server action returns an error', async () => {
    vi.mocked(sendContactEmail).mockResolvedValue({ success: false, error: 'Custom error message' })

    render(<ContactPage />)

    // Fill minimum valid form
    fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'john@gmail.com' } })
    fireEvent.change(screen.getByLabelText('Project Description *'), { target: { value: 'Msg' } })

    fireEvent.click(screen.getByText('Other'))

    // Submit
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText('Custom error message')).toBeInTheDocument()
    })

    // Form should still be visible
    expect(screen.getByLabelText('Name *')).toBeInTheDocument()
    expect(screen.getByLabelText('Name *')).toHaveValue('John')
  })
})
