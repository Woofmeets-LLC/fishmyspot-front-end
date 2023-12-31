/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
    tran: '',
    sk: '',
  });
  const [keyValue, setKeyValue] = useState(1);

  const { bookingData, auth } = useSelector((state) => state);
  const router = useRouter();

  const proceedTransaction = (id) => {
    setLoading(true);
    const slots = {
      '06:00 AM - 11:00 AM': { startTime: '06:00', endTime: '11:00' },
      '11:00 AM - 04:00 PM': { startTime: '11:00', endTime: '16:00' },
      '04:00 PM - 09:00 PM': { startTime: '16:00', endTime: '21:00' },
      '09:00 PM - 06:00 AM': { startTime: '21:00', endTime: '06:00' },
      '06:00 AM - 09:00 PM': { startTime: '06:00', endTime: '21:00' },
    };

    // Formatting line items
    const experienceLineItems = Object.keys(bookingData?.experience || {})
      ?.filter((key) => bookingData?.experience?.[key].checked)
      ?.map((key) => ({
        code: `line-item/${key
          .trim()
          .replaceAll('/', 'or')
          .replaceAll(' ', '-')
          .toLowerCase()}`,
        unitPrice: {
          amount: +bookingData?.experience?.[key]?.price * 100,
          currency: 'USD',
          _sdkType: 'Money',
        },
        quantity: 1,
      }));

    if (parseInt(bookingData?.['additional-guests']) !== 0) {
      experienceLineItems.push({
        code: `line-item/additional-guests`,
        unitPrice: {
          amount: bookingData?.experience?.['Additional Fisherman']?.checked
            ? bookingData?.experience?.['Additional Fisherman']?.price * 100
            : 0,
          currency: 'USD',
          _sdkType: 'Money',
        },
        quantity: parseInt(bookingData?.['additional-guests']),
      });
    }

    if (bookingData?.['applied-discount']) {
      experienceLineItems.push({
        code: 'line-item/coupon-discount',
        unitPrice: {
          amount: -bookingData?.['applied-discount'] * 100,
          currency: 'USD',
          _sdkType: 'Money',
        },
        quantity: 1,
        includeFor: ['customer', 'provider'],
      });
    }

    const lineItems = [
      ...experienceLineItems,
      {
        code: `line-item/${
          bookingData?.dayType == 'halfDay' ? 'half-day' : 'full-day'
        }`,
        unitPrice: {
          amount: +bookingData?.dayRates[bookingData?.dayType] * 100,
          currency: 'USD',
          _sdkType: 'Money',
        },
        quantity: 1,
      },
      {
        code: `line-item/service-charge`,
        unitPrice: {
          amount: +bookingData.serviceFee * 100,
          currency: 'USD',
          _sdkType: 'Money',
        },
        quantity: 1,
      },
    ];

    axios
      .post(
        '/api/booking/instant-booking-with-stripe',
        {
          id,
          ...bookingTimeFormatter(bookingData.date, slots[bookingData.time]),
          lineItems,
        },
        { withCredentials: true }
      )
      .then((res) => {
        // setLoading(false);
        const stripeSecretKey =
          res?.data?.data?.attributes?.protectedData?.stripePaymentIntents
            ?.default?.stripePaymentIntentClientSecret;
        const stripePaymentIntentId =
          res?.data?.data?.attributes?.protectedData?.stripePaymentIntents
            ?.default?.stripePaymentIntentId;
        setTransactionInfo({
          tran: id,
          sk: stripeSecretKey,
        });
        if (bookingData?.['applied-discount']) {
          axios
            .post(`${process.env.BACKEND_URL}/giftcards/apply`, {
              usedAmount: bookingData?.['applied-discount'],
              promo: bookingData?.giftCode,
              anglerId: auth?.user?.id,
              transactionId: id,
              pondId: bookingData?.['pond-id'],
              pondOwnerId:
                bookingData?.pondData?.relationships?.author?.data?.id?.uuid,
              paymentIntent: stripePaymentIntentId,
            })
            .then((res) => {
              // console.log(res);
            })
            .catch((err) => {
              console.log({ err });
              setError({
                status: true,
                message: 'Something went wrong, please try again later',
              });
            });
        }
        setLoading(false);
        // const stripePaymentIntentId = res?.data?.data?.attributes?.protectedData?.stripePaymentIntents?.default?.stripePaymentIntentId;
        // router.push(`/payment-reservation/payment?tran=${id}&sk=${stripeSecretKey}`);
      })
      .catch((err) => {
        setLoading(false);
        console.log({ err });
        setError({
          status: true,
          message: 'Something went wrong, please try again later',
        });
      });
  };

  const handleInitiateTransaction = () => {
    setLoading(true);
    getSdk()
      .transactions.initiate(
        {
          processAlias:
            'flex-default-process/hourly-pre-authorized-booking-with-stripe',
          transition: 'transition/enquire',
          params: {
            listingId: bookingData['pond-id'],
          },
        },
        {
          expand: true,
        }
      )
      .then((res) => {
        setLoading(false);
        const transactionId = res.data.data.id.uuid;
        proceedTransaction(transactionId);
        // showOwnListing(res.data.data.id.uuid)
      })
      .catch((err) => {
        setLoading(false);
        setError({
          status: true,
          message: 'Something went wrong, please try again later',
        });
      });
  };

  useEffect(() => {
    handleInitiateTransaction();
  }, []);

  const reset = () => {
    setKeyValue(keyValue + 1);
  };

  return (
    <HomeLayout
      isPrivate
      guards={{
        account_type: 'angler',
        fallbackUrl: '/',
      }}
    >
      <div className=" bg-secondary text-center text-white">
        <div className="container">
          {' '}
          Warning: The time slot will be{' '}
          <b className="font-bold">blocked for 10 minutes</b> if you{' '}
          <b className="font-bold">reload or return</b> from this page.You can
          try again in 10 minutes for the same time slot if that is the case.{' '}
        </div>
      </div>
      <div className="container">
        <div className="mx-auto pt-6 pb-16 lg:w-[800px] xl:w-[965px] xl:pt-10 xl:pb-32">
          <div className="mb-11">
            <h1 className="font-food-truck text-xl uppercase text-primary sm:text-2xl md:text-3xl xl:text-4xl">
              PRICE CALCULATOR
            </h1>
          </div>

          {loading ? (
            <div className="my-10 flex flex-wrap items-center justify-center">
              <ClipLoader size={50} color={'#1971ff'} />
              <h2 className="mt-2 w-full text-center font-semibold">
                Checking transaction...
              </h2>
            </div>
          ) : error?.status ? (
            <div className="my-5 font-trade-gothic text-lg text-red-500">
              {error.message}
            </div>
          ) : (
            <SubPaymentStepper
              transactionInfo={transactionInfo}
              reset={reset}
              key={keyValue}
            />
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default PaymentReservation;
