'use client'

import { useEffect, useLayoutEffect, useState } from 'react'

interface TOCItem {
  title: string
  roman: string
  href: string
}

const tocItems: TOCItem[] = [
  { title: 'About', roman: 'I', href: '#about' },
  { title: 'Skills', roman: 'II', href: '#skills' },
  { title: 'Experience', roman: 'III', href: '#experience' },
  { title: 'Projects', roman: 'IV', href: '#projects' },
]

function computeScrolled(scrollY: number, viewportHeight: number) {
  return scrollY > viewportHeight * 0.2
}

export default function TableOfContents() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Border box configuration - adjust these values to reposition everything
  const BORDER_LEFT = '26vw'
  const BORDER_TOP = 'calc(50vh - 200px)'
  const BORDER_WIDTH = '300px'
  const BORDER_HEIGHT = '400px'
  const CONTENT_PADDING = '1.5rem'

  // Run before paint on the client to avoid showing the wrong layout.
  useLayoutEffect(() => {
    setMounted(true)
    setScrolled(computeScrolled(window.scrollY, window.innerHeight))
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      setScrolled(computeScrolled(window.scrollY, window.innerHeight))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  // Avoid hydration mismatch and avoid flashing the "top" layout.
  // This component is fixed-position UI, so deferring render is usually safe.
  if (!mounted) return null

  return (
    <>
      {/* Border Frame - fades out when scrolled */}
      <div
        className={`fixed z-10 pointer-events-none transition-opacity duration-700 ${scrolled ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: BORDER_LEFT,
          top: BORDER_TOP,
        }}
      >
        <div
          className="relative border border-black/60 dark:border-white/40 pointer-events-none"
          style={{
            width: BORDER_WIDTH,
            height: BORDER_HEIGHT,
          }}
        />
      </div>

      {/* Edition Title - moves to top left */}
      <div
        className={`fixed z-50 pointer-events-auto transition-all duration-700 ease-out ${scrolled ? 'top-20 left-5 xl:left-1/15' : ''}`}
        style={{
          left: scrolled ? undefined : `calc(${BORDER_LEFT} + ${CONTENT_PADDING})`,
          top: scrolled ? undefined : `calc(${BORDER_TOP} + ${CONTENT_PADDING})`,
        }}
      >
        <h1 className={`font-bold text-black dark:text-white leading-tight transition-all duration-700 ${scrolled ? 'text-base' : 'text-lg'}`}>
          The<br />
          <span className="italic">Art</span>Nouveau<br />
          Edition
        </h1>
      </div>

      {/* Description - fades out when scrolled */}
      <div
        className={`fixed z-30 transition-all duration-700 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{
          left: `calc(${BORDER_LEFT} + ${CONTENT_PADDING})`,
          top: `calc(${BORDER_TOP} + 160px)`,
        }}
      >
        <div className="text-black dark:text-white text-xs font-light leading-relaxed">
          A new portfolio experience.<br />
          Built with modern web technologies.
        </div>
      </div>

      {/* TOC List - each item moves independently with stagger */}
      <div className="fixed z-30 pointer-events-auto">
        <nav>
          <ul className="space-y-0">
            {tocItems.map((item, index) => (
              <li
                key={item.roman}
                className={`flex items-center gap-8 ${scrolled ? 'justify-between left-5 xl:left-1/15' : 'justify-start'}`}
                style={{
                  position: 'fixed',
                  left: scrolled ? undefined : `calc(${BORDER_LEFT} + ${CONTENT_PADDING})`,
                  bottom: scrolled
                    ? `calc(2rem + ${(tocItems.length - 1 - index) * 1.5}rem)`
                    : `calc(${BORDER_TOP} + ${CONTENT_PADDING} + ${(tocItems.length - 1 - index) * 1.5}rem)`,
                  transition: `all 0.7s ease-out ${index * 120}ms`,
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-black dark:text-white text-sm font-semibold hover:opacity-70 transition-opacity cursor-pointer leading-relaxed"
                >
                  {item.title}
                </a>
                <span className="text-black dark:text-white text-xs font-serif leading-relaxed">
                  {item.roman}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
