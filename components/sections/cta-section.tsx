import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Build Your Product?</h2>
        <p className="text-primary-foreground/90 mb-8 text-lg">
          Get a free 30-minute consultation to discuss your idea, assess technical needs, and find
          the right pricing model for your project.
        </p>
        <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
          <Link href="/contact">
            Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
