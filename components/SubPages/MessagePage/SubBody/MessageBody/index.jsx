import React, { useEffect, useRef } from 'react';
import Message from '../Message/Message';

const MessageBody = ({ messages, currentUserId }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [])

  return (
    <div className="overflow-y-auto h-[62vh] pb-2 pr-3 pt-2 message__scrollbar">
      {

        messages?.map((message, index) => {
          return (
            <Message
              key={message?.id?.uuid}
              message={message?.attributes?.content}
              createdAt={message?.attributes?.createdAt}
              sentfrom={message?.relationships?.sender?.data?.id?.uuid === currentUserId}
            />
          )
        })

      }
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageBody;