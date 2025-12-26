import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/config/site'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Custom software development reimagined: lean, direct, and focused on results. Talk directly to developers, not account managers.',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}
