'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'
import { SITE_CONFIG } from '@/config/site'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-background sticky top-0 z-50 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded font-bold">
              1S
            </div>
            <span className="text-foreground font-semibold">1-Stop Software</span>
          </Link>

          <div className="hidden space-x-8 md:flex">
            {SITE_CONFIG.nav.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? 'text-primary border-primary border-b-2'
                    : 'text-muted-foreground hover:text-foreground'
                } pb-1 transition-colors`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="mt-8 flex flex-col space-y-4">
                {SITE_CONFIG.nav.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg ${
                      isActive(link.href)
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    } transition-colors`}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
