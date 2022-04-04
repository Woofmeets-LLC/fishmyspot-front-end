import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from '../Categories/Categories.module.css';

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
    scale: 1.03,
    originX: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
    }
  }
};

const UserRating = ({ ratings, setRatings }) => {

  const [isDropDown, setIsDropDown] = useState(false);
  // create a React ref for the dropdown element
  const dropdown = useRef(null);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!isDropDown) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setIsDropDown(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [isDropDown]);

  const options = [
    'One star',
    'Two star',
    'Three star',
    'Four star',
    'Five star'
  ];

  const ratingsAddOrRemove = (rating) => {
    const findRating = ratings?.length > 0 ? ratings?.find(r => r === rating) : undefined;
    if (findRating !== undefined) {
      const filterRatings = ratings?.filter(r => r !== rating);
      setRatings((prevState) => {
        return {
          ...prevState,
          rating: filterRatings
        }
      });
    }
    else {
      setRatings((prevState) => {
        return {
          ...prevState,
          rating: [rating]
        }
      });
    }
  }


  return (
    <div className='ml-0'>
      <div
        className={styles['list-item']}
        onClick={() => setIsDropDown(!isDropDown)}
      >
        User rating
        {
          isDropDown ?
            <IoIosArrowUp /> :
            <IoIosArrowDown />
        }
      </div>
      <AnimatePresence>
        {
          isDropDown && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              ref={dropdown}
              className="absolute bg-white pt-3 pb-1 px-4 z-50 rounded-lg shadow border-gray-100">
              {
                options?.map((option, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-7 sm:grid-cols-11 items-center space-x-3 mb-2 text-sm md:text-base font-trade-gothic-bold"
                  >
                    <div className="col-span-1 mt-2">
                      <input
                        type={"radio"}
                        name={option}
                        id={option}
                        value={option}
                        checked={ratings?.includes(option) ? true : false}
                        onChange={() => ratingsAddOrRemove(option)}
                        className="accent-secondary w-4 h-4 md:w-5 md:h-5"
                      />
                    </div>
                    <div className="hidden sm:block sm:col-span-4">
                      <motion.label
                        htmlFor={option}
                        variants={hoverVariants}
                        whileHover="hover"
                      >
                        {option}
                      </motion.label>
                    </div>
                    <div className="col-span-5">
                      <label htmlFor={option} className='flex items-center space-x-3'>
                        {
                          Array.from({ length: i + 1 }, (_, i) => i + 1).map(star => (
                            <span
                              key={star + 100}
                              className="text-base text-secondary"
                            >
                              <FaStar className='inline-block -mr-2' />
                            </span>
                          ))
                        }
                      </label>
                    </div>
                    {/* <div className='flex items-center space-x-2'>
                      <input
                        type={"radio"}
                        name={option}
                        id={option}
                        value={option}
                        checked={ratings?.includes(option) ? true : false}
                        onChange={() => ratingsAddOrRemove(option)}
                        className="accent-secondary w-4 h-4 md:w-5 md:h-5"
                      />
                      <motion.label
                        htmlFor={option}
                        variants={hoverVariants}
                        whileHover="hover"
                        className='hidden sm:block'
                      >
                        {option}
                      </motion.label>
                    </div>
                    <div className='flex items-center space-x-3'>
                      {
                        Array.from({ length: i + 1 }, (_, i) => i + 1).map(star => (
                          <span
                            key={star + 100}
                            className="text-base text-secondary"
                          >
                            <FaStar className='inline-block -mr-2' />
                          </span>
                        ))
                      }
                    </div> */}
                  </div>
                ))
              }
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default UserRating;