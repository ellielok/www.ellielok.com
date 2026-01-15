'use client';
import * as React from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import ThemeToggle from './theme-toggle';
import HeaderButton from './header-button';
import Image from 'next/image';
import logo from '@/public/logo.png';

export default function Header() {
  return (
    <>
      {/* Gradient background overlay */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/90 via-white/50 to-transparent dark:from-gray-900/90 dark:via-gray-900/50 dark:to-transparent z-50 pointer-events-none" />

      {/* Header content */}
      <div className="flex flex-col fixed top-2 left-5 right-5 xl:left-1/15 xl:right-1/15 z-50">
        <div className="flex flex-row justify-between mb-3">
        <div className="order-first flex flex-row gap-10 ">
          <a href="/" className="flex flex-row items-center gap-3">
            <Image src={logo} alt="Logo" width={30} height={30} className="" />
            <div className="font-semibold text-black dark:text-white " >Ellie L.</div>
            <div className="font-semibold text-gray-500 dark:text-gray-400">Developer</div>
          </a>

          <div className="flex flex-row items-center gap-2">
            <HeaderButton label="Blog" href="/blog" />
            <div className="hidden md:block">
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
                    description: "Story behind this edition. Under construction.",
                    href: "#",
                    icon: "💐"
                  }
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row order-last items-center gap-2">
          <HeaderButton label="Snapshots" href="/snapshots" />
          <a
              href="https://github.com/ellielok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity p-2 
               hover:bg-white dark:hover:bg-black rounded-sm"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white transition-colors" />
            </a>
            <a
              href="https://github.com/ellielok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity p-2 
               hover:bg-white dark:hover:bg-black rounded-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white transition-colors" />
            </a>
          <ThemeToggle />

        </div>
      </div>
      </div>
    </>
  );
}
