'use server'

import { serverInstance } from '@/lib/rollbar'

export async function triggerServerError() {
  try {
    throw new Error('Test Server Side Error for Rollbar')
  } catch (error) {
    if (error instanceof Error) {
      serverInstance.error(error)
    }
    throw error
  }
}
