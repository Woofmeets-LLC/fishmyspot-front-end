import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import LocationSlider from './LocationSlider';

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
      stiffness: 120,
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.03,
    originX: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
    },
  },
};

const Location = ({ mileRange, setMileRange, handleMileClear }) => {
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
    window.addEventListener('click', handleClick);
    // clean up
    return () => window.removeEventListener('click', handleClick);
  }, [isDropDown]);

  const options = [
    {
      name: 'Florida',
      value: '27.6648:81.5158',
    },
    {
      name: 'California',
      value: '36.7783:119.4179',
    },
    {
      name: 'Georgia',
      value: '32.1656:82.9001',
    },
    {
      name: 'Alabama',
      value: '32.3182:86.9023',
    },
    {
      name: 'District of Columbia',
      value: '38.9072:77.0369',
    },
  ];

  const cityAddOrRemove = (value) => {
    if (selectedCities === value) {
      setSelectedCities((prevState) => {
        return {
          ...prevState,
          location: '',
        };
      });
    } else {
      setSelectedCities((prevState) => {
        return {
          ...prevState,
          location: value,
        };
      });
    }
  };
  const timeout = useRef(null);
  const [value, setValue] = useState(mileRange);

  const onSliderChange = (mile) => {
    clearTimeout(timeout.current);
    setValue(mile);
    timeout.current = setTimeout(() => {
      setMileRange((prevState) => {
        return {
          ...prevState,
          mile,
          isBoundChanged: true,
        };
      });
    }, 500);
  };

  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-between rounded-3xl border border-gray-300 bg-white py-1 px-3 font-trade-gothic text-base text-primary lg:py-2 lg:px-5"
        onClick={() => setIsDropDown(!isDropDown)}
      >
        Mile range
        {isDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <AnimatePresence>
        {isDropDown && (
          <LocationSlider
            min={5}
            max={500}
            setValue={setValue}
            value={value}
            onSliderChange={onSliderChange}
            handleMileClear={() => {
              handleMileClear();
              setValue(250);
            }}
            dropdown={dropdown}
          />
          // <motion.div
          //   variants={variants}
          //   initial="hidden"
          //   animate="visible"
          //   exit="hidden"
          //   ref={dropdown}
          //   className="absolute bg-white pt-5 pl-4 pr-6 z-50 rounded-lg shadow border-gray-100">
          //   {
          //     options?.map((option, i) => {
          //       return (
          //         <div
          //           key={i}
          //           className="flex items-center space-x-3 mb-4 text-sm md:text-base font-trade-gothic-bold"
          //         >
          //           <input
          //             type={"radio"}
          //             name={"location"}
          //             id={option.value}
          //             value={option.value}
          //             checked={selectedCities === option.value ? true : false}
          //             onChange={() => cityAddOrRemove(option.value)}
          //             className="accent-secondary w-4 h-4 md:w-5 md:h-5 cursor-pointer"
          //           />
          //           <motion.label
          //             htmlFor={option.value}
          //             variants={hoverVariants}
          //             whileHover="hover"
          //             className="cursor-pointer"
          //           >
          //             {option.name}
          //           </motion.label>

          //         </div>
          //       )
          //     })
          //   }
          // </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Location;
