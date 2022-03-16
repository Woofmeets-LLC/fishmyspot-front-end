import React, { useEffect, useRef } from 'react';
import Message from '../Message/Message';

const MessageBody = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [])

  return (
    <div className="overflow-y-auto h-[62vh] pb-2 pr-3 pt-2 message__scrollbar">
      {
        messages.map((message, index) => {
          return (
            <Message
              key={index}
              message={message}
              sentfrom={index % 2 === 0 ? true : false}
            />
          )
        })
      }
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageBody;