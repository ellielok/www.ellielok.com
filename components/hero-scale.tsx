'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroScaleProps {
  children?: React.ReactNode;
}

export default function HeroScale({ children }: HeroScaleProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [eyesOpen, setEyesOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
  const scale = 1.03 - scrollProgress * 0.1;

  // Girl scale: grow from 1 to 2 as we scroll
  const girlScale = 2.2 - scrollProgress;

  // Parallax offset for background (subtle movement)
  const bgOffsetX = mousePosition.x * 5; // 5px max movement
  const bgOffsetY = mousePosition.y * 5;

  // Parallax offset for girl (more pronounced movement)
  const girlOffsetX = mousePosition.x * 8; // 15px max movement
  const girlOffsetY = mousePosition.y * 8;

  // 3D tilt effect (very subtle)
  const tiltX = mousePosition.y * 1; // Rotate around X axis (minimal)
  const tiltY = -mousePosition.x * 1; // Rotate around Y axis (minimal)

  return (
    <>
      {/* Hero Section with scaling background */}
      <section
        className="hero min-h-screen bg-cover bg-center bg-no-repeat flex items-end justify-center fixed top-0 left-0 w-full bg-[url('/images/bg-light.png')] dark:bg-[url('/images/bg-dark.png')] origin-center z-0"
        style={{
          transform: `scale(${scale * 1.06}) translate(${bgOffsetX}px, ${bgOffsetY}px) perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Buttons at bottom */}
        <div className="mb-20 z-20 flex gap-4">
          {children}
        </div>
      </section>

      {/* Girl illustration - separate layer */}
      <div
        className="fixed -right-10 top-0 xl:right-1/10 xl:block origin-top z-2 pointer-events-none"
        style={{
          transform: `scale(${girlScale}) translate(${girlOffsetX}px, ${girlOffsetY}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="relative">
          {/* Base image - girl with closed eyes */}
          <Image
            src="/images/girl-close.png"
            alt="Portfolio illustration"
            width={450}
            height={450}
            priority
          />
          {/* Overlay image - girl with open eyes */}
          <Image
            src="/images/eye-open.png"
            alt="Eyes open"
            width={450}
            height={450}
            className="absolute top-0 left-0 transition-opacity duration-150"
            style={{
              opacity: eyesOpen ? 1 : 0,
            }}
          />
        </div>
      </div>

      {/* Spacer to allow scrolling */}
      <div style={{ height: '120vh' }}></div>
    </>
  );
}
