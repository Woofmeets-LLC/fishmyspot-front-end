import React, { useState } from 'react';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter/MessageFooter';
import MessageHeader from './MessageHeader/MessageHeader';

const SubBody = () => {
  const [messages, setMessages] = useState([]);
  // console.log(messages);
  return (
    <div className='w-full h-full flex flex-col pl-2 sm:pl-4 md:pl-0 pr-4 lg:pr-16'>
      <MessageHeader
        name={"Monalisa"}
        isOnline={true}
      />
      <MessageBody
        messages={messages}
      />
      <hr />
      <MessageFooter
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
};

export default SubBody;