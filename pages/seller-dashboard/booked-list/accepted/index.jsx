import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { PageHeader } from '../../../../components/Common';
import BookingCard from '../../../../components/Common/BookingCard';
import HomeLayout from '../../../../layouts/HomeLayout';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';

const AcceptedBooking = () => {
  const [bookingList, setBookingList] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    setLoading(true);
    getSdk()
      .transactions.query({
        only: 'sale',
        lastTransitions: ['transition/accept', 'transition/accept-by-operator'],
        include: ['booking', 'listing', 'customer'],
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
        const customers = res.data?.included?.filter(
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
              customer: customers?.find(
                (customer) =>
                  customer?.id?.uuid ===
                  transaction?.relationships?.customer?.data?.id?.uuid
              ),
            },
          };
        });

        setBookingList(formattedData);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <HomeLayout
      isPrivate
      guards={{
        account_type: 'owner',
        fallbackUrl: '/',
      }}
    >
      <div className="bg-[#fcfcfc]">
        <div className="container flex flex-col gap-4 pb-10 md:pb-12 lg:gap-5 lg:pb-16 2xl:pb-20">
          <div className="mb-3 pt-6 sm:pt-8 md:mb-4 md:pt-10 2xl:mb-5 2xl:pt-12">
            <PageHeader
              title={'Pond Reservations'}
              userName={user?.profile?.displayName}
              userEmail={user?.email}
            />
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-4">
              <Link href="/seller-dashboard/booked-list">
                <a className="inline-block font-trade-gothic-bold text-lg">
                  Waiting for approval
                </a>
              </Link>
              <span className="inline-block cursor-pointer border-b-4 border-secondary pb-1 font-trade-gothic-bold text-lg">
                Approved ({bookingList.length})
              </span>
              <Link href="/seller-dashboard/booked-list/delivered">
                <a className="inline-block font-trade-gothic-bold text-lg">
                  Delivered
                </a>
              </Link>
              <Link href="/seller-dashboard/booked-list/ready-to-review">
                <a className="inline-block font-trade-gothic-bold text-lg">
                  Ready to review
                </a>
              </Link>
            </div>
          </div>
          {loading ? (
            <div className="my-10 flex flex-wrap items-center justify-center">
              <ClipLoader size={50} color={'#1971ff'} />
              <h2 className="mt-2 w-full text-center font-semibold">
                Loading booking...
              </h2>
            </div>
          ) : bookingList?.length > 0 ? (
            bookingList?.map((booking) => (
              <BookingCard
                key={booking?.id?.uuid}
                bookingData={booking}
                setBookingList={setBookingList}
                status={'Approved'}
              />
            ))
          ) : (
            <div className="my-10 flex flex-wrap items-center justify-center">
              <h2 className="mt-2 w-full text-center text-xl font-semibold text-red-500">
                No booking found
              </h2>
            </div>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default AcceptedBooking;
