/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { unstable_batchedUpdates } from "react-dom/cjs/react-dom.development";
import { getSdk } from "../../../../sharetribe/sharetribeSDK";
import SubBody from "../SubBody";
import SubSidebar from "../SubSidebar";

const SubMessageSection = () => {
  const [transactionIds, setTransactionIds] = useState([]);
  const [includedListingData, setIncludedListingData] = useState({});
  const [includedMessageData, setIncludedMessageData] = useState({});
  const [transactionIdToListingId, setTransactionIdToListingId] = useState({});
  const [currentUserId, setCurrentUserId] = useState("");
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    let tempTransactionIds = [];
    let tempTransactionIdToListingId = {};
    let listingData = {};
    getSdk()
      .transactions.query({
        only: "order",
        lastTransitions: ["transition/complete"],
        include: ["listing"],
        // "limit.messages": 1,
        "fields.listing": ["title"],
      })
      .then((res) => {
        res?.data?.data?.forEach((item) => {
          tempTransactionIds.push(item.id.uuid);
          tempTransactionIdToListingId = {
            ...tempTransactionIdToListingId,
            [item.id.uuid]: item.relationships.listing.data.id.uuid,
          };
        });

        res?.data?.included.forEach((data) => {
          if (data.type === "listing") {
            listingData = {
              ...listingData,
              [data.id.uuid]: data.attributes.title || "",
            };
          }
        });

        unstable_batchedUpdates(() => {
          setTransactionIds(() => tempTransactionIds);
          setTransactionIdToListingId(() => tempTransactionIdToListingId);
          setIncludedListingData(() => listingData);
        });
      });
  }, []);

  useEffect(() => {
    const fetchMessage = async (id) => {
      try {
        const data = await getSdk().messages.query({
          transactionId: id,
          include: ["sender"],
        });
        return {
          TransactionId: id,
          ...data,
        };
      } catch (error) {
        console.log({
          [`messageFetchingError ${id}`]: error,
        });
        return;
      }
    };

    const fetchMessages = async () => {
      if (transactionIds?.length === 0) return;

      const promiseList = await Promise.allSettled([
        ...transactionIds.map((id) => fetchMessage(id)),
      ]);

      const messageResponseList = promiseList
        .filter((data) => data.status == "fulfilled")
        .map((data) => data.value);

      const result = messageResponseList.reduce((prevValue, currentValue) => {
        return {
          ...prevValue,
          [currentValue.TransactionId]: currentValue.data,
        };
      }, {});

      setIncludedMessageData(() => ({ ...result }));
    };

    fetchMessages();
  }, [transactionIds]);

  useEffect(() => {
    getSdk()
      .currentUser.show({
        fields: ["id"],
      })
      .then((res) => {
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
          transactionIdToListingId={transactionIdToListingId}
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
