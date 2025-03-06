'use client';
import React from 'react';
import { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight * 100;
      setScrollProgress(scrollPercent);
    };
    
    window.addEventListener('scroll', updateScrollProgress);
    
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-teal-500 dark:bg-teal-400 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;