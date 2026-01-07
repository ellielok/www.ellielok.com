'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import EnvFooter from './env-footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <EnvFooter />;
  if (pathname === '/history/2510-halloween') return null;

  return <EnvFooter />;
}
