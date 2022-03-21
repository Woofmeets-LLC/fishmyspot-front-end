import React, { useState } from 'react';
import { FaStripe } from "react-icons/fa";

const SubPaymentMethod = ({ step, setStep }) => {
  const [selectPayMethod, setSelectPayMethod] = useState('');

  const radioBtns = [
    // {
    //   label: "Market Place",
    //   value: "market-place",
    //   Icon: FaCcVisa,
    // },
    // {
    //   label: "Bank Transfer",
    //   value: "bank-transfer",
    //   Icon: AiFillBank,
    // },
    // {
    //   label: "Venmo",
    //   value: "venmo",
    //   Icon: IoLogoVenmo,
    // },
    // {
    //   label: "PayPal",
    //   value: "payPal",
    //   Icon: FaPaypal,
    // },
    {
      label: "Stripe",
      value: "stripe",
      Icon: FaStripe,
    },
  ];
  return (
    <div>
      <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-food-truck text-primary uppercase mb-2 sm:mb-4 md:mb-5 lg:mb-8 mt-4 2xl:mt-5'>Eligible Pay</h1>
      {
        radioBtns.map((radioBtn, index) => {
          return (
            <label key={index} className="cursor-pointer mb-4 sm:mb-6 md:mb-8 lg:mb-9 xl:mb-10 flex items-center">
              <span className="inline-block w-[18px] h-[18px] rounded-full border-2 border-[#707070] -mb-[3px] mr-2">
                <input
                  type="radio"
                  name={"paymentMethod"}
                  onClick={() => setSelectPayMethod(radioBtn.value)}
                  className="appearance-none rounded-full h-[14px] w-[14px] border-2 border-white bg-white checked:bg-primary checked:border-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" />
              </span>
              <div className='flex items-center gap-x-5 shadow-lg rounded-md w-full py-2 px-3 md:py-[14px] md:px-5 text-base xl:text-lg 2xl:text-xl font-trade-gothic text-highlight-1'>
                <span className='card-icons'>
                  {<radioBtn.Icon />}
                </span>
                <span>
                  {radioBtn.label}
                </span>
              </div>
            </label>
          )
        })
      }
      <button
        type='submit'
        onClick={() => selectPayMethod && setStep(step + 1)}
        className={`${selectPayMethod !== '' ? "bg-secondary" : "bg-gray-300"} text-sm md:text-base 2xl:text-xl font-trade-gothic-bold text-white w-full py-2 px-3 sm:py-3 2xl:py-5 rounded`}>Proceed To Payment</button>
    </div>
  );
};

export default SubPaymentMethod;