'use client';

import React, { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { navItems } from '@/data/navigation';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  onVisibleChange?: (visible: boolean) => void;
  darkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSectionChange,
  onVisibleChange,
  darkMode,
  onToggleTheme
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroNav = document.getElementById('hero-nav');
    if (!heroNav) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = !entry.isIntersecting;
        setVisible(isVisible);
        onVisibleChange?.(isVisible);
      },
      { rootMargin: '-56px 0px 0px 0px' }
    );

    observer.observe(heroNav);
    return () => observer.disconnect();
  }, [onVisibleChange]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/70 dark:border-slate-700/70 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
          <button
            onClick={() => onSectionChange('home')}
            className="hidden sm:block text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200 hover:text-teal-800 dark:hover:text-teal-400 transition-colors"
            tabIndex={visible ? 0 : -1}
          >
            nocturnal625
          </button>

          <div className="flex-1 flex flex-wrap justify-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                tabIndex={visible ? 0 : -1}
                className={`px-3 py-1.5 rounded-full border text-xs sm:text-sm capitalize transition-colors ${
                  activeSection === item.id
                    ? 'border-teal-600/40 bg-teal-600/10 text-teal-800 font-medium dark:border-teal-400/40 dark:bg-teal-400/10 dark:text-teal-400'
                    : 'border-transparent text-gray-800 hover:border-teal-600/30 hover:bg-teal-600/10 hover:text-teal-800 dark:text-gray-400 dark:hover:border-teal-400/30 dark:hover:bg-teal-400/10 dark:hover:text-teal-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex-shrink-0">
            <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} tabIndex={visible ? 0 : -1} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
