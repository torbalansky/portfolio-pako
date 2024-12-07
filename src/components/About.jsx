import React from 'react';
import SectionWrapper from '../Data/SectionWrapper';
import { FaLaptopCode } from 'react-icons/fa';
import { GiSheep, GiGraduateCap } from 'react-icons/gi';
import { PiBaby } from "react-icons/pi";
import { BsHeadsetVr } from "react-icons/bs";
import { MdMusicNote, MdOutlineTravelExplore, MdOutlineEmojiNature } from 'react-icons/md';
import { useTheme } from '../Data/Theme';

const timelineData = [
  {
    id: 1,
    title: "Born in the wild 1984",
    icon: PiBaby,
    content: "Growing up during the fall of the Berlin Wall, I transitioned from a child of communism to an enthusiastic advocate for democracy. My generation jokingly refers to ourselves as 'transition kiddos'. I suppose this experience has made me more adaptable to change than many others. Talk about a reality check! Oh, and I was born just two years before Chernobyl, so let's say my nuclear upbringing comes with no guarantees!"
  },
  {
    id: 2,
    title: "1st Big Inspiration: Dolly the Sheep",
    icon: GiSheep,
    content: "Hearing about Dolly the Sheep (5th of July 1996) sparked my fascination with molecular biology. So I ended up defending:"
  },
  {
    id: 3,
    title: "Ph.D. in Molecular Biology",
    icon: GiGraduateCap,
    content: "Gained a solid foundation in molecular biology, focusing on nanotech and protein post-translational modifications."
  },
  {
    id: 4,
    title: "2nd Big Inspiration: Coding Discovery",
    icon: FaLaptopCode,
    content: "During my second postdoc, I discovered coding, which opened up a new world of languages and problem-solving. This journey naturally led me to Quality Assurance, where my research background honed my attention to detail and precision. Completing a QA course at SoftUni solidified my skills in manual testing, bug reporting, and test planning while sparking my interest in automation. QA combines my love for systematic problem-solving with a focus on software quality, making it the field I am excited to pursue."
  },
  {
    id: 5,
    title: "Hobbies",
    icon: BsHeadsetVr,
    content: "My biggest hobby at the moment is exploring the exciting world of VR. It's a fantastic way to combine my love for technology with creativity!"
  }
];

const TimelineStep = ({ title, Icon, content }) => {
  const { theme } = useTheme();
  const borderColor = theme === 'light' ? 'border-slate-300' : 'border-slate-600';
  const iconBg = theme === 'light' ? 'bg-white' : 'bg-slate-800';
  const hoverColor = theme === 'light' ? 'group-hover:border-blue-500 group-hover:text-blue-500' : 'group-hover:border-green-500 group-hover:text-green-500';

  return (
    <div className={`timeline-step group relative pb-8 pl-8 border-l-2 ${borderColor} last:border-l-0`} data-aos='fade-up'>
      <div className={`absolute -left-4 top-0 w-8 h-8 ${iconBg} border-2 ${borderColor} rounded-full ${hoverColor} transition-colors`}>
        <Icon className={`w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${theme === 'light' ? 'text-slate-800' : 'text-white'}`} />
      </div>
      <div className="ml-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

const About = () => {
  const { theme } = useTheme();
  const tagBg = theme === 'light' ? 'bg-slate-100 hover:bg-slate-200' : 'bg-slate-600 hover:bg-slate-500';

  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-12" data-aos='fade-down'>
          About Me
        </h1>
        <div className="timeline">
          {timelineData.map(({ id, title, icon: Icon, content }) => (
            <TimelineStep
              key={id}
              title={title}
              Icon={Icon}
              content={content}
            />
          ))}
        </div>
        
        <div className="mt-8 flex flex-wrap gap-4 justify-center" data-aos='fade-up'>
          {[
            { Icon: MdOutlineTravelExplore, label: 'Travel' },
            { Icon: MdOutlineEmojiNature, label: 'Nature' },
            { Icon: MdMusicNote, label: 'Music' },
            { Icon: BsHeadsetVr, label: 'VR' }
          ].map(({ Icon, label }, index) => (
            <span 
              key={index} 
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${tagBg} transition-colors cursor-pointer`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;