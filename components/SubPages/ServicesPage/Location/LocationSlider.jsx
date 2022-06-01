import { motion } from 'framer-motion';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';

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

const LocationSlider = ({
  value,
  setValue,
  onSliderChange,
  min,
  max,
  handleMileClear,
  dropdown,
}) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      ref={dropdown}
      className="absolute z-50 w-[200px] rounded-lg border-gray-100 bg-white py-3 px-4 shadow"
    >
      <div className="font-trade-gothic-bold text-base">
        <div className="mb-2 font-trade-gothic-bold text-lg text-primary md:text-2xl">
          <h3>In Mile:</h3>
        </div>

        <div className="mb-4 flex justify-center space-x-10">
          {/* <input
            disabled
            value={0}
            min={0}
            max={value[1]}
            type="number"
            onChange={(e) =>
              setValue((prevState) => {
                return {
                  ...prevState,
                  mile: [e.target.value, prevState.mile[1]],
                };
              })
            }
            className="w-10 border-b-2 border-b-secondary text-center font-trade-gothic text-base text-primary focus:outline-none sm:w-16 md:w-20 md:text-lg"
          /> */}
          <input
            value={value}
            min={min}
            max={max}
            type="number"
            onChange={(e) => {
              onSliderChange(e.target.value);
              // setValue((prevState) => {
              //   return {
              //     ...prevState,
              //     mile: e.target.value,
              //   };
              // });
            }}
            className=" w-full border-b-2 border-b-secondary text-center font-trade-gothic text-base text-primary focus:outline-none md:text-lg"
          />
        </div>

        <div>
          <Slider
            min={min}
            max={max}
            range
            value={value}
            onChange={onSliderChange}
          />
        </div>

        <div className="mt-6 flex items-center justify-end text-sm text-primary md:text-base">
          <span
            className="cursor-pointer font-trade-gothic"
            onClick={handleMileClear}
          >
            Clear
          </span>
          {/* <span className="cursor-pointer font-trade-gothic-bold">Apply</span> */}
        </div>
      </div>
    </motion.div>
  );
};

export default LocationSlider;
