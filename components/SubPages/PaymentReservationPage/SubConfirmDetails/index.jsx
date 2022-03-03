import { useField } from 'formik';
import React from 'react';
import SubDetails from '../SubDetails/SubDetails';
import ConfirmDetailSection from '../ConfirmDetailSection/ConfirmDetailSection';

const SubConfimDetails = () => {

  const [addGiftCardField, addGiftCardMeta, addGiftCardHelpers] = useField('addGiftCard');

  return (
    <div>
      <ConfirmDetailSection />
      <SubDetails title={"Details"} />
      <div className='grid grid-cols-12 gap-3 mt-7'>
        <div className='col-span-8'>
          <div className='border rounded grid grid-cols-12'>
            <div className="col-span-8">
              <input
                type="text"
                placeholder="Add Gift Card"
                {...addGiftCardField}
                className="py-2 px-3 sm:py-3 2xl:py-5 w-full h-full focus:outline-none" />
            </div>
            <div className="col-span-4">
              <button type='submit' className='bg-secondary text-sm md:text-base 2xl:text-xl font-trade-gothic-bold text-white py-2 px-3 sm:py-3 2xl:py-5 w-full rounded'>Apply</button>
            </div>
          </div>

        </div>
        <span className="col-span-4">
          <button type='submit' className='bg-secondary text-sm md:text-base 2xl:text-xl font-trade-gothic-bold text-white py-2 px-3 sm:py-3 2xl:py-5 w-full rounded'>Reserve</button>
        </span>
      </div>
      {
        addGiftCardMeta.touched && addGiftCardMeta.error &&
        <div className="text-red-500">
          {addGiftCardMeta.error}
        </div>
      }
    </div>
  );
};

export default SubConfimDetails;