import type { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { SITE_CONFIG } from '@/config/site'

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
}

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Layout>{children}</Layout>
}
