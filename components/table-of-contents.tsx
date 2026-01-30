'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

interface TOCItem {
  title: string;
  roman: string;
  href: string;
}

const tocItems: TOCItem[] = [
  { title: 'About', roman: 'I', href: '#about' },
  { title: 'Skills', roman: 'II', href: '#skills' },
  { title: 'Experience', roman: 'III', href: '#experience' },
  { title: 'Projects', roman: 'IV', href: '#projects' },
  { title: 'Snapshots', roman: 'V', href: '#snapshots' },
  { title: 'Connect', roman: 'VI', href: '#connect' },
];

function computeScrolled(scrollY: number, viewportHeight: number) {
  return scrollY > viewportHeight * 0.2;
}

type ScreenSize = 'sm' | 'md' | 'xl';

function getScreenSize(width: number): ScreenSize {
  if (width < 768) return 'sm';
  if (width < 1280) return 'md';
  return 'xl';
}

export default function TableOfContents() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [screenSize, setScreenSize] = useState<ScreenSize>('md');

  const isSmallScreen = screenSize === 'sm';
  const isXlScreen = screenSize === 'xl';

  // Border box configuration - adjust these values to reposition everything
  const BORDER_LEFT = isXlScreen ? '20vw' : '12vw';
  const BORDER_TOP = 'calc(50vh - 200px)';
  const BORDER_WIDTH = isXlScreen ? '350px' : 'min(300px, 30vw)';
  const BORDER_HEIGHT = '400px';
  const CONTENT_PADDING = '1.5rem';

  // Run before paint on the client to avoid showing the wrong layout.
  useLayoutEffect(() => {
    setMounted(true);
    setScrolled(computeScrolled(window.scrollY, window.innerHeight));
    setScreenSize(getScreenSize(window.innerWidth));
  }, []);

  // Listen for window resize to update screen size
  useEffect(() => {
    if (!mounted) return;

    const handleResize = () => {
      setScreenSize(getScreenSize(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrolled(computeScrolled(window.scrollY, window.innerHeight));

      // Check if scrolled to bottom to activate Connect section
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight - scrollTop - clientHeight < 100) {
        setActiveSection('connect');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  // Detect active section using IntersectionObserver
  useEffect(() => {
    if (!mounted) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections except Connect (Connect is handled by bottom detection)
    tocItems.filter(item => item.href !== '#connect').forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [mounted]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Avoid hydration mismatch and avoid flashing the "top" layout.
  // This component is fixed-position UI, so deferring render is usually safe.
  if (!mounted) return null;

  return (
    <>
      {/* Border Frame - fades out when scrolled */}
      <div
        className={`fixed z-50 pointer-events-none transition-opacity duration-300 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          display: isSmallScreen ? 'none' : 'block',
          left: BORDER_LEFT,
          top: BORDER_TOP,
        }}
      >
        <div
          className="relative border-1 border-[#101828]/60 dark:border-white/40 pointer-events-none"
          style={{
            width: BORDER_WIDTH,
            height: BORDER_HEIGHT,
          }}
        />
      </div>

      {/* Edition Title - moves to top left */}
      <div
        className={`fixed z-50 pointer-events-auto transition-all duration-300 ease-out
                   ${scrolled ? 'top-20 left-5 xl:left-1/15' : ''}`}
        style={{
          display: isSmallScreen ? 'none' : 'block',

          left: scrolled
            ? undefined
            : `calc(${BORDER_LEFT} + ${CONTENT_PADDING})`,
          top: scrolled
            ? undefined
            : `calc(${BORDER_TOP} + ${CONTENT_PADDING})`,
        }}
      >
        <h1
          className={`font-bold text-[#101828] dark:text-white leading-tight transition-all duration-300 ${
            scrolled ? 'text-base' : (isXlScreen ? 'text-xl' : 'text-lg')
          }`}
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          The
          <br />
          <span className="italic">Art Nouveau</span> <br />
          Edition
        </h1>
      </div>

      {/* Description - fades out when scrolled */}
      <div
        className={`fixed z-50 transition-all duration-300 ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          display: isSmallScreen ? 'none' : 'block',

          left: `calc(${BORDER_LEFT} + ${CONTENT_PADDING})`,
          top: `calc(${BORDER_TOP} + 120px)`,
        }}
      >
        <div
          className={`text-[#101828] dark:text-white font-light leading-relaxed ${isXlScreen ? 'text-sm' : 'text-xs'}`}
          style={{ maxWidth: isXlScreen ? '302px' : 'min(252px, calc(30vw - 3rem))', fontFamily: 'var(--font-playfair)' }}
        >
          This is the personal site of Ellie L.
          <br />
          A collection of projects, writing, and snapshots,
          <br />
          serving as a portfolio and living resume.
        </div>
      </div>

      {/* TOC List - each item moves independently with stagger */}
      <div className="fixed z-50 pointer-events-auto">
        <nav>
          <ul className="space-y-0">
            {tocItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
              <li
                key={item.roman}
                className={`flex items-center justify-between ${
                  scrolled
                    ? 'left-5 xl:left-1/15'
                    : ''
                }`}
                style={{
                  display: isSmallScreen ? 'none' : 'flex',
                  position: 'fixed',
                  left: scrolled
                    ? undefined
                    : `calc(${BORDER_LEFT} + ${CONTENT_PADDING})`,
                  bottom: scrolled
                    ? `calc(2rem + ${(tocItems.length - 1 - index) * 1.5}rem)`
                    : `calc(${BORDER_TOP} + ${CONTENT_PADDING} + ${
                        (tocItems.length - 1 - index) * 1.5
                      }rem)`,
                  transition: `all 0.7s ease-out ${index * 120}ms`,
                  width: scrolled ? '120px' : (isXlScreen ? '302px' : 'min(252px, calc(30vw - 3rem))'),
                  opacity: scrolled ? (isActive ? 1 : 0.4) : 1,
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-[#101828] dark:text-white font-semibold hover:opacity-70 transition-opacity cursor-pointer leading-relaxed ${isXlScreen ? 'text-base' : 'text-sm'}`}
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.title}
                </a>
                {scrolled && isActive && (
                  <div className="flex-1 mx-1 border-b border-dotted border-[#101828] dark:border-white max-w-[30px]" />
                )}
                <span
                  className={`text-[#101828] dark:text-white font-serif leading-relaxed ${isXlScreen ? 'text-sm' : 'text-xs'}`}
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.roman}
                </span>
              </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
