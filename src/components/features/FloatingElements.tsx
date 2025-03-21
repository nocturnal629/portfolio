'use client';
import { useEffect, useState } from 'react';

const FloatingElements: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const container = document.createElement('div');
    container.className = 'fixed inset-0 pointer-events-none z-0 overflow-hidden';
    document.body.appendChild(container);

    const getThemeColors = () => {
      const hasCustomTheme = document.documentElement.classList.contains('has-theme');
      const isDarkMode = document.documentElement.classList.contains('dark');
      
      if (hasCustomTheme) {
        const themeColorRgb = getComputedStyle(document.documentElement)
          .getPropertyValue('--theme-color-rgb')
          .trim();
        
        if (themeColorRgb) {
          const [r, g, b] = themeColorRgb.split(',').map(val => parseInt(val.trim(), 10));
          
          return {
            light: `rgba(${r}, ${g}, ${b}`,
            dark: `rgba(${r}, ${g}, ${b}`
          };
        }
      }

      return {
        light: 'rgba(15, 118, 110',
        dark: 'rgba(45, 212, 191'
      };
    };
    
    const createShapes = () => {
      container.innerHTML = '';
      
      const isDarkMode = document.documentElement.classList.contains('dark');
      const colors = getThemeColors();
      
      for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        
        const size = Math.floor(Math.random() * 17) + 8;
        
        const posX = Math.floor(Math.random() * 100);
        const posY = Math.floor(Math.random() * 100);
        
        const duration = Math.floor(Math.random() * 25) + 15;
        
        const opacity = (Math.random() * 0.15) + 0.1;

        const color = isDarkMode 
          ? `${colors.dark}, ${opacity})`
          : `${colors.light}, ${opacity})`;
        
        const shapeType = Math.floor(Math.random() * 6);
        
        element.setAttribute('data-floating-element', 'true');
        element.style.position = 'absolute';
        element.style.left = `${posX}%`;
        element.style.top = `${posY}%`;
        element.style.animation = `float ${duration}s infinite ease-in-out`;
        
        switch (shapeType) {
          case 0:
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.backgroundColor = color;
            element.style.borderRadius = '50%';
            element.style.boxShadow = `0 0 10px ${color.replace(')', ', 0.5)')}`;
            break;
            
          case 1:
            element.style.width = '0';
            element.style.height = '0';
            element.style.borderLeft = `${size/2}px solid transparent`;
            element.style.borderRight = `${size/2}px solid transparent`;
            element.style.borderBottom = `${size}px solid ${color}`;
            break;
            
          case 2:
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.backgroundColor = color;
            element.style.transform = 'rotate(45deg)';
            break;
            
          case 3:
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.position = 'relative';
            
            const hBar = document.createElement('div');
            hBar.style.position = 'absolute';
            hBar.style.width = '100%';
            hBar.style.height = '30%';
            hBar.style.top = '35%';
            hBar.style.backgroundColor = color;
            element.appendChild(hBar);
            
            const vBar = document.createElement('div');
            vBar.style.position = 'absolute';
            vBar.style.height = '100%';
            vBar.style.width = '30%';
            vBar.style.left = '35%';
            vBar.style.backgroundColor = color;
            element.appendChild(vBar);
            break;
            
          case 4:
            element.style.width = `${size}px`;
            element.style.height = `${size * 0.866}px`;
            element.style.backgroundColor = color;
            element.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
            break;
            
          case 5:
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.borderRadius = '50%';
            element.style.border = `${size/4}px solid ${color}`;
            element.style.backgroundColor = 'transparent';
            break;
        }
        
        container.appendChild(element);
      }
    };
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        20% { transform: translate(15px, 15px) rotate(10deg); }
        40% { transform: translate(5px, 25px) rotate(5deg); }
        60% { transform: translate(-10px, 15px) rotate(0deg); }
        80% { transform: translate(-15px, 5px) rotate(-10deg); }
      }
    `;
    document.head.appendChild(style);

    createShapes();

    const classObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          createShapes();
        }
      });
    });

    const styleObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'style') {
          createShapes();
        }
      });
    });
    
    classObserver.observe(document.documentElement, { attributes: true });
    styleObserver.observe(document.documentElement, { attributes: true });
    
    return () => {
      document.body.removeChild(container);
      document.head.removeChild(style);
      classObserver.disconnect();
      styleObserver.disconnect();
    };
  }, [mounted]);
  
  return null;
};

export default FloatingElements;