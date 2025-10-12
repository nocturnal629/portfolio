'use client';
import { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { FaBirthdayCake, FaGift, FaStar, FaTree, FaSnowflake, FaSkull, FaFlag, FaRocket, FaHeart, FaFire, FaLeaf, FaSun, FaFireExtinguisher } from 'react-icons/fa';
import { GiPresent, GiPumpkin, GiEasterEgg, GiMapleLeaf, GiFireAce, GiHearts } from 'react-icons/gi';
import { PiCookieDuotone } from 'react-icons/pi';
import { MdOutlineCelebration } from 'react-icons/md';

type Theme = 'default' | 'birthday' | 'christmas' | 'halloween' | 'independence' | 'newyear' | 'valentines' | 'easter' | 'thanksgiving' | 'summer';

const birthdayIcons = [FaBirthdayCake, FaGift, GiPresent, PiCookieDuotone];
const christmasIcons = [FaStar, FaTree, FaSnowflake];
const halloweenIcons = [FaSkull, GiPumpkin, FaFire];
const independenceIcons = [FaFlag, GiFireAce, FaStar];
const newYearIcons = [FaRocket, MdOutlineCelebration, FaStar];
const valentinesIcons = [FaHeart, GiHearts, FaHeart];
const easterIcons = [GiEasterEgg, FaSun, FaLeaf];
const thanksgivingIcons = [GiMapleLeaf, FaLeaf, FaSun];
const summerIcons = [FaSun, FaFire, FaLeaf];

const getThemeForDate = (): Theme => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme');
    if (themeParam && ['default', 'birthday', 'christmas', 'halloween', 'independence', 'newyear', 'valentines', 'easter', 'thanksgiving', 'summer'].includes(themeParam)) {
      return themeParam as Theme;
    }
  }

  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  if (month === 1 && day === 1) {
    return 'newyear';
  }
  
  if (month === 2 && day === 14) {
    return 'valentines';
  }
  
  if (month === 4 && day === 5) {
    return 'easter';
  }
  
  if (month === 6 && day === 12) {
    return 'independence';
  }
  
  if (month === 7 && day === 4) {
    return 'summer';
  }
  
  if (month === 10 && day === 5) {
    return 'birthday';
  }
  
  if (month === 10 && day === 31) {
    return 'halloween';
  }
  
  if (month === 11 && day === 28) {
    return 'thanksgiving';
  }
  
  if (month === 12 && (day === 24 || day === 25)) {
    return 'christmas';
  }

  return 'default';
};

const FloatingElements: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>('default');
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const reactRootsRef = useRef<ReturnType<typeof createRoot>[]>([]);

  useEffect(() => {
    setMounted(true);
    setCurrentTheme(getThemeForDate());
  }, []);

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentTheme(getThemeForDate());
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
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
    
    const createElements = () => {
      if (!container || !document.body.contains(container)) return;
      
      // Unmount all existing React roots before clearing the container
      reactRootsRef.current.forEach(root => {
        try {
          root.unmount();
        } catch (error) {
          // Ignore errors if root is already unmounted
        }
      });
      reactRootsRef.current = [];
      
      container.innerHTML = '';
      
      const isDarkMode = document.documentElement.classList.contains('dark');
      const colors = getThemeColors();
      const theme = currentTheme;

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
        
        element.setAttribute('data-floating-element', 'true');
        element.style.position = 'absolute';
        element.style.left = `${posX}%`;
        element.style.top = `${posY}%`;
        element.style.animation = `float ${duration}s infinite ease-in-out`;
        
        if (theme === 'default') {
          const shapeType = Math.floor(Math.random() * 6);
          
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
        } else {
          let IconComponent;
          let iconArray;
          
          switch (theme) {
            case 'birthday':
              iconArray = birthdayIcons;
              break;
            case 'christmas':
              iconArray = christmasIcons;
              break;
            case 'halloween':
              iconArray = halloweenIcons;
              break;
            case 'independence':
              iconArray = independenceIcons;
              break;
            case 'newyear':
              iconArray = newYearIcons;
              break;
            case 'valentines':
              iconArray = valentinesIcons;
              break;
            case 'easter':
              iconArray = easterIcons;
              break;
            case 'thanksgiving':
              iconArray = thanksgivingIcons;
              break;
            case 'summer':
              iconArray = summerIcons;
              break;
            default:
              iconArray = birthdayIcons;
          }
          
          IconComponent = iconArray[Math.floor(Math.random() * iconArray.length)];
          const iconColor = isDarkMode ? colors.dark.replace('rgba(', '').replace(')', '') : colors.light.replace('rgba(', '').replace(')', '');
          const root = createRoot(element);
          root.render(<IconComponent style={{ color: `rgba(${iconColor}, ${opacity})`, fontSize: `${size}px` }} />);
          
          // Store the root for later cleanup
          reactRootsRef.current.push(root);
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

    createElements();

    const debouncedCreateElements = () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        createElements();
        debounceTimerRef.current = null;
      }, 300);
    };

    const classObserver = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const oldValue = mutation.oldValue || '';
          const newValue = (mutation.target as Element).getAttribute('class') || '';

          if (
            (oldValue.includes('dark') !== newValue.includes('dark')) ||
            (oldValue.includes('has-theme') !== newValue.includes('has-theme'))
          ) {
            shouldUpdate = true;
          }
        }
      });
      
      if (shouldUpdate) {
        debouncedCreateElements();
      }
    });

    const styleObserver = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'style') {
          const style = (mutation.target as HTMLElement).style;
          if (
            style.getPropertyValue('--theme-color') ||
            style.getPropertyValue('--theme-color-rgb')
          ) {
            shouldUpdate = true;
          }
        }
      });
      
      if (shouldUpdate) {
        debouncedCreateElements();
      }
    });

    classObserver.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['class'],
      attributeOldValue: true
    });
    
    styleObserver.observe(document.documentElement, { 
      attributes: true,
      attributeFilter: ['style']
    });
    
    return () => {
      // Unmount all React roots before cleanup
      reactRootsRef.current.forEach(root => {
        try {
          root.unmount();
        } catch (error) {
          // Ignore errors if root is already unmounted
        }
      });
      reactRootsRef.current = [];
      
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      classObserver.disconnect();
      styleObserver.disconnect();
      
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [mounted, currentTheme]);
  
  return null;
};

export default FloatingElements;