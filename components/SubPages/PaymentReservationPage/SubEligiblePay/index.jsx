import { useField } from 'formik';
import React from 'react';
import { FaCcVisa } from "react-icons/fa";

const SubEligiblePay = () => {
  const [field, meta, helpers] = useField('eligiblePay');

  const radioBtns = [
    {
      label: "Market Place",
      value: "market-place"
    },
    {
      label: "Bank Transfer",
      value: "bank-transfer"
    },
    {
      label: "Venmo",
      value: "venmo"
    },
    {
      label: "PayPal",
      value: "payPal"
    },
    {
      label: "Stripe",
      value: "stripe"
    },
  ]

  return (
    <>
      <div>
        <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-food-truck text-primary uppercase mb-2 sm:mb-4 md:mb-5 lg:mb-8 mt-4 2xl:mt-5'>Eligible Pay</h1>
        {
          radioBtns.map((radioBtn, index) => {
            return (
              <label key={index} className="cursor-pointer mb-4 sm:mb-6 md:mb-8 lg:mb-9 xl:mb-10 flex items-center">
                <span className="inline-block w-[18px] h-[18px] rounded-full  border-2 border-secondary -mb-[3px] mr-2">
                  <input
                    type="radio"
                    name={"eligiblePay"}
                    {...{ ...field, value: radioBtn.value }}
                    checked={field.value == radioBtn.value}
                    className="appearance-none rounded-full h-[14px] w-[14px] border-2 border-white bg-white checked:bg-secondary checked:border-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" />
                </span>
                <span className='shadow-md inline-block w-full py-2 px-3 md:py-[14px] md:px-5'>
                  {radioBtn.label}
                </span>
              </label>
            )
          })
        }
      </div>
      {
        meta.touched && meta.error &&
        <div className="text-red-500">
          {
            meta.error
          }
        </div>
      }
      <div className='mt-8 2xl:mt-16'>
        <button type='submit' className='bg-secondary text-sm md:text-base 2xl:text-xl font-trade-gothic-bold text-white py-2 px-3 sm:py-3 2xl:py-5 w-full rounded'>Proceed To Payment</button>
      </div>
    </>
  );
};

export default SubEligiblePay;