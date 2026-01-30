'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

function computeScrolled(scrollY: number, viewportHeight: number) {
  return scrollY > viewportHeight * 0.2;
}

export default function HeroAbout() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
    setScrolled(computeScrolled(window.scrollY, window.innerHeight));
    setIsSmallScreen(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrolled(computeScrolled(window.scrollY, window.innerHeight));
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed z-40 transition-opacity duration-500 ${
        scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${isSmallScreen ? 'left-6 right-6 top-1/2 -translate-y-1/2' : ''}`}
      style={isSmallScreen ? {} : {
        left: '55vw',
        top: 'calc(50vh - 180px)',
        maxWidth: '400px',
      }}
    >
      <h2
        className="text-3xl font-bold mb-6 text-[#101828] dark:text-white"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        About Me
      </h2>

      <div className="space-y-4 text-sm leading-relaxed text-[#101828]/80 dark:text-white/70">
        <p>
          I am an aspiring{' '}
          <span className="font-semibold text-[#101828] dark:text-white">
            full-stack developer
          </span>{' '}
          skilled in React, TypeScript, and modern CSS frameworks. I have recently completed my{' '}
          <span className="font-semibold text-[#101828] dark:text-white">
            Master of Information Technology
          </span>{' '}
          at Monash University.
        </p>

        <p>
          Previously, I worked as a{' '}
          <span className="font-semibold text-[#101828] dark:text-white">
            Senior Advertising Specialist
          </span>{' '}
          at{' '}
          <a
            href="https://fstln.io/en"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#101828] dark:hover:text-white transition-colors"
          >
            Fastlane
          </a>
          , where I gained deep experience in digital marketing and user analytics.
        </p>

        <div className="mt-6">
          <a
            href="/cv/ellie-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[#101828] dark:text-white hover:underline transition-all text-sm"
          >
            View Full Résumé
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
