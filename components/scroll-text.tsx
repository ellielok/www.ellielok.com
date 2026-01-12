'use client'

import { useEffect, useState } from 'react';
import { HeroGeometric } from "@/components/ui/shadcn-io/shape-landing-hero";

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

  // Calculate translateY: start at 15vh (higher position), end at -100vh (moved up)
  const translateY = 10 - scrollProgress * 115 * 10;

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-30"
      style={{
        transform: `translateY(${translateY}vh)`,
        transition: 'transform 0.1s linear',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6 px-6 md:px-10">
        <HeroGeometric
          title1="Revolutionary"
          title2="Analytics Platform"
          description="Get actionable insights from your data with AI-powered analytics that actually make sense."
        />
      </div>
    </div>
  );
}
