import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io5";
import HomeLayout from '../../layouts/HomeLayout';

const ServicesList = () => {
  const radioBtns = [
    {
      title: 'Half day',
      value: '55.00'
    },
    {
      title: 'Full day',
      value: '250.00'
    },
  ]

  return (
    <HomeLayout>
      <div className="bg-[#fbfbfb]">
        <div className="container">
          {/* hero section */}
          <div className='w-full h-[697px] pt-11  pb-24'>
            <img
              src="/images/pond1.jpg"
              alt="Pond"
              className='w-full h-full object-cover'
            />
            <div className='w-[158px] h-[158px] -mt-24 ml-9'>
              <img
                src="/images/client.jpg"
                alt="client"
                className='w-full h-full rounded-full object-cover'
              />
            </div>
          </div>

          {/* content section */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <div>
                <h1 className='text-5xl text-primary font-food-truck uppercase'>OH- STARK COUNTY ROYALATION NAVARRE</h1>
              </div>
            </div>
            <div className="col-span-4 shadow-lg rounded-lg bg-white">
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
                    <input
                      type="date"
                      name=""
                      id=""
                      className={`block w-full font-trade-gothic text-base text-primary bg-clip-padding bg-no-repeat  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none py-3 px-5`}
                    />
                  </div>

                  <div className='mb-5'>
                    <div className="dropdown w-full">
                      <div className="dropdown-btn p-2 bg-white shadow-md font-trade-gothic text-highlight-1">
                        Select One
                      </div>
                      <div className="dropdown-content">
                        <div className="dropdown-item">
                          06:00AM - 11:00AM
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='mb-14'>
                    <label
                      htmlFor=""
                      className='block text-xl font-trade-gothic-bold text-primary mb-4'
                    >
                      Experinces
                    </label>
                    <div className=''>
                      <select
                        className="block w-full font-trade-gothic-bold text-base border border-solid border-gray-300 rounded py-3 px-5 text-primary bg-white bg-clip-padding bg-no-repeat font-medium transition ease-in-out m-0 focus:outline-none cursor-pointer"
                      >
                        <option className="cursor-pointer">
                          Select experience
                        </option>
                        <option className="cursor-pointer">
                          Beginning Fishing lesson / $25
                        </option>
                        <option className="cursor-pointer">
                          Beginning Fishing Instruction For Family / $25
                        </option>
                        <option className="cursor-pointer">
                          Boat / $25
                        </option>
                      </select>
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

        </div>
      </div>
    </HomeLayout>
  );
};

export default ServicesList;