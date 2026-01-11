'use client'

import { useEffect, useState } from 'react';

export default function ScrollText() {
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

  // Calculate translateY: start at 35vh (near bottom), end at -80vh (moved up)
  const translateY = 35 - scrollProgress * 115;

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-10"
      style={{
        transform: `translateY(${translateY}vh)`,
        transition: 'transform 0.1s linear',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6 px-6 md:px-10">
        <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white text-center">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-black/90 dark:text-white text-center max-w-2xl">
          Full-stack Developer | Digital Marketing Enthusiast
        </p>
      </div>
    </div>
  );
}
