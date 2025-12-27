import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { teamMembers } from '@/data/team'
import { type TeamMember } from '@/types'

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

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Link href={`/team/${member.id}`}>
      <Card className="group h-full cursor-pointer overflow-hidden border-0 shadow-md transition-all hover:shadow-xl">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-foreground">{member.name}</CardTitle>
          <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{member.shortBio}</p>
        </CardContent>
        <CardFooter>
          <div className="text-primary group-hover:text-primary/80 flex items-center">
            <span className="text-sm font-medium">View Full Profile</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
