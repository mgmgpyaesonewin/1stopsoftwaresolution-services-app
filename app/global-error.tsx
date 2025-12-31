'use client'

import { useEffect } from 'react'
import Rollbar from 'rollbar'
import { clientConfig } from '@/lib/rollbar'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to Rollbar
    if (process.env.NEXT_PUBLIC_ROLLBAR_CLIENT_TOKEN) {
      const rollbar = new Rollbar(clientConfig)
      rollbar.error(error)
    }
  }, [error])

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
