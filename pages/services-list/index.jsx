/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { FaRegClock, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdCalendarToday } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HomeLayout from '../../layouts/HomeLayout';
import Features from '../../components/SubPages/ServiceListPage/Features';
import ViewImageModal from '../../components/SubPages/ServiceListPage/ViewImageModal';

const ServicesList = () => {
  const [isTimeActive, setIsTimeActive] = useState(false);
  const [isExperienceActive, setIsExperienceActive] = useState(false);
  const [selectedTimeItem, setSelectedTimeItem] = useState("Select One");
  const [selectedExperience, setSelectedExperience] = useState("Select Experience");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dayNumber, setDayNumber] = useState(new Date().getDay());
  const [imageModal, setImageModal] = useState(false);
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
    <HomeLayout>
      <ViewImageModal
        imageModal={imageModal}
        setImageModal={setImageModal}
      />

      <div className="bg-[#fbfbfb]">
        <div className="container">
          {/* hero section */}
          <div className='w-full relative h-[697px] pt-11  pb-24'>
            <img
              src="/images/pond1.jpg"
              alt="Pond"
              className='w-full h-full object-cover'
            />
            <div className="absolute right-12 bottom-36">
              <button
                onClick={() => setImageModal(prevState => !prevState)}
                className='py-3 px-4 bg-secondary text-sm font-trade-gothic-bold text-primary rounded'>View photos (3)</button>
            </div>
            <div className='w-[158px] h-[158px] -mt-24 ml-9'>
              <img
                src="/images/client.jpg"
                alt="client"
                className='w-full h-full rounded-full object-cover'
              />
            </div>
          </div>

          {/* content section */}
          <div className="flex justify-between gap-[136px] mb-20">
            <div className="w-[700px]">
              <div>
                <h1 className='text-5xl text-primary font-food-truck uppercase mb-6'>OH- STARK COUNTY ROYALATION NAVARRE</h1>
                <div className='flex items-center space-x-10 text-lg text-highlight-1 mb-6'>
                  <div className='flex text-highlight-3 space-x-[6px]'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div>
                    (11)
                  </div>
                </div>
                <div className='mb-4'>
                  <p className='text-base font-trade-gothic-bold text-primary'>4 guests | pet friendly</p>
                </div>
                <div className='mb-11'>
                  <h3 className='text-3xl font-food-truck uppercase text-primary mb-3'>Description</h3>
                  <p className='text-base font-trade-gothic text-highlight-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis tortor eget ex rey vbuhnrgvdbhngghhjjghgh jj pulvinarjjjj, rutrum lobortis ipsum laoreet. Morbi scelerisqua int viverra, ne suscipit hhhhhhmassa bibendum. Vestibulum viverra arcu ac mss cursus hendrerit. Fusce ligula augue, tempor nec feugiat congue, accumsan non leo.</p>
                </div>
                <div>
                  <div className='flex space-x-12 mb-11'>
                    <div>
                      <h3 className='text-3xl font-food-truck text-primary uppercase mb-4'>POND ACREAGE</h3>
                      <div className='flex items-center space-x-4'>
                        <div className='w-2 h-2 bg-secondary rounded-full'></div>
                        <div className='text-xl text-highlight-1 font-trade-gothic'>100 acr</div>
                      </div>
                    </div>
                    <div>
                      <h3 className='text-3xl font-food-truck text-primary uppercase mb-4'>CATCH REQUIREMENTS</h3>
                      <div className='flex items-center space-x-4'>
                        <div className='w-2 h-2 bg-secondary rounded-full'></div>
                        <div className='text-xl text-highlight-1 font-trade-gothic'>Catch & Keep</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-12 mb-11'>
                    <div>
                      <Features
                        title={"AMENITIES"}
                        items={[
                          "Canoe/ Kayak",
                          "Canoe/ Kayak",
                          "Canoe/ Kayak",
                          "Canoe/ Kayak",
                        ]}
                      />
                    </div>
                    <div>
                      <Features
                        title={"CATCH REQUIREMENTS"}
                        items={[
                          "Hilsha",
                          "Crab",
                          "Carp",
                          "Trout",
                        ]}
                      />
                    </div>
                  </div>
                  <div>
                    <Features
                      title={"Experinces"}
                      items={[
                        "Beginning Fishing Instruction For Family / $25",
                        "2+Extra Angler",
                        "2+Extra Angler / $25",
                        "Family Fun Day / $25",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[510px] h-[928px] shadow-lg rounded-lg bg-white">
              <div className='px-7 pt-8 pb-10'>
                <h2 className='text-3xl font-food-truck text-primary mb-8'>For Reservation</h2>
                <form>
                  <div className='text-xl text-primary font-trade-gothic-bold mb-5 space-y-5'>
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

                  <div className='mb-5'>
                    <label
                      htmlFor=""
                      className='block text-xl font-trade-gothic-bold text-primary mb-4'
                    >
                      Pick a Date
                    </label>
                    <div className='w-full flex items-center border border-gray-300 rounded-md overflow-hidden shadow-md font-trade-gothic text-highlight-1'>
                      <span className='pl-5 text-[28px]'>
                        <MdCalendarToday />
                      </span>
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                          setSelectedDate(date)
                          setDayNumber(date.getDay())
                        }}
                        placeholderText={`${weekDay[dayNumber]} ${selectedDate}`}
                        className="w-full py-3 px-5 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Time field */}
                  <div className='mb-5'>
                    <label
                      htmlFor=""
                      className='block text-xl font-trade-gothic-bold text-primary mb-4'
                    >
                      Time
                    </label>
                    <div className="w-full relative cursor-pointer border border-gray-300 rounded-md transition ease-in-out select-none">
                      <div
                        onClick={() => setIsTimeActive(prevState => !prevState)}
                        className="py-3 px-5 shadow-md font-trade-gothic text-highlight-1">
                        <div className='flex justify-between items-center'>
                          <span className='flex items-center space-x-4'>
                            <span className='text-[28px]'>
                              <FaRegClock />
                            </span>
                            <span>
                              {selectedTimeItem}
                            </span>
                          </span>
                          <span className='text-lg'>
                            {
                              !isTimeActive ?
                                <IoMdArrowDropdown /> :
                                <IoMdArrowDropup />
                            }
                          </span>
                        </div>
                      </div>
                      {
                        isTimeActive &&
                        <div className="absolute z-50 top-14 bg-white rounded-md shadow-lg font-trade-gothic text-primary w-full">
                          {
                            timeSlot.map((time, i) => {
                              return (
                                <div
                                  key={i}
                                  onClick={() => {
                                    setSelectedTimeItem(time)
                                    setIsTimeActive(prevState => !prevState)
                                  }}
                                  className="py-3 px-5 transition-all delay-200 hover:bg-gray-100">
                                  {time}
                                </div>
                              )
                            })
                          }
                        </div>
                      }
                    </div>
                  </div>

                  {/* Experience field */}
                  <div className='mb-14'>
                    <label
                      htmlFor=""
                      className='block text-xl font-trade-gothic-bold text-primary mb-4'
                    >
                      Experiences
                    </label>
                    <div className="w-full relative cursor-pointer border border-gray-300 rounded-md transition ease-in-out select-none">
                      <div
                        onClick={() => setIsExperienceActive(prevState => !prevState)}
                        className="py-3 px-5 shadow-md font-trade-gothic text-highlight-1">
                        <div className='flex justify-between items-center'>
                          <span className='flex items-center space-x-4'>
                            {selectedExperience}
                          </span>
                          <span className='text-lg'>
                            {
                              !isExperienceActive ?
                                <IoMdArrowDropdown /> :
                                <IoMdArrowDropup />
                            }
                          </span>
                        </div>
                      </div>
                      {
                        isExperienceActive &&
                        <div className="absolute z-50 top-14 bg-white rounded-md shadow-lg font-trade-gothic text-primary w-full">
                          {
                            experiences.map((experience, i) => {
                              return (
                                <div
                                  key={i}
                                  onClick={() => {
                                    setSelectedExperience(experience)
                                    setIsExperienceActive(prevState => !prevState)
                                  }}
                                  className="py-3 px-5 font-trade-gothic-bold transition-all delay-200 hover:bg-gray-100">
                                  {experience}
                                </div>
                              )
                            })
                          }
                        </div>
                      }
                    </div>
                  </div>


                  <div className='text-xl font-trade-gothic text-highlight-1 mb-14'>
                    <div className='flex justify-between mb-4'>
                      <p>Full day</p>
                      <p>$250.00</p>
                    </div>
                    <div className='flex justify-between mb-4'>
                      <p>Boat Rental/ $25</p>
                      <p>$25.00</p>
                    </div>
                    <div className='flex justify-between pb-5 border-b border-highlight-1'>
                      <p>Service fees</p>
                      <p>$3.50</p>
                    </div>
                    <div className='mt-3 flex justify-between text-2xl font-trade-gothic-bold'>
                      <p>Total</p>
                      <p>$278.50</p>
                    </div>
                  </div>

                  <button
                    type='submit'
                    className='py-5 w-full bg-secondary text-white text-2xl font-trade-gothic-bold rounded'>
                    Reserve
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* map */}
          <div>
            <div className='flex items-center mb-5'>
              <span className='text-secondary text-lg'>
                <FaMapMarkerAlt />
              </span>
              <h3 className='ml-2 text-3xl font-food-truck text-primary'>LOCATION</h3>
            </div>
            <div>
              <iframe src="https://goo.gl/maps/Ecw2zEJMPZ8Jskdq8" allowFullScreen loading="lazy" />
            </div>
          </div>

        </div>
      </div>
    </HomeLayout>
  );
};

export default ServicesList;