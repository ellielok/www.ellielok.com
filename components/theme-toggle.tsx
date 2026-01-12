'use client'

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check initial theme
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const handleToggle = () => {
        ToggleTheme();
        setIsDark(!isDark);
    };

    return (
        <button
            onClick={handleToggle}
            className="text-black dark:text-white  transition-opacity p-2 
               hover:bg-white dark:hover:bg-black rounded-sm"
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
