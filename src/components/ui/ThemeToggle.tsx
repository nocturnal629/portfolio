'use client';

import React from 'react';
import { Moon, Sun } from 'react-feather';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
  tabIndex?: number;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, onToggle, tabIndex }) => {
  return (
    <button
      onClick={onToggle}
      tabIndex={tabIndex}
      className={`w-8 h-8 flex items-center justify-center rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-100'}`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <Sun className="w-4 h-4 text-yellow-400" />
      ) : (
        <Moon className="w-4 h-4 text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
