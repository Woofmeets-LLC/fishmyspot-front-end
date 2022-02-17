import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Slider from '../Slider';

const PriceSlider = () => {
  const [isPrice, setIsPrice] = useState(false);

  return (
    <div className='relative mt-0'>
      <div
        className='flex items-center border border-[#a8a8a8] rounded-3xl py-1 px-3 lg:py-2 lg:px-5 cursor-pointer text-base font-trade-gothic text-primary'
        onClick={() => setIsPrice(!isPrice)}
      >
        Price range
        {
          isPrice ?
            <IoIosArrowUp className='ml-2' /> :
            <IoIosArrowDown className='ml-2' />
        }
      </div>
      {
        isPrice && (
          <div className='absolute w-full'>
            <Slider />
          </div>
        )
      }
    </div>
  );
};

export default PriceSlider;