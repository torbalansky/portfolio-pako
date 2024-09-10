import React, { useState } from 'react';
import { projectsData } from '../Data/Data';
import SectionWrapper from '../Data/SectionWrapper';
import Modal from './Modal';
import TechStack from './TechStack';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <SectionWrapper>
      <h1 className='text-center text-2xl font-bold mt-14 mb-6'>Projects</h1>
      <div className='flex flex-wrap justify-center gap-12' data-aos='zoom-in'>
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className='flex flex-col border-b-2 border-green-200 rounded-lg overflow-hidden shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110'
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} className='w-full h-40 object-cover rounded-xl' />
            <div className='p-3'>
              <h2 className='text-md text-center mb-1'>{project.title}</h2>
              <h3 className='text-sm font-mono text-center mb-2'>{project.info}</h3>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />}
      <TechStack />
    </SectionWrapper>
  );
};

export default Work;
