import React from 'react';

const InfoSelectOption = ({ title, value }) => {
  return (
    <option value={value} className="cursor-pointer">{title}</option>
  );
};

export default InfoSelectOption;