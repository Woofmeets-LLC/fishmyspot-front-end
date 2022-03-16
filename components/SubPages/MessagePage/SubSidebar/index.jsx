import React, { useState } from 'react';
import MessageCard from '../MessageCard/MessageCard';

const SubSidebar = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className='p-2 md:pr-3 h-[440px] md:h-[605px] border-r border-r-gray-300 overflow-y-auto lg:pt-7 message__scrollbar'>
      {
        [...Array(10).keys()].map((dt, index) => {
          return (
            <MessageCard
              key={index}
              id={index}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          )
        })
      }
    </div>
  );
};

export default SubSidebar;