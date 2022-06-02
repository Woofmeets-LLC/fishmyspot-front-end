import { format } from 'date-fns';
import React from 'react';
import { StatusButton } from '..';
import { getTimeZoneWiseDateTime } from '../../../services/date/get-time-zone-wise-date-time';
import ListItem from '../ListItem';
import CreateReview from './CreateReview';

const PurchaseCard = ({ setPurchaseList, purchaseData, status }) => {
  const convertAmountToFloat = (amount) =>
    parseFloat(+amount / 100 || 0).toFixed(2);
  const titleFormatter = (title) =>
    title?.replace('line-item/', '')?.replaceAll('-', ' ');

  const pondOwner =
    purchaseData?.relationships?.provider?.attributes?.profile?.displayName ||
    'N/A';
  const phoneNumber =
    purchaseData?.relationships?.listing?.attributes?.publicData?.phone ||
    'N/A';
  // const bookingStart = purchaseData?.relationships?.booking?.attributes?.displayStart;
  const bookingStart = getTimeZoneWiseDateTime(
    purchaseData?.relationships?.booking?.attributes?.displayStart
  );
  const bookingEnd = getTimeZoneWiseDateTime(
    purchaseData?.relationships?.booking?.attributes?.displayEnd
  );
  const location =
    purchaseData?.relationships?.listing?.attributes?.title || 'N/A';

  const dayInfo = purchaseData?.attributes?.lineItems?.find((item) =>
    ['line-item/half-day', 'line-item/full-day'].includes(item.code)
  );
  const dayType =
    dayInfo?.code
      ?.replace('line-item/half-day', 'Half Day')
      ?.replace('line-item/full-day', 'Full Day') || 'N/A';
  const dayPrice = convertAmountToFloat(+dayInfo?.lineTotal?.amount);

  const experiences =
    purchaseData?.attributes?.lineItems?.filter(
      (item) =>
        ![
          'line-item/half-day',
          'line-item/full-day',
          'line-item/service-charge',
          'line-item/provider-commission',
        ].includes(item.code)
    ) || [];

  const serviceCharge =
    purchaseData?.attributes?.lineItems?.find((item) =>
      ['line-item/service-charge'].includes(item.code)
    )?.lineTotal?.amount || 0;

  const numberOfPeople =
    +(
      purchaseData?.attributes?.lineItems?.find((item) =>
        ['line-item/additional-guests'].includes(item.code)
      )?.quantity?.value || 0
    ) + 1;

  const total = convertAmountToFloat(
    +purchaseData?.attributes?.payinTotal?.amount
  );

  return (
    <div className="rounded-lg bg-white p-4 shadow-md md:w-[650px] md:py-6 md:px-7 2xl:w-[690px] 2xl:py-8 2xl:px-9">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 space-y-3 text-primary sm:col-span-9 2xl:text-lg">
          <div className="rounded-lg bg-white p-4 shadow-md">
            <ListItem title={'Pond Owner'} value={pondOwner} />
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
            <ListItem title={'Total Guests'} value={numberOfPeople} />
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

            <ListItem title={'Total'} value={`$${total}`} />

            {/* <ListItem
                        title={"Payment Method"}
                        value={"Visa Debit Card"}
                    /> */}
          </div>

          {status == 'Ready for review' && (
            <CreateReview
              purchaseData={purchaseData}
              setPurchaseList={setPurchaseList}
              transactionId={purchaseData?.id?.uuid}
              listingId={purchaseData?.relationships?.listing?.id?.uuid}
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

export default PurchaseCard;
