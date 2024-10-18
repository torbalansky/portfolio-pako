import React from 'react';
import heroImg from '../assets/me.jpg';
import { PiLinkedinLogo } from "react-icons/pi";
import { LiaGithubSquare, LiaResearchgate } from "react-icons/lia";
import SectionWrapper from '../Data/SectionWrapper';

const Hero = () => {
  return (
    <SectionWrapper>
      <div className="hero-section min-h-svh flex flex-col md:flex-row items-center justify-center text-center md:text-left" data-aos="fade-down">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-24">
          <img src={heroImg} alt="Profile picture of Pako" className="w-60 h-800 md:w-60 md:h-80 rounded border-2 border-gray-300" />
        </div>
        <div className="flex flex-col items-center md:items-center justify-center">
          <h1 className="text-1xl md:text-3xl font-bold mt-2 md:mt-4">Stateva/Paco</h1>
          <p className="font-mono text-xs md:text-xs font-semibold m-2 md:mt-3">Frontend Developer | QA | Molecular Biologist</p>
          <div className="flex justify-center md:justify-start gap-4 mt-2 items-center">
            <a href="https://www.linkedin.com/in/pacostathis/" target="_blank" rel="noopener noreferrer">
              <PiLinkedinLogo className="w-9 h-9 md:w-11 md:h-11 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />
            </a>
            <a href="https://github.com/torbalansky" target="_blank" rel="noopener noreferrer">
              <LiaGithubSquare className="w-10 h-10 md:w-12 md:h-12 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />
            </a>
            <a href="https://www.researchgate.net/profile/Silviya-Stateva" target="_blank" rel="noopener noreferrer">
              <LiaResearchgate className="w-10 h-10 md:w-12 md:h-12 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />
            </a>
          </div>
          <p className="font-mono mt-3 md:mt-4 text-base mb-2 md:text-base">
            Results-driven full-stack developer <br /> transitioning from research to tech.
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Hero;
