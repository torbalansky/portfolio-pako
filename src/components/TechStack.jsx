import React from 'react';
import { techData } from '../Data/Data';

const TechStack = () => {
  return (
    <section className='mt-24' data-aos="zoom-in-right">
      <div className='flex flex-wrap justify-center gap-4'>
      <h2 className='text-center text-sm mt-2'>Skills:</h2>
        {techData.map((tech) => {
          const LogoComponent = tech.logo;
          return (
            <div
              key={tech.id}
              className='flex flex-col items-center text-center p-1 border rounded-lg shadow-md text-white'
                style={{ backgroundColor: tech.backgroundColor }}>
              <div className='text-3xl'>
                <LogoComponent className="transition-colors duration-300 ease-in-out hover:scale-110"/>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
