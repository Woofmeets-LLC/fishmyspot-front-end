import React from 'react';

const MessageCard = ({ id, isActive, setIsActive, listingTitle, lastMessage, lastMessageDate }) => {
  return (
    <div
      className={`${isActive === id ? "md:bg-highlight-2 text-white" : "hover:bg-gray-200 text-highlight-1"} rounded-xl mb-4 cursor-pointer`}
      onClick={() => setIsActive(id)}
    >
      <div className="md:p-2 xl:p-4 2xl:py-6 2xl:px-5">
        <div className="flex justify-center lg:justify-between items-center  font-trade-gothic">
          <div className='w-10 h-10 xs:w-12 xs:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-[60px] xl:h-[60px]'>
            <img
              src="/images/client.jpg"
              alt="client"
              className='w-full h-full rounded-full object-cover'
            />
          </div>
          <div className='hidden lg:block text-sm lg:text-base 2xl:text-lg 3xl:text-xl flex-1 lg:pl-4 lg:pr-4 3xl:pl-7 3xl:pr-11'>
            <p>{listingTitle?.slice(0, 20) ?? '' + '...'}</p>
            <p>{lastMessage?.slice(0, 20) + '...'}</p>
          </div>
          <div className="hidden lg:block md:text-sm xl:text-base 2xl:text-lg">
            <p>{lastMessageDate.toLocaleTimeString()}</p>
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