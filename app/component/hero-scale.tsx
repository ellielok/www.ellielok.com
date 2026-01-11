'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroScaleProps {
  children?: React.ReactNode;
}

export default function HeroScale({ children }: HeroScaleProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [eyesOpen, setEyesOpen] = useState(false);

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

  // Blinking effect - eyes open every 3 seconds for 1 second
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyesOpen(true); // Open eyes
      setTimeout(() => setEyesOpen(false), 1000); // Close eyes after 1 second
    }, 3000); // Repeat every 3 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  // Scale from 2 to 1
  const scale = 1 + scrollProgress * 0.1;

  // Girl scale: grow from 1 to 2 as we scroll
  const girlScale = 1.5 + scrollProgress * 0.1

  return (
    <>
      {/* Hero Section with scaling background */}
      <section
        className="hero min-h-screen bg-cover bg-center bg-no-repeat flex items-end justify-center fixed top-0 left-0 w-full bg-[url('/images/bg-light.png')] dark:bg-[url('/images/bg-dark.png')] origin-center z-0"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.3s linear',
        }}
      >
        {/* Buttons at bottom */}
        <div className="mb-20 z-20 flex gap-4">
          {children}
        </div>

        {/* Girl illustration */}
        <div
          className="absolute right-1/6 -bottom-20 lg:block origin-bottom"
          style={{
            transform: `scale(${girlScale})`,
            transition: 'transform 0.3s linear',
          }}
        >
          <div className="relative">
            {/* Base image - girl with closed eyes */}
            <Image
              src="/images/girl-close.png"
              alt="Portfolio illustration"
              width={400}
              height={400}
              priority
            />
            {/* Overlay image - girl with open eyes */}
            <Image
              src="/images/eye-open.png"
              alt="Eyes open"
              width={400}
              height={400}
              className="absolute top-0 left-0 transition-opacity duration-150"
              style={{
                opacity: eyesOpen ? 1 : 0,
              }}
            />
          </div>
        </div>
      </section>

      {/* Spacer to allow scrolling */}
      <div style={{ height: '250vh' }}></div>
    </>
  );
}
