import React from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

const ReservationSelectBox = ({ label, isActive, setIsActive, selectedItem, setSelectedItem, items }) => {
  return (
    <div className='mb-4 xl:mb-5'>
      <label
        htmlFor=""
        className='block lg:text-lg 2xl:text-xl font-trade-gothic-bold text-primary mb-2 lg:mb-3 xl:mb-4'
      >
        {label}
      </label>
      <div className="w-full relative text-base cursor-pointer border border-gray-300 rounded-md transition ease-in-out select-none">
        <div
          onClick={() => setIsActive(prevState => !prevState)}
          className="py-3 px-3 md:px-5 shadow-md font-trade-gothic text-highlight-1">
          <div className='flex justify-between items-center'>
            {
              label === 'Experiences' ?
                (
                  <span>
                    {selectedItem}
                  </span>
                ) :
                (
                  <span className='flex items-center space-x-4'>
                    <span className='text-xl 2xl:text-[28px]'>
                      <FaRegClock />
                    </span>
                    <span>
                      {selectedItem}
                    </span>
                  </span>
                )
            }
            <span className='text-lg'>
              {
                !isActive ?
                  <IoMdArrowDropdown /> :
                  <IoMdArrowDropup />
              }
            </span>
          </div>
        </div>
        {
          isActive &&
          <div className={`absolute z-50 top-14 bg-white rounded-md shadow-lg ${label === 'Experiences' ? 'font-trade-gothic-bold' : 'font-trade-gothic'} text-primary w-full`}>
            {
              items.map((item, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedItem(item)
                      setIsActive(prevState => !prevState)
                    }}
                    className="py-2 2xl:py-3 px-4 2xl:px-5 transition-all delay-200 hover:bg-gray-100">
                    {item}
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    </div>
  );
};

export default ReservationSelectBox;