'use client';

import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch devices or when no fine pointer (mobile/tablet)
    if (window.matchMedia('(pointer: coarse)').matches) return;
    // Optional: also require hover capability
    if (!window.matchMedia('(hover: hover)').matches) return;
    
    // Disable on small screens (match Tailwind sm < 640px)
    // if (window.matchMedia('(max-width: 639px)').matches) return;

    const el = elRef.current;
    if (!el) return;

    const tick = () => {
      rafRef.current = null;
      el.style.left = `${targetRef.current.x}px`;
      el.style.top = `${targetRef.current.y}px`;
    };

    const onMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (rafRef.current == null)
        rafRef.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={elRef}
      className="fixed hidden dark:block pointer-events-none z-[45] rounded-full blur-3xl"
      style={{
        left: 0,
        top: 0,
        width: 520,
        height: 520,
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'overlay',
        opacity: 0.9,
        background: `
  radial-gradient(
    circle,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.35) 35%,
    rgba(255,255,255,0.12) 70%,
    rgba(255,255,255,0.06) 90%,
    transparent 100%
  )
`,
      }}
      aria-hidden="true"
    />
  );
}
