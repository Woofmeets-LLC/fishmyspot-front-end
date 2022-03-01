import { useField } from 'formik';
import React from 'react';
import { FormOption } from '../../../Common';

const NumberOfAnglersSelect = () => {
  const [field, meta, helpers] = useField('numberOfAnglers');
  return (
    <div className='w-full'>
      <select
        {...field}
        className="block w-full px-3 py-[7.5px] font-trade-gothic text-base text-primary bg-white bg-clip-padding bg-no-repeat font-medium border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none cursor-pointer"
      >
        <FormOption title="Number of Anglers" value="" />
        <FormOption title="1" value="1" />
        <FormOption title="2" value="2" />
        <FormOption title="3" value="3" />
        <FormOption title="4" value="4" />
        <FormOption title="5" value="5" />
      </select>
      {
        meta.touched && meta.error &&
        <div className="text-red-500">
          {meta.error}
        </div>
      }
    </div>
  );
};

export default NumberOfAnglersSelect;