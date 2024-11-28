import React from 'react';
import heroImg from '../assets/me.jpg';
import SectionWrapper from '../Data/SectionWrapper';
import TechStack from './TechStack';

const Hero = () => {
  return (
    <SectionWrapper>
      <div className="hero-section min-h-svh flex flex-col md:flex-row items-center justify-center text-center md:text-left" data-aos="fade-down">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-24">
          <img src={heroImg} alt="Profile picture of Pako" className="w-60 h-800 md:w-60 md:h-80 rounded border-2 border-gray-300" />
        </div>
        <div className="flex flex-col items-center md:items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mt-2 md:mt-4">Stateva/SR</h1>
          <p className="font-mono text-xl md:text-xs font-semibold m-2 md:mt-3"> QA Engineer || Molecular Biologist</p>
          <p className="font-mono mt-3 md:mt-4 text-center text-xl mb-1 md:text-base">
          Detail-Oriented QA Engineer <br /> transitioning from research to tech
          </p>
          <TechStack />
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Hero;
