import React from 'react';
import { FaStar } from "react-icons/fa";
import Features from '../Features';

const SubServicesDetailsSection = ({ pondData }) => {
  return (
    <div className="order-2 lg:order-1 mt-8 lg:mt-0 lg:w-[600px] 3xl:w-[700px]">
      <div>
        <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] 3xl:text-5xl text-primary font-food-truck uppercase mb-4 2xl:mb-6'>
          {pondData?.attributes?.title}
        </h1>
        <div className='flex items-center space-x-10 xl:text-lg text-highlight-1 mb-4 2xl:mb-6'>
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
        <div className='mb-6 md:mb-8 2xl:mb-11'>
          <h3 className='text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-food-truck uppercase text-primary mb-3'>Description</h3>
          <p className='text-sm md:text-base font-trade-gothic text-highlight-1'>
            {pondData?.attributes?.description}
          </p>
        </div>
        <div>
          <div className='flex space-x-12 sm:space-x-12 mb-4 md:mb-6 xl:mb-8 2xl:mb-11'>
            <div className='flex'>
              <div className='mt-4 2xl:mt-5'>
                <img
                  src="/images/Pond-Acre-Icon.svg"
                  alt="Pond Acre Icon"
                  className="w-10 h-2"
                />
              </div>
              <div>
                <Features
                  title={"POND ACREAGE"}
                  items={[
                    "100 acr",
                  ]}
                />
              </div>
            </div>
            <div className="flex">
              <div>
                <img
                  src="/images/Catch-Requirements-Icon.svg"
                  alt="Catch Requirements Icon"
                  className="w-6 md:w-8 h-4 md:h-5 xl:h-6 mt-2"
                />
              </div>
              <div>
                <Features
                  title={"CATCH REQUIREMENTS"}
                  items={[
                    "Catch & Keep",
                  ]}
                />
              </div>
            </div>
          </div>
          <div className='flex space-x-10 sm:space-x-14 mb-4 md:mb-6 xl:mb-8 2xl:mb-11'>
            <div className="flex space-x-1">
              <div className='mt-3'>
                <img
                  src='/images/Amenities-Icon.svg'
                  alt='Amenities Icon'
                  className='w-4 2xl:w-5 -mt-1'
                />
              </div>
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
            </div>
            <div className="flex space-x-1">
              <div className='mt-4'>
                <img
                  src="/images/Type-of-Fish-Icon.svg"
                  alt="Fish Icon"
                  className='w-5 md:w-6 -mt-1'
                />
              </div>
              <div>
                <Features
                  title={"Fish"}
                  items={[
                    "Hilsha",
                    "Crab",
                    "Carp",
                    "Trout",
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-1">
            <div className="mt-4">
              <img
                src="/images/Experiences-Icon.svg"
                alt="Experiences Icon"
                className='w-4 xl:w-5 -mt-2'
              />
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
    </div>
  );
};

export default SubServicesDetailsSection;