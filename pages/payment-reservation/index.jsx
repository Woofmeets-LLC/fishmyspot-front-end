import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import React, { useState } from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import * as yup from 'yup';
import SubConfimDetails from '../../components/SubPages/PaymentReservationPage/SubConfirmDetails';
import SubEligiblePay from '../../components/SubPages/PaymentReservationPage/SubEligiblePay';
import SubBillingInfo from '../../components/SubPages/PaymentReservationPage/SubBillingInfo';
import FormikStep from '../../components/SubPages/PaymentReservationPage/FormikStepper/FormikStep';
import FormikStepper from '../../components/SubPages/PaymentReservationPage/FormikStepper';

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
  }
  return (
    <HomeLayout>
      <div className="container">
        <FormikStepper
          initialValues={initialValues}
        >
          <FormikStep validation={validation.confirmDetails}>
            <SubConfimDetails />
          </FormikStep>
          <FormikStep validation={validation.paymentMethod}>
            <SubEligiblePay />
          </FormikStep>
          <FormikStep>
            <SubBillingInfo />
          </FormikStep>
        </FormikStepper>
      </div>
    </HomeLayout>
  );
};

export default PaymentReservation;
