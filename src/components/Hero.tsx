'use client';

import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Hero: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <section className="relative w-full h-[75vh] bg-gray-200 dark:bg-gray-800 text-black dark:text-white flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4 z-10">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner dark:bg-gray-600"></div>
            <div
              className={`dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
                isDarkMode ? 'transform translate-x-full bg-blue-500' : ''
              }`}
            ></div>
          </div>
          <span className="ml-3 text-gray-700 dark:text-gray-300">
            {isDarkMode ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
          </span>
        </label>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl md:text-2xl mb-4">I&apos;m Quentin Le Sauce, a web developer.</p>
    </section>
  );
};

export default Hero;
