'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroScaleProps {
  children?: React.ReactNode;
}

export default function HeroScale({ children }: HeroScaleProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      // Calculate progress: 0 at top, 1 when scrolled 2.5 viewport heights
      const progress = Math.min(scrolled / (viewportHeight * 2.5), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scale from 2 to 1
  const scale = 1 + scrollProgress;

  // Girl scale: grow from 1 to 2 as we scroll
  const girlScale = 2 - scrollProgress * 0.3

  return (
    <>
      {/* Hero Section with scaling background */}
      <section
        className="hero min-h-screen bg-cover bg-center bg-no-repeat flex items-end justify-center fixed top-0 left-0 w-full bg-[url('/images/bg-light.png')] dark:bg-[url('/images/bg-dark.png')] origin-center"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.2s linear',
        }}
      >
        {/* Buttons at bottom */}
        <div className="mb-20 z-20 flex gap-4">
          {children}
        </div>

        {/* Girl illustration */}
        <div
          className="absolute right-1/4 -bottom-20 lg:block origin-bottom "
          style={{
            transform: `scale(${girlScale})`,
            transition: 'transform 0.1s linear',
            
          }}
        >
          <Image
            src="/images/girl-close.png"
            alt="Portfolio illustration"
            width={300}
            height={300}
            priority

          />
        </div>
      </section>

      {/* Spacer to allow scrolling */}
      <div style={{ height: '250vh' }}></div>
    </>
  );
}
