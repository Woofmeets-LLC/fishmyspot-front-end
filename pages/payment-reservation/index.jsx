/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import SubPaymentStepper from '../../components/SubPages/PaymentReservationPage/SubPaymentStepper/SubPaymentStepper';
import HomeLayout from '../../layouts/HomeLayout';
import { bookingTimeFormatter } from '../../services/date/date-overflow-handler';
import { getSdk } from '../../sharetribe/sharetribeSDK';

const PaymentReservation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: '' });
  const [transactionInfo, setTransactionInfo] = useState({
    tran: "",
    sk: "",
  });
  const [keyValue, setKeyValue] = useState(1);

  const bookingData = useSelector(state => state.bookingData);
  const router = useRouter();



  const proceedTransaction = (id) => {
    setLoading(true);
    const slots = {
      "06:00 AM - 11:00 AM": { startTime: '06:00', endTime: '11:00' },
      "11:00 AM - 04:00 PM": { startTime: '11:00', endTime: '16:00' },
      "04:00 PM - 09:00 PM": { startTime: '16:00', endTime: '21:00' },
      "09:00 PM - 06:00 AM": { startTime: '21:00', endTime: '06:00' },
      "06:00 AM - 09:00 PM": { startTime: '06:00', endTime: '21:00' },
    };

    // Formatting line items 
    const experienceLineItems = Object.keys(bookingData?.experience || {})
      ?.filter(key => bookingData?.experience?.[key].checked)
      ?.map(key => ({
        code: `line-item/${key.trim().replaceAll("/", "or").replaceAll(" ", "-").toLowerCase()}`,
        unitPrice: {
          amount: +bookingData?.experience?.[key]?.price * 100,
          currency: 'USD',
          _sdkType: 'Money'
        },
        quantity: 1
      }))
    const lineItems = [
      ...experienceLineItems,
      {
        code: `line-item/${bookingData?.dayType == "halfDay" ? "half-day" : "full-day"}`,
        unitPrice: {
          amount: +bookingData?.dayRates[bookingData?.dayType] * 100,
          currency: 'USD',
          _sdkType: 'Money'
        },
        quantity: 1
      },
      {
        code: `line-item/service-charge`,
        unitPrice: {
          amount: +bookingData.serviceFee * 100,
          currency: 'USD',
          _sdkType: 'Money'
        },
        quantity: 1
      },
    ];

    axios.post('/api/booking/instant-booking-with-stripe', {
      id,
      ...bookingTimeFormatter(bookingData.date, slots[bookingData.time]),
      lineItems
    }, { withCredentials: true })
      .then(res => {
        setLoading(false);
        const stripeSecretKey = res?.data?.data?.attributes?.protectedData?.stripePaymentIntents?.default?.stripePaymentIntentClientSecret;
        setTransactionInfo({
          tran: id,
          sk: stripeSecretKey,
        })
        // const stripePaymentIntentId = res?.data?.data?.attributes?.protectedData?.stripePaymentIntents?.default?.stripePaymentIntentId;
        // router.push(`/payment-reservation/payment?tran=${id}&sk=${stripeSecretKey}`);
      })
      .catch(err => {
        setLoading(false);
        setError({ status: true, message: "Something went wrong, please try again later" });
        console.dir(err);
      });
  }

  const handleInitiateTransaction = () => {
    setLoading(true);
    getSdk().transactions.initiate({
      processAlias: "flex-default-process/hourly-instant-booking-with-stripe",
      transition: "transition/enquire",
      params: {
        listingId: bookingData['pond-id'],
      }
    }, {
      expand: true
    })
      .then(res => {
        setLoading(false);
        const transactionId = res.data.data.id.uuid;
        proceedTransaction(transactionId);
        // showOwnListing(res.data.data.id.uuid)
      })
      .catch(err => {
        setLoading(false);
        setError({ status: true, message: "Something went wrong, please try again later" });
        console.dir(err)
      })
  }

  useEffect(() => {
    handleInitiateTransaction()
  }, [])

  const reset = () => {
    setKeyValue(keyValue + 1);

  }

  return (
    <HomeLayout
      isPrivate
      guards={{
        account_type: 'angler',
        fallbackUrl: "/"
      }}
    >
      <div className="container">
        <div className='lg:w-[800px] xl:w-[965px] mx-auto pt-6 xl:pt-10 pb-16 xl:pb-32'>
          <div className='mb-11'>
            <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-food-truck uppercase text-primary'>PRICE CALCULATOR</h1>
            <p className='text-base xl:text-lg font-trade-gothic text-highlight-1 mt-2 md:mt-3 xl:mt-5'>All printing includes full-color on both sides.</p>
          </div>

          {
            loading
              ? (
                <div className="flex justify-center items-center flex-wrap my-10">
                  <ClipLoader size={50} color={'#1971ff'} />
                  <h2 className="w-full text-center font-semibold mt-2">Checking transaction...</h2>
                </div>
              )
              : (
                error?.status
                  ? (
                    <div className="text-red-500 font-trade-gothic text-lg my-5">{error.message}</div>
                  )
                  : (<SubPaymentStepper transactionInfo={transactionInfo} reset={reset} key={keyValue} />)
              )
          }
        </div>
      </div>
    </HomeLayout>
  );
};

export default PaymentReservation;
