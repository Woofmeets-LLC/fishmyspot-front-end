import { useField } from 'formik';
import React from 'react';
import NumberOfAnglersSelect from './NumberOfAnglersSelect';

const SubConfimDetails = () => {
  const [aggrementCheckedField, aggrementCheckedMeta, aggrementCheckedHelpers] = useField('agreementChecked');
  const [addGiftCardField, addGiftCardMeta, addGiftCardHelpers] = useField('addGiftCard');

  return (
    <div className='w-[965px] mx-auto'>
      <h1 className='text-4xl text-primary font-food-truck uppercase mb-3'>CONFIRM DETAILS</h1>
      <NumberOfAnglersSelect />
      <div className='text-lg text-primary mt-5 h-14'>
        <input type="checkbox" {...aggrementCheckedField} />
        <span>{"I have read and agree with FishMySpot's"}<span className='text-highlight-3'>{" "}Rules and Regulations, Cancellation and Weather Policy.</span></span>
        {
          aggrementCheckedMeta.touched && aggrementCheckedMeta.error &&
          <div className="text-red-500">
            {aggrementCheckedMeta.error}
          </div>
        }
      </div>
      <div>
        <div>
          <input type="text" placeholder="Add Gift Card" {...addGiftCardField} />
          <button>Apply</button>
          {
            addGiftCardMeta.touched && addGiftCardMeta.error &&
            <div className="text-red-500">
              {addGiftCardMeta.error}
            </div>
          }
        </div>
        <button type='submit'>Reserve</button>
      </div>
    </div>
  );
};

export default SubConfimDetails;