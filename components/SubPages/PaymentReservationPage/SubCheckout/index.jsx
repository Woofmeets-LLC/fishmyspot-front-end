import React from 'react';
import CustomCheckoutForm from './SubCheckoutForm/CustomCheckoutForm';

const SubCheckout = ({ setStep, transactionInfo }) => {
  return (
    <div className='mb-6 md:mb-0'>
      <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-food-truck text-primary uppercase mb-4 lg:mb-8'>Billing Info</h1>
      <div className='mb-6 lg:mb-10'>
        <CustomCheckoutForm
          setStep={setStep}
          tran={transactionInfo?.tran}
          sk={transactionInfo?.sk} />
      </div>
    </div>
  );
};

export default SubCheckout;