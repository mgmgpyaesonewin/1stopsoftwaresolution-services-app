import { describe, it, expect } from 'vitest'
import robots from '@/app/robots'

describe('robots.ts', () => {
  it('should return valid robots configuration', () => {
    const result = robots()

    expect(result).toHaveProperty('rules')
    expect(result).toHaveProperty('sitemap')
  })

  it('should allow all user agents to crawl root', () => {
    const result = robots()

    expect(result.rules).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userAgent: '*',
          allow: '/',
        }),
      ])
    )
  })

  it('should disallow crawling of api, _next, and private paths', () => {
    const result = robots()
    const rule = Array.isArray(result.rules) ? result.rules[0] : result.rules

    expect(rule.disallow).toContain('/api/')
    expect(rule.disallow).toContain('/_next/')
    expect(rule.disallow).toContain('/private/')
  })

  it('should include sitemap URL', () => {
    const result = robots()

    expect(result.sitemap).toBe('https://www.1stopsoftwaresolution.services/sitemap.xml')
  })
})
