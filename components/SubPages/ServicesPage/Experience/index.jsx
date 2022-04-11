import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
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
        className="bg-white flex items-center justify-between border border-gray-300 rounded-3xl py-1 px-3 lg:py-2 lg:px-5 cursor-pointer text-base font-trade-gothic text-primary"
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
            ref={dropdown}
            className="absolute bg-white pt-5 pl-4 pr-6 z-50 rounded-lg shadow border-gray-100">
            {
              options?.map((option, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 mb-4 text-sm md:text-base font-trade-gothic-bold"
                >
                  <input
                    type={"checkbox"}
                    name={option}
                    id={option}
                    value={option}
                    checked={experience?.includes(option) ? true : false}
                    onChange={() => experienceAddOrRemove(option)}
                    className="accent-secondary w-4 h-4 md:w-5 md:h-5 cursor-pointer"
                  />
                  <motion.label
                    htmlFor={option}
                    variants={hoverVariants}
                    whileHover="hover"
                    className="cursor-pointer"
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