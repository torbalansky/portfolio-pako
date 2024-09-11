import React, { useState } from 'react';
import { NavbarData } from '../Data/Data';
import { GiNestedHexagons } from "react-icons/gi";
import { IoMenuSharp, IoSunnyOutline, IoCloudyNightOutline } from "react-icons/io5";
import { TbHexagonLetterP, TbHexagonLetterA, TbHexagonLetterC } from "react-icons/tb";
import { useTheme } from '../Data/Theme';
import { Link, scroller } from 'react-scroll';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeIconAnimation, setThemeIconAnimation] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToHero = () => {
    scroller.scrollTo('hero', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const handleThemeIconClick = () => {
    setThemeIconAnimation('move-up');
    setTimeout(() => {
      setThemeIconAnimation('move-down');
      toggleTheme();
    }, 500);
  };

  const navbarColor = theme === 'light' ? 'bg-yellow-50 text-black' : 'bg-gray-800 text-white';
  const iconColor = theme === 'light' ? 'text-black' : 'text-white';

  const dropdownBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const dropdownTextColor = theme === 'light' ? 'text-black' : 'text-white';
  const ThemeIcon = theme === 'light' ? IoSunnyOutline : IoCloudyNightOutline;

  return (
    <nav className={`py-5 top-0 z-50 sticky ${navbarColor}`}>
      <div className='container flex justify-between items-center'>
        <div className={`flex items-center gap-1 font-semibold text-2xl ${iconColor}`}>
          <TbHexagonLetterP className="rotate-360 cursor-pointer" onClick={scrollToHero} />
          <TbHexagonLetterA className="rotate-360 cursor-pointer" onClick={scrollToHero} />
          <TbHexagonLetterC className="rotate-360 cursor-pointer" onClick={scrollToHero} />
          <GiNestedHexagons className="rotate-360 cursor-pointer" onClick={scrollToHero} />
        </div>
        <div className='hidden md:block'>
          <ul className='flex items-center gap-4'>
            {NavbarData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className={`inline-block py-2 px-3 lowercase text-[18px] ${iconColor} transition-all duration-200 ease-in-out relative group cursor-pointer`}
                >
                  {item.title}
                  <span className="block absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center'>
          <ThemeIcon 
            onClick={handleThemeIconClick} 
            className={`w-6 h-6 cursor-pointer ${iconColor} theme-move ${themeIconAnimation}`}
          />
        </div>
        <div className='md:hidden' onClick={toggleMenu}>
          <IoMenuSharp className={`text-3xl cursor-pointer ${iconColor}`} />
        </div>
      </div>
      {menuOpen && (
        <div className={`md:hidden absolute right-2 mt-2 ${dropdownBgColor}`}>
          <ul className='flex flex-col gap-2'>
            {NavbarData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className={`inline-block py-2 px-3 lowercase text-2xl ${dropdownTextColor} cursor-pointer`}
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
