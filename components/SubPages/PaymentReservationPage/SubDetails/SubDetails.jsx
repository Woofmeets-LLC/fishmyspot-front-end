import React from 'react';
import { useSelector } from 'react-redux';
import SubDetailsItem from './SubDetailsItem';

const SubDetails = ({ title }) => {
  const bookingData = useSelector(state => state.bookingData);
  console.log({ bookingData })
  return (
    <>
      <div className='flex items-center justify-between pb-1 border-b border-b-highlight-1'>
        <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl text-primary font-food-truck uppercase'>{title}</h1>
        <span className='text-sm inline-block mt-2 sm:text-base lg:text-lg text-highlight-1 font-trade-gothic underline'>Edit</span>
      </div>
      <div className="pt-3 lg:pt-5 2xl:pt-7">
        <SubDetailsItem item={"Date"} value={"February 11, 2022"} />
        <SubDetailsItem item={"Time"} value={"All Day"} />
        <SubDetailsItem
          item={"Fishing spot"}
          value={"OH- Stark County- Royalation"}
        />
        <SubDetailsItem
          item={"Location"}
          value={"Royalation, OH"}
        />
        <SubDetailsItem
          item={"Full Day Cost"}
          value={"$125.00"}
        />
        <SubDetailsItem
          item={"Experiences"}
          value={"$20.00"}
        />
        <div className="pb-1 2xl:pb-3 border-b border-b-highlight-1">
          <SubDetailsItem
            item={"Service fees"}
            value={"$3.50"}
          />
        </div>
        <div className="mt-2 md:mt-3 2xl:mt-5">
          <SubDetailsItem
            item={"Total"}
            value={"$175.00"}
          />
        </div>
      </div>
    </>
  );
};

export default SubDetails;