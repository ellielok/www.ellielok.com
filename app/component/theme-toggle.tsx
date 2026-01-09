  'use client'

function ThemeToggle() {
    return <button onClick={ToggleTheme}>Theme Toggle</button>;}



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
