import React from 'react';

const StepperItem = ({ index, step, title, totalStep }) => {
  return (
    <>
      <div className="flex items-center relative">
        <div className={`flex items-center justify-center rounded-full transition duration-500 ease-in-out h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 py-3 border text-xs ${index <= step ? 'bg-highlight-3 border-highlight-3 text-white' : 'border-primary text-primary'}`}>
          {index + 1}
        </div>
        <div className={`absolute top-0 -ml-11 mt-8 sm:mt-9 md:mt-11 font-trade-gothic text-center ${title === 'Payment method' ? '-ml-3 sm:-ml-11 sm:w-[124px] md:w-[134px]' : 'w-28 sm:w-[120px] md:w-32'} text-sm md:text-lg ${index <= step ? 'text-highlight-3 font-trade-gothic-bold' : 'text-primary'}`}>{title}</div>
      </div>
      {
        totalStep - 1 != index &&
        <div className={`flex-auto border-t-2 border-dashed transition duration-500 ease-in-out ${index < step ? 'border-highlight-3' : 'border-gray-500'}`}></div>
      }
    </>
  );
};

export default StepperItem;