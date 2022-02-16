import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Slider from '../Slider';

const PriceSlider = () => {
  const [isPrice, setIsPrice] = useState(false);

  return (
    <div className='relative'>
      <div
        className='flex items-center border border-[#a8a8a8] rounded-3xl py-2 px-5 cursor-pointer'
        onClick={() => setIsPrice(!isPrice)}
      >
        Price range
        <IoIosArrowDown className='ml-2' />
      </div>
      {
        isPrice && (
          <div className='absolute'>
            <Slider />
          </div>
        )
      }
    </div>
  );
};

export default PriceSlider;