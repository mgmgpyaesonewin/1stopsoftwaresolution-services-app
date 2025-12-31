'use client'

import { useState } from 'react'
import { triggerServerError } from './actions'

export default function ErrorTestPage() {
  const [error, setError] = useState(false)

  if (error) {
    throw new Error('Test Client Side Error for Rollbar')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Rollbar Error Test</h1>

      <button
        onClick={() => setError(true)}
        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Trigger Client Error
      </button>

      <form action={triggerServerError}>
        <button
          type="submit"
          className="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
        >
          Trigger Server Action Error
        </button>
      </form>
    </div>
  )
}
