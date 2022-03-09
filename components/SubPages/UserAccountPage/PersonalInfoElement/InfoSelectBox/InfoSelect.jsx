import React from 'react';

const InfoSelect = ({ label, children, name, ...props }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-base md:text-lg lg:text-xl 2xl:text-2xl text-highlight-1 font-trade-gothic-bold mb-1 lg:mb-2"
      >
        {label}
      </label>
      <select
        {...props}
        className="block w-full px-2 py-[10px] 2xl:px-3 2xl:py-[15px] font-trade-gothic text-sm lg:text-base 2xl:text-lg text-primary bg-white bg-clip-padding bg-no-repeat font-medium border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none cursor-pointer"
      >
        {children}
      </select>
    </div>
  );
};

export default InfoSelect;