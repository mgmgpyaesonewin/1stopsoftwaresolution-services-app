'use client'

import { useEffect } from 'react'
import Rollbar from 'rollbar'
import { clientConfig } from '@/lib/rollbar'

export function RollbarProvider() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ROLLBAR_CLIENT_TOKEN) {
      new Rollbar(clientConfig)
    }
  }, [])

  return null
}
