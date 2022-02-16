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
    <div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className='fixed bg-white pt-5 pl-4 pr-6 z-50 rounded-lg'>

        <div

          className='flex flex-wrap items-center space-x-3 mb-4 pr-10 text-base font-trade-gothic-bold'
        >
          <div className='w-full'>
            <Range
              allowCross={false}
              defaultValue={[0, 100]}
              onChange={(e) => console.log(e.target)}
            />
          </div>
          something
        </div>
      </motion.div>
    </div>
  );
};

export default Slider;