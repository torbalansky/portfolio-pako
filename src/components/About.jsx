import React from 'react';
import SectionWrapper from '../Data/SectionWrapper';
import { FaLaptopCode } from 'react-icons/fa';
import { GiSheep, GiGraduateCap } from 'react-icons/gi';
import { PiBaby } from "react-icons/pi";
import { BsHeadsetVr } from "react-icons/bs";
import { MdMusicNote, MdOutlineTravelExplore, MdOutlineEmojiNature } from 'react-icons/md';

const LadderStep = ({ title, icon }) => (
  <div className="ladder-step flex items-center mb-4" data-aos='zoom-in'>
    <div className="step-icon mr-3" data-aos='zoom-in'>{icon}</div>
    <div className="step-title" data-aos='zoom-in'>
      <h3 className="font-semibold text-lg ladder-title" data-aos='zoom-in'>{title}</h3>
    </div>
  </div>
);

const About = () => {
  return (
    <SectionWrapper>
      <div className="about-section min-h-svh flex flex-col items-center justify-center text-center font-sans">
        <h1 className="text-xl md:text-2xl font-bold mt-20 mb-6" data-aos='zoom-in'>About Me</h1>
        <div className="ladder-container flex flex-col items-center">
          <div className="ladder">
            <LadderStep title="Born in the wild 1984" icon={<PiBaby className="w-10 h-10" />} />
            <p className='p-2 font-mono text-left' data-aos='fade-up'>
            Growing up during the fall of the Berlin Wall, I transitioned from a child of communism to an enthusiastic advocate for democracy. My generation jokingly refers to ourselves as "transition kiddos". I suppose this experience has made me more adaptable to change than many others. Talk about a reality check! Oh, and I was born just two years before Chernobyl, so let’s say my nuclear upbringing comes with no guarantees!
            </p>
            <LadderStep title="1st Big Inspiration: Dolly the Sheep" icon={<GiSheep className="w-10 h-10" />} />
            <p className='p-2 font-mono text-left' data-aos='fade-up'>
              Hearing about Dolly the Sheep (5th of July 1996) sparked my fascination with molecular biology. So I ended up defending:
            </p>
            <LadderStep title="Ph.D. in Molecular Biology" icon={<GiGraduateCap className="w-10 h-10" />} />
            <p className='p-2 font-mono text-left' data-aos='fade-up'>
              Gained a solid foundation in molecular biology, focusing on nanotech and protein post-translational modifications.
            </p>
            <LadderStep title="2nd Big Inspiration: Coding Discovery" icon={<FaLaptopCode className="w-10 h-10" />} />
            <p className='p-2 font-mono text-left' data-aos='fade-up'>
              During my second postdoc, I discovered coding, which opened up a new world of languages and problem-solving. This journey naturally led me to Quality Assurance, where my research background honed my attention to detail and precision. Completing a QA course at SoftUni solidified my skills in manual testing, bug reporting, and test planning while sparking my interest in automation.  
              <br /><br /> QA combines my love for systematic problem-solving with a focus on software quality, making it the field I am excited to pursue.
            </p>
            <LadderStep title="Hobbies" icon={<BsHeadsetVr className="w-10 h-10" />} />
            <p className='p-2 font-mono text-left' data-aos='fade-up'>
            My biggest hobby at the moment is exploring the exciting world of VR. It’s a fantastic way to combine my love for technology with creativity! I also enjoy traveling <MdOutlineTravelExplore className="inline w-5 h-5" />, immersing myself in nature <MdOutlineEmojiNature className="inline w-5 h-5" />, and listening to music <MdMusicNote className="inline w-5 h-5" />!
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
