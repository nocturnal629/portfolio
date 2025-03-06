'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'react-feather';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', 
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
    setDarkMode(!darkMode);
  };

  if (!isMounted) {
    return (
      <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
};

export default ThemeToggle;