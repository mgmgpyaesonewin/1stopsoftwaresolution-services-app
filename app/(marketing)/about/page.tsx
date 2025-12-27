import { CheckCircle, Target, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <div>
      <section className="via-primary text-primary-foreground bg-gradient-to-br from-indigo-600 to-indigo-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-primary-foreground mb-6">About Our Lean Model</h1>
          <p className="text-primary-foreground/90 max-w-3xl">
            We&apos;ve reimagined software development to eliminate waste, reduce costs, and deliver
            faster results through direct collaboration.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-gray-900">Our Solution: The Lean Model</h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              A streamlined approach to software development that puts you in direct contact with
              the people building your product.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-gray-900">Team Structure</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 bg-blue-50 p-6">
                  <h4 className="mb-2 text-gray-900">1 Solution Architect</h4>
                  <p className="text-gray-600">
                    Your direct technical partner who understands both technology and business.
                    Available for all major decisions and technical discussions.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 bg-green-50 p-6">
                  <h4 className="mb-2 text-gray-900">2 Full-Stack Developers</h4>
                  <p className="text-gray-600">
                    Experienced developers who handle end-to-end delivery. They work on both
                    frontend and backend, ensuring seamless integration.
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 bg-purple-50 p-6">
                  <h4 className="mb-2 text-gray-900">No Middlemen</h4>
                  <p className="text-gray-600">
                    Direct access to the people building your product. No account managers, no
                    project coordinators, just builders.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/illustrations/programming.svg"
                alt="Programming illustration"
                className="h-full w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-gray-900">The 1-Stop Advantage</h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-gray-900">Direct Communication</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-gray-600">Talk directly to the solution architect</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-gray-600">Real answers, no delays</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-gray-600">Iterate in hours, not weeks</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-gray-900">Reduced Costs</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-gray-600">No marketing or sales overhead</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-gray-600">No account managers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-gray-600">
                    Every dollar goes into building your product
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-gray-900">What Makes Us Different</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-8">
              <h3 className="mb-4 text-gray-900">Marketing-Free Zone</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• No sales pitches or brochures</li>
                <li>• Just working software</li>
                <li>• Our work is our marketing</li>
              </ul>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-8">
              <h3 className="mb-4 text-gray-900">Architect Direct Guarantee</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Response within 4 hours</li>
                <li>• Architect in every meeting</li>
                <li>• No junior developers learning on your budget</li>
                <li>• Technical decisions explained in business terms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-gray-900">Our Specialization</h2>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-gray-900">Industries</h3>
              <div className="space-y-3">
                <div className="rounded-lg border-l-4 border-blue-600 bg-white p-4 shadow-sm">
                  <p className="text-gray-900">Healthcare Tech</p>
                </div>
                <div className="rounded-lg border-l-4 border-green-600 bg-white p-4 shadow-sm">
                  <p className="text-gray-900">E-commerce</p>
                </div>
                <div className="rounded-lg border-l-4 border-purple-600 bg-white p-4 shadow-sm">
                  <p className="text-gray-900">FinTech</p>
                </div>
                <div className="rounded-lg border-l-4 border-orange-600 bg-white p-4 shadow-sm">
                  <p className="text-gray-900">SaaS Platforms</p>
                </div>
                <div className="rounded-lg border-l-4 border-pink-600 bg-white p-4 shadow-sm">
                  <p className="text-gray-900">Internal Tools</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-gray-900">Technologies</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <p className="mb-2 text-gray-700">Frontend</p>
                  <p className="text-gray-600">React, Next.js, Vue, TypeScript</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <p className="mb-2 text-gray-700">Backend</p>
                  <p className="text-gray-600">Node.js, Python, Go</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <p className="mb-2 text-gray-700">Databases</p>
                  <p className="text-gray-600">PostgreSQL, MongoDB</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <p className="mb-2 text-gray-700">Cloud & DevOps</p>
                  <p className="text-gray-600">AWS, Docker, CI/CD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary-foreground mb-12 text-center">Why Clients Choose Us</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="bg-primary-foreground/20 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-primary-foreground mb-2">Faster Time-to-Market</h3>
              <p className="text-primary-foreground/80">
                Launch your product weeks faster with our streamlined process
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-foreground/20 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-primary-foreground mb-2">Full Transparency</h3>
              <p className="text-primary-foreground/80">
                Access to code, commits, and time tracking at all times
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-foreground/20 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-primary-foreground mb-2">60% Lower Cost</h3>
              <p className="text-primary-foreground/80">
                Save significantly compared to traditional agencies
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-foreground/20 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-primary-foreground mb-2">Low Risk</h3>
              <p className="text-primary-foreground/80">
                Pause anytime, pay only for working features
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-foreground/20 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-primary-foreground mb-2">You Own the Code</h3>
              <p className="text-primary-foreground/80">
                100% code ownership with full repository access
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-foreground/20 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-primary-foreground mb-2">Quality Guarantee</h3>
              <p className="text-primary-foreground/80">
                We fix issues for free or refund 100% of that sprint
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
