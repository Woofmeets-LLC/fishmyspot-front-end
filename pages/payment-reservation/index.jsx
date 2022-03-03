
import React from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import * as yup from 'yup';
import SubConfimDetails from '../../components/SubPages/PaymentReservationPage/SubConfirmDetails';
import FormikStep from '../../components/SubPages/PaymentReservationPage/FormikStepper/FormikStep';
import FormikStepper from '../../components/SubPages/PaymentReservationPage/FormikStepper';
import SubPaymentMethod from '../../components/SubPages/PaymentReservationPage/SubPaymentMethod';
import SubCheckout from '../../components/SubPages/PaymentReservationPage/SubCheckout';
import PaymentSuccess from '../../components/SubPages/PaymentReservationPage/PaymentSuccess';

const PaymentReservation = () => {
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
      numberOfAnglers: yup.string().required("You have to select one of those"),
      agreementChecked: yup.boolean().required("You have to checked"),
      addGiftCard: yup.string().required("Gift Card is required")
    }),
    paymentMethod: yup.object({
      eligiblePay: yup.string().required("You have to select one of these"),
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
          >
            <FormikStep validation={validation.confirmDetails}>
              <SubConfimDetails />
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
