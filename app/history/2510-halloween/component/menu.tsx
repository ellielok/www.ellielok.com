'use client';
import { useEffect, useState } from 'react';

export default function Menu() {
  const items = [
    { label: 'About', href: '#about', displayId: 'about' },
    { label: 'Experience', href: '#experience', displayId: 'experience' },
    { label: 'Projects', href: '#project', displayId: 'project' },
  ];

  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // Get section elements
      const aboutElement = document.getElementById('about');
      const experienceElement = document.getElementById('experience');
      const projectElement = document.getElementById('project');

      let currentActive = '';

      // Special handling: if near top of page, show about
      if (scrollTop < 300) {
        currentActive = 'about';
      }
      // Check experience section
      else if (experienceElement) {
        const experienceRect = experienceElement.getBoundingClientRect();
        if (
          experienceRect.top < windowHeight * 0.8 &&
          experienceRect.bottom > windowHeight * 0.1
        ) {
          currentActive = 'experience';
        }
      }

      // Check more section
      if (!currentActive && projectElement) {
        const moreRect = projectElement.getBoundingClientRect();
        if (moreRect.top < windowHeight * 0.6) {
          currentActive = 'project';
        }
      }

      // Fallback to project if no active section found
      if (!currentActive) {
        currentActive = 'project';
      }

      if (currentActive && currentActive !== activeId) {
        console.log(`Active changed from ${activeId} to ${currentActive}`);
        setActiveId(currentActive);
      }
    };

    // Executed once immediately after the page loads
    handleScroll();

    // Add scroll monitoring
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  return (
    <div className="hidden lg:block mt-10">
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => {
                // Prevent default anchor click, change to smooth scroll effect
                e.preventDefault();

                // if about, scroll to top, else scroll to section
                if (item.displayId === 'about') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  const section = document.getElementById(item.displayId);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-300 
                hover:text-[#93f5fa]
                ${
                  activeId === item.displayId
                    ? 'text-white/100 hover:backdrop-blur-xl bg-gradient-to-r from-white/10 via-white/5 to-white/0'
                    : 'text-white/60'
                }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
