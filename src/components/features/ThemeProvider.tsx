'use client';

import { useEffect, useState } from 'react';

export default function ThemeProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const isDarkMode = 
      localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return null;
}