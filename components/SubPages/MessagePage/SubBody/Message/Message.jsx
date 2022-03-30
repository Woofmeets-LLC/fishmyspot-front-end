import React from 'react';

const Message = ({ message, sentfrom, createdAt }) => {
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime.toUpperCase();
  }
  
  return (
    <div className="flex items-center">
      <div className={`max-w-[180px] sm:max-w-[300px] xl:max-w-[472px] mb-2 ${sentfrom ? 'order-1' : ''}`}>
        <div className={`w-fit ${sentfrom ? 'bg-[#efefef] text-highlight-1 rounded-br-2xl rounded-tl-xl rounded-bl-xl ml-2' : 'bg-highlight-2 text-white rounded-bl-2xl rounded-tr-xl rounded-br-xl mr-2'} text-sm `}>
          <p className='px-3 py-2 sm:px-4 md:px-4 2xl:p-4 3xl:py-5 3xl:px-[18px]'>{message}</p>
        </div>
      </div>
      <div className={`text-[8px] sm:text-xs lg:text-sm text-highlight-1 font-trade-gothic ${sentfrom && "ml-auto text-right"}`}>
        {`${formatAMPM(createdAt)}`}
      </div>
    </div>
  );
};

export default Message;