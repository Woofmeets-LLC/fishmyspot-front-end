import React, { useState } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { useSelector } from 'react-redux';
import SubCheckoutForm from '.';
import { getSdk } from '../../../../../sharetribe/sharetribeSDK';
import SubStripeWrapper from '../SubStripeWrapper';
import CheckoutInput from './CheckoutInput';

const CustomCheckoutForm = ({ setStep, tran, sk, reset }) => {
  const [submittedBillingInfo, setSubmittedBillingInfo] = useState(false);
  const [addressError, setAddressError] = useState({
    isError: false,
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const { user } = useSelector((state) => state.auth);

  const [name, setName] = useState(
    `${user?.profile?.firstName} ${user?.profile?.lastName}`
  );
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.profile?.publicData?.phone || '');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');

  const states = {
    addressError,
    setAddressError,
    errors,
    setErrors,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    city,
    setCity,
    zipCode,
    setZipCode,
    state,
    setState,
  };

  const getAddress = (place) => {
    setAddressError({ isError: false, message: '' });

    setAddress(place.formatted_address);
    // setCity("");
    setState('');
    setZipCode('');

    let errorCount = 2;
    place.address_components.forEach((component) => {
      // if (component.types[0] === 'administrative_area_level_2') {
      //     setCity(component?.short_name)
      //     errorCount--;
      // }
      if (component.types[0] == 'postal_code') {
        setZipCode(component?.short_name);
        errorCount--;
      }
      if (component.types[0] == 'administrative_area_level_1') {
        setState(component?.short_name);
        errorCount--;
      }
    });
    if (errorCount) {
      setAddressError({
        isError: true,
        message: 'Address is not valid. Select valid address!',
      });
    } else {
      setAddressError({ isError: false, message: '' });
    }
  };

  const isAnyFieldEmpty = [
    'name',
    'email',
    'phone',
    'address',
    'city',
    'zipCode',
    'state',
  ]
    ?.map((key) => states[key] == '')
    ?.includes(true);
  const hasAnyError = Object.keys(errors)
    ?.map((key) => errors[key] != '')
    ?.includes(true);

  const billing_details = {
    address: {
      city: city,
      country: null,
      line1: address,
      line2: null,
      postal_code: zipCode,
      state: state,
    },
    email: email,
    name: name,
    phone: phone,
  };

  const handleSubmit = () => {
    if (!isAnyFieldEmpty && !hasAnyError) {
      setSubmittedBillingInfo(true);
      getSdk().currentUser.updateProfile({
        privateData: {
          fullAddress: {
            city: city,
            country: null,
            line1: address,
            line2: null,
            postal_code: zipCode,
            state: state,
          },
          address,
          email,
          phone,
        }
      })
        .then(res => { })
        .catch(err => { })
    }

  }
  return (
    <>
      {!submittedBillingInfo && (
        <div>
          <p className="mb-2 font-trade-gothic-bold text-lg text-primary lg:mb-5">
            Billing Info
          </p>
          <CheckoutInput
            label="Name"
            name="name"
            placeholder="Enter your name"
            value={name}
            setValue={setName}
            validation={/^.{1,}$/}
            errMessage={'Name is required'}
            setErrors={setErrors}
            errors={errors}
          />
          <div className="grid gap-5 md:grid-cols-2">
            <CheckoutInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              setValue={setEmail}
              errMessage={'Email is not valid'}
              validation={
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              }
              setErrors={setErrors}
              errors={errors}
            />
            <CheckoutInput
              label="phone number"
              name="phone"
              placeholder="Enter your phone number"
              value={phone}
              setValue={setPhone}
              errMessage={'Phone number is not valid'}
              validation={/^.{10,}$/}
              setErrors={setErrors}
              errors={errors}
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-trade-gothic-bold text-lg capitalize text-primary">
              Address
            </label>
            <Autocomplete
              placeholder={'Enter Your Address'}
              className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat  px-3 py-[5px] font-trade-gothic text-base text-primary transition ease-in-out focus:outline-none"
              apiKey={process.env.GOOGLE_MAP_API_KEY}
              onPlaceSelected={(place) => {
                getAddress(place, 'address');
              }}
              options={{
                types: 'ALL',
              }}
              defaultValue={address}
            />
            {addressError.isError ? (
              <div className="mt-2 text-sm text-red-500">
                {addressError.message}
              </div>
            ) : null}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <CheckoutInput
              label="City"
              name="city"
              placeholder="Enter your city"
              value={city}
              setValue={setCity}
              setErrors={setErrors}
              errors={errors}
            />
            <CheckoutInput
              label="State"
              name="state"
              placeholder="Enter your state"
              value={state}
              setValue={setState}
              setErrors={setErrors}
              errors={errors}
              disabled
            />
          </div>

          <CheckoutInput
            label="Zip Code"
            name="zipCode"
            placeholder="Enter your zip code"
            value={zipCode}
            setValue={setZipCode}
            setErrors={setErrors}
            errors={errors}
            disabled
          />
          <button
            onClick={handleSubmit}
            className={`${!isAnyFieldEmpty && !hasAnyError ? 'bg-secondary' : 'bg-gray-300'
              } w-full rounded py-2 px-3 font-trade-gothic-bold text-sm text-white sm:py-3 md:text-base 2xl:py-5 2xl:text-xl`}
          >
            Next Step
          </button>
        </div>
      )}
      {tran && sk && submittedBillingInfo && (
        <SubStripeWrapper>
          <SubCheckoutForm
            setStep={setStep}
            id={tran}
            secret={sk}
            billing_details={billing_details}
            reset={reset}
          />
        </SubStripeWrapper>
      )}
    </>
  );
};

export default CustomCheckoutForm;
