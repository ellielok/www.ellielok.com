"use client";
import { useEffect, useState } from "react";

export default function Menu() {
  const items = [
    { label: 'About', href: '#about-content', displayId: 'about' },
    { label: 'Experience', href: '#project-content', displayId: 'project' },
    { label: 'Project', href: '#more-content', displayId: 'more' },
  ];

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Get section elements
      const aboutElement = document.getElementById('about-content');
      const projectElement = document.getElementById('project-content');
      const moreElement = document.getElementById('more-content');
      
      let currentActive = '';
      
      // Special handling: if near top of page, show about
      if (scrollTop < 300) {
        currentActive = 'about';
      } 
      // Check project section
      else if (projectElement) {
        const projectRect = projectElement.getBoundingClientRect();
        if (projectRect.top < windowHeight * 0.6 && projectRect.bottom > windowHeight * 0.2) {
          currentActive = 'project';
        }
      }
      
      // Check more section
      if (!currentActive && moreElement) {
        const moreRect = moreElement.getBoundingClientRect();
        if (moreRect.top < windowHeight * 0.6) {
          currentActive = 'more';
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

    // Delay the initial check to ensure the DOM is loaded
    const timer = setTimeout(handleScroll, 500);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="hidden lg:block mt-20">
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <a 
              href={item.href} 
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                activeId === item.displayId
                  ? "bg-slate-800/70 text-white shadow-lg"
                  : "text-white/60 hover:bg-white/10 hover:text-white/90"
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
