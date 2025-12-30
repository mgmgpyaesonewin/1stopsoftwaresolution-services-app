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
  Link,
} from '@react-email/components'

interface UserConfirmationEmailProps {
  name: string
}

export const UserConfirmationEmail = ({ name }: UserConfirmationEmailProps) => {
  const previewText = `We've received your message, ${name}!`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-5 pb-12">
            <Heading className="text-xl font-bold text-gray-900">Message Received</Heading>
            <Section className="mt-6">
              <Text className="text-gray-700">Hi {name},</Text>
              <Text className="text-gray-700">
                Thank you for reaching out to <strong>1-Stop Software Solution Services</strong>.
                We&apos;ve received your project inquiry and our team is already reviewing it.
              </Text>
              <Text className="text-gray-700">
                You can expect to hear from us within the next <strong>4 business hours</strong>.
              </Text>
              <Text className="text-gray-700">
                In the meantime, feel free to check out our{' '}
                <Link
                  href="https://1stopsoftwaresolution.com/services"
                  className="text-blue-600 underline"
                >
                  Services
                </Link>{' '}
                or{' '}
                <Link
                  href="https://1stopsoftwaresolution.com/process"
                  className="text-blue-600 underline"
                >
                  Process
                </Link>{' '}
                pages to learn more about how we work.
              </Text>
            </Section>
            <Hr className="my-6 border-gray-300" />
            <Section>
              <Text className="text-sm text-gray-500">
                Lean, Fast, Direct - Custom software development with transparent pricing and direct
                access to developers.
              </Text>
              <Text className="text-sm text-gray-500">
                <Link href="https://1stopsoftwaresolution.com" className="text-gray-500 underline">
                  1stopsoftwaresolution.com
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default UserConfirmationEmail
