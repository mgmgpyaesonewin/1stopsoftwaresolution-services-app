export function StatsSection() {
  const stats = [
    { value: '60%', label: 'Lower Cost Than Traditional Agencies' },
    { value: '4 Hours', label: 'Maximum Response Time' },
    { value: '100%', label: 'Code Ownership' },
  ]

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-primary mb-2 text-4xl font-bold md:text-5xl">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
