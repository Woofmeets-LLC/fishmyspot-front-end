import { useField } from 'formik';
import React from 'react';

const AdditionalGuest = () => {
  const [additionalGuestFee] = useField('additionalGuestFee');
  return (
    <>
      <h2 className="mb-2 mt-4 font-trade-gothic-bold text-xl text-primary">
        Additional guest fee{' '}
        <span className="text-base">
          (It will be charged for additional guests after adding 3 additional
          guests)
        </span>
      </h2>
      <div className="mb-7 px-2">
        <input
          type="text"
          placeholder="$5"
          {...additionalGuestFee}
          className="mb-2 w-full appearance-none border-b-2 border-primary pl-2 outline-none"
        />
        <p className="text-sm text-gray-500">
          If this is not set, guests cannot bring more than{' '}
          <b>3 additional guests</b>!
        </p>
      </div>
    </>
  );
};

export default AdditionalGuest;
