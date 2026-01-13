'use client'

/**
 * Global error boundary component for handling unhandled errors in the application.
 * This component is rendered when an error occurs at the root level.
 * @param props - Component props
 * @param props.error - The error object that was thrown
 * @param props.reset - Function to reset the error boundary and retry rendering
 * @returns A fallback UI with an option to retry
 */
export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
