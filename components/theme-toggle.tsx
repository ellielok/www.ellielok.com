'use client'

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Read theme from localStorage or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

        setIsDark(shouldBeDark);

        if (shouldBeDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const handleToggle = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        // Save to localStorage
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');

        // Toggle theme with transition
        ToggleTheme();
    };

    return (
        <button
            onClick={handleToggle}
            className="h-10 w-10 inline-flex items-center justify-center text-black dark:text-white hover:bg-[#101828] hover:text-white dark:hover:bg-white dark:hover:text-black rounded-md transition-all"
            aria-label="Toggle theme"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}

function ToggleTheme() {
    if (!document.startViewTransition) {
        // Fallback for browsers that do not support View Transitions
        DarkTheme();
        return;
    }

    document.startViewTransition(() => {
        DarkTheme();
    });
}

function DarkTheme() {
    document.documentElement.classList.toggle('dark');
}

export default ThemeToggle;
