import MessageCard from '../MessageCard/MessageCard';

const SubSidebar = ({
  isActive,
  setIsActive,
  transactionIds,
  transactionIdToListingId,
  includedListingData,
  includedMessageData,
}) => {
  // console.log(transactionIds);
  // console.log(transactionIdToListingId);
  // console.log(includedListingData);
  // console.log( includedMessageData );

  return (
    <div className="p-2 md:pr-3 h-full border-r border-r-gray-300 overflow-y-auto lg:pt-7 message__scrollbar">
      {
        // transactionIds.forEach(id => {
        //   console.log({ [id]: { listing: includedListingData[id], message: includedMessageData[id] } });
        // });

        transactionIds.map((id, index) => {
          if (includedMessageData[id]) {
            const { content = '', createdAt = new Date() } =
              includedMessageData[id]?.data[0]?.attributes || {};
            return (
              <MessageCard
                key={index}
                id={id}
                isActive={isActive}
                setIsActive={setIsActive}
                listingTitle={includedListingData[transactionIdToListingId[id]]}
                lastMessage={content}
                lastMessageDate={new Date(createdAt)}
              />
            );
          }
        })
      }
    </div>
  );
};

export default SubSidebar;
