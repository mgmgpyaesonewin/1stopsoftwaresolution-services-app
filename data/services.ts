import { type Service } from '@/types'

export const services: Service[] = [
  {
    id: 'mvp-development',
    title: 'MVP Development',
    description: 'From idea to product in weeks, not months',
    icon: 'Rocket',
    details: [
      'Product ideation and validation',
      'Rapid prototyping',
      'Core feature development',
      'User testing and feedback',
      'Production deployment',
    ],
  },
  {
    id: 'product-iteration',
    title: 'Product Iteration',
    description: 'Continuous improvement based on user feedback',
    icon: 'RefreshCw',
    details: [
      'Feature planning and prioritization',
      'Performance optimization',
      'UI/UX improvements',
      'Technical debt reduction',
      'Scalability enhancements',
    ],
  },
  {
    id: 'system-architecture',
    title: 'System Architecture',
    description: 'Design robust, scalable systems from day one',
    icon: 'Server',
    details: [
      'Technology stack selection',
      'Database design',
      'API architecture',
      'Infrastructure planning',
      'Security considerations',
    ],
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Expert guidance for your engineering team',
    icon: 'Brain',
    details: [
      'Code reviews',
      'Architecture assessments',
      'Performance audits',
      'Best practices guidance',
      'Team training',
    ],
  },
]
