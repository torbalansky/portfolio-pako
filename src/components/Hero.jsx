import React from 'react';
import heroImg from '../assets/me.jpg';
import SectionWrapper from '../Data/SectionWrapper';
import TechStack from './TechStack';
import { useTheme } from '../Data/Theme';

const Hero = () => {
  const { theme } = useTheme();
  const gradientColors = theme === 'light' 
    ? 'from-blue-500 to-purple-500' 
    : 'from-green-500 to-blue-500';
  
  const borderColor = theme === 'light' 
    ? 'border-slate-300' 
    : 'border-slate-600';

  return (
    <SectionWrapper>
      <div className="container mt-28 mx-auto px-4 min-h-[calc(100vh-200px)]">
        <div 
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 h-full py-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r ${gradientColors} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
            <img 
              src={heroImg} 
              alt="Profile" 
              className={`relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg shadow-xl transform transition duration-500 group-hover:scale-105 border-2 ${borderColor}`}
              loading="eager"
            />
          </div>

          <div className="flex flex-col items-center space-y-4 max-w-lg text-center">
            <div className="space-y-2">
              <h1 className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradientColors}`}>
                Stateva/SR
              </h1>
              <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
                <span className="font-mono text-sm md:text-base font-medium">
                  QA Engineer
                </span>
                <span className="hidden md:block">|</span>
                <span className="font-mono text-sm md:text-base font-medium">
                  Molecular Biologist
                </span>
              </div>
            </div>

            <p className="font-mono text-sm md:text-base">
              Detail-Oriented QA Engineer<br />
              transitioning from research to tech
            </p>

            <div 
              data-aos="fade-up" 
              data-aos-delay="200" 
              className="w-full"
            >
              <TechStack />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
