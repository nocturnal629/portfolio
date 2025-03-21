'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

const ColorPicker: React.FC = () => {
  const searchParams = useSearchParams();
  const pickerRef = useRef<HTMLDivElement>(null);
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#14b8a6');
  const [mounted, setMounted] = useState(false);
  
  const colorOptions = [
    { name: 'Default Teal', value: '#14b8a6' },
    { name: 'Purple', value: '#8b5cf6' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Green', value: '#22c55e' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Yellow', value: '#eab308' },
  ];

  useEffect(() => {
    setMounted(true);
    
    if (mounted) {
      const color = searchParams?.get('color');
      if (color) {
        setSelectedColor(`#${color}`);
      }
    }
  }, [searchParams, mounted]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    if (mounted) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [mounted]);

  const applyColor = (color: string) => {
    const hexValue = color.replace('#', '');

    const newParams = new URLSearchParams(searchParams?.toString() || '');
    
    if (color === '#14b8a6') {
      newParams.delete('color');
    } else {
      newParams.set('color', hexValue);
    }

    const newUrl = `${window.location.pathname}${newParams.toString() ? '?' + newParams.toString() : ''}`;

    window.history.replaceState({}, '', newUrl);
    
    if (color === '#14b8a6') {
      document.documentElement.classList.remove('has-theme');
      document.documentElement.style.removeProperty('--theme-color');
      document.documentElement.style.removeProperty('--theme-color-dark');
      document.documentElement.style.removeProperty('--theme-color-light');
      document.documentElement.style.removeProperty('--theme-color-rgb');
    } else {
      applyColorToDOM(color);
    }
    
    setSelectedColor(color);
    setIsOpen(false);
  };
  
  const applyColorToDOM = (hexColor: string) => {
    const color = hexColor.startsWith('#') ? hexColor : `#${hexColor}`;

    const hex = color.replace('#', '');
    const fullHex = hex.length === 3 
      ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      : hex;
    
    const r = parseInt(fullHex.substring(0, 2), 16);
    const g = parseInt(fullHex.substring(2, 4), 16);
    const b = parseInt(fullHex.substring(4, 6), 16);

    const darkerColor = `rgb(${Math.max(0, r-40)}, ${Math.max(0, g-40)}, ${Math.max(0, b-40)})`;
    const lighterColor = `rgb(${Math.min(255, r+40)}, ${Math.min(255, g+40)}, ${Math.min(255, b+40)})`;

    document.documentElement.style.setProperty('--theme-color', color);
    document.documentElement.style.setProperty('--theme-color-dark', darkerColor);
    document.documentElement.style.setProperty('--theme-color-light', lighterColor);
    document.documentElement.style.setProperty('--theme-color-rgb', `${r}, ${g}, ${b}`);
    document.documentElement.classList.add('has-theme');
  };

  const togglePicker = () => {
    setIsOpen(!isOpen);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40" ref={pickerRef}>
      <div className="relative">
        <button
          onClick={togglePicker}
          className="w-10 h-10 rounded-full shadow-md border-2 border-white dark:border-gray-800 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: selectedColor }}
          aria-label="Change theme color"
        >
          <span className="sr-only">Theme Color</span>
        </button>
        
        {isOpen && (
          <div className="absolute bottom-11 left-0 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 w-56">
            <div className="text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">Theme Colors</div>
            <div className="grid grid-cols-4 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => applyColor(color.value)}
                  className={`w-8 h-8 rounded-full shadow-sm border-2 transition-transform hover:scale-110 ${
                    selectedColor === color.value 
                      ? 'border-black dark:border-white' 
                      : 'border-white dark:border-gray-800'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                  aria-label={`Set theme color to ${color.name}`}
                />
              ))}
            </div>
            
            <div className="mt-3">
              <label className="text-xs text-gray-600 dark:text-gray-400">Custom Color:</label>
              <div className="flex mt-1">
                <input
                  type="color"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="h-8 w-8 cursor-pointer"
                />
                <button
                  onClick={() => applyColor(selectedColor)}
                  className="ml-2 text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;