interface PageHeroProps {
  title: string
  description: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="via-primary text-primary-foreground bg-gradient-to-br from-indigo-600 to-indigo-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-primary-foreground mb-6">{title}</h1>
        <p className="text-primary-foreground/90 max-w-3xl">{description}</p>
      </div>
    </section>
  )
}
