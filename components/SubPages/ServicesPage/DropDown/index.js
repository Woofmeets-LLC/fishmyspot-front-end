import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

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
};

const DropDown = ({ title, options }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className='fixed bg-white pt-5 pl-4 pr-6 z-50 rounded-lg'>
      {
        options?.map((option, i) => (
          <div
            key={i}
            className='flex items-center space-x-3 mb-4 pr-10 text-base font-trade-gothic-bold'
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
            {
              title === 'User rating' && (
                Array.from({ length: i + 1 }, (_, i) => i + 1).map(star => (
                  <span
                    key={star + 100}
                    className="text-base text-secondary"
                  >
                    <FaStar className='inline-block -mr-2' />
                  </span>
                ))
              )
            }
          </div>
        ))
      }
    </motion.div>
  );
};

export default DropDown;