import Link from 'next/link'
import { Check, Clock, TrendingUp, Handshake, DollarSign, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pricingPlans } from '@/data/pricing'
import { PageHero } from '@/components/sections'

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        title="Flexible Pricing Models"
        description="Choose the pricing model that fits your needs. All options include direct architect access, full code ownership, and our quality guarantee."
      />

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {pricingPlans.map(plan => (
              <div
                key={plan.id}
                className={`overflow-hidden rounded-lg bg-white shadow-lg ${
                  plan.highlighted ? 'border-2 border-green-500' : ''
                }`}
              >
                <div
                  className={`p-6 text-white ${
                    plan.id === 'value-based-subscription'
                      ? 'bg-blue-600'
                      : plan.id === 'profit-sharing'
                        ? 'bg-green-600'
                        : plan.id === 'outcome-based'
                          ? 'bg-purple-600'
                          : 'bg-orange-600'
                  }`}
                >
                  <div className="mb-2 flex items-center">
                    {plan.id === 'value-based-subscription' && <Clock className="mr-2 h-6 w-6" />}
                    {plan.id === 'profit-sharing' && <Handshake className="mr-2 h-6 w-6" />}
                    {plan.id === 'outcome-based' && <TrendingUp className="mr-2 h-6 w-6" />}
                    {plan.id === 'developer-as-service' && <DollarSign className="mr-2 h-6 w-6" />}
                    <h3 className="text-white">{plan.name}</h3>
                  </div>
                  <p
                    className={
                      plan.id === 'value-based-subscription'
                        ? 'text-blue-100'
                        : plan.id === 'profit-sharing'
                          ? 'text-green-100'
                          : plan.id === 'outcome-based'
                            ? 'text-purple-100'
                            : 'text-orange-100'
                    }
                  >
                    {plan.description}
                  </p>
                </div>
                <div className="p-6">
                  <div className="mb-6 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check
                          className={`mt-0.5 mr-3 h-5 w-5 flex-shrink-0 ${
                            plan.id === 'value-based-subscription'
                              ? 'text-blue-600'
                              : plan.id === 'profit-sharing'
                                ? 'text-green-600'
                                : plan.id === 'outcome-based'
                                  ? 'text-purple-600'
                                  : 'text-orange-600'
                          }`}
                        />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {plan.id === 'profit-sharing' && (
                    <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                      <p className="text-green-800">
                        Perfect for early-stage startups with high potential
                      </p>
                    </div>
                  )}
                  {plan.id === 'outcome-based' && (
                    <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                      <p className="text-purple-800">Completely risk-free for clients</p>
                    </div>
                  )}
                  {plan.id === 'developer-as-service' && (
                    <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
                      <p className="text-orange-800">Great for ongoing support and maintenance</p>
                    </div>
                  )}
                  {plan.id === 'value-based-subscription' && (
                    <div className="rounded-lg bg-gray-50 p-4">
                      <p className="text-gray-600">✓ Pause or cancel anytime</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-gray-900">Quick Start Packages</h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8">
              <h3 className="mb-4 text-gray-900">MVP Launchpad</h3>
              <div className="mb-4">
                <div className="mb-2 text-gray-900">$1,000 one-time + $500/month</div>
                <p className="text-gray-600">4 weeks to MVP, production-ready</p>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Discovery & architecture</li>
                <li>• Core features development</li>
                <li>• Production deployment</li>
                <li>• 30-day support included</li>
              </ul>
            </div>

            <div className="rounded-lg border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-8">
              <h3 className="mb-4 text-gray-900">Product Accelerator</h3>
              <div className="mb-4">
                <div className="mb-2 text-gray-900">$2,000/month minimum</div>
                <p className="text-gray-600">Add features as needed, pause anytime</p>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Continuous feature development</li>
                <li>• Weekly demos & iterations</li>
                <li>• Full transparency & tracking</li>
                <li>• Pause or cancel flexibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-white">Our Guarantee</h2>
          <div className="rounded-lg border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-white">If it doesn&apos;t work as agreed:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• We fix it for free, or</li>
                  <li>• Refund 100% of that sprint</li>
                </ul>
              </div>
              <div className="border-t border-white/20 pt-6">
                <h3 className="mb-3 text-white">Code Ownership:</h3>
                <p className="text-gray-300">
                  You always own 100% of the code with full repository access from day one. No
                  vendor lock-in, no hidden terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-primary-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-primary-foreground/90 mb-8">
            Schedule a free 30-minute consultation to discuss your idea, assess technical needs, and
            find the perfect pricing model.
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
