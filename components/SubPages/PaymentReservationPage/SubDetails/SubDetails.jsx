import { format } from 'date-fns';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SubDetailsItem from './SubDetailsItem';

const SubDetails = ({ title, step }) => {
  const [isAgree, setIsAgree] = useState(false);
  const bookingData = useSelector(state => state.bookingData);

  return (
    <>
      <div className='mb-4 xl:mb-8'>
        <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl text-primary font-food-truck uppercase mb-2 sm:mb-4 md:mb-5 lg:mb-7'>CONFIRM DETAILS</h1>

        <label className='block text-base md:text-lg text-primary mt-3 lg:mt-5 mb-2 cursor-pointer'>
          <input
            type="checkbox"
            className='cursor-pointer'
            checked={isAgree}
            onChange={() => setIsAgree(prevIsAgree => !prevIsAgree)}
          />
          <span>{" I have read and agree with FishMySpot's"}<span className='text-highlight-3'>{" "}Rules and Regulations, Cancellation and Weather Policy.</span></span>
        </label>
        {
          !isAgree &&
          <div className="text-sm md:text-base text-red-500">
            You must agree to the Terms and Conditions to continue.
          </div>
        }
      </div>
      <div className='flex items-center justify-between pb-1 border-b border-b-highlight-1'>
        <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl text-primary font-food-truck uppercase'>{title}</h1>
        <span className='text-sm inline-block mt-2 sm:text-base lg:text-lg text-highlight-1 font-trade-gothic underline'>Edit</span>
      </div>
      <div className="pt-3 lg:pt-5 2xl:pt-7">
        <SubDetailsItem item={"Date"} value={bookingData?.date ? format(bookingData?.date, "dd MMMM, yyyy") : "N/A"} />
        <SubDetailsItem item={"Time"} value={bookingData?.time || "N/A"} />
        <SubDetailsItem
          item={"Fishing spot"}
          value={bookingData?.pondData?.attributes?.title || "N/A"}
        />
        <SubDetailsItem
          item={bookingData.dayType == "halfDay" ? "Half Day Cost" : "Full Day Cost"}
          value={`$${parseFloat(+bookingData?.dayRates?.[bookingData?.dayType] || 0).toFixed(2)}`}
        />
        {
          Object.keys(bookingData?.experience || {})
            ?.filter(key => bookingData?.experience?.[key]?.checked)
            ?.map(key => (
              <SubDetailsItem
                key={key}
                item={key}
                value={`$${parseFloat(+bookingData?.experience?.[key].price).toFixed(2)}`}
              />
            ))
        }
        <div className="pb-1 2xl:pb-3 border-b border-b-highlight-1">
          <SubDetailsItem
            item={"Service fees"}
            value={`$${parseFloat(+bookingData?.serviceFee).toFixed(2)}`}
          />
        </div>
        <div className="mt-2 md:mt-3 2xl:mt-5">
          <SubDetailsItem
            item={"Total"}
            value={`$${parseFloat(+bookingData?.total).toFixed(2)}`}
          />
        </div>
      </div>

      {
        step == 1 &&
        <button type='submit' className={`${isAgree ? "bg-secondary" : "bg-gray-300"} text-sm md:text-base 2xl:text-xl font-trade-gothic-bold text-white py-2 px-3 sm:py-3 2xl:py-5 mt-4 w-full rounded`}>Confirm Booking</button>
      }
    </>
  );
};

export default SubDetails;