import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Slider from '../Slider';

const PriceSlider = ({
  priceRange,
  setPriceRange,
  handlePriceClear,
  setIsQueryReady,
}) => {
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

  const timeout = useRef(null);
  const [value, setValue] = useState(priceRange);

  const onSliderChange = (priceValue) => {
    clearTimeout(timeout.current);
    setValue(priceValue);
    setIsQueryReady(true);

    timeout.current = setTimeout(() => {
      setPriceRange((prevState) => {
        return {
          ...prevState,
          price: priceValue,
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
        Price range
        {isDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <AnimatePresence>
        {isDropDown && (
          <Slider
            title={'Price range:'}
            min={0}
            max={1000}
            setValue={setValue}
            value={value}
            onSliderChange={onSliderChange}
            handlePriceClear={() => {
              handlePriceClear();
              setValue([0, 1000]);
            }}
            dropdown={dropdown}
          />
          // <div className='absolute w-full'>
          // </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PriceSlider;
