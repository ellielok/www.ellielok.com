"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Background from "./background";

export default function BackgroundWrapper() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  if (pathname === '/history/2510-halloween') return <Background /> ;

  return null;
}
