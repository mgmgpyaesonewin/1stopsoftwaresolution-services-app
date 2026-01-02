'use server'

import { Resend } from 'resend'
import { CONTACT_EMAIL, CTA_EMAIL } from '@/config/site'
import { AdminContactEmail } from '@/components/emails/admin-contact-email'
import { UserConfirmationEmail } from '@/components/emails/user-confirmation-email'
import { ReactNode } from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)
const SENDER_EMAIL = process.env.NODE_ENV === 'production' ? CTA_EMAIL : 'onboarding@resend.dev'
const ADMIN_EMAIL =
  process.env.NODE_ENV === 'production' ? CONTACT_EMAIL : process.env.RESEND_ACCOUNT_EMAIL || ''

export async function sendContactEmail(formData: {
  name: string
  email: string
  company?: string
  projectType: string
  budget?: string
  message: string
}) {
  try {
    const { name, email, company, projectType, budget, message } = formData

    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set')
    }

    // 1. Send notification to admin
    await resend.emails.send({
      from: `Contact Form <${SENDER_EMAIL}>`, // Update this to your verified domain in production
      to: ADMIN_EMAIL,
      subject: `New Inquiry: ${projectType} from ${name}`,
      react: AdminContactEmail({
        name,
        email,
        company,
        projectType,
        budget,
        message,
      }) as ReactNode,
    })

    // 2. Send confirmation to user
    await resend.emails.send({
      from: `1-Stop Software Solution Services <${SENDER_EMAIL}>`, // Update this to your verified domain in production
      to: email,
      subject: "We've received your message!",
      react: UserConfirmationEmail({ name }) as ReactNode,
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send message. Please try again later.' }
  }
}
