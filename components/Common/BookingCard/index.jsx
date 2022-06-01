import { format } from 'date-fns';
import { useState } from 'react';
import { StatusButton } from '..';
import { getTimeZoneWiseDateTime } from '../../../services/date/get-time-zone-wise-date-time';
import { getSdk } from '../../../sharetribe/sharetribeSDK';
import ListItem from '../ListItem';
import CreateReviewForOnwer from './CreateReviewForOwner';

const BookingCard = ({
  setBookingList,
  setPurchaseList,
  bookingData,
  status,
}) => {
  const [approveLoading, setApproveLoading] = useState(false);
  const [declineLoading, setDeclineLoading] = useState(false);

  const convertAmountToFloat = (amount) =>
    parseFloat(+amount / 100 || 0).toFixed(2);
  const titleFormatter = (title) =>
    title?.replace('line-item/', '')?.replaceAll('-', ' ');

  const pondOwner =
    bookingData?.relationships?.customer?.attributes?.profile?.displayName ||
    'N/A';
  const phoneNumber =
    bookingData?.relationships?.customer?.attributes?.profile?.publicData
      ?.phone || 'N/A';
  const bookingStart = getTimeZoneWiseDateTime(
    bookingData?.relationships?.booking?.attributes?.displayStart
  );
  const bookingEnd = getTimeZoneWiseDateTime(
    bookingData?.relationships?.booking?.attributes?.displayEnd
  );
  const location =
    bookingData?.relationships?.listing?.attributes?.title || 'N/A';

  const dayInfo = bookingData?.attributes?.lineItems?.find((item) =>
    ['line-item/half-day', 'line-item/full-day'].includes(item.code)
  );
  const dayType =
    dayInfo?.code
      ?.replace('line-item/half-day', 'Half Day')
      ?.replace('line-item/full-day', 'Full Day') || 'N/A';
  const dayPrice = convertAmountToFloat(+dayInfo?.lineTotal?.amount);

  const experiences =
    bookingData?.attributes?.lineItems?.filter(
      (item) =>
        ![
          'line-item/half-day',
          'line-item/full-day',
          'line-item/service-charge',
          'line-item/provider-commission',
        ].includes(item.code)
    ) || [];

  const serviceCharge =
    bookingData?.attributes?.lineItems?.find((item) =>
      ['line-item/service-charge'].includes(item.code)
    )?.lineTotal?.amount || 0;

  const providerCommission =
    +bookingData?.attributes?.lineItems?.find((item) =>
      ['line-item/provider-commission'].includes(item.code)
    )?.lineTotal?.amount || 0;

  const subTotal = convertAmountToFloat(
    +bookingData?.attributes?.payinTotal?.amount
  );
  const total = convertAmountToFloat(
    +bookingData?.attributes?.payoutTotal?.amount
  );

  const handleApprove = () => {
    if (approveLoading || declineLoading) return;

    setApproveLoading(true);
    getSdk()
      .transactions.transition({
        id: bookingData?.id?.uuid,
        transition: 'transition/accept',
        params: {},
      })
      .then((res) => {
        setBookingList((bookingList) =>
          bookingList.filter((item) => item.id.uuid !== bookingData?.id?.uuid)
        );
        setApproveLoading(false);
      })
      .catch((err) => {
        setApproveLoading(false);
      });
  };
  const handleDecline = () => {
    if (approveLoading || declineLoading) return;

    setDeclineLoading(true);
    getSdk()
      .transactions.transition({
        id: bookingData?.id?.uuid,
        transition: 'transition/decline',
        params: {},
      })
      .then((res) => {
        setBookingList((bookingList) =>
          bookingList.filter((item) => item.id.uuid !== bookingData?.id?.uuid)
        );
        setDeclineLoading(false);
      })
      .catch((err) => {
        setDeclineLoading(false);
      });
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-md md:w-[650px] md:py-6 md:px-7 2xl:w-[690px] 2xl:py-8 2xl:px-9">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 space-y-3 text-primary sm:col-span-9 2xl:text-lg">
          <div className="rounded-lg bg-white p-4 shadow-md">
            <ListItem title={'Angler'} value={pondOwner} />
            {/* <ListItem
                        title={"Email"}
                        value={"N/A"}
                    /> */}
            <ListItem title={'Phone Number'} value={phoneNumber} />
            <ListItem
              title={'Start Date & Time'}
              value={
                bookingStart
                  ? `${format(
                      bookingStart,
                      'hh:mm a, MMM dd, yyyy'
                    )} (GMT -04:00)`
                  : 'N/A'
              }
            />
            <ListItem
              title={'End Date & Time'}
              value={
                bookingEnd
                  ? `${format(
                      bookingEnd,
                      'hh:mm a, MMM dd, yyyy'
                    )} (GMT -04:00)`
                  : 'N/A'
              }
            />
            <ListItem title={'Time Type'} value={dayType} />
            <ListItem title={'Location'} value={location} />
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md">
            <ListItem title={`${dayType} Price`} value={`$${dayPrice}`} />
            {experiences.map((experience) => {
              const amount = convertAmountToFloat(+experience.lineTotal.amount);
              return (
                <ListItem
                  key={experience.code}
                  title={titleFormatter(experience.code)}
                  value={`$${amount < 0 ? amount * -1 : amount}`}
                />
              );
            })}

            {/* <ListItem
                            title={"Service Charge"}
                            value={`$${convertAmountToFloat(+serviceCharge)}`}
                        /> */}
            <ListItem title={'Sub Total'} value={`$${subTotal}`} />
            <span className="block h-2"></span>
            <ListItem
              title={'FishMySpot Commission'}
              value={`$${(
                +convertAmountToFloat(+providerCommission * -1) + 3.52
              ).toFixed(2)}`}
            />

            <ListItem title={'Total'} value={`$${total}`} />

            {/* <ListItem
                        title={"Payment Method"}
                        value={"Visa Debit Card"}
                    /> */}
          </div>
          {status === 'Pending' && (
            <div className="space-x-2">
              <button
                onClick={handleApprove}
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-indigo-400"
              >
                {approveLoading ? (
                  <>
                    <svg
                      className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Approve'
                )}
              </button>
              <button
                onClick={handleDecline}
                type="button"
                className="inline-flex items-center rounded-md bg-red-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-red-400"
              >
                {declineLoading ? (
                  <>
                    <svg
                      className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Decline'
                )}
              </button>
            </div>
          )}
          {status == 'Ready for review' && (
            <CreateReviewForOnwer
              purchaseData={bookingData}
              setPurchaseList={setPurchaseList}
              transactionId={bookingData?.id?.uuid}
              listingId={bookingData?.relationships?.listing?.id?.uuid}
            />
          )}
        </div>
        <div className="order-first col-span-12 mt-4 sm:col-span-3 md:order-last md:mt-0">
          <StatusButton title={status} />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
