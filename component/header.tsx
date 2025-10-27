"use client";
import { useEffect, useState } from "react";

export default function FloatingMenu() {
  const menuItems = ["Blog", "Projects", "Contact"];
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 当滚动距离大于 50px 且方向向下时隐藏，否则显示
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }  if (currentScrollY <= 50) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-sm text-gray-400 text-sm font-medium
        flex justify-center space-x-6 py-3 transition-transform duration-500
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {menuItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-white transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
