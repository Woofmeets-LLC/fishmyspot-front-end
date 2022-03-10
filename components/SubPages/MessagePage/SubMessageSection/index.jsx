import React from 'react';
import MessageCard from '../MessageCard/MessageCard';
import MessageHeader from './MessageHeader/MessageHeader';
import Message from './Message/Message';
import MessageFooter from './MessageFooter/MessageFooter';


const SubMessageSection = () => {

  return (
    <div className="grid grid-cols-12 gap-x-[30px]">
      <div className="col-span-4 pr-3 h-[605px] border-r border-r-gray-300 overflow-y-auto pt-7">
        <MessageCard isNow={true} />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
      <div className="col-span-8 flex flex-col mr-16">
        <MessageHeader
          name={"Monalisa"}
          isOnline={true}
        />
        <div className="h-[450px] overflow-y-auto pb-2 message__scrollbar">
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={false}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={true}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={true}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={false}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={true}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={false}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={false}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={false}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={false}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={false}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={true}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={true}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={true}
          />
          <Message
            text={`It's the funniest movie that I've ever seen. You've seen it before?`}
            angler={false}
          />
        </div>
        <hr />
        <MessageFooter />
      </div>
    </div>
  );
};

export default SubMessageSection;