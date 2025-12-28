import Link from 'next/link'
import { Search, Layers, Code, Rocket, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/sections'

export default function ProcessPage() {
  return (
    <div>
      <PageHero
        title="Our Development Process"
        description="A streamlined, transparent process designed to deliver working software quickly while keeping you in the loop every step of the way."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Search className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-r-lg border-l-4 border-blue-600 bg-blue-50 p-6">
                  <h3 className="mb-3 text-gray-900">Week 1: Discovery</h3>
                  <p className="mb-4 text-gray-600">
                    We dive deep into your requirements to ensure we understand your vision and
                    technical needs.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Requirements gathering & analysis</li>
                    <li>• Technical feasibility assessment</li>
                    <li>• Timeline estimation</li>
                    <li>• Cost breakdown & pricing model selection</li>
                    <li>• Initial wireframes or mockups</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-white">
                  <Layers className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-r-lg border-l-4 border-purple-600 bg-purple-50 p-6">
                  <h3 className="mb-3 text-gray-900">Week 2: Architecture</h3>
                  <p className="mb-4 text-gray-600">
                    Our solution architect designs a robust system that scales with your needs.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• System architecture design</li>
                    <li>• Technology stack selection</li>
                    <li>• Database schema design</li>
                    <li>• API structure planning</li>
                    <li>• First working prototype</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
                  <Code className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-r-lg border-l-4 border-green-600 bg-green-50 p-6">
                  <h3 className="mb-3 text-gray-900">Week 3+: Development</h3>
                  <p className="mb-4 text-gray-600">
                    Iterative development in 2-week sprints with continuous feedback and deployment.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 2-week sprint cycles</li>
                    <li>• Weekly demos & feedback sessions</li>
                    <li>• Continuous integration & deployment</li>
                    <li>• Real-time progress tracking</li>
                    <li>• Direct architect access via Slack</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-white">
                  <Rocket className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-r-lg border-l-4 border-orange-600 bg-orange-50 p-6">
                  <h3 className="mb-3 text-gray-900">Launch & Support</h3>
                  <p className="mb-4 text-gray-600">
                    We ensure a smooth launch and provide ongoing support to keep your product
                    running flawlessly.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Production environment setup</li>
                    <li>• Deployment & launch</li>
                    <li>• 30-day warranty period</li>
                    <li>• Performance monitoring</li>
                    <li>• Optional ongoing maintenance plans</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-gray-900">Inside a 2-Week Sprint</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-2 text-blue-600">Day 1</div>
              <h3 className="mb-2 text-gray-900">Sprint Planning</h3>
              <p className="text-gray-600">
                Define goals, prioritize features, and establish success metrics for the sprint.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-2 text-green-600">Days 2-6</div>
              <h3 className="mb-2 text-gray-900">Development Phase 1</h3>
              <p className="text-gray-600">
                Build core features with daily commits and progress updates via Slack.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-2 text-purple-600">Day 7</div>
              <h3 className="mb-2 text-gray-900">Mid-Sprint Review</h3>
              <p className="text-gray-600">
                Demo progress, gather feedback, and adjust priorities if needed.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-2 text-orange-600">Days 8-13</div>
              <h3 className="mb-2 text-gray-900">Development Phase 2</h3>
              <p className="text-gray-600">
                Complete features, perform testing, and prepare for deployment.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md md:col-span-2 lg:col-span-1">
              <div className="mb-2 text-pink-600">Day 14</div>
              <h3 className="mb-2 text-gray-900">Sprint Demo</h3>
              <p className="text-gray-600">
                Present completed features and gather comprehensive feedback.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md md:col-span-2 lg:col-span-1">
              <div className="mb-2 text-indigo-600">Day 14</div>
              <h3 className="mb-2 text-gray-900">Deployment</h3>
              <p className="text-gray-600">
                Deploy to production or staging environment for testing.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md md:col-span-2">
              <div className="mb-2 text-teal-600">Continuous</div>
              <h3 className="mb-2 text-gray-900">Communication</h3>
              <p className="text-gray-600">
                24/7 Slack access, 4-hour response time guarantee, and weekly sync meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-gray-900">Full Transparency</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-gray-900">Code Access</h3>
              <p className="text-gray-600">
                Full repository access from day one. See every commit, every change, in real-time.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-gray-900">Time Tracking</h3>
              <p className="text-gray-600">
                Transparent time logs for every hour worked. Know exactly what you&apos;re paying
                for.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-gray-900">Progress Dashboard</h3>
              <p className="text-gray-600">
                Real-time project dashboard showing tasks, progress, and upcoming features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
              <Shield className="h-10 w-10" />
            </div>
            <h2 className="mb-4 text-white">Quality Assurance</h2>
            <p className="mx-auto max-w-3xl text-gray-300">
              Every line of code is reviewed, tested, and validated before deployment.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-white">Code Reviews</h3>
              <p className="text-gray-300">
                Every pull request reviewed by the solution architect before merging.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-white">Automated Testing</h3>
              <p className="text-gray-300">
                Unit tests, integration tests, and end-to-end testing for reliability.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-white">Security Audits</h3>
              <p className="text-gray-300">Regular security checks and vulnerability scanning.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-white">Performance Optimization</h3>
              <p className="text-gray-300">
                Load testing and optimization for speed and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-primary-foreground mb-6">Ready to Start Your Project?</h2>
          <p className="text-primary-foreground/90 mb-8">
            Book a free 30-minute consultation to discuss your requirements and see how our process
            can accelerate your product development.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">
              Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
