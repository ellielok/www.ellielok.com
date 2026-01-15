'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
  external?: boolean;
}

interface HeaderButtonProps {
  label: string;
  href?: string;
  dropdownItems?: DropdownItem[];
}

export default function HeaderButton({ label, href, dropdownItems }: HeaderButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Simple link button
  if (href && !dropdownItems) {
    return (
      <Link
        href={href}
        className="h-10 px-4 inline-flex items-center justify-center text-sm font-medium text-black dark:text-white hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black rounded-md transition-colors"
      >
        {label}
      </Link>
    );
  }

  // Dropdown button
  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="h-10 px-4 inline-flex items-center justify-center gap-1 text-sm font-medium text-black dark:text-white hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black rounded-md transition-colors"
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && dropdownItems && (
        <>
          {/* Invisible bridge to prevent hover gap */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 h-2 w-[300px]" />

          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] bg-white dark:bg-white border border-gray-200 dark:border-gray-300 rounded-sm shadow-lg py-1 z-50">
            {dropdownItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="block px-4 py-2 hover:bg-white dark:hover:bg-gray-200 transition-all group"
              >
                <div className="inline-flex items-center gap-1 text-sm font-medium text-black dark:text-black">
                  {item.title}
                  {item.external && (
                    <svg className="w-4 h-4 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
                <div className="text-sm font-normal text-gray-600 dark:text-gray-600 mt-0.5">
                  {item.icon} {item.description}
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
