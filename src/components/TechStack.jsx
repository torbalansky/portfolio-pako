import React from 'react';
import { techData } from '../Data/Data';

const TechStack = () => {
  return (
    <section className='mt-6' data-aos="zoom-in-right">
      <div className='flex flex-wrap justify-center gap-1.5'>
        <h3 className='text-center text-sm md:text-base font-mono mb-2 w-full'>Core Skills:</h3>
        {techData.map((tech) => {
          const LogoComponent = tech.logo;
          return (
            <div
              key={tech.id}
              className='flex flex-col items-center text-center p-0.5 border rounded-lg shadow-sm text-white'
              style={{ backgroundColor: tech.backgroundColor }}
            >
              <div className='text-xl md:text-2xl'>
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
