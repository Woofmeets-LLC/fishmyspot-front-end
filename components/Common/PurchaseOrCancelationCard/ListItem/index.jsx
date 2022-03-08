import React from 'react';

const ListItem = ({ title, value }) => {
  return (
    <p>
      <span className='font-trade-gothic-bold'>{title} : </span>
      <span className='font-trade-gothic'>{value}</span>
    </p>
  );
};

export default ListItem;