import React from 'react';

const Features = ({ title, items = [] }) => {
  return (
    <>
      <h3 className='text-3xl font-food-truck text-primary uppercase mb-4'>{title}</h3>
      {
        items.map((item, i) => {
          return (
            <div key={i} className='flex items-center space-x-4 mb-3'>
              <div className='w-2 h-2 bg-secondary rounded-full'></div>
              <div className='text-xl text-highlight-1 font-trade-gothic'>{item}</div>
            </div>
          )
        })
      }
    </>
  );
};

export default Features;