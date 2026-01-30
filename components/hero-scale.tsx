'use client';

import { useEffect, useState } from 'react';

interface HeroScaleProps {
  children?: React.ReactNode;
}

export default function HeroScale({ children }: HeroScaleProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
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

  // Scale from 2 to 1
  const scale = 1.03 - scrollProgress * 0.1;

  // Parallax offset for background (subtle movement)
  const bgOffsetX = mousePosition.x * 5; // 5px max movement
  const bgOffsetY = mousePosition.y * 5;

  // 3D tilt effect (very subtle)
  const tiltX = mousePosition.y * 1; // Rotate around X axis (minimal)
  const tiltY = -mousePosition.x * 1; // Rotate around Y axis (minimal)

  return (
    <>
      {/* Hero Section with scaling background */}
      <section
        className="hero min-h-screen bg-cover bg-center bg-no-repeat flex items-end justify-center fixed top-0 left-0 w-full bg-[url('/images/bg-light.png')] dark:bg-[url('/images/bg-dark.png')] origin-center z-0 dark:brightness-80"
        style={{
          transform: `scale(${
            scale * 1.06
          }) translate(${bgOffsetX}px, ${bgOffsetY}px) perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Buttons at bottom */}
        <div className="mb-20 z-20 flex gap-4">{children}</div>
      </section>

      {/* Spacer to allow scrolling */}
      <div style={{ height: '100vh' }}></div>
    </>
  );
}
