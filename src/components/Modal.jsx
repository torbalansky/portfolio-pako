import React from 'react';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="h-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white py-4 px-4 max-w-lg w-full rounded-lg shadow-lg z-50">
        <button
          onClick={onClose}
          className="close-btn absolute top-2 right-2 text-2xl text-black border-none px-2"
        >
          &times;
        </button>
        <div className="flex justify-center mb-4">
          <img 
            src={project.image} 
            alt={project.title} 
            className='w-80 h-60 object-cover rounded-lg' 
          />
        </div>
        <h2 className="text-3xl mb-4 text-black text-center font-mono">{project.title}</h2>
        <p className="text-black font-mono text-sm mb-2 text-center"><strong>{project.info}</strong></p>
        <p className="text-black font-mono text-sm mb-2"><strong>Description:</strong> {project.description}</p>
        <p className="text-black font-mono text-sm mb-2"><strong>Tech:</strong> {project.tech}</p>
        <div className="text-center mt-2">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='w-24 inline-block font-mono bg-blue-400 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-green-300 hover:scale-110 hover:text-black'
          >
            LiveApp
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className='w-24 inline-block font-mono bg-blue-400 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-green-300 hover:scale-110 hover:text-black ml-4'
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
