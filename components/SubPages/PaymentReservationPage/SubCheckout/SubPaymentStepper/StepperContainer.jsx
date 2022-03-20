import React from 'react';
import StepperItem from './StepperItem';

const StepperContainer = ({ step, stepperArray }) => {
  return (
    <div className='mb-16 2xl:mb-20 px-9'>
      <div className='flex items-center gap-2'>
        {
          stepperArray.map((title, index) => <StepperItem
            key={index}
            index={index}
            step={step}
            title={title}
            totalStep={stepperArray.length}
          />
          )
        }
      </div>
    </div>
  );
};

export default StepperContainer;