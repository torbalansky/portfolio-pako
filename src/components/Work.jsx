import React, { useState } from 'react';
import { projectsData } from '../Data/Data';
import SectionWrapper from '../Data/SectionWrapper';
import Modal from './Modal';

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
      <h1 className='text-center text-3xl font-bold mt-16 mb-6'>
        QA Projects Portfolio
      </h1>
      <div className='max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2' data-aos='zoom-in'>
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className='group relative bg-white shadow-md shadow-lime-300 dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer w-full'
            onClick={() => openModal(project)}
            >
            <div className='aspect-video overflow-hidden'>
              <img 
                src={project.image} 
                alt={project.title} 
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lime-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className='p-3'>
              <h2 className='text-lg text-gray-700 font-bold mb-1'>{project.title}</h2>
                <p className='text-gray-600 dark:text-gray-300 mb-2 text-sm'>{project.info}</p>
                <div className='flex flex-wrap gap-1'>
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className={`text-xs px-1.5 py-0.5 rounded-full ${
                      tech.toLowerCase().includes('test') || 
                      tech.toLowerCase().includes('selenium') || 
                      tech.toLowerCase().includes('cypress') || 
                      tech.toLowerCase().includes('jest')
                        ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
                    }`}>
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className='text-xs px-1.5 py-0.5 bg-lime-300 dark:bg-slate-900 rounded-full'>
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
      </SectionWrapper>
    );
};

export default Work;