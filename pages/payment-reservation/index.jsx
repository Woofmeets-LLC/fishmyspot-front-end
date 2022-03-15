
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import FormikStepper from '../../components/SubPages/PaymentReservationPage/FormikStepper';
import FormikStep from '../../components/SubPages/PaymentReservationPage/FormikStepper/FormikStep';
import PaymentSuccess from '../../components/SubPages/PaymentReservationPage/PaymentSuccess';
import SubCheckout from '../../components/SubPages/PaymentReservationPage/SubCheckout';
import SubConfirmDetails from '../../components/SubPages/PaymentReservationPage/SubConfirmDetails';
import SubPaymentMethod from '../../components/SubPages/PaymentReservationPage/SubPaymentMethod';
import HomeLayout from '../../layouts/HomeLayout';
import { bookingTimeFormatter } from '../../services/date/date-overflow-handler';
import { getSdk } from '../../sharetribe/sharetribeSDK';

const PaymentReservation = () => {
  const bookingData = useSelector(state => state.bookingData);
  const [data, setData] = useState()

  const initialValues = {
    numberOfAnglers: '',
    agreementChecked: false,
    addGiftCard: '',
    eligiblePay: '',
    cardNumber: '',
    email: '',
    companyName: '',
    vatNumber: '',
    billingAddress: '',
    zipCode: '',
    city: '',
    country: '',
  };

  const validation = {
    confirmDetails: yup.object({
      agreementChecked: yup.boolean().oneOf([true], 'Field must be checked'),
    }),
    paymentMethod: yup.object({
      eligiblePay: yup.string().required("You have to select one of those"),
    }),
    billingInfo: yup.object({
      cardNumber: yup.string().required("Card Number is required"),
      email: yup.string().required("Email is required"),
      companyName: yup.string().required("Company Name is required"),
      vatNumber: yup.string().required("Vat Number is required"),
      billingAddress: yup.string().required("Billing Address is required"),
      zipCode: yup.string().required("Zip Code is required"),
      city: yup.string().required("City is required"),
      country: yup.string().required("Country is required")
    })
  };

  const stepperArray = [
    "Confirm details",
    "Payment method",
    "Checkout",
    "Confirmation",
  ];

  const proceedTransaction = (id) => {
    const slots = {
      "06:00 AM - 11:00 AM": { startTime: '06:00', endTime: '11:00' },
      "11:00 AM - 04:00 PM": { startTime: '11:00', endTime: '16:00' },
      "04:00 PM - 09:00 PM": { startTime: '16:00', endTime: '21:00' },
      "09:00 PM - 06:00 AM": { startTime: '21:00', endTime: '06:00' },
      "06:00 AM - 09:00 PM": { startTime: '06:00', endTime: '21:00' },
    };
    axios.post('/api/booking/instant-booking-with-stripe', {
      id,
      ...bookingTimeFormatter(bookingData.date, slots[bookingData.time])
    }, { withCredentials: true })
      .then(res => {
        setData(res)
        console.log("CS", res?.data?.data?.attributes?.protectedData?.stripePaymentIntents?.default?.stripePaymentIntentClientSecret)
      })
      .catch(console.log);
  }

  const handleSubmit = (values) => {
    getSdk().transactions.initiate({
      processAlias: "flex-default-process/instant-booking",
      transition: "transition/enquire",
      params: {
        listingId: bookingData['pond-id'],
      }
    }, {
      expand: true
    })
      .then(res => {
        console.log(res.data.data.id.uuid)
        proceedTransaction(res.data.data.id.uuid);
        // showOwnListing(res.data.data.id.uuid)
      })
      .catch(err => {
        console.dir(err)
      })


  }
  console.log(data?.data);
  return (
    <HomeLayout>
      <div className="container">
        <div className='lg:w-[800px] xl:w-[965px] mx-auto pt-6 xl:pt-10 pb-16 xl:pb-32'>
          <div className='mb-11'>
            <h1 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-food-truck uppercase text-primary'>PRICE CALCULATOR</h1>
            <p className='text-base xl:text-lg font-trade-gothic text-highlight-1 mt-2 md:mt-3 xl:mt-5'>All printing includes full-color on both sides.</p>
          </div>
          <FormikStepper
            initialValues={initialValues}
            stepperArray={stepperArray}
            onSubmit={handleSubmit}
          >
            <FormikStep validation={validation.confirmDetails}>
              <SubConfirmDetails />
            </FormikStep>
            <FormikStep validation={validation.paymentMethod}>
              <SubPaymentMethod />
            </FormikStep>
            <FormikStep validation={validation.billingInfo}>
              <SubCheckout />
            </FormikStep>
            <FormikStep>
              <PaymentSuccess />
            </FormikStep>
          </FormikStepper>
        </div>
      </div>
    </HomeLayout>
  );
};

export default PaymentReservation;
