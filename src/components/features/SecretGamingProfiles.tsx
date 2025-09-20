'use client';
import React, { useState, useEffect } from 'react';
import { FaSteam, FaPlaystation, FaTrain, FaUserSecret } from 'react-icons/fa';
import { SiRiotgames, SiRoblox, SiLeagueoflegends } from 'react-icons/si';
import { GiSwordBrandish } from 'react-icons/gi';

interface GamingProfile {
  platform: string;
  id: string;
  icon: React.ReactNode;
  color: string;
}

function SecretGamingProfiles(): React.ReactNode {
  const [isVisible, setIsVisible] = useState(false);
  const [keySequence, setKeySequence] = useState('');
  
  const gamingProfiles: GamingProfile[] = [
    { 
      platform: 'Steam', 
      id: 'YourSteamUsername', 
      icon: <FaSteam className="h-6 w-6 text-blue-600" />,
      color: 'bg-blue-100 dark:bg-blue-900'
    },
    { 
      platform: 'Valorant', 
      id: 'YourValorantTag', 
      icon: <SiRiotgames className="h-6 w-6 text-red-600" />,
      color: 'bg-red-100 dark:bg-red-900'
    },
    { 
      platform: 'League of Legends', 
      id: 'YourLoLUsername', 
      icon: <SiLeagueoflegends className="h-6 w-6 text-yellow-600" />,
      color: 'bg-yellow-100 dark:bg-yellow-900'
    }
  ];
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = keySequence + e.key.toLowerCase();
      
      const trimmedSequence = newSequence.slice(-20);
      setKeySequence(trimmedSequence);
      
      if (trimmedSequence.includes('yourname')) {
        setIsVisible(true);
        setKeySequence('');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keySequence]);
  
  const closePopup = () => {
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={closePopup}>
      <div 
        className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400">Your Name&apos;s Gaming Profiles</h3>
          <button 
            onClick={closePopup}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          {gamingProfiles.map((profile, index) => (
            <div 
              key={index}
              className={`flex items-center gap-4 p-3 rounded-lg ${profile.color} transition-all hover:scale-102`}
            >
              {profile.icon}
              <div>
                <div className="font-medium dark:text-white">{profile.platform}</div>
                <div className="text-gray-700 dark:text-gray-300">{profile.id}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center">
          <p>Type &quot;yourname&quot; anywhere to show these gaming profiles again</p>
          <p>Click outside or press ✕ to close</p>
        </div>
      </div>
    </div>
  );
};

export default SecretGamingProfiles;
