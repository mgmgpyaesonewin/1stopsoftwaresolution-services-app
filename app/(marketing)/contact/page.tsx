'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Clock, MapPin, Send, Calendar } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { PageHero } from '@/components/sections'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Script from 'next/script'
import { sendContactEmail } from './actions'

// Declare Calendly on window for TypeScript
declare global {
  interface Window {
    Calendly: any
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
        })
      } else {
        setError(result.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Error sending email:', err)
      setError('An unexpected error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev: typeof formData) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div>
      <PageHero
        title="Get in Touch"
        description="Ready to start your project? Schedule a free 30-minute consultation to discuss your idea, assess technical needs, and find right pricing model."
      />

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-foreground mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:architect@1stopsoftwaresolution.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      architect@1stopsoftwaresolution.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">Within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Remote-first</p>
                    <p className="text-muted-foreground">Timezone-friendly</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-foreground mb-1">After Project Start</h3>
                    <p className="text-muted-foreground">Direct Slack access</p>
                    <p className="text-muted-foreground">Real-time communication</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg border-2 border-blue-200 bg-blue-50 p-6 dark:bg-blue-950/30">
                <h3 className="text-foreground mb-2">Free Consultation Includes:</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Discuss your idea</li>
                  <li>• Technical feasibility assessment</li>
                  <li>• Timeline estimation</li>
                  <li>• Pricing model recommendation</li>
                  <li>• Architecture overview</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-8 shadow-md">
                <h2 className="text-foreground mb-6">Send us a Message</h2>

                {error && (
                  <div className="mb-6 rounded-lg border-2 border-red-200 bg-red-50 p-4 text-red-800">
                    {error}
                  </div>
                )}

                {submitted ? (
                  <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6 text-center text-green-800">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-green-900">Message Sent!</h3>
                    <p>Thank you for reaching out. We&apos;ll get back to you within 4 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="mt-2 h-11"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="mt-2 h-11"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company / Startup Name</Label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="mt-2 h-11"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <div className="mt-2">
                          <Select
                            value={formData.projectType}
                            onValueChange={value =>
                              setFormData({ ...formData, projectType: value })
                            }
                          >
                            <SelectTrigger id="projectType" className="w-full">
                              <SelectValue placeholder="Select a type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mvp">MVP Development</SelectItem>
                              <SelectItem value="saas">SaaS Platform</SelectItem>
                              <SelectItem value="ecommerce">E-commerce</SelectItem>
                              <SelectItem value="healthcare">Healthcare Tech</SelectItem>
                              <SelectItem value="fintech">FinTech</SelectItem>
                              <SelectItem value="internal">Internal Tools</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <div className="mt-2">
                          <Select
                            value={formData.budget}
                            onValueChange={value => setFormData({ ...formData, budget: value })}
                          >
                            <SelectTrigger id="budget" className="w-full">
                              <SelectValue placeholder="Select a range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-5k">Under $5,000</SelectItem>
                              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                              <SelectItem value="50k-plus">$50,000+</SelectItem>
                              <SelectItem value="equity">Equity Partnership</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Description *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us about your project, your goals, and any specific requirements..."
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-muted-foreground text-center">
                      We&apos;ll respond within 4 hours during business days
                    </p>
                  </form>
                )}
              </div>

              <div className="bg-card mt-8 rounded-lg border-2 border-dashed border-blue-200 p-8 shadow-md dark:border-blue-900/50">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h2 className="text-foreground mb-2">Or schedule a Google Meeting</h2>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Prefer a direct conversation? Book a 30-minute discovery call via Calendly at
                    your convenience.
                  </p>

                  {/* Calendly link widget */}
                  <link
                    href="https://assets.calendly.com/assets/external/widget.css"
                    rel="stylesheet"
                  />
                  <Script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    strategy="lazyOnload"
                  />

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30"
                    onClick={() => {
                      if (window.Calendly) {
                        window.Calendly.initPopupWidget({
                          url: 'https://calendly.com/pyaesonewin-dev/30min',
                        })
                      }
                    }}
                  >
                    Schedule time with me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-foreground mb-12 text-center">What Happens Next?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <div className="text-blue-600">1</div>
              </div>
              <h3 className="text-foreground mb-2">We Review Your Request</h3>
              <p className="text-muted-foreground">
                Our solution architect reviews your project details and prepares for the
                consultation.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <div className="text-green-600">2</div>
              </div>
              <h3 className="text-foreground mb-2">Schedule a Call</h3>
              <p className="text-muted-foreground">
                We&apos;ll send you a calendar link to book a 30-minute consultation at your
                convenience.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <div className="text-purple-600">3</div>
              </div>
              <h3 className="text-foreground mb-2">Get Your Proposal</h3>
              <p className="text-muted-foreground">
                After call, receive a detailed proposal with timeline, cost estimate, and next
                steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-foreground mb-6">Let&apos;s Build Something Great Together</h2>
              <p className="text-muted-foreground mb-4">
                Whether you&apos;re a startup with a bold vision or an established business looking
                to innovate, we&apos;re here to help you succeed.
              </p>
              <p className="text-muted-foreground mb-6">
                Our lean model means you get expert development at a fraction of cost, with direct
                access to the people building your product.
              </p>
              <div className="border-l-4 border-blue-600 bg-blue-50 p-4 dark:bg-blue-950/30">
                <p className="text-muted-foreground italic">
                  &quot;The only software house where you pay for code, not conferences.&quot;
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2NjY4Nzk4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Partnership"
                className="h-full w-full rounded-lg object-cover shadow-lg"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
