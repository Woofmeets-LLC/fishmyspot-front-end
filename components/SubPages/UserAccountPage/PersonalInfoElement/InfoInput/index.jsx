import React from 'react';

const InfoInput = ({ label, ...props }) => {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-2xl text-highlight-1 font-trade-gothic-bold mb-2"
      >
        {label}
      </label>
      <input
        type={props.type ? props.type : 'text'}
        {...props}
        className="block w-full p-3 font-trade-gothic text-lg text-highlight-1 bg-white bg-clip-padding bg-no-repeat  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none"
      />
    </div>
  );
};

export default InfoInput;