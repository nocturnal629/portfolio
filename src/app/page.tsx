'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'about'];
      
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
  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center">
        {isMounted && <ThemeToggle />}
      </div>
      
      <Hero activeSection={activeSection} onSectionChange={scrollToSection} />
      <Projects />
      <Experience />
      <About />
      <Footer />
    </div>
  );
}