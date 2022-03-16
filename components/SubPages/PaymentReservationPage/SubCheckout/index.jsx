import React from 'react';
import ConfirmDetailSection from '../ConfirmDetailSection/ConfirmDetailSection';
import SubBillingInfo from '../SubBillingInfo';
import SubDetails from '../SubDetails/SubDetails';

const SubCheckout = () => {
  return (
    <div className='md:grid md:grid-cols-2 md:gap-14'>
      <SubBillingInfo />
      <div>
        <ConfirmDetailSection />
        <SubDetails title={"CHECKOUT DETAILS"} />
        <div className='mt-7'>
          <button type='submit' className='bg-secondary text-sm md:text-base 2xl:text-xl font-trade-gothic-bold text-white py-2 px-3 sm:py-3 2xl:py-5 w-full rounded'>Confirm Booking</button>
        </div>
      </div>
    </div>
  );
};

export default SubCheckout;