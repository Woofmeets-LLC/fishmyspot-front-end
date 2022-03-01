import { useField } from 'formik';
import React from 'react';

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
    <div>

      <div>
        <label htmlFor="eligiblePay">Eligible Pay</label>
        {
          radioBtns.map((radioBtn, index) => {
            return (
              <label key={index} className="cursor-pointer">
                <span className="inline-block w-[18px] h-[18px] rounded-full  border-2 border-secondary -mb-[3px]">
                  <input
                    type="radio"
                    name={"eligiblePay"}
                    {...{ ...field, value: radioBtn.value }}
                    checked={field.value == radioBtn.value}
                    className="appearance-none rounded-full h-[14px] w-[14px] border-2 border-white bg-white checked:bg-secondary checked:border-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" />
                </span>
                {radioBtn.label}
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
      <button type='submit'>Proceed To Payment</button>
    </div>
  );
};

export default SubEligiblePay;