import MessageCard from '../MessageCard/MessageCard';

const SubSidebar = ({ isActive, setIsActive, transactionIds, includedListingData, includedMessageData }) => {
  return (
    <div className='p-2 md:pr-3 h-[440px] md:h-[605px] border-r border-r-gray-300 overflow-y-auto lg:pt-7 message__scrollbar'>
      {
        // transactionIds.forEach(id => {
        //   console.log({ [id]: { listing: includedListingData[id], message: includedMessageData[id] } });
        // });

        transactionIds.map((id, index) => {
          if (includedMessageData[id] && includedListingData[id] && includedMessageData[id]?.data[0]?.attributes) {
            const { content, createdAt } = includedMessageData[id]?.data[0]?.attributes;
            return (
              <MessageCard
                key={index}
                id={id}
                isActive={isActive}
                setIsActive={setIsActive}
                listingTitle={includedListingData[id].attributes.title}
                lastMessage={content}
                lastMessageDate={new Date(createdAt)}
              />
            )
          }
        })
      }
    </div>
  );
};

export default SubSidebar;