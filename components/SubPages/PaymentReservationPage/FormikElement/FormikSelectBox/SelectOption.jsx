import React from 'react';

const SelectOption = ({ title, value }) => {
  return (
    <option value={value} className="cursor-pointer">{title}</option>
  );
};

export default SelectOption;