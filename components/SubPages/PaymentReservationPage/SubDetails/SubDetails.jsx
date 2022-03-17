import { format } from 'date-fns';
import { useField } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import SubDetailsItem from './SubDetailsItem';

const SubDetails = ({ title, step }) => {
  const bookingData = useSelector(state => state.bookingData);
  const [field, meta, helpers] = useField('agreementChecked');
  return (
    <>
      <div className='flex items-center justify-between pb-1 border-b border-b-highlight-1'>
        <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl text-primary font-food-truck uppercase'>{title}</h1>
        <span className='text-sm inline-block mt-2 sm:text-base lg:text-lg text-highlight-1 font-trade-gothic underline'>Edit</span>
      </div>
      <div className="pt-3 lg:pt-5 2xl:pt-7">
        <SubDetailsItem item={"Date"} value={format(bookingData?.date, "dd MMMM, yyyy")} />
        <SubDetailsItem item={"Time"} value={bookingData?.time} />
        <SubDetailsItem
          item={"Fishing spot"}
          value={bookingData?.pondData?.attributes?.title}
        />
        <SubDetailsItem
          item={bookingData.dayType == "halfDay" ? "Half Day Cost" : "Full Day Cost"}
          value={`$${parseFloat(+bookingData?.dayRates?.[bookingData?.dayType]).toFixed(2)}`}
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
        <button type='submit' className={`${field.value ? "bg-secondary" : "bg-gray-300"} text-sm md:text-base 2xl:text-xl font-trade-gothic-bold text-white py-2 px-3 sm:py-3 2xl:py-5 mt-4 w-full rounded`}>Confirm Booking</button>
      }
    </>
  );
};

export default SubDetails;