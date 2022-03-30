import React from 'react';

const StatusButton = ({ title }) => {
  return (
    <span className={`inline-block text-center text-[#fcfcfc] font-trade-gothic py-2 px-3  ${title === 'Canceled' ? 'bg-[#ff6546]' : title == 'Ready for review' ? 'bg-blue-500' : 'bg-[#65947e]'} rounded`}>
      {title}
    </span>
  );
};

export default StatusButton;