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
  headline?: string
  location?: string
  about?: string
  experience?: Experience[]
  education?: Education[]
  licenses_and_certifications?: Certification[]
}

export interface Experience {
  role: string
  company: string
  date?: string
  location?: string
  description?: string
  skills?: string[]
}

export interface Education {
  university: string
  degree: string
  date: string
  grade?: string
  activities?: string
}

export interface Certification {
  name: string
  issuer: string
  issued_date: string
  credential_id?: string
  skills?: string[]
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
