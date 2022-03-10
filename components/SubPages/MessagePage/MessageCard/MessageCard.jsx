import React from 'react';

const MessageCard = ({ isNow }) => {
  return (
    <div className={`${isNow ? "bg-highlight-2 text-white" : " text-highlight-1"} rounded-xl mb-4`}>
      <div className="py-6 px-5 ">
        <div className="flex justify-between  font-trade-gothic">
          <div className='w-[60px] h-[60px]'>
            <img
              src="/images/client.jpg"
              alt="client"
              className='w-full h-full rounded-full object-cover'
            />
          </div>
          <div className='text-xl flex-1 pl-7 pr-11'>
            <p>Monalisa</p>
            <p>{`That's exactly how I felt 😉`}</p>
          </div>
          <div className="text-lg">
            <p>
              {
                isNow ? "Just Now" : "08.01"
              }
            </p>
            <div className="w-7 h-7 flex justify-center items-center text-xs font-trade-gothic-bold text-white bg-highlight-2 rounded-full">
              2
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MessageCard;