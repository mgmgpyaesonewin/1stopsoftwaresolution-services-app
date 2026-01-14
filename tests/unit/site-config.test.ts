import { describe, it, expect } from 'vitest'
import { SITE_CONFIG, CONTACT_EMAIL, ADMIN_EMAIL, CTA_EMAIL } from '@/config/site'

describe('site.ts config', () => {
  describe('SITE_CONFIG', () => {
    it('should have a name property', () => {
      expect(SITE_CONFIG.name).toBe('1-Stop Software Solution Services')
    })

    it('should have a description property', () => {
      expect(SITE_CONFIG.description).toBeDefined()
      expect(typeof SITE_CONFIG.description).toBe('string')
    })

    it('should have a valid URL', () => {
      expect(SITE_CONFIG.url).toMatch(/^https?:\/\//)
    })

    it('should have an ogImage property', () => {
      expect(SITE_CONFIG.ogImage).toBeDefined()
    })

    it('should have links object with github and twitter', () => {
      expect(SITE_CONFIG.links).toHaveProperty('github')
      expect(SITE_CONFIG.links).toHaveProperty('twitter')
      expect(SITE_CONFIG.links.github).toContain('github.com')
      expect(SITE_CONFIG.links.twitter).toContain('twitter.com')
    })

    it('should have navigation items', () => {
      expect(Array.isArray(SITE_CONFIG.nav)).toBe(true)
      expect(SITE_CONFIG.nav.length).toBeGreaterThan(0)

      SITE_CONFIG.nav.forEach(item => {
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('href')
        expect(typeof item.title).toBe('string')
        expect(item.href).toMatch(/^\//)
      })
    })

    it('should include essential navigation pages', () => {
      const navTitles = SITE_CONFIG.nav.map(item => item.title)

      expect(navTitles).toContain('Home')
      expect(navTitles).toContain('Contact')
    })
  })

  describe('Email constants', () => {
    it('should have valid CONTACT_EMAIL', () => {
      expect(CONTACT_EMAIL).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    })

    it('should have valid ADMIN_EMAIL', () => {
      expect(ADMIN_EMAIL).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    })

    it('should have valid CTA_EMAIL', () => {
      expect(CTA_EMAIL).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    })
  })
})
