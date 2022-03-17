import { useField } from 'formik';
import React from 'react';
import SubEligiblePay from '../SubEligiblePay';

const SubPaymentMethod = () => {
  const [field, meta, helpers] = useField('eligiblePay');
  return (
    <div>
      <SubEligiblePay />
      <button type='submit' className={`${field.value !== '' ? "bg-secondary" : "bg-gray-300"} text-sm md:text-base 2xl:text-xl font-trade-gothic-bold text-white w-full py-2 px-3 sm:py-3 2xl:py-5 rounded`}>Proceed To Payment</button>
    </div>
  );
};

export default SubPaymentMethod;