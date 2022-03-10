import React, { useState } from 'react';
import { MdCalendarToday } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReservationSelectBox from './ReservationSelectBox/ReservationSelectBox';

const SubReservationSection = () => {
  const [isTimeActive, setIsTimeActive] = useState(false);
  const [isExperienceActive, setIsExperienceActive] = useState(false);
  const [selectedTimeItem, setSelectedTimeItem] = useState("Select One");
  const [selectedExperience, setSelectedExperience] = useState("Select Experience");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dayNumber, setDayNumber] = useState(new Date().getDay());

  const radioBtns = [
    {
      title: 'Half day',
      value: '55.00'
    },
    {
      title: 'Full day',
      value: '250.00'
    },
  ];

  const timeSlot = [
    "06:00AM - 11:00AM",
    "11:00AM - 04:00PM",
    "04:00PM - 09:00PM",
  ]

  const experiences = [
    "Beginning Fishing lesson / $25",
    "Beginning Fishing Instruction For Family / $25",
    "Boat / $25",
    "Boat Rental / $25",
    "Family Fun Day / $25",
    "2+Extra Angler / $25",
    "1+Extra Angler / $25",
    "Canoe/kayak / $25",
    "2+Extra Angler",
    "Boat / $25-$35",
    "2+Extra Angler / $25",
    "Night Fishing / $25",
    "Camping / $25",
  ]

  const weekDay = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]

  return (
    <div className="order-1 lg:order-2 w-full md:w-2/3 mx-auto lg:w-[420px] 2xl:w-[510px] 2xl:h-[928px] shadow-lg rounded-lg bg-white">
      <div className='px-4 py-6 sm:px-7 sm:pt-8 sm:pb-10'>
        <h2 className='text-xl lg:text-2xl 2xl:text-3xl font-food-truck text-primary mb-4 2xl:mb-8'>For Reservation</h2>
        <form>
          <div className='text-base lg:text-lg 2xl:text-xl text-primary font-trade-gothic-bold mb-3 lg:mb-4 2xl:mb-5 space-y-2 md:space-y-3 lg:space-y-4 2xl:space-y-5'>
            {
              radioBtns?.map((radioBtn, index) => {
                return (
                  <label key={index} className="cursor-pointer flex justify-between">
                    <div className='space-x-3' >
                      <span className="inline-block w-[18px] h-[18px] rounded-full  border-2 border-secondary -mb-[3px]">
                        <input
                          type="radio"
                          name="halfOrFullDay"
                          className="appearance-none rounded-full h-[14px] w-[14px] border-2 border-white bg-white checked:bg-secondary checked:border-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" />
                      </span>
                      <span>{radioBtn.title}</span>
                    </div>
                    <span>${radioBtn.value}</span>
                  </label>)
              })
            }
          </div>

          <div className='mb-4 xl:mb-5'>
            <label
              htmlFor=""
              className='block lg:text-lg 2xl:text-xl font-trade-gothic-bold text-primary mb-2 lg:mb-3 xl:mb-4'
            >
              Pick a Date
            </label>
            <div className='w-full flex items-center border border-gray-300 rounded-md overflow-hidden shadow-md font-trade-gothic text-highlight-1 text-base'>
              <span className='pl-3 md:pl-5 text-lg lg:text-xl 2xl:text-[28px]'>
                <MdCalendarToday />
              </span>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date)
                  setDayNumber(date.getDay())
                }}
                placeholderText={`${weekDay[dayNumber]} ${selectedDate}`}
                className="w-full py-3 px-5 focus:outline-none text-base"
              />
            </div>
          </div>

          {/* Time field */}
          <ReservationSelectBox
            label={"Time"}
            isActive={isTimeActive}
            setIsActive={setIsTimeActive}
            setSelectedItem={setSelectedTimeItem}
            selectedItem={selectedTimeItem}
            items={timeSlot}
          />

          {/* Experience field */}
          <ReservationSelectBox
            label={"Experiences"}
            isActive={isExperienceActive}
            setIsActive={setIsExperienceActive}
            setSelectedItem={setSelectedExperience}
            selectedItem={selectedExperience}
            items={experiences}
          />

          <div className='lg:text-lg 2xl:text-xl font-trade-gothic text-highlight-1 my-8 xl:my-14'>
            <div className='flex justify-between mb-2 lg:mb-3 2xl:mb-4'>
              <p>Full day</p>
              <p>$250.00</p>
            </div>
            <div className='flex justify-between mb-2 lg:mb-3 2xl:mb-4'>
              <p>Boat Rental/ $25</p>
              <p>$25.00</p>
            </div>
            <div className='flex justify-between pb-2 md:pb-3 lg:pb-4 xl:pb-5 border-b border-highlight-1'>
              <p>Service fees</p>
              <p>$3.50</p>
            </div>
            <div className='mt-2 md:mt-3 flex justify-between text-lg lg:text-xl 2xl:text-2xl font-trade-gothic-bold'>
              <p>Total</p>
              <p>$278.50</p>
            </div>
          </div>

          <button
            type='submit'
            className='py-2 lg:py-3 2xl:py-5 w-full bg-secondary text-white md:text-lg 2xl:text-2xl font-trade-gothic-bold rounded'>
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubReservationSection;