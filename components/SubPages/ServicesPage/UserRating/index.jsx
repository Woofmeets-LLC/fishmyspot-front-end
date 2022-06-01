import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/router";

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
      type: "spring",
      stiffness: 120,
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.03,
    originX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

const UserRating = ({ ratings, setRatings }) => {
  const router = useRouter();
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
    "One star",
    "Two star",
    "Three star",
    "Four star",
    "Five star",
  ];

  const ratingsAddOrRemove = (rating) => {
    const findRating =
      ratings?.length > 0 ? ratings?.find((r) => r === rating) : undefined;
    if (findRating !== undefined) {
      const filterRatings = ratings?.filter((r) => r !== rating);
      setRatings((prevState) => {
        return {
          ...prevState,
          rating: filterRatings,
        };
      });
    } else {
      setRatings((prevState) => {
        return {
          ...prevState,
          rating: [rating],
        };
      });
    }
  };

  return (
    <div className="ml-0">
      <div
        className="flex cursor-pointer items-center justify-between rounded-3xl border border-gray-300 bg-white py-1 px-3 font-trade-gothic text-base text-primary lg:py-2 lg:px-5"
        onClick={() => setIsDropDown(!isDropDown)}
      >
        User rating
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
            className="absolute z-50 rounded-lg border-gray-100 bg-white px-4 pt-3 pb-1 shadow"
          >
            {options?.map((option, i) => (
              <div
                key={i}
                className="mb-2 grid grid-cols-7 items-center space-x-3 font-trade-gothic-bold text-sm sm:grid-cols-11 md:text-base"
              >
                <div className="col-span-1 mt-2">
                  <input
                    type={"radio"}
                    name={option}
                    id={option}
                    value={option}
                    checked={ratings?.includes(option) ? true : false}
                    onChange={() => ratingsAddOrRemove(option)}
                    className="h-4 w-4 cursor-pointer accent-secondary md:h-5 md:w-5"
                  />
                </div>
                <div className="hidden sm:col-span-4 sm:block">
                  <motion.label
                    htmlFor={option}
                    variants={hoverVariants}
                    whileHover="hover"
                    className="cursor-pointer"
                  >
                    {option}
                  </motion.label>
                </div>
                <div className="col-span-5">
                  <label
                    htmlFor={option}
                    className="flex items-center space-x-3"
                  >
                    {Array.from({ length: i + 1 }, (_, i) => i + 1).map(
                      (star) => (
                        <span
                          key={star + 100}
                          className="cursor-pointer text-base text-secondary"
                        >
                          <FaStar className="-mr-2 inline-block" />
                        </span>
                      )
                    )}
                  </label>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserRating;
