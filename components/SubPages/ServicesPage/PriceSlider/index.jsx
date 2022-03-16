import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Slider from '../Slider';
import styles from '../Categories/Categories.module.css';

const PriceSlider = ({ priceRange, setPriceRange, handlePriceClear }) => {
  const [isDropDown, setIsDropDown] = useState(false);

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
        className={styles['list-item']}
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