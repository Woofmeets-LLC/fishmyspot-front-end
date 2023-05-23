import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { PageHeader, PurchaseCard } from '../../../components/Common';
import HomeLayout from '../../../layouts/HomeLayout';
import { getSdk } from '../../../sharetribe/sharetribeSDK';

const AcceptedPurchases = () => {
  const [purchaseList, setPurchaseList] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    setLoading(true);
    getSdk()
      .transactions.query({
        only: 'order',
        lastTransitions: ['transition/accept', 'transition/accept-by-operator'],
        include: ['booking', 'listing', 'provider'],
      })
      .then((res) => {
        setLoading(false);
        // res.data contains the response data
        const transactions = res.data?.data;
        const bookings = res.data?.included?.filter(
          (item) => item.type === 'booking'
        );
        const listings = res.data?.included?.filter(
          (item) => item.type === 'listing'
        );
        const providers = res.data?.included?.filter(
          (item) => item.type === 'user'
        );

        const formattedData = transactions?.map((transaction) => {
          return {
            ...transaction,
            relationships: {
              ...transaction?.relationships,
              booking: bookings?.find(
                (booking) =>
                  booking?.id?.uuid ===
                  transaction?.relationships?.booking?.data?.id?.uuid
              ),
              listing: listings?.find(
                (listing) =>
                  listing?.id?.uuid ===
                  transaction?.relationships?.listing?.data?.id?.uuid
              ),
              provider: providers?.find(
                (provider) =>
                  provider?.id?.uuid ===
                  transaction?.relationships?.provider?.data?.id?.uuid
              ),
            },
          };
        });

        setPurchaseList(formattedData);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  return (
    <HomeLayout
      isPrivate
      guards={{
        account_type: 'angler',
        fallbackUrl: '/',
      }}
    >
      <div className="bg-[#fcfcfc]">
        <div className="container flex flex-col gap-4 pb-10 md:pb-12 lg:gap-5 lg:pb-16 2xl:pb-20">
          <div className="mb-3 pt-6 sm:pt-8 md:mb-4 md:pt-10 2xl:mb-5 2xl:pt-12">
            <PageHeader
              title={'Purchase List'}
              userName={user?.profile?.displayName}
              userEmail={user?.email}
            />
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-4">
              <Link href="/purchase-list">
                <a className="inline-block font-trade-gothic-bold text-lg">
                  Waiting for approval
                </a>
              </Link>
              <span className="inline-block cursor-pointer border-b-4 border-secondary pb-1 font-trade-gothic-bold text-lg">
                Approved ({purchaseList.length})
              </span>
              <Link href="/purchase-list/ready-to-review">
                <a className="inline-block font-trade-gothic-bold text-lg">
                  Ready to review
                </a>
              </Link>
              <Link href="/purchase-list/reviewed">
                <a className="inline-block font-trade-gothic-bold text-lg">
                  Reviewed
                </a>
              </Link>
            </div>
          </div>
          {loading ? (
            <div className="my-10 flex flex-wrap items-center justify-center">
              <ClipLoader size={50} color={'#1971ff'} />
              <h2 className="mt-2 w-full text-center font-semibold">
                Loading purchase...
              </h2>
            </div>
          ) : purchaseList?.length > 0 ? (
            purchaseList?.map((purchase) => (
              <PurchaseCard
                key={purchase?.id?.uuid}
                purchaseData={purchase}
                status={'Approved'}
              />
            ))
          ) : (
            <div className="my-10 flex flex-wrap items-center justify-center">
              <h2 className="mt-2 w-full text-center text-xl font-semibold text-red-500">
                No purchase found
              </h2>
            </div>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default AcceptedPurchases;
