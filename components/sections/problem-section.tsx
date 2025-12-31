import Image from 'next/image'

export function ProblemSection() {
  const problems = [
    'Expensive overhead with layers of managers and sales teams',
    'Communication gaps between sales and developers',
    'Slow iteration due to long feedback loops',
    'Hidden costs where you pay for meetings, not code',
  ]

  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">The Problem We Solve</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Traditional software agencies suffer from inefficiencies that slow down your project
              and inflate costs:
            </p>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-destructive mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full" />
                  <span className="text-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-64 lg:h-96">
            <Image
              src="/illustrations/solve-solution.svg"
              alt="Solving business problems"
              className="h-full w-full object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
