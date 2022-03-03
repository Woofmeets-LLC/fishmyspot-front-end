import { useField } from 'formik';
import React from 'react';
import SelectOption from '../FormikElement/FormikSelectBox/SelectOption';

const NumberOfAnglersSelect = () => {
  const [field, meta, helpers] = useField('numberOfAnglers');
  return (
    <div className='w-full'>
      <select
        {...field}
        className="block w-full px-3 py-[7.5px] font-trade-gothic text-base text-primary bg-white bg-clip-padding bg-no-repeat font-medium border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none cursor-pointer"
      >
        <SelectOption title="Number of Anglers" value="" />
        <SelectOption title="1" value="1" />
        <SelectOption title="2" value="2" />
        <SelectOption title="3" value="3" />
        <SelectOption title="4" value="4" />
        <SelectOption title="5" value="5" />
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