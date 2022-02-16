import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

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

const hoverVariants = {
  hover: {
    scale: 1.1,
    originX: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
    }
  }
}

const Location = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const options = [
    'Dhaka',
    'Barishal Barishal',
    'Khulna'
  ];
  return (
    <div>
      <div
        className='flex items-center border border-[#a8a8a8] rounded-3xl py-1 px-3 lg:py-2 lg:px-5 cursor-pointer text-base font-trade-gothic text-primary'
        onClick={() => setIsDropDown(!isDropDown)}
      >
        Location
        {
          isDropDown ?
            <IoIosArrowUp className='ml-2' /> :
            <IoIosArrowDown className='ml-2' />
        }
      </div>
      {
        isDropDown &&
        (<motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className='absolute bg-white pt-5 pl-4 pr-6 z-50 rounded-lg'>
          {
            options?.map((option, i) => (
              <div
                key={i}
                className='flex items-center space-x-3 mb-4 text-base font-trade-gothic-bold'
              >
                <input
                  type={"checkbox"}
                  name={option}
                  id={option}
                  value={option}
                  className="accent-secondary w-5 h-5"
                />
                <motion.label
                  htmlFor={option}
                  variants={hoverVariants}
                  whileHover="hover"
                >
                  {option}
                </motion.label>

              </div>
            ))
          }
        </motion.div>)
      }
    </div>
  );
};

export default Location;