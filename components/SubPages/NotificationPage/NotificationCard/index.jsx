import React from 'react';
import { FaTimes } from "react-icons/fa";

const NotificationCard = () => {
  return (
    <div className='grid grid-cols-12 space-x-4'>
      <div className="col-span-1">
        <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'>
          <img
            src="/images/client.jpg"
            alt="Client"
            className='w-full h-full object-cover rounded-full'
          />
        </div>
      </div>
      <div className="col-span-10">
        <div className='text-sm text-primary font-trade-gothic'>
          <p className='mb-1'>Contact with Facebook to complete  your profile  and  make it easy  to log in</p>
          <p>May 10,2021</p>
        </div>
      </div>
      <div className="col-span-1 mt-1 text-highlight-3">
        <FaTimes className='cursor-pointer' />
      </div>
    </div>
  );
};

export default NotificationCard;