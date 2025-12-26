'use client'

import { useState, useEffect, useRef } from 'react'

interface ScrollProgressProps {
  color?: string
  height?: number
  zIndex?: number
}

export function ScrollProgress({
  color = '#3b82f6',
  height = 3,
  zIndex = 50,
}: ScrollProgressProps) {
  const [width, setWidth] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollWidth = (scrollTop / docHeight) * 100
      setWidth(scrollWidth)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={scrollRef}
      className="fixed top-0 left-0 w-full transition-all duration-150 ease-out"
      style={{
        backgroundColor: color,
        height: `${height}px`,
        zIndex,
        width: `${width}%`,
      }}
    />
  )
}
