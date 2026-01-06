'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { type TeamMember } from '@/types'

export function TeamCard({ member }: { member: TeamMember }) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/team/${member.id}`)
  }

  return (
    <Card
      className="group h-full cursor-pointer overflow-hidden border-0 shadow-md transition-all hover:shadow-xl"
      onClick={handleCardClick}
    >
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
        <div className="mt-3 flex gap-4">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              onClick={e => e.stopPropagation()}
              className="hover:text-primary bg-primary/75 rounded-full p-2 text-white shadow-md transition-colors hover:bg-white"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="hover:text-primary bg-primary/75 rounded-full p-2 text-white shadow-md transition-colors hover:bg-white"
              aria-label={`${member.name}'s GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="hover:text-primary bg-primary/75 rounded-full p-2 text-white shadow-md transition-colors hover:bg-white"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
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
  )
}
