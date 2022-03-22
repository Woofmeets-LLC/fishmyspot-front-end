import { format } from 'date-fns';
import React from 'react';
import { StatusButton } from '..';
import ListItem from '../ListItem';

const PurchaseCard = ({ purchaseData, status }) => {
    const convertAmountToFloat = (amount) => parseFloat((+amount / 100) || 0).toFixed(2);
    const titleFormatter = (title) => title?.replace("line-item/", "")?.replaceAll("-", " ")

    const pondOwner = purchaseData?.relationships?.provider?.attributes?.profile?.displayName || "N/A";
    const phoneNumber = purchaseData?.relationships?.listing?.attributes?.publicData?.phone || "N/A";
    const bookingStart = purchaseData?.relationships?.booking?.attributes?.displayStart;
    const bookingEnd = purchaseData?.relationships?.booking?.attributes?.displayEnd;
    const location = purchaseData?.relationships?.listing?.attributes?.title || "N/A";

    const dayInfo = purchaseData?.attributes?.lineItems
        ?.find(item => ['line-item/half-day', 'line-item/full-day'].includes(item.code));
    const dayType = dayInfo?.code?.replace("line-item/half-day", "Half Day")
        ?.replace("line-item/full-day", "Full Day")
        || "N/A";
    const dayPrice = convertAmountToFloat(+dayInfo?.lineTotal?.amount);

    const experiences = purchaseData?.attributes?.lineItems
        ?.filter(item => !['line-item/half-day', 'line-item/full-day', 'line-item/service-charge'].includes(item.code)) || [];
    const total = convertAmountToFloat(+purchaseData?.attributes?.payoutTotal?.amount);

    return (
        <div className='md:w-[650px] 2xl:w-[690px] bg-white shadow-md p-4 md:py-6 md:px-7 2xl:py-8 2xl:px-9 rounded-lg'>
            <div className='md:flex md:justify-between gap-3'>
                <div className='text-primary 2xl:text-lg space-y-3'>
                    <div className='bg-white shadow-md p-4 rounded-lg'>
                        <ListItem
                            title={"Pond Owner"}
                            value={pondOwner}
                        />
                        {/* <ListItem
                        title={"Email"}
                        value={"N/A"}
                    /> */}
                        <ListItem
                            title={"Phone Number"}
                            value={phoneNumber}
                        />
                        <ListItem
                            title={"Start Date & Time"}
                            value={bookingStart ? format(bookingStart, "hh:mm a, MMM dd, yyyy") : "N/A"}
                        />
                        <ListItem
                            title={"End Date & Time"}
                            value={bookingEnd ? format(bookingEnd, "hh:mm a, MMM dd, yyyy") : "N/A"}
                        />
                        <ListItem
                            title={"Time Type"}
                            value={dayType}
                        />
                        <ListItem
                            title={"Location"}
                            value={location}
                        />
                    </div>

                    <div className='bg-white shadow-md p-4 rounded-lg'>
                        <ListItem
                            title={`${dayType} Price`}
                            value={`$${dayPrice}`}
                        />
                        {
                            experiences.map(experience => <ListItem
                                key={experience.code}
                                title={titleFormatter(experience.code)}
                                value={`$${convertAmountToFloat(+experience.lineTotal.amount)}`}
                            />)
                        }

                        <ListItem
                            title={"Total"}
                            value={`$${total}`}
                        />

                        {/* <ListItem
                        title={"Payment Method"}
                        value={"Visa Debit Card"}
                    /> */}
                    </div>
                </div>
                <div className='mt-4 md:mt-0'>
                    <StatusButton title={status} />
                </div>
            </div>
        </div>
    );
};

export default PurchaseCard;