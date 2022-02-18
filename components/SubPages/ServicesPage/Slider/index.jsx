import React, { useEffect, useState } from 'react';
import { Range } from 'rc-slider';
import { motion } from 'framer-motion';
import 'rc-slider/assets/index.css';

const variants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    y: 5,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
      type: 'spring',
      stiffness: 120
    }
  }
};

const Slider = ({
  value,
  onSliderChange,
  setValue,
  min,
  max,
  handlePriceClear,
}) => {



  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className='absolute bg-white py-3 px-4 z-50 rounded-lg shadow border-gray-100'>

      <div className='text-base font-trade-gothic-bold'>
        <div className='text-lg md:text-2xl font-trade-gothic-bold text-primary mb-2'>
          <h3>Price range:</h3>
        </div>

        <div className='flex justify-between space-x-10 mb-4'>
          <input
            value={value[0]}
            min={0}
            max={value[1]}
            type="number"
            onChange={(e) => setValue((prevState) => {
              return {
                ...prevState,
                price: [e.target.value, prevState.price[1]]
              }
            })}
            className='w-10 sm:w-16 md:w-20 focus:outline-none border-b-2 border-b-secondary text-base md:text-lg font-trade-gothic text-primary text-center'
          />
          <input
            value={value[1]}
            min={value[0]}
            type="number"
            onChange={(e) => setValue((prevState) => {
              return {
                ...prevState,
                price: [prevState.price[0], e.target.value]
              }
            })}
            className='w-10 sm:w-16 md:w-20 focus:outline-none border-b-2 border-b-secondary text-base md:text-lg font-trade-gothic text-primary text-center'
          />
        </div>

        <div>
          <Range
            min={min}
            max={max}
            allowCross={false}
            value={value}
            onChange={onSliderChange}
          />
        </div>

        <div className='flex justify-between items-center text-sm md:text-base text-primary mt-6'>
          <span
            className='font-trade-gothic cursor-pointer'
            onClick={handlePriceClear}
          >
            Clear
          </span>
          <span
            className='font-trade-gothic-bold cursor-pointer'
          >
            Apply
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;