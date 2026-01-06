import { teamMembers } from '@/data/team'
import { TeamCard } from './team-card'

export function TeamSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Meet Your Direct Team</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            No middlemen. No account managers. Just experienced developers who will build your
            product from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamMembers.map(member => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
