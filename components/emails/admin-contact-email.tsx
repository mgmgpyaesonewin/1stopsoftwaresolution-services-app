import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'

interface AdminContactEmailProps {
  name: string
  email: string
  company?: string
  projectType: string
  budget?: string
  message: string
}

export const AdminContactEmail = ({
  name,
  email,
  company,
  projectType,
  budget,
  message,
}: AdminContactEmailProps) => {
  const previewText = `New project inquiry from ${name}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-5 pb-12">
            <Heading className="text-xl font-bold text-gray-900">New Project Inquiry</Heading>
            <Section className="mt-6">
              <Text className="text-gray-700">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-gray-700">
                <strong>Email:</strong> {email}
              </Text>
              {company && (
                <Text className="text-gray-700">
                  <strong>Company:</strong> {company}
                </Text>
              )}
              <Text className="text-gray-700">
                <strong>Project Type:</strong> {projectType}
              </Text>
              {budget && (
                <Text className="text-gray-700">
                  <strong>Budget Range:</strong> {budget}
                </Text>
              )}
            </Section>
            <Hr className="my-6 border-gray-300" />
            <Section>
              <Heading as="h3" className="text-lg font-semibold text-gray-900">
                Message:
              </Heading>
              <Text className="whitespace-pre-wrap text-gray-700">{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default AdminContactEmail
