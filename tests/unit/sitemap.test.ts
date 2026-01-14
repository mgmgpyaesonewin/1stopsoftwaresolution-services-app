import { describe, it, expect } from 'vitest'
import sitemap from '@/app/sitemap'

describe('sitemap.ts', () => {
  it('should return an array of sitemap entries', () => {
    const result = sitemap()

    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
  })

  it('should include the home page with highest priority', () => {
    const result = sitemap()
    const homePage = result.find(
      entry => entry.url === 'https://www.1stopsoftwaresolution.services'
    )

    expect(homePage).toBeDefined()
    expect(homePage?.priority).toBe(1)
    expect(homePage?.changeFrequency).toBe('daily')
  })

  it('should include all main pages', () => {
    const result = sitemap()
    const urls = result.map(entry => entry.url)

    expect(urls).toContain('https://www.1stopsoftwaresolution.services')
    expect(urls).toContain('https://www.1stopsoftwaresolution.services/about')
    expect(urls).toContain('https://www.1stopsoftwaresolution.services/services')
    expect(urls).toContain('https://www.1stopsoftwaresolution.services/process')
    expect(urls).toContain('https://www.1stopsoftwaresolution.services/contact')
  })

  it('should have valid lastModified dates', () => {
    const result = sitemap()

    result.forEach(entry => {
      expect(entry.lastModified).toBeInstanceOf(Date)
    })
  })

  it('should have valid priority values between 0 and 1', () => {
    const result = sitemap()

    result.forEach(entry => {
      expect(entry.priority).toBeGreaterThanOrEqual(0)
      expect(entry.priority).toBeLessThanOrEqual(1)
    })
  })
})
