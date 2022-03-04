import React from 'react';

const InfoSelect = ({ label, children, name, ...props }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-2xl text-highlight-1 font-trade-gothic-bold mb-2"
      >
        {label}
      </label>
      <select
        {...props}
        className="block w-full px-3 py-4 font-trade-gothic text-lg text-primary bg-white bg-clip-padding bg-no-repeat font-medium border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none cursor-pointer"
      >
        {children}
      </select>
    </div>
  );
};

export default InfoSelect;