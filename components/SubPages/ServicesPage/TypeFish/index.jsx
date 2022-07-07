import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
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

const TypeFish = ({ typeFish, setTypeFish }) => {
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

  const options = {
    Blackcrappie: 'Black Crappie',
    Bluegill: 'Bluegill',
    Carp: 'Carp',
    Channelcatfish: 'Channel Catfish',
    Largemouthbass: 'Largemouth Bass',
    Muskie: 'Muskie',
    Northernpike: 'Northern Pike',
    Sunfish: 'Sunfish',
    Smallmouthbass: 'Smallmouth Bass',
    Walleye: 'Walleye',
    Whitecrappie: 'White Crappie',
    YellowPerch: 'Yellow Perch',
    Other: 'Other',
  };

  const typeFishAddOrRemove = (fishName) => {
    const findFish =
      typeFish?.length > 0
        ? typeFish?.find((fish) => fish === fishName)
        : undefined;

    if (findFish !== undefined) {
      const filterTypeFish = typeFish?.filter((fish) => fish !== fishName);
      setTypeFish((prevState) => {
        return {
          ...prevState,
          typeFish: filterTypeFish,
        };
      });
    } else {
      setTypeFish((prevState) => {
        return {
          ...prevState,
          typeFish: [...prevState.typeFish, fishName],
        };
      });
    }
  };

  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-between rounded-3xl border border-gray-300 bg-white py-1 px-3 font-trade-gothic text-base text-primary lg:py-2 lg:px-5"
        onClick={() => setIsDropDown(!isDropDown)}
      >
        Type of fish
        {isDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <AnimatePresence>
        {isDropDown && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={dropdown}
            className="absolute z-50 rounded-lg border-gray-100 bg-white pt-5 pl-4 pr-6 shadow"
          >
            {Object.keys(options)?.map((option, i) => (
              <div
                key={i}
                className="mb-4 flex items-center space-x-3 font-trade-gothic-bold text-sm md:text-base"
              >
                <input
                  type={'checkbox'}
                  name={option}
                  id={option}
                  value={option}
                  checked={typeFish?.includes(option) ? true : false}
                  onChange={() => typeFishAddOrRemove(option)}
                  className="h-4 w-4 cursor-pointer accent-secondary md:h-5 md:w-5"
                />
                <motion.label
                  htmlFor={option}
                  variants={hoverVariants}
                  whileHover="hover"
                  className="cursor-pointer"
                >
                  {options[option]}
                </motion.label>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TypeFish;
