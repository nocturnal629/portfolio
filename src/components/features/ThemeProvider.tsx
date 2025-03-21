'use client';

import { useEffect } from 'react';

export default function ThemeProvider() {
  useEffect(() => {
    const applyTheme = () => {
      const storedTheme = localStorage.getItem('theme');

      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
      } else if (storedTheme === 'light' || (!storedTheme && !systemPrefersDark)) {
        document.documentElement.classList.remove('dark');
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

  return null;
}