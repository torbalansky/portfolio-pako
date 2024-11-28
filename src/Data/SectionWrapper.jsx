import React from 'react';
import { useTheme } from '../Data/Theme';

const SectionWrapper = ({ children }) => {
    const { theme, toggletheme } = useTheme();
    const backgroundClass = theme === 'light' ? 'bg-slate-50' : 'bg-slate-700';
    const textcolor = theme === 'light' ? 'text-slate-800' : 'text-white';
    const iconcolor = theme === 'light' ? 'text-slate-800' : 'text-white';
    const buttoncolor = theme === 'light' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white';
    const navbarcolor = theme === 'light' ? 'bg-slate-50 text-slate-800' : 'bg-slate-800 text-white';
    const dropdownbgcolor = theme === 'light' ? 'bg-white' : 'bg-slate-800';
    const dropdowntextcolor = theme === 'light' ? 'text-slate-800' : 'text-white';
    
    return (
      <section className={`${backgroundClass} ${textcolor} min-h-screen p-8`}>
        {children}
      </section>
    );
  };
  

export default SectionWrapper;
