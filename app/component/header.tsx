'use client';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeToggle from './theme-toggle';

export default function Header() {
  const headerItems = [
    { label: 'Portfolio', href:'/'},
    { label: 'Contact', href:'/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between" >
      <div className="flex justify-between items-center border">

        {headerItems.map((item) => (
        <a
          key={item.label}
          href={`${item.href.toLowerCase()}`}
          className="text-black hover:text-blue transition-colors dark:text-white"
        >
          {item.label}
        </a>
      ))}
      </div>

      <div className='flex justify-between items-center'>
        <ThemeToggle />
      </div>
      </div>
      </div>
    </header>
  );
}
