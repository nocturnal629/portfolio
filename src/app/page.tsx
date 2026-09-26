'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Navbar from '@/components/features/Navbar';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Certifications from '@/components/sections/Certifications';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMounted, setIsMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
    setIsMounted(true);

    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'certifications', 'about'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
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

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div
        className={`fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center transition-opacity duration-300 ${
          navbarVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {isMounted && (
          <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} tabIndex={navbarVisible ? -1 : 0} />
        )}
      </div>

      {isMounted && (
        <Navbar
          activeSection={activeSection}
          onSectionChange={scrollToSection}
          onVisibleChange={setNavbarVisible}
          darkMode={darkMode}
          onToggleTheme={toggleTheme}
        />
      )}

      <Hero activeSection={activeSection} onSectionChange={scrollToSection} />
      <Projects />
      <Experience />
      <Certifications />
      <About />
      <Footer />
    </div>
  );
}