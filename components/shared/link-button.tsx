import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LinkButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  external?: boolean
  icon?: boolean
  size?: 'default' | 'sm' | 'lg'
}

export function LinkButton({
  href,
  children,
  variant = 'primary',
  external = false,
  icon = true,
  size = 'default',
}: LinkButtonProps) {
  const buttonVariant =
    variant === 'primary' ? 'default' : variant === 'secondary' ? 'secondary' : variant

  return (
    <Button asChild variant={buttonVariant} size={size} className="group">
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
        {icon && (
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            {external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </span>
        )}
      </a>
    </Button>
  )
}
