import React, { useEffect, useState } from 'react';
import { PageHeader, PurchaseCard } from '../../components/Common';
import HomeLayout from '../../layouts/HomeLayout';
import { getSdk } from '../../sharetribe/sharetribeSDK';

const PurchaseList = () => {
  const [purchaseList, setPurchaseList] = useState([]);

  useEffect(() => {
    getSdk().transactions.query({
      only: "order",
      lastTransitions: ["transition/confirm-payment"],
      include: ['booking', 'listing', 'provider']
    })
      .then(res => {
        // res.data contains the response data
        console.log(res);
        const transactions = res.data?.data;
        const bookings = res.data?.included?.filter(item => item.type === 'booking');
        const listings = res.data?.included?.filter(item => item.type === 'listing');
        const providers = res.data?.included?.filter(item => item.type === 'user');

        const formattedData = transactions?.map(transaction => {
          return {
            ...transaction,
            relationships: {
              ...transaction?.relationships,
              booking: bookings?.find(booking => booking?.id?.uuid === transaction?.relationships?.booking?.data?.id?.uuid),
              listing: listings?.find(listing => listing?.id?.uuid === transaction?.relationships?.listing?.data?.id?.uuid),
              provider: providers?.find(provider => provider?.id?.uuid === transaction?.relationships?.provider?.data?.id?.uuid)
            }
          }
        });

        setPurchaseList(formattedData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(purchaseList);
  return (
    <HomeLayout>
      <div className='bg-[#fcfcfc]'>
        <div className='container flex flex-col gap-4 lg:gap-5 pb-10 md:pb-12 lg:pb-16 2xl:pb-20'>
          <div className='pt-6 sm:pt-8 md:pt-10 2xl:pt-12 mb-3 md:mb-4 2xl:mb-5'>
            <PageHeader
              title={"Purchase List"}
              userName={"Larissa Smith"}
              userEmail={"larissa@gmail.com"}
            />
          </div>
          {
            purchaseList?.map((purchase) => (
              <PurchaseCard key={purchase?.id?.uuid} status={"Purchased"} />
            ))
          }
          <PurchaseCard status={"Purchased"} />
        </div>
      </div>
    </HomeLayout>
  );
};

export default PurchaseList;