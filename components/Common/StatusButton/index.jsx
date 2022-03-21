import React from 'react';

const StatusButton = ({ title }) => {
  return (
    <button className={`text-[#fcfcfc] font-trade-gothic py-2 px-6  ${title === 'Canceled' ? 'bg-[#ff6546]' : 'bg-[#65947e]'} rounded`}>
      {title}
    </button>
  );
};

export default StatusButton;