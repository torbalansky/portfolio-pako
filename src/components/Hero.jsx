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
      <div className="min-h-full flex flex-col-reverse justify-center items-center text-center" data-aos='fade-down'>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24 mt-28">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-2xl font-bold mt-4">Plamen/Paco</h1>
            <h2 className="font-mono text-md font-semibold mt-2">FRONTEND DEVELOPER</h2>
            <div className="flex justify-center gap-4 mt-2 text-center items-center">
              <a href="https://www.linkedin.com/in/plamenstatev/" target="_blank" rel="noopener noreferrer">
                <PiLinkedinLogo className="w-8 h-8 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />
              </a>
              <a href="https://github.com/torbalansky" target="_blank" rel="noopener noreferrer">
                <LiaGithubSquare className="w-9 h-9 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />
              </a>
              <a href="https://www.researchgate.net/profile/Silviya-Stateva" target="_blank" rel="noopener noreferrer">
                <LiaResearchgate className="w-9 h-9 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110" />
              </a>
            </div>
            <p className="font-mono mt-4 text-center md:text-left">
              Results-driven Full-Stack Developer <br /> transitioning from research to tech.
            </p>
            <a href={CV} download>
              <button className="mt-8 text-xs flex gap-1 items-center p-2 rounded bg-blue-500 text-white transition-all duration-300 ease-in-out hover:bg-green-300 hover:scale-110 hover:text-black">
                <IoMdDownload className="w-5 h-5" /> Resume
              </button>
            </a>
          </div>
          <div className="flex justify-center">
            <img src={heroImg} alt="Profile picture of Pako" className="w-60 h-60 rounded-full border-2 border-gray-300" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
