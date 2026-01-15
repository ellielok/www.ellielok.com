'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import EnvFooter from './footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <EnvFooter />;
  if (pathname === '/') return null;

  return <EnvFooter />;
}
