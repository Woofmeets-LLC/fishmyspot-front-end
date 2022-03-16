import React from 'react';
import { BsTelephone, BsThreeDotsVertical } from "react-icons/bs";

const MessageHeader = ({ name, isOnline }) => {
  return (
    <div className="flex justify-between items-center text-highlight-1 pb-6 border-b border-b-gray-200">
      <div className='relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-[60px] xl:h-[60px]'>
        <img
          src="/images/client.jpg"
          alt="client"
          className='w-full h-full rounded-full object-cover'
        />
        <div className={`absolute right-0 bottom-1 w-3 h-3 rounded-full ${isOnline ? "bg-green-500" : "bg-white border-2 border-gray-600"}`}></div>
      </div>
      <div className='md:text-lg lg:text-xl 3xl:text-2xl flex-1 pl-4 pr-3 2xl:pl-5 2xl:pr-6 3xl:pl-7 3xl:pr-11'>
        <p className='font-trade-gothic-bold'>{name}</p>
        <p className='text-sm md:text-base lg:text-lg 2xl:text-xl font-trade-gothic text-primary'>
          {
            isOnline ? "Online" : "last seen 12:00 pm"
          }
        </p>
      </div>
      <div className="flex justify-between text-xl xl:text-2xl 3xl:text-3xl space-x-4 xl:space-x-7 xl:mr-7">
        <BsTelephone className='cursor-pointer' />
        <BsThreeDotsVertical className='cursor-pointer' />
      </div>
    </div>
  );
};

export default MessageHeader;