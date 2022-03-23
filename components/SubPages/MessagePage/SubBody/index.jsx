import React, { useEffect, useState } from 'react';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter/MessageFooter';
import MessageHeader from './MessageHeader/MessageHeader';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';

const SubBody = ({
  isActive: activeTransactionId,
  includedMessageData,
  setIncludedMessageData,
  currentUserId,
}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (activeTransactionId !== 0) {
      setMessages(includedMessageData[activeTransactionId]?.data.reverse());
    }
  }, [includedMessageData, activeTransactionId]);

  useEffect(() => {
    if (activeTransactionId !== 0) {
      getSdk()
        .messages.query({
          transactionId: activeTransactionId,
          include: ['sender'],
        })
        .then((res) => {
          if (
            res?.data?.data?.length !==
            includedMessageData[activeTransactionId]?.data.length
          ) {
            console.log('new messages');
            setIncludedMessageData({
              ...includedMessageData,
              [activeTransactionId]: res?.data,
            });
          }
        });
    }
  }, [activeTransactionId, includedMessageData, setIncludedMessageData]);

  return (
    <div className="w-full h-full flex flex-col pl-2 sm:pl-4 md:pl-0 pr-4 lg:pr-16">
      <MessageHeader name={'Monalisa'} isOnline={true} />
      <MessageBody messages={messages} currentUserId={currentUserId} />
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
