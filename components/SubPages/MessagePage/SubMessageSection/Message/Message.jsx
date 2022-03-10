import React from 'react';

const Message = ({ text, angler }) => {
  return (
    <div className="flex items-center">
      <div className={`max-w-[472px] mb-2 ${angler ? 'order-1' : ''}`}>
        <div className={`w-fit ${angler ? 'bg-[#efefef] text-highlight-1 rounded-tl-full rounded-bl-full rounded-br-full text-right ml-2' : 'bg-highlight-2 text-white rounded-bl-full rounded-tr-full rounded-br-full mr-2'} text-sm py-5 px-[18px]`}>
          <p>{text}</p>
        </div>
      </div>
      <div className={`text-sm text-highlight-1 font-trade-gothic ${angler && "ml-auto text-right"}`}>
        07.20 PM
      </div>
    </div>
  );
};

export default Message;