import React from 'react';

const StatusButton = ({ title }) => {
  return (
    <button className={`text-[#fcfcfc] font-trade-gothic py-2 px-6 md:py-3 md:px-8 lg:px-10 2xl:py-4 2xl:px-14 ${title === 'Canceled' ? 'bg-[#ff6546]' : 'bg-[#65947e]'} rounded`}>
      {title}
    </button>
  );
};

export default StatusButton;