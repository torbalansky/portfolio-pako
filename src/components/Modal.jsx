const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="font-poppins fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white dark:bg-gray-800 w-full max-w-2xl rounded-xl shadow-2xl my-4">
        <div className="relative h-72 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
            <p className="text-base opacity-90">{project.info}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute p-2 bottom-0 right-0 bg-slate-600 hover:bg-black/40 text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="text-base font-semibold mb-1">Project Overview</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 text-sm">
            {project.highlights && (
              <div>
                <h3 className="text-base font-semibold mb-1">Key Features</h3>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-1 mt-0.5 text-green-500">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.testingScope && (
              <div>
                <h3 className="text-base font-semibold mb-1">Testing Coverage</h3>
                <ul className="space-y-1">
                  {project.testingScope.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-1 mt-0.5 text-blue-500">⚡</span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Tech Stack & Testing Tools</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech, index) => (
                <span 
                  key={index} 
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    tech.toLowerCase().includes('test') || 
                    tech.toLowerCase().includes('selenium') || 
                    tech.toLowerCase().includes('cypress') || 
                    tech.toLowerCase().includes('jest')
                      ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100'
                      : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 text-center px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                View Live Demo
              </a>
            )}
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 text-center px-4 py-2 text-sm bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;