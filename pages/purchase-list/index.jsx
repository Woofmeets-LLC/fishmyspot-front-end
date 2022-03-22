import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { PageHeader, PurchaseCard } from '../../components/Common';
import HomeLayout from '../../layouts/HomeLayout';
import { getSdk } from '../../sharetribe/sharetribeSDK';

const PurchaseList = () => {
  const [purchaseList, setPurchaseList] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    setLoading(true);
    getSdk().transactions.query({
      only: "order",
      lastTransitions: ["transition/confirm-payment"],
      include: ['booking', 'listing', 'provider']
    })
      .then(res => {
        setLoading(false);
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
        setLoading(false);
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
              userName={user?.profile?.displayName}
              userEmail={user?.email}
            />
          </div>

          <div className="mb-4">
            <div className="flex gap-4">
              <span className="inline-block text-lg font-trade-gothic-bold pb-1 border-b-4 border-secondary cursor-pointer">Purchases ({purchaseList.length})</span>
              <Link href="/purchase-list/ready-to-review">
                <a className="inline-block text-lg font-trade-gothic-bold">Ready to review</a>
              </Link>
              <Link href="/purchase-list/reviewed">
                <a className="inline-block text-lg font-trade-gothic-bold">Reviewed</a>
              </Link>
            </div>
          </div>
          {
            loading
              ? <div className="flex justify-center items-center flex-wrap my-10">
                <ClipLoader size={50} color={'#1971ff'} />
                <h2 className="w-full text-center font-semibold mt-2">Loading purchase...</h2>
              </div>
              : (
                purchaseList?.length > 0
                  ? purchaseList?.map((purchase) => (
                    <PurchaseCard
                      key={purchase?.id?.uuid}
                      purchaseData={purchase}
                      status={"Purchased"} />
                  ))
                  : <div className="flex justify-center items-center flex-wrap my-10">
                    <h2 className="w-full text-center font-semibold text-red-500 text-xl mt-2">No purchase found</h2>
                  </div>
              )
          }
        </div>
      </div>
    </HomeLayout>
  );
};

export default PurchaseList;