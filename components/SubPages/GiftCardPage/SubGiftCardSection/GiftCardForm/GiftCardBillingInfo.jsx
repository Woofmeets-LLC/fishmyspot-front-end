import { useState } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { setGiftCardData } from '../../../../../store/slices/giftCardSlice';
import CheckoutInput from '../../../PaymentReservationPage/SubCheckout/SubCheckoutForm/CheckoutInput';

const GiftCardBillingInfo = ({ setStep, step }) => {
  const dispatch = useDispatch();
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

  const { auth, giftCardData } = useSelector((state) => state);
  const { user } = auth;

  const [name, setName] = useState(
    user?.profile?.firstName && user?.profile?.lastName
      ? `${user?.profile?.firstName} ${user?.profile?.lastName}`
      : giftCardData?.name
      ? giftCardData.name
      : ''
  );
  const [email, setEmail] = useState(user?.email || giftCardData?.email || '');
  const [phone, setPhone] = useState(
    user?.profile?.publicData?.phone || giftCardData?.phone || ''
  );
  const [address, setAddress] = useState(giftCardData?.address?.line1 || '');
  const [city, setCity] = useState(giftCardData?.address?.city || '');
  const [zipCode, setZipCode] = useState(
    giftCardData?.address?.postal_code || ''
  );
  const [state, setState] = useState(giftCardData?.address?.state || '');

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

  const billingDetails = {
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
      dispatch(setGiftCardData(billingDetails));

      setStep(step + 1);

      // getSdk()
      //   .currentUser.updateProfile({
      //     privateData: {
      //       fullAddress: {
      //         city: city,
      //         country: null,
      //         line1: address,
      //         line2: null,
      //         postal_code: zipCode,
      //         state: state,
      //       },
      //       address,
      //       email,
      //       phone,
      //     },
      //   })
      //   .then((res) => {})
      //   .catch((err) => {});
    }
  };
  return (
    <>
      <h1 className="mb-4 font-food-truck text-2xl uppercase text-primary md:text-3xl lg:mb-8 2xl:text-5xl">
        Billing Info
      </h1>
      <div>
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
        <div className="grid gap-x-5 md:grid-cols-2">
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
              types: [],
            }}
            defaultValue={address}
          />
          {addressError.isError ? (
            <div className="mt-2 text-sm text-red-500">
              {addressError.message}
            </div>
          ) : null}
        </div>

        <div className="grid gap-x-5 md:grid-cols-2">
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
        <div className="grid grid-cols-2">
          <div className="flex justify-start">
            <button
              onClick={() => setStep(step - 1)}
              className="rounded bg-secondary py-2 px-3 font-trade-gothic-bold text-lg text-primary 2xl:py-3"
            >
              Go Back
            </button>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className={`${
                !isAnyFieldEmpty && !hasAnyError
                  ? 'bg-secondary'
                  : 'bg-gray-300'
              } rounded py-2 px-3 font-trade-gothic-bold text-lg text-primary 2xl:py-3`}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCardBillingInfo;
