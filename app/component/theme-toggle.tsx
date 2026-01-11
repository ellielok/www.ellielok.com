  'use client'

function ThemeToggle() {
    return <button onClick={ToggleTheme} className="text-gray-700 dark:text-gray-300">Theme Toggle</button>;}



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
