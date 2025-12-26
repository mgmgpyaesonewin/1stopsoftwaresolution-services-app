import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              1-Stop Software Solution Services
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              We&apos;re not a typical software house. We&apos;ve reimagined how custom software
              development should work: lean, direct, and focused on results.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/services">View Pricing</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1080&h=1080&fit=crop"
              alt="Software development team"
              fill
              className="rounded-lg object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
