'use client';
import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Github, Menu, X } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import ThemeToggle from './theme-toggle';
import HeaderButton from './header-button';
import Image from 'next/image';
import logo from '@/public/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Gradient background overlay */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/90 via-white/50 to-transparent dark:from-gray-900/90 dark:via-gray-900/50 dark:to-transparent z-50 pointer-events-none" />

      {/* Header content */}
      <div className="flex flex-col fixed top-2 left-5 right-5 xl:left-1/15 xl:right-1/15 z-50">
        <div className="flex flex-row justify-between items-center mb-3">
          {/* Logo and name - always visible */}
          <div className="flex flex-row items-center gap-3 md:gap-10">
            <a href="/" className="flex flex-row items-center gap-3">
              <Image src={logo} alt="Logo" width={30} height={30} />
              <div className="font-semibold text-black dark:text-white whitespace-nowrap">Ellie L.</div>
              <div className="font-semibold text-gray-500 dark:text-gray-400 hidden sm:block">Developer</div>
            </a>

            {/* Desktop nav buttons - hidden on mobile */}
            <div className="hidden md:flex flex-row items-center gap-2">
              <HeaderButton label="Blog" href="/blog" />
              <HeaderButton
                label="Editions"
                dropdownItems={[
                  {
                    title: "Halloween '25",
                    description: "Made for the spooky season.",
                    href: "/history/2510-halloween",
                    icon: "🎃",
                    external: true
                  },
                  {
                    title: "Art Nouveau '26",
                    description: "Story behind. Under construction.",
                    href: "/blog/0115/behind-the-story",
                    icon: "💐"
                  }
                ]}
              />
            </div>
          </div>

          {/* Right side - desktop */}
          <div className="hidden md:flex flex-row items-center gap-2">
            <HeaderButton label="Snapshots" href="/snapshots" />
            <a
              href="https://github.com/ellielok"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 inline-flex items-center justify-center hover:bg-[#101828] dark:hover:bg-white rounded-md transition-all group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-600 dark:text-white group-hover:text-white dark:group-hover:text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/ellielok"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 inline-flex items-center justify-center hover:bg-[#101828] dark:hover:bg-white rounded-md transition-all group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-gray-600 dark:text-white group-hover:text-white dark:group-hover:text-black" />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile - hamburger button and theme toggle */}
          <div className="flex md:hidden flex-row items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8 inline-flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 space-y-3">
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/snapshots"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Snapshots
            </Link>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
              <p className="px-3 text-sm text-gray-500 dark:text-gray-400 mb-2">Editions</p>
              <Link
                href="/history/2510-halloween"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                🎃 Halloween &apos;25
              </Link>
              <Link
                href="/blog/0115/behind-the-story"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                💐 Art Nouveau &apos;26
              </Link>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex flex-row gap-3">
              <a
                href="https://github.com/ellielok"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 inline-flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-600 dark:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/ellielok"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 inline-flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6 text-gray-600 dark:text-white" />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
