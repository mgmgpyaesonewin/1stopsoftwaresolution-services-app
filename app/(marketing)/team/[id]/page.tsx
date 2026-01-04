import {
  ArrowLeft,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
} from 'lucide-react'
import { teamMembers } from '@/data/team'
import { PageHero } from '@/components/sections/page-hero'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import Image from 'next/image'

interface TeamMemberPageProps {
  params: Promise<{ id: string }>
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { id } = await params
  const member = teamMembers.find(m => m.id === id)

  if (!member) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">Team Member Not Found</h1>
          <Link href="/team" className="text-primary hover:underline">
            Return to Team
          </Link>
        </div>
      </div>
    )
  }

  const data = member

  return (
    <div className="min-h-screen">
      <PageHero title={data.name} description={data.headline || data.role} />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/team"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Team
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          <aside className="lg:col-span-1">
            <div className="bg-card sticky top-24 overflow-hidden rounded-lg border shadow-lg">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h1 className="text-foreground mb-2 text-2xl font-bold">{data.name}</h1>
                <p className="text-primary mb-4 font-medium">{data.role}</p>

                <div className="mb-6 space-y-4">
                  <div className="text-muted-foreground flex items-start">
                    <Briefcase className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{data.shortBio}</span>
                  </div>

                  {data.education && data.education.length > 0 && (
                    <div className="text-muted-foreground flex items-start">
                      <GraduationCap className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">
                        {data.education[0].degree}, {data.education[0].university}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 border-t pt-6">
                  <a
                    href={`mailto:${data.email}`}
                    className="text-muted-foreground hover:text-primary flex items-center transition-colors"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    <span className="text-sm">{data.email}</span>
                  </a>
                  {data.linkedin && (
                    <a
                      href={data.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary flex items-center transition-colors"
                    >
                      <Linkedin className="mr-3 h-5 w-5" />
                      <span className="text-sm">{data.linkedin}</span>
                    </a>
                  )}
                  {data.github && (
                    <a
                      href={data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary flex items-center transition-colors"
                    >
                      <Github className="mr-3 h-5 w-5" />
                      <span className="text-sm">{data.github}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </aside>

          <main className="space-y-8 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {data.about || data.fullBio}
                </p>
              </CardContent>
            </Card>

            {data.experience && data.experience.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {data.experience.map((exp, index) => (
                      <div key={index} className="border-primary/20 border-l-2 pl-4">
                        <div className="mb-2 flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{exp.role}</h3>
                            <p className="text-primary text-sm font-medium">{exp.company}</p>
                          </div>
                          {(exp.date || exp.location) && (
                            <div className="text-muted-foreground text-right text-sm">
                              {exp.date && (
                                <div className="flex items-center justify-end">
                                  <Calendar className="mr-1 h-3 w-3" />
                                  {exp.date}
                                </div>
                              )}
                              {exp.location && (
                                <div className="mt-1 flex items-center justify-end">
                                  <MapPin className="mr-1 h-3 w-3" />
                                  {exp.location}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        {exp.description && (
                          <p className="text-muted-foreground mb-2 text-sm">{exp.description}</p>
                        )}
                        {exp.skills && exp.skills.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {exp.skills.map((skill: string, skillIndex: number) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {data.education && data.education.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.education.map((edu, index) => (
                      <div key={index} className="border-primary/20 border-l-2 pl-4">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-primary text-sm font-medium">{edu.university}</p>
                        {edu.date && (
                          <p className="text-muted-foreground mt-1 flex items-center text-sm">
                            <Calendar className="mr-1 h-3 w-3" />
                            {edu.date}
                          </p>
                        )}
                        {edu.grade && (
                          <p className="text-muted-foreground mt-1 flex items-center text-sm">
                            <Award className="mr-1 h-3 w-3" />
                            Grade: {edu.grade}
                          </p>
                        )}
                        {edu.activities && (
                          <p className="text-muted-foreground mt-1 text-sm">{edu.activities}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {data.licenses_and_certifications && data.licenses_and_certifications.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.licenses_and_certifications.map((cert, index) => (
                      <div key={index} className="border-border rounded-lg border p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="flex items-center font-semibold">
                              <CheckCircle2 className="text-primary mr-2 h-4 w-4" />
                              {cert.name}
                            </h3>
                            <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                            {cert.issued_date && (
                              <p className="text-muted-foreground mt-1 flex items-center text-xs">
                                <Calendar className="mr-1 h-3 w-3" />
                                {cert.issued_date}
                              </p>
                            )}
                          </div>
                          {cert.credential_id && (
                            <Badge variant="outline" className="text-xs">
                              {cert.credential_id}
                            </Badge>
                          )}
                        </div>
                        {cert.skills && cert.skills.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {cert.skills.map((skill: string, skillIndex: number) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {data.skills && data.skills.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill: string, index: number) => (
                      <Badge key={index} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="from-primary/10 to-primary/5 border-primary/20 bg-gradient-to-br">
              <CardContent className="p-8 text-center">
                <h3 className="mb-2 text-xl font-bold">Work with {data.name.split(' ')[0]}</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to bring your ideas to life? Let&apos;s discuss your project.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="shadow-lg">
                    Start a Conversation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}
