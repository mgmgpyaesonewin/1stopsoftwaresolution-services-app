import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useIsMobile } from '@/hooks/use-mobile'

describe('useIsMobile hook', () => {
  const originalMatchMedia = window.matchMedia
  const originalInnerWidth = window.innerWidth
  let mockAddEventListener: ReturnType<typeof vi.fn>
  let mockRemoveEventListener: ReturnType<typeof vi.fn>

  beforeEach(() => {
    mockAddEventListener = vi.fn()
    mockRemoveEventListener = vi.fn()
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    })
  })

  const mockMatchMedia = (matches: boolean) => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: mockAddEventListener,
      removeEventListener: mockRemoveEventListener,
      dispatchEvent: vi.fn(),
    }))
  }

  const setWindowWidth = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    })
  }

  it('should return true when window width is less than 768px', () => {
    setWindowWidth(500)
    mockMatchMedia(true)

    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(true)
  })

  it('should return false when window width is 768px or more', () => {
    setWindowWidth(1024)
    mockMatchMedia(false)

    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(false)
  })

  it('should add event listener on mount', () => {
    setWindowWidth(1024)
    mockMatchMedia(false)

    renderHook(() => useIsMobile())

    expect(mockAddEventListener).toHaveBeenCalledWith('change', expect.any(Function))
  })

  it('should remove event listener on unmount', () => {
    setWindowWidth(1024)
    mockMatchMedia(false)

    const { unmount } = renderHook(() => useIsMobile())
    unmount()

    expect(mockRemoveEventListener).toHaveBeenCalledWith('change', expect.any(Function))
  })

  it('should update value when window is resized', () => {
    setWindowWidth(1024)
    mockMatchMedia(false)

    let changeHandler: () => void = () => {}
    mockAddEventListener.mockImplementation((event: string, handler: () => void) => {
      if (event === 'change') {
        changeHandler = handler
      }
    })

    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(false)

    act(() => {
      setWindowWidth(500)
      changeHandler()
    })

    expect(result.current).toBe(true)
  })
})
