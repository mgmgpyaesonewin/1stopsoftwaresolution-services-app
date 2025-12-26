import { Zap, DollarSign, Users, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ValuePropSection() {
  const valueProps = [
    {
      icon: Zap,
      title: 'Direct Communication',
      description:
        'Talk directly to the solution architect. Real answers, no delays. Iterate in hours, not weeks.',
      bgColor: 'bg-blue-100 text-blue-600',
    },
    {
      icon: DollarSign,
      title: 'Reduced Costs',
      description:
        '60% lower cost than traditional agencies. No marketing overhead, every dollar goes into building.',
      bgColor: 'bg-green-100 text-green-600',
    },
    {
      icon: Users,
      title: 'Lean Team',
      description:
        '1 Solution Architect + 2 Full-Stack Developers. No middlemen, direct access to builders.',
      bgColor: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Shield,
      title: 'Full Ownership',
      description:
        'You always own 100% of the code with full repository access. No vendor lock-in.',
      bgColor: 'bg-orange-100 text-orange-600',
    },
  ]

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Unique Value Proposition</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Direct access to expert developers, transparent pricing, and results-driven development.
            No overhead, no middlemen, just great software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop, index) => (
            <Card
              key={index}
              className="border-0 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${prop.bgColor}`}
                  >
                    <prop.icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-foreground">{prop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{prop.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
