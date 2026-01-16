'use client';

import { useEffect, useState } from 'react';

const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

export default function LoadingScreen() {
  const [phase, setPhase] = useState<'init' | 'entering' | 'loading' | 'exiting' | 'done'>('init');

  useEffect(() => {
    // Skip loading on mobile for better performance
    if (window.innerWidth < 768) {
      setPhase('done');
      return;
    }

    // Start entering animation
    setPhase('entering');
    const enterTimer = setTimeout(() => {
      setPhase('loading');
    }, 100);

    return () => clearTimeout(enterTimer);
  }, []);

  useEffect(() => {
    if (phase !== 'loading') return;

    const handleLoad = () => {
      setPhase('exiting');
      setTimeout(() => {
        setPhase('done');
      }, 1000);
    };

    if (document.readyState === 'complete') {
      setTimeout(handleLoad, 1500);
    } else {
      const onLoad = () => setTimeout(handleLoad, 1000);
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, [phase]);

  // Don't render anything on mobile or when done
  if (phase === 'init' || phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#faf8f5] dark:bg-[#0a0d15] flex items-center justify-center transition-opacity duration-500 ${
        phase === 'exiting' ? 'opacity-0 delay-500' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <div className="flex">
          {letters.map((letter, index) => (
            <div
              key={index}
              className="overflow-hidden text-center"
              style={{ width: letter === 'I' ? '1em' : '1.5em' }}
            >
              <span
                className="inline-block text-2xl md:text-3xl text-[#101828] dark:text-white font-light transition-transform ease-out"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  transitionDuration: '600ms',
                  transitionDelay: phase === 'entering' ? `${index * 80}ms` : `${index * 50}ms`,
                  transform:
                    phase === 'entering' ? `translateX(${letter === 'I' ? '-1em' : '-1.5em'})` :
                    phase === 'exiting' ? `translateX(${letter === 'I' ? '1em' : '1.5em'})` : 'translateX(0)',
                }}
              >
                {letter}
              </span>
            </div>
          ))}
        </div>

        <div className="relative h-[1px] mt-3 overflow-hidden">
          <div
            className={`absolute h-full bg-[#101828] dark:bg-white transition-all ease-out ${
              phase === 'entering' ? 'left-0 w-0' :
              phase === 'loading' ? 'left-0 w-full duration-1000' :
              'left-0 w-full'
            }`}
            style={{ transitionDelay: phase === 'loading' ? '200ms' : '0ms' }}
          />
        </div>
      </div>
    </div>
  );
}
