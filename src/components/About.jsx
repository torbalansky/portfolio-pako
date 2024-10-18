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
      <h3 className="font-semibold text-lg" data-aos='zoom-in'>{title}</h3>
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
              Gained a solid foundation in molecular biology, focusing on nanotech and protein post-translational modification.
            </p>
            <LadderStep title="2nd Big Inspiration: Coding Discovery" icon={<FaLaptopCode className="w-10 h-10" />} />
            <p className='p-2 font-mono text-left' data-aos='fade-up'>
            During my second postdoc, I felt the same excitement I had for Dolly when I discovered coding. It opened a new world for me—new languages, a way of communicating with machines, and new ways of understanding the world. Since that moment, I’ve committed myself to becoming a developer, eager to explore and innovate through code.
            <br /><br /> In addition to my development journey, I am also passionate about Quality Assurance. I completed a course in QA at SoftUni, which deepened my interest in this field. My research background makes me well-suited for QA, as I am detail-oriented and have a keen eye for discrepancies. I possess strong analytical and problem-solving skills, and excellent attention to detail. 
            <br /><br />I am currently seeking a company where I can learn and grow in the tech world. The complexity and variety of stacks I need to master can be overwhelming, but I am patient and willing to put in the effort.
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
