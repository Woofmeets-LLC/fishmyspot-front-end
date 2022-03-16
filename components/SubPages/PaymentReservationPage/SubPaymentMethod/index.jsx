import React from 'react';
import ConfirmDetailSection from '../ConfirmDetailSection/ConfirmDetailSection';
import SubDetails from '../SubDetails/SubDetails';
import SubEligiblePay from '../SubEligiblePay';

const SubPaymentMethod = () => {
  return (
    <div>
      <div className='md:grid md:grid-cols-2 md:gap-6 xl:gap-8'>
        <div>
          <SubEligiblePay />
        </div>
        <div className='mt-10 md:mt-0'>
          <ConfirmDetailSection />
          <SubDetails title={"CHECKOUT DETAILS"} />
        </div>
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-7 pt-5 md:pt-0 md:relative md:-top-5 2xl:-top-11'>
        <div>
          <button type='submit' className='bg-secondary text-sm md:text-base 2xl:text-xl font-trade-gothic-bold text-white w-full py-2 px-3 sm:py-3 2xl:py-5 rounded'>Proceed To Payment</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SubPaymentMethod;