'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { hexToRgb, rgbToHex, getReadableColorOnLight, getReadableColorOnDark, getPageTint, getCardTint, getDarkChipTint } from '@/utils/color';

export default function ColorThemeProvider() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function isValidHexColor(color: string): boolean {
      const cleanColor = color.startsWith('#') ? color.slice(1) : color;
      return /^([0-9A-Fa-f]{3}){1,2}$/.test(cleanColor);
    }

    function applyColorTheme(hexColor: string): void {
      const color = hexColor.startsWith('#') ? hexColor : `#${hexColor}`;

      const { r, g, b } = hexToRgb(color);
      const darkerColor = rgbToHex(getReadableColorOnLight(color));
      const lighterColor = rgbToHex(getReadableColorOnDark(color));
      const pageTint = rgbToHex(getPageTint(color));
      const cardTint = rgbToHex(getCardTint(color));
      const chipBgDark = rgbToHex(getDarkChipTint(color));

      document.documentElement.style.setProperty('--theme-color', color);
      document.documentElement.style.setProperty('--theme-color-dark', darkerColor);
      document.documentElement.style.setProperty('--theme-color-light', lighterColor);
      document.documentElement.style.setProperty('--theme-color-rgb', `${r}, ${g}, ${b}`);
      document.documentElement.style.setProperty('--theme-chip-bg-dark', chipBgDark);
      document.documentElement.style.setProperty('--theme-page-tint', pageTint);
      document.documentElement.style.setProperty('--theme-card-tint', cardTint);

      document.documentElement.style.setProperty('--color-primary', color);
      document.documentElement.classList.add('has-theme');
    }

    function resetColorTheme(): void {
      document.documentElement.style.removeProperty('--theme-color');
      document.documentElement.style.removeProperty('--theme-color-dark');
      document.documentElement.style.removeProperty('--theme-color-light');
      document.documentElement.style.removeProperty('--theme-color-rgb');
      document.documentElement.style.removeProperty('--theme-page-tint');
      document.documentElement.style.removeProperty('--theme-card-tint');
      document.documentElement.style.removeProperty('--theme-chip-bg-dark');
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