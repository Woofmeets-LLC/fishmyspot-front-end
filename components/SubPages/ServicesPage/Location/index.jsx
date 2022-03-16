import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
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
}

const Location = ({ selectedCities, setSelectedCities }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const options = [
    {
      name: 'Florida',
      value: '27.6648:81.5158'
    },
    {
      name: 'California',
      value: '36.7783:119.4179'
    },
    {
      name: 'Georgia',
      value: '32.1656:82.9001'
    },
    {
      name: 'Alabama',
      value: '32.3182:86.9023'
    },
    {
      name: 'District of Columbia',
      value: '38.9072:77.0369'
    },
  ];

  const cityAddOrRemove = (value) => {
    if (selectedCities === value) {
      setSelectedCities((prevState) => {
        return {
          ...prevState,
          location: ''
        }
      });
    }
    else {
      setSelectedCities((prevState) => {
        return {
          ...prevState,
          location: value
        }
      });
    }
  }

  return (
    <div>
      <div
        className={styles['list-item']}
        onClick={() => setIsDropDown(!isDropDown)}
      >
        Location
        {
          isDropDown ?
            <IoIosArrowUp /> :
            <IoIosArrowDown />
        }
      </div>
      <AnimatePresence>
        {
          isDropDown &&
          (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={styles['dropdown']}>
              {
                options?.map((option, i) => {
                  return (
                    <div
                      key={i}
                      className={styles['dropdown-item']}
                    >
                      <input
                        type={"radio"}
                        name={"location"}
                        id={option.value}
                        value={option.value}
                        checked={selectedCities === option.value ? true : false}
                        onChange={() => cityAddOrRemove(option.value)}
                        className="accent-secondary w-4 h-4 md:w-5 md:h-5"
                      />
                      <motion.label
                        htmlFor={option.value}
                        variants={hoverVariants}
                        whileHover="hover"
                      >
                        {option.name}
                      </motion.label>

                    </div>
                  )
                })
              }
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default Location;