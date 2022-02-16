import React from 'react';
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

const Slider = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className='absolute w-[216px] bg-white pt-3 px-4 z-50 rounded-lg'>

      <div
        className='mb-4 text-base font-trade-gothic-bold'
      >
        <div className='text-2xl font-trade-gothic-bold text-primary mb-2'>
          <h3>Price range:</h3>
        </div>

        <div className='flex justify-between mb-4'>
          <input
            value={35}
            min={0}
            max={100}
            type="number"
            onChange={(e) => console.log(e.target.value)}
            className='focus:outline-none border-b-2 border-b-secondary text-lg font-trade-gothic text-primary text-center'
          />
          <input
            value={250}
            min={0}
            max={1000}
            type="number"
            onChange={(e) => console.log(e.target.value)}
            className='focus:outline-none border-b-2 border-b-secondary text-lg font-trade-gothic text-primary text-center'
          />
        </div>

        <div className='w-full'>
          <Range
            allowCross={false}
            defaultValue={[0, 100]}
            onChange={(e) => console.log(e.target)}
          />
        </div>

        <div className='flex justify-between items-center text-base text-primary mt-6'>
          <span className='font-trade-gothic cursor-pointer'>Clear</span>
          <span className='font-trade-gothic-bold cursor-pointer'>Apply</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;