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
    if (!isMounted) return;
    
    const newMode = !darkMode;

    setDarkMode(newMode);

    setTimeout(() => {
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, 0);
  };

  if (!isMounted) {
    return (
      <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100">
        <div className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button 
      onClick={toggleTheme}
      className={`w-8 h-8 flex items-center justify-center rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-100'}`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <Sun className="w-4 h-4 text-yellow-400" />
      ) : (
        <Moon className="w-4 h-4 text-gray-600" />
      )}
    </button>
  );
};

export default ThemeToggle;