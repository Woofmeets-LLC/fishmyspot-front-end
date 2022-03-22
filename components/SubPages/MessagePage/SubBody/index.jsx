import React, { useEffect, useState } from 'react';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter/MessageFooter';
import MessageHeader from './MessageHeader/MessageHeader';

const SubBody = ({ activeTransactionId, includedMessageData, currentUserId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(includedMessageData?.data.reverse());

  }, [includedMessageData])

  return (
    <div className='w-full h-full flex flex-col pl-2 sm:pl-4 md:pl-0 pr-4 lg:pr-16'>
      <MessageHeader
        name={"Monalisa"}
        isOnline={true}
      />
      <MessageBody
        messages={messages}
        currentUserId={currentUserId}
      />
      <hr />
      <MessageFooter
        messages={messages}
        setMessages={setMessages}
        activeTransactionId={activeTransactionId}
        currentUserId={currentUserId}
      />
    </div>
  );
};

export default SubBody;