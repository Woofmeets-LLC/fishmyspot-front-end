import React from 'react';

const Features = ({ title, items = [] }) => {
  return (
    <>
      <h3 className='text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-food-truck text-primary uppercase mb-1 md:mb-2 xl:mb-4'>{title}</h3>
      {
        items.map((item, i) => {
          return (
            <div key={i} className='flex space-x-4 mb-1 lg:mb-2 2xl:mb-3'>
              <div className="w-2 h-6 flex items-center">
               <div className='w-2 h-2 bg-secondary rounded-full'></div>
              </div>
              <div className='text-base 2xl:text-lg text-highlight-1 font-trade-gothic capitalize'>{item}</div>
            </div>
          )
        })
      }
    </>
  );
};

export default Features;