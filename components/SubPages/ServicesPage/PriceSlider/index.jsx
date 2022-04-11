import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Slider from '../Slider';

const PriceSlider = ({ priceRange, setPriceRange, handlePriceClear }) => {
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

  const onSliderChange = (priceValue) => {
    setPriceRange((prevState) => {
      return {
        ...prevState,
        price: priceValue
      }
    });
  };

  return (
    <div>
      <div
        className="bg-white flex items-center justify-between border border-gray-300 rounded-3xl py-1 px-3 lg:py-2 lg:px-5 cursor-pointer text-base font-trade-gothic text-primary"
        onClick={() => setIsDropDown(!isDropDown)}
      >
        Price range
        {
          isDropDown ?
            <IoIosArrowUp /> :
            <IoIosArrowDown />
        }
      </div>
      <AnimatePresence>
        {
          isDropDown && (
            <Slider
              min={0}
              max={1000}
              setValue={setPriceRange}
              value={priceRange}
              onSliderChange={onSliderChange}
              handlePriceClear={handlePriceClear}
              dropdown={dropdown}
            />
            // <div className='absolute w-full'>
            // </div>
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default PriceSlider;