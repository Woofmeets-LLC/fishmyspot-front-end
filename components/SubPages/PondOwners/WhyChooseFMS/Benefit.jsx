import React from 'react';

const Benefit = ({ title, description }) => {
  return (
    <div className=" font-trade-gothic text-primary">
      <h4 className="font-trade-gothic-bold text-lg">{title}</h4>
      <p className="">{description}</p>
    </div>
  );
};

export default Benefit;
