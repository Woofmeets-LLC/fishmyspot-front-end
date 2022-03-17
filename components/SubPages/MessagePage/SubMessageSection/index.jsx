import { useState, useEffect } from 'react';
import SubSidebar from '../SubSidebar';
import SubBody from '../SubBody';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';


const SubMessageSection = () => {
  const [transactionIds, setTransactionIds] = useState([]);
  const [includedListingData, setIncludedListingData] = useState({});
  const [includedMessageData, setIncludedMessageData] = useState({});
  const [currentUserId, setCurrentUserId] = useState('');
  const [isActive, setIsActive] = useState(0);


  useEffect(() => {
    getSdk().transactions.query({
      only: "order",
      lastTransitions: ["transition/complete"],
      include: ['listing'],
      // "limit.messages": 1,
      "fields.listing": ["title"],
    }).then(res => {
      const transactionId = res?.data?.data?.[0]?.id?.uuid;
      if (!transactionId) return;

      setTransactionIds([...transactionIds, transactionId]);
      setIncludedListingData({ ...includedListingData, [transactionId]: res?.data?.included?.shift() });
      // setIncludedMessageData({ ...includedMessageData, [transactionId]: res.data.included });
      // setIsActive(transactionIds[0]);

      res.data.data.forEach(item => {
        getSdk().messages.query({
          transactionId: item.id.uuid,
          include: ['sender']
        }).then(res => {
          // res.data contains the response data
          // res.data.data.forEach(item => setIncludedMessageData(prevState => [...prevState, item]))
          // console.log({ transactionId: item.id.uuid, message: res.data })
          setIncludedMessageData({ ...includedMessageData, [item.id.uuid]: res.data });
        });
      });

    });
  }, []);

  useEffect(() => {
    getSdk().currentUser.show({
      fields: ['id']
    }).then(res => {
      // res.data contains the response data
      setCurrentUserId(res.data.data.id.uuid);
    });
  }, []);

  return (
    <div className="w-full grid grid-cols-12 md:gap-x-[30px]">
      <div className="col-span-2 lg:col-span-4">
        <SubSidebar
          isActive={isActive}
          setIsActive={setIsActive}
          transactionIds={transactionIds}
          includedListingData={includedListingData}
          includedMessageData={includedMessageData}
        />
      </div>
      <div className="col-span-10 lg:col-span-8">
        <SubBody
          activeTransactionId={isActive}
          includedMessageData={includedMessageData[isActive]}
          currentUserId={currentUserId}
        />
      </div>
    </div>
  );
};

export default SubMessageSection;