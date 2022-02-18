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
    'Dhaka',
    'Barishal Barishal',
    'Khulna'
  ];

  const cityAddOrRemove = (cityName) => {
    const findCity = selectedCities?.length > 0 ? selectedCities?.find((city) => city === cityName) : undefined;

    if (findCity !== undefined) {
      const filterCity = selectedCities?.filter(city => city !== cityName);
      setSelectedCities((prevState) => {
        return {
          ...prevState,
          location: filterCity
        }
      });
    }
    else {
      setSelectedCities((prevState) => {
        return {
          ...prevState,
          location: [...prevState.location, cityName]
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
                        type={"checkbox"}
                        name={option}
                        id={option}
                        value={option}
                        checked={selectedCities?.includes(option) ? true : false}
                        onChange={() => cityAddOrRemove(option)}
                        className="accent-secondary w-4 h-4 md:w-5 md:h-5"
                      />
                      <motion.label
                        htmlFor={option}
                        variants={hoverVariants}
                        whileHover="hover"
                      >
                        {option}
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