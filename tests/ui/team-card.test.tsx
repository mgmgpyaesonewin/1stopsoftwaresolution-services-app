import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { TeamCard } from '@/components/sections/team-card'
import { type TeamMember } from '@/types'

const mockPush = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

vi.mock('next/image', () => ({
  default: (props: { alt: string; src: string }) => (
    <div data-testid="mock-image" data-alt={props.alt} data-src={props.src} />
  ),
}))

const mockMember: TeamMember = {
  id: 'test-member',
  name: 'Test Member',
  role: 'Test Role',
  shortBio: 'Test bio description',
  fullBio: 'Full bio',
  image: '/test.png',
  skills: ['React', 'Node.js'],
  email: 'test@example.com',
  github: 'https://github.com/test',
  linkedin: 'https://linkedin.com/in/test',
}

describe('TeamCard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders member name, role, and short bio', () => {
    render(<TeamCard member={mockMember} />)

    expect(screen.getByText('Test Member')).toBeInTheDocument()
    expect(screen.getByText('Test Role')).toBeInTheDocument()
    expect(screen.getByText('Test bio description')).toBeInTheDocument()
    expect(screen.getByText('View Full Profile')).toBeInTheDocument()
  })

  it('shows email link when member has email', () => {
    render(<TeamCard member={mockMember} />)

    const emailLink = screen.getByLabelText('Email Test Member')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:test@example.com')
  })

  it('shows github link when member has github', () => {
    render(<TeamCard member={mockMember} />)

    const githubLink = screen.getByLabelText("Test Member's GitHub")
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test')
  })

  it('shows linkedin link when member has linkedin', () => {
    render(<TeamCard member={mockMember} />)

    const linkedinLink = screen.getByLabelText("Test Member's LinkedIn")
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/test')
  })

  it('clicking the card navigates to /team/[member.id]', () => {
    render(<TeamCard member={mockMember} />)

    const card = screen.getByText('View Full Profile').closest('[data-slot="card"]')
    fireEvent.click(card!)

    expect(mockPush).toHaveBeenCalledWith('/team/test-member')
  })

  it('clicking social links does not trigger card navigation', () => {
    render(<TeamCard member={mockMember} />)

    const emailLink = screen.getByLabelText('Email Test Member')
    fireEvent.click(emailLink)
    expect(mockPush).not.toHaveBeenCalled()

    const githubLink = screen.getByLabelText("Test Member's GitHub")
    fireEvent.click(githubLink)
    expect(mockPush).not.toHaveBeenCalled()

    const linkedinLink = screen.getByLabelText("Test Member's LinkedIn")
    fireEvent.click(linkedinLink)
    expect(mockPush).not.toHaveBeenCalled()
  })

  it('does not show social links when member has no social info', () => {
    const memberWithoutSocials: TeamMember = {
      ...mockMember,
      email: undefined,
      github: undefined,
      linkedin: undefined,
    }

    render(<TeamCard member={memberWithoutSocials} />)

    expect(screen.queryByLabelText('Email Test Member')).not.toBeInTheDocument()
    expect(screen.queryByLabelText("Test Member's GitHub")).not.toBeInTheDocument()
    expect(screen.queryByLabelText("Test Member's LinkedIn")).not.toBeInTheDocument()
  })
})
