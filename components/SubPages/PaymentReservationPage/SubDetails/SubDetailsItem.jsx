import React from 'react';

const SubDetailsItem = ({ item, value }) => {
  return (
    <div className={`flex justify-between text-base xl:text-xl mb-2`}>
      <p className={`${item === 'Total' ? 'font-trade-gothic-bold' : 'font-trade-gothic'} text-highlight-1`}>{item}</p>
      <p className={`${item === 'Fishing spot' ? 'w-[187px] text-right' : ''} font-trade-gothic-bold text-highlight-1`}>{value}</p>
    </div>
  );
};

export default SubDetailsItem;