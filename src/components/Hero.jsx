import React from 'react';
import heroImg from '../assets/me.png';
import { PiLinkedinLogo } from "react-icons/pi";
import { LiaGithubSquare, LiaResearchgate } from "react-icons/lia";
import CV from '../assets/CV.pdf';
import { IoMdDownload } from "react-icons/io";
import SectionWrapper from '../Data/SectionWrapper';

const Hero = () => {
  return (
    <SectionWrapper>
      <div className="hero-section min-h-svh flex flex-col md:flex-row items-center justify-center text-center md:text-left" data-aos="fade-down">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-24">
          <img src={heroImg} alt="Profile picture of Pako" className="w-40 h-40 md:w-60 md:h-60 rounded-full border-2 border-gray-300" />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center">
          <h1 className="text-2xl md:text-3xl font-bold mt-2 md:mt-4">Plamen/Paco</h1>
          <h2 className="font-mono text-md md:text-md font-semibold mt-1 md:mt-2">FRONTEND DEVELOPER</h2>
          <div className="flex justify-center md:justify-start gap-4 mt-2 items-center">
            <a href="https://www.linkedin.com/in/plamenstatev/" target="_blank" rel="noopener noreferrer">
              <PiLinkedinLogo className="w-7 h-7 md:w-8 md:h-8 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />
            </a>
            <a href="https://github.com/torbalansky" target="_blank" rel="noopener noreferrer">
              <LiaGithubSquare className="w-8 h-8 md:w-9 md:h-9 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />
            </a>
            <a href="https://www.researchgate.net/profile/Silviya-Stateva" target="_blank" rel="noopener noreferrer">
              <LiaResearchgate className="w-8 h-8 md:w-9 md:h-9 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />
            </a>
          </div>
          <p className="font-mono mt-3 md:mt-4 text-xl mb-2 md:text-base">
            Results-driven full-stack developer <br /> transitioning from research to tech.
          </p>
          <a href={CV} download>
            <button className="mt-4 md:mt-6 text-xs md:text-sm flex gap-1 items-center p-2 md:p-3 rounded bg-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-green-300 hover:scale-110 hover:text-black">
              <IoMdDownload className="w-4 h-4 md:w-5 md:h-5" /> Resume
            </button>
          </a>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Hero;
