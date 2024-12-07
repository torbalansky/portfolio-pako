import React, { useState } from 'react';
import { NavbarData } from '../Data/Data';
import { IoMenuSharp, IoSunnyOutline, IoCloudyNightOutline } from "react-icons/io5";
import { useTheme } from '../Data/Theme';
import { Link, scroller } from 'react-scroll';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeIconAnimation, setThemeIconAnimation] = useState('');

  const styles = {
    nav: `py-5 top-0 z-50 sticky shadow-md ${
      theme === 'light' ? 'bg-slate-50' : 'bg-slate-800'
    }`,
    container: 'container flex justify-between items-center px-4',
    logo: 'w-20 rotate-360 cursor-pointer hover:scale-105 transition-transform duration-200',
    menuIcon: `text-3xl cursor-pointer ${
      theme === 'light' ? 'text-slate-800' : 'text-white'
    }`,
    navLink: `inline-block py-2 px-3 lowercase text-[18px] transition-all duration-200 ease-in-out relative group cursor-pointer ${
      theme === 'light' ? 'text-slate-800' : 'text-white'
    }`,
    linkUnderline: `block absolute left-0 bottom-0 w-full h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out ${
      theme === 'light' ? 'bg-blue-500' : 'bg-green-500'
    }`,
    dropdown: `md:hidden absolute right-2 mt-2 py-2 px-4 rounded-lg shadow-lg ${
      theme === 'light' ? 'bg-white' : 'bg-slate-700'
    }`,
    dropdownLink: `block py-2 px-3 lowercase text-md hover:${
      theme === 'light' ? 'bg-slate-100' : 'bg-slate-600'
    } rounded transition-colors duration-200 ${
      theme === 'light' ? 'text-slate-800' : 'text-white'
    }`
  };

  const handleThemeIconClick = () => {
    setThemeIconAnimation('move-up');
    setTimeout(() => {
      setThemeIconAnimation('move-down');
      toggleTheme();
    }, 500);
  };

  const scrollToHero = () => {
    scroller.scrollTo('hero', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const ThemeIcon = theme === 'light' ? IoSunnyOutline : IoCloudyNightOutline;

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className="flex items-center gap-1">
          <img 
            src={logo} 
            className={styles.logo}
            onClick={scrollToHero}
            alt="Logo"
          />
        </div>

        <div className='hidden md:block'>
          <ul className='flex items-center gap-4'>
            {NavbarData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className={styles.navLink}
                >
                  {item.title}
                  <span className={styles.linkUnderline}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center gap-4'>
          <ThemeIcon 
            onClick={handleThemeIconClick} 
            className={`w-6 h-6 cursor-pointer ${themeIconAnimation} ${
              theme === 'light' ? 'text-slate-800' : 'text-white'
            } hover:scale-110 transition-transform duration-200`}
          />
          <div className='md:hidden'>
            <IoMenuSharp 
              className={styles.menuIcon} 
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.dropdown}>
          <ul className='flex flex-col gap-1'>
            {NavbarData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className={styles.dropdownLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
