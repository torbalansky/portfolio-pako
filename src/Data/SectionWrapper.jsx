import React from 'react';
import { useTheme } from '../Data/Theme';

const SectionWrapper = ({ children }) => {
    const { theme, toggletheme } = useTheme();
    const backgroundClass = theme === 'light' ? 'bg-gray-50' : 'bg-gray-700';
    const textcolor = theme === 'light' ? 'text-black' : 'text-white';
    const iconcolor = theme === 'light' ? 'text-black' : 'text-white';
    const buttoncolor = theme === 'light' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white';
    const navbarcolor = theme === 'light' ? 'bg-gray-50 text-black' : 'bg-gray-800 text-white';
    const dropdownbgcolor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
    const dropdowntextcolor = theme === 'light' ? 'text-black' : 'text-white';
    
    return (
      <section className={`${backgroundClass} ${textcolor} min-h-screen p-8`}>
        {children}
      </section>
    );
  };
  

export default SectionWrapper;
