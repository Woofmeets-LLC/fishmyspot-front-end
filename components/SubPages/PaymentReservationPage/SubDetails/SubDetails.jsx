import { format } from 'date-fns';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SubDetailsItem from './SubDetailsItem';

const SubDetails = ({ title, step }) => {
  const [isAgree, setIsAgree] = useState(false);
  const bookingData = useSelector((state) => state.bookingData);
  const additionalAngler = parseInt(+bookingData?.['additional-guests'] || 0);
  return (
    <>
      <div className="mb-4 xl:mb-8">
        <h1 className="mb-2 font-food-truck text-xl uppercase text-primary sm:mb-4 sm:text-2xl md:mb-5 md:text-3xl lg:mb-7 xl:text-4xl">
          CONFIRM DETAILS
        </h1>

        <label className="mt-3 mb-2 block cursor-pointer text-base text-primary md:text-lg lg:mt-5">
          <input
            type="checkbox"
            className="cursor-pointer"
            id="agree-with-terms"
            data-is-agree={isAgree}
            checked={isAgree}
            onChange={() => setIsAgree((prevIsAgree) => !prevIsAgree)}
          />
          <span>
            {" I have read and agree with FishMySpot's"}
            <span className="text-highlight-3">
              {' '}
              Rules and Regulations, Cancellation and Weather Policy.
            </span>
          </span>
        </label>
        {!isAgree && (
          <div className="text-sm text-red-500 md:text-base">
            Please agree to the Terms and Conditions to continue.
          </div>
        )}
      </div>
      <div className="flex items-center justify-between border-b border-b-highlight-1 pb-1">
        <h1 className="font-food-truck text-xl uppercase text-primary sm:text-2xl md:text-3xl xl:text-4xl">
          {title}
        </h1>
      </div>
      <div className="pt-3 lg:pt-5 2xl:pt-7">
        <SubDetailsItem
          item={'Date'}
          value={
            bookingData?.date
              ? format(bookingData?.date, 'dd MMMM, yyyy')
              : 'N/A'
          }
        />
        <SubDetailsItem item={'Time'} value={bookingData?.time || 'N/A'} />
        <SubDetailsItem
          item={'Fishing spot'}
          value={bookingData?.pondData?.attributes?.title || 'N/A'}
        />
        <SubDetailsItem
          item={
            bookingData.dayType == 'halfDay' ? 'Half Day Cost' : 'Full Day Cost'
          }
          value={`$${parseFloat(
            +bookingData?.dayRates?.[bookingData?.dayType] || 0
          ).toFixed(2)}`}
        />
        {Object.keys(bookingData?.experience || {})
          ?.filter((key) => bookingData?.experience?.[key]?.checked)
          ?.map((key) => {
            return (
              <>
                <SubDetailsItem
                  key={key}
                  item={key}
                  value={`$${parseFloat(
                    +bookingData?.experience?.[key].price
                  ).toFixed(2)}`}
                />
                {key === 'Additional Fisherman' && additionalAngler !== 0 && (
                  <SubDetailsItem
                    item={'Additional Guests'}
                    value={`$${parseFloat(
                      +bookingData?.experience?.['Additional Fisherman'].price *
                        additionalAngler
                    ).toFixed(2)}`}
                  />
                )}
              </>
            );
          })}

        <div className="border-b border-b-highlight-1 pb-1 2xl:pb-3">
          <SubDetailsItem
            item={'Service fees'}
            value={`$${parseFloat(+bookingData?.serviceFee).toFixed(2)}`}
          />
        </div>
        <div className="mt-2 md:mt-3 2xl:mt-5">
          <SubDetailsItem
            item={'Total'}
            value={`$${parseFloat(+bookingData?.total).toFixed(2)}`}
          />
        </div>
      </div>
    </>
  );
};

export default SubDetails;
