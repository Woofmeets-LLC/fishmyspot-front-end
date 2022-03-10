import React from 'react';
import { BsTelephone, BsThreeDotsVertical } from "react-icons/bs";

const MessageHeader = ({ name, isOnline }) => {
  return (
    <div className="flex justify-between text-highlight-1 pb-6 border-b border-b-gray-200">
      <div className='relative w-[60px] h-[60px]'>
        <img
          src="/images/client.jpg"
          alt="client"
          className='w-full h-full rounded-full object-cover'
        />
        <div className={`absolute right-0 bottom-1 w-3 h-3 rounded-full ${isOnline ? "bg-green-500" : "bg-white border-2 border-gray-600"}`}></div>
      </div>
      <div className='text-2xl flex-1 pl-7 pr-11'>
        <p className='font-trade-gothic-bold'>{name}</p>
        <p className='text-xl font-trade-gothic text-primary'>
          {
            isOnline ? "Online" : "last seen 12:00 pm"
          }
        </p>
      </div>
      <div className="flex justify-between mt-4 text-3xl space-x-7 mr-7">
        <BsTelephone />
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default MessageHeader;