'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ColorThemeProvider() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    function isValidHexColor(color: string): boolean {
      const cleanColor = color.startsWith('#') ? color.slice(1) : color;
      return /^([0-9A-Fa-f]{3}){1,2}$/.test(cleanColor);
    }

    function hexToRgb(hex: string): { r: number, g: number, b: number } {
      const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;
      
      const fullHex = cleanHex.length === 3 
        ? cleanHex[0] + cleanHex[0] + cleanHex[1] + cleanHex[1] + cleanHex[2] + cleanHex[2]
        : cleanHex;
      
      const r = parseInt(fullHex.substring(0, 2), 16);
      const g = parseInt(fullHex.substring(2, 4), 16);
      const b = parseInt(fullHex.substring(4, 6), 16);
      
      return { r, g, b };
    }

    function applyColorTheme(hexColor: string): void {
      const color = hexColor.startsWith('#') ? hexColor : `#${hexColor}`;
      
      const { r, g, b } = hexToRgb(color);
      
      const darkerColor = `rgb(${Math.max(0, r-40)}, ${Math.max(0, g-40)}, ${Math.max(0, b-40)})`;
      const lighterColor = `rgb(${Math.min(255, r+40)}, ${Math.min(255, g+40)}, ${Math.min(255, b+40)})`;
      
      document.documentElement.style.setProperty('--theme-color', color);
      document.documentElement.style.setProperty('--theme-color-dark', darkerColor);
      document.documentElement.style.setProperty('--theme-color-light', lighterColor);
      document.documentElement.style.setProperty('--theme-color-rgb', `${r}, ${g}, ${b}`);
      
      document.documentElement.style.setProperty('--color-primary', color);
      document.documentElement.classList.add('has-theme');
    }

    function resetColorTheme(): void {
      document.documentElement.style.removeProperty('--theme-color');
      document.documentElement.style.removeProperty('--theme-color-dark');
      document.documentElement.style.removeProperty('--theme-color-light');
      document.documentElement.style.removeProperty('--theme-color-rgb');
      document.documentElement.classList.remove('has-theme');
    }

    if (mounted) {
      const color = searchParams?.get('color');
      
      if (color && isValidHexColor(color)) {
        applyColorTheme(color);
      } else {
        resetColorTheme();
      }
    }
  }, [searchParams, mounted]);

  return null;
}