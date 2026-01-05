import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, CONTACT_EMAIL } from '@/config/site'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <Image
                src="/logo.webp"
                alt="1-Stop Software Logo"
                width={32}
                height={32}
                className="rounded object-contain"
              />
              <span className="font-semibold">1-Stop Software</span>
            </div>
            <p className="text-slate-400">Lean. Fast. Direct.</p>
            <p className="mt-2 text-slate-400 italic">
              &quot;The only software house where you pay for code, not conferences.&quot;
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {SITE_CONFIG.nav.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-slate-50"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <p className="text-slate-400">
              Email:{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-blue-400 transition-colors hover:text-blue-300"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-2 text-slate-400">Remote-first</p>
            <p className="text-slate-400">Timezone-friendly</p>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        <div className="text-center text-slate-400">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
