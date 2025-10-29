"use client";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

export default function FloatingMenu() {
  const headerItems = [{label:"Portfolio", href:"/"},{label:"Contact", href:"/contact"},];


  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show when scrolling up
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed left-0 w-full h-15 backdrop-blur- items-center text-gray-400 text-sm font-medium
        flex justify-center space-x-6 py-3 transition-transform duration-500
        ${isVisible ? "translate-y-0" : "-translate-y-full"}  z-20`}
    >
      {headerItems.map((item) => (
        <a
          key={item.label}
          href={`${item.href.toLowerCase()}`}
          className="hover:text-white transition-colors"
        >
          {item.label}
        </a>
      ))}

        <a
          href="https://github.com/ellielok"
          target="_blank"
          rel="blog"
          className="hover:text-white transition-colors duration-300"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://linkedin.com/in/ellielok"
          target="_blank"
          rel="blog"
          className="hover:text-white transition-colors duration-300"
        >
          <FaLinkedin size={25} />
        </a>
    </nav>
  );
}
