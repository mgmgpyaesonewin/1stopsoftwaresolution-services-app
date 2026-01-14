import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

describe('Card', () => {
  it('renders correctly', () => {
    render(<Card data-testid="card">Card content</Card>)
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(
      <Card data-testid="card" className="custom-class">
        Card content
      </Card>
    )
    expect(screen.getByTestId('card')).toHaveClass('custom-class')
  })

  it('sets data-slot attribute', () => {
    render(<Card data-testid="card">Card content</Card>)
    expect(screen.getByTestId('card')).toHaveAttribute('data-slot', 'card')
  })

  it('renders children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    render(
      <Card data-testid="card" id="my-card" aria-label="My card">
        Card content
      </Card>
    )
    const card = screen.getByTestId('card')
    expect(card).toHaveAttribute('id', 'my-card')
    expect(card).toHaveAttribute('aria-label', 'My card')
  })
})

describe('CardHeader', () => {
  it('renders correctly', () => {
    render(<CardHeader data-testid="card-header">Header content</CardHeader>)
    expect(screen.getByTestId('card-header')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(
      <CardHeader data-testid="card-header" className="custom-class">
        Header content
      </CardHeader>
    )
    expect(screen.getByTestId('card-header')).toHaveClass('custom-class')
  })

  it('sets data-slot attribute', () => {
    render(<CardHeader data-testid="card-header">Header content</CardHeader>)
    expect(screen.getByTestId('card-header')).toHaveAttribute('data-slot', 'card-header')
  })

  it('renders children', () => {
    render(<CardHeader>Header content</CardHeader>)
    expect(screen.getByText('Header content')).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    render(
      <CardHeader data-testid="card-header" id="my-header">
        Header content
      </CardHeader>
    )
    expect(screen.getByTestId('card-header')).toHaveAttribute('id', 'my-header')
  })
})

describe('CardTitle', () => {
  it('renders correctly', () => {
    render(<CardTitle data-testid="card-title">Title content</CardTitle>)
    expect(screen.getByTestId('card-title')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(
      <CardTitle data-testid="card-title" className="custom-class">
        Title content
      </CardTitle>
    )
    expect(screen.getByTestId('card-title')).toHaveClass('custom-class')
  })

  it('sets data-slot attribute', () => {
    render(<CardTitle data-testid="card-title">Title content</CardTitle>)
    expect(screen.getByTestId('card-title')).toHaveAttribute('data-slot', 'card-title')
  })

  it('renders children', () => {
    render(<CardTitle>Title content</CardTitle>)
    expect(screen.getByText('Title content')).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    render(
      <CardTitle data-testid="card-title" id="my-title">
        Title content
      </CardTitle>
    )
    expect(screen.getByTestId('card-title')).toHaveAttribute('id', 'my-title')
  })
})

describe('CardDescription', () => {
  it('renders correctly', () => {
    render(<CardDescription data-testid="card-description">Description content</CardDescription>)
    expect(screen.getByTestId('card-description')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(
      <CardDescription data-testid="card-description" className="custom-class">
        Description content
      </CardDescription>
    )
    expect(screen.getByTestId('card-description')).toHaveClass('custom-class')
  })

  it('sets data-slot attribute', () => {
    render(<CardDescription data-testid="card-description">Description content</CardDescription>)
    expect(screen.getByTestId('card-description')).toHaveAttribute('data-slot', 'card-description')
  })

  it('renders children', () => {
    render(<CardDescription>Description content</CardDescription>)
    expect(screen.getByText('Description content')).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    render(
      <CardDescription data-testid="card-description" id="my-description">
        Description content
      </CardDescription>
    )
    expect(screen.getByTestId('card-description')).toHaveAttribute('id', 'my-description')
  })
})

describe('CardAction', () => {
  it('renders correctly', () => {
    render(<CardAction data-testid="card-action">Action content</CardAction>)
    expect(screen.getByTestId('card-action')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(
      <CardAction data-testid="card-action" className="custom-class">
        Action content
      </CardAction>
    )
    expect(screen.getByTestId('card-action')).toHaveClass('custom-class')
  })

  it('sets data-slot attribute', () => {
    render(<CardAction data-testid="card-action">Action content</CardAction>)
    expect(screen.getByTestId('card-action')).toHaveAttribute('data-slot', 'card-action')
  })

  it('renders children', () => {
    render(<CardAction>Action content</CardAction>)
    expect(screen.getByText('Action content')).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    render(
      <CardAction data-testid="card-action" id="my-action">
        Action content
      </CardAction>
    )
    expect(screen.getByTestId('card-action')).toHaveAttribute('id', 'my-action')
  })
})

describe('CardContent', () => {
  it('renders correctly', () => {
    render(<CardContent data-testid="card-content">Content</CardContent>)
    expect(screen.getByTestId('card-content')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(
      <CardContent data-testid="card-content" className="custom-class">
        Content
      </CardContent>
    )
    expect(screen.getByTestId('card-content')).toHaveClass('custom-class')
  })

  it('sets data-slot attribute', () => {
    render(<CardContent data-testid="card-content">Content</CardContent>)
    expect(screen.getByTestId('card-content')).toHaveAttribute('data-slot', 'card-content')
  })

  it('renders children', () => {
    render(<CardContent>Content</CardContent>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    render(
      <CardContent data-testid="card-content" id="my-content">
        Content
      </CardContent>
    )
    expect(screen.getByTestId('card-content')).toHaveAttribute('id', 'my-content')
  })
})

describe('CardFooter', () => {
  it('renders correctly', () => {
    render(<CardFooter data-testid="card-footer">Footer content</CardFooter>)
    expect(screen.getByTestId('card-footer')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(
      <CardFooter data-testid="card-footer" className="custom-class">
        Footer content
      </CardFooter>
    )
    expect(screen.getByTestId('card-footer')).toHaveClass('custom-class')
  })

  it('sets data-slot attribute', () => {
    render(<CardFooter data-testid="card-footer">Footer content</CardFooter>)
    expect(screen.getByTestId('card-footer')).toHaveAttribute('data-slot', 'card-footer')
  })

  it('renders children', () => {
    render(<CardFooter>Footer content</CardFooter>)
    expect(screen.getByText('Footer content')).toBeInTheDocument()
  })

  it('passes through additional props', () => {
    render(
      <CardFooter data-testid="card-footer" id="my-footer">
        Footer content
      </CardFooter>
    )
    expect(screen.getByTestId('card-footer')).toHaveAttribute('id', 'my-footer')
  })
})
