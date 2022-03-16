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
};

const Experience = ({ experience, setExperience }) => {

  const [isDropDown, setIsDropDown] = useState(false);
  const options = [
    'Pond Trawler/Metal Boat',
    'Campsite',
  ];

  const experienceAddOrRemove = (exp) => {
    const findExperience = experience?.length > 0 ? experience?.find(e => e === exp) : undefined;

    if (findExperience !== undefined) {
      const filterExperience = experience?.filter(e => e !== exp);
      setExperience((prevState) => {
        return {
          ...prevState,
          experience: filterExperience
        }
      });
    }
    else {
      setExperience((prevState) => {
        return {
          ...prevState,
          experience: [...prevState.experience, exp]
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
        Experience
        {
          isDropDown ?
            <IoIosArrowUp /> :
            <IoIosArrowDown />
        }
      </div>
      <AnimatePresence>
        {
          isDropDown &&
          (<motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={styles['dropdown']}>
            {
              options?.map((option, i) => (
                <div
                  key={i}
                  className={styles['dropdown-item']}
                >
                  <input
                    type={"checkbox"}
                    name={option}
                    id={option}
                    value={option}
                    checked={experience?.includes(option) ? true : false}
                    onChange={() => experienceAddOrRemove(option)}
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
              ))
            }
          </motion.div>)
        }
      </AnimatePresence>
    </div>
  );
};

export default Experience;