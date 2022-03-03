import React from 'react';
import ConfirmDetailSection from '../ConfirmDetailSection/ConfirmDetailSection';
import SubDetails from '../SubDetails/SubDetails';
import SubEligiblePay from '../SubEligiblePay';

const SubPaymentMethod = () => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 md:gap-6 xl:gap-8'>
      <div className='order-2 md:order-1'>
        <SubEligiblePay />
      </div>
      <div className='order-1 md:order-2'>
        <ConfirmDetailSection />
        <SubDetails title={"CHECKOUT DETAILS"} />
      </div>
    </div>
  );
};

export default SubPaymentMethod;