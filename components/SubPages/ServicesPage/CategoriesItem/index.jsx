import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import DropDown from '../DropDown';

const CategoriesItem = ({ title, onClick }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  return (
    <div className="relative">
      <div
        className='flex items-center border border-[#a8a8a8] rounded-3xl py-2 px-5 cursor-pointer'
        onClick={() => setIsDropDown(!isDropDown)}
      >
        {title}
        {
          isDropDown ?
            <IoIosArrowUp className='ml-2' /> :
            <IoIosArrowDown className='ml-2' />
        }
        {
          isDropDown &&
          <DropDown />
        }
      </div>
    </div>
  );
};

export default CategoriesItem;