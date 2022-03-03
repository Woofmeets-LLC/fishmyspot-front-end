import { useField } from 'formik';
import React from 'react';
import NumberOfAnglersSelect from '../NumberOfAnglersSelect/NumberOfAnglersSelect';

const ConfirmDetailSection = () => {
  const [aggrementCheckedField, aggrementCheckedMeta, aggrementCheckedHelpers] = useField('agreementChecked');
  return (
    <div className='mb-4 xl:mb-8'>
      <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl text-primary font-food-truck uppercase mb-2 sm:mb-4 md:mb-5 lg:mb-7'>CONFIRM DETAILS</h1>
      <NumberOfAnglersSelect />
      <div className='text-base md:text-lg text-primary mt-3 lg:mt-5 mb-2'>
        <input type="checkbox" {...aggrementCheckedField} />
        <span>{" I have read and agree with FishMySpot's"}<span className='text-highlight-3'>{" "}Rules and Regulations, Cancellation and Weather Policy.</span></span>
      </div>
      {
        aggrementCheckedMeta.error &&
        <div className="text-sm md:text-base text-red-500">
          {aggrementCheckedMeta.error}
        </div>
      }
    </div>
  );
};

export default ConfirmDetailSection;