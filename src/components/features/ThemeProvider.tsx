'use client';

import { useEffect, useState } from 'react';

export default function ThemeProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const applyTheme = () => {
      try {
        const storedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
          document.documentElement.classList.add('dark');
        } else if (storedTheme === 'light' || (!storedTheme && !systemPrefersDark)) {
          document.documentElement.classList.remove('dark');
        }
      } catch (error) {
        console.error('Error applying theme:', error);
      }
    };

    applyTheme();

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        if (event.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    darkModeMediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  // Prevent hydration mismatch by not rendering anything until mounted
  if (!mounted) {
    return null;
  }

  return null;
}