import React, { useRef } from 'react';
import useSWR from 'swr';
import { getSdk } from '../../../../../sharetribe/sharetribeSDK';
import Message from '../Message/Message';


const fetcher = async (activeTransactionId) => {
  return getSdk()
    .messages.query({
      transactionId: activeTransactionId,
      include: ['sender'],
    })
    .then((res) => {
      return res?.data?.data?.reverse();
    });
};

const MessageBody = ({ currentUserId, activeTransactionId }) => {
  const { data, error } = useSWR(`${activeTransactionId}`, fetcher, {
    refreshInterval: 1000,
  });
  const messagesEndRef = useRef(null);

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [])

  // if (error) {
  //   console.log(error);
  // }

  // if (!data) {
  //   console.log("loading");
  // }

  // if (data) {
  //   console.log({ data });
  // }

  return (
    <div className="overflow-y-auto h-[62vh] pb-2 pr-3 pt-2 message__scrollbar">
      {data?.length > 0 &&
        data.map((message, index) => {
          return (
            <Message
              key={message?.id?.uuid}
              message={message?.attributes?.content}
              createdAt={message?.attributes?.createdAt}
              sentfrom={
                message?.relationships?.sender?.data?.id?.uuid === currentUserId
              }
            />
          );
        })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageBody;
