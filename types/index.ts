export interface TeamMember {
  id: string
  name: string
  role: string
  shortBio: string
  fullBio: string
  image: string
  skills: string[]
  email: string
  linkedin?: string
  github?: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
  ctaLink: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  details: string[]
}
