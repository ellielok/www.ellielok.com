'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';

function computeScrolled(scrollY: number, viewportHeight: number) {
  return scrollY > viewportHeight * 0.2;
}

type ScreenSize = 'sm' | 'md' | 'xl';

function getScreenSize(width: number): ScreenSize {
  if (width < 768) return 'sm';
  if (width < 1280) return 'md';
  return 'xl';
}

export default function HeroAbout() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [screenSize, setScreenSize] = useState<ScreenSize>('md');

  useLayoutEffect(() => {
    setMounted(true);
    setScrolled(computeScrolled(window.scrollY, window.innerHeight));
    setScreenSize(getScreenSize(window.innerWidth));
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrolled(computeScrolled(window.scrollY, window.innerHeight));
    };

    const handleResize = () => {
      setScreenSize(getScreenSize(window.innerWidth));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [mounted]);

  if (!mounted) return null;

  const isSmallScreen = screenSize === 'sm';
  const isXlScreen = screenSize === 'xl';

  return (
    <div
      id="about"
      className={`fixed z-40 transition-opacity duration-500 ${
        scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${isSmallScreen ? 'left-6 right-6 top-1/2 -translate-y-1/2' : ''}`}
      style={isSmallScreen ? {} : {
        right: isXlScreen ? '15vw' : '10vw',
        top: 'calc(50vh - 200px)',
        width: isXlScreen
          ? 'calc((100vw - 30vw - 6vw) * 2 / 3)' // xl: 15vw margins, 2/3 of available space
          : 'calc((100vw - 20vw - 6vw) * 2 / 3)', // md: 10vw margins, 2/3 of available space
      }}
    >
      {/* Header with name and photo */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h2
            className={`font-bold text-[#101828] dark:text-white ${isXlScreen ? 'text-5xl' : 'text-4xl'}`}
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Hi, I'm Ellie Lok
          </h2>
          <p className={`text-[#101828]/60 dark:text-white/60 font-medium mt-2 ${isXlScreen ? 'text-xl' : 'text-lg'}`}>
            Full-stack Developer | Digital Marketing
          </p>
        </div>
        <div className={`relative rounded-full overflow-hidden flex-shrink-0 mx-14 ${isXlScreen ? 'w-40 h-40' : 'w-30 h-30'}`}>
          <Image
            src="/images/profile.png"
            alt="Ellie Lok"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className={`space-y-4 leading-relaxed text-[#101828]/80 dark:text-white/70 ${isXlScreen ? 'text-lg' : 'text-base'}`}>
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
            className={`inline-flex items-center gap-2 font-semibold text-[#101828] dark:text-white hover:underline transition-all ${isXlScreen ? 'text-lg' : 'text-base'}`}
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
