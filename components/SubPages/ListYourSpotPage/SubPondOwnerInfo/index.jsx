import { useField } from 'formik';
import { useState } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { FormInput } from '../../../Common';

const SubPondOwnerInfo = () => {
  const [addressError, setAddressError] = useState({
    isError: false,
    message: '',
  });

  const [fullDayRateField] = useField({ name: 'fullDayRate' });

  const [firstNameField] = useField({ name: 'firstName' });
  const [lastNameField] = useField({ name: 'lastName' });
  const [zipCodeField, zipCodeMeta, zipCodeHelpers] = useField({
    name: 'zipCode',
  });
  const [addressField, addressMeta, addressHelpers] = useField({
    name: 'address',
  });
  const [latLngField, latLngMeta, latLngHelpers] = useField({ name: 'latLng' });
  const [cityField, cityMeta, cityHelpers] = useField({ name: 'city' });
  const [stateField, stateMeta, stateHelpers] = useField({ name: 'state' });

  const getAddress = (place) => {
    setAddressError({ isError: false, message: '' });

    addressHelpers.setValue(place.formatted_address);
    // cityHelpers.setValue("");
    stateHelpers.setValue('');
    zipCodeHelpers.setValue('');

    let errorCount = 2;
    place.address_components.forEach((component) => {
      // if (component.types[0] === 'administrative_area_level_2') {
      //     cityHelpers.setValue(component?.short_name)
      //     errorCount--;
      // }
      if (component.types[0] == 'postal_code') {
        zipCodeHelpers.setValue(component?.short_name);
        errorCount--;
      }
      if (component.types[0] == 'administrative_area_level_1') {
        stateHelpers.setValue(component?.short_name);
        errorCount--;
      }
      latLngHelpers.setValue({
        _sdkType: 'LatLng',
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
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

  return (
    <div>
      <div className="text-center text-primary">
        <h2 className="mb-5 font-trade-gothic-bold text-2xl">
          {`${firstNameField?.value} ${lastNameField?.value}`}, you could make
        </h2>
        <h1 className="mb-8 font-trade-gothic-bold text-5xl">
          $ {+fullDayRateField?.value * 7}
        </h1>
        <p className="mb-10 text-sm">
          by sharing your pond for 1 week in {zipCodeField?.value}.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 xl:gap-6">
        <FormInput
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
          disabled
        />
        <FormInput
          name="lastName"
          label="Last Name"
          placeholder="Enter your last name"
          disabled
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
          defaultValue={addressField?.value}
        />
        {addressMeta.touched && addressMeta.error ? (
          <div className="mt-2 text-sm text-red-500">{addressMeta.error}</div>
        ) : null}
        {addressError.isError ? (
          <div className="mt-2 text-sm text-red-500">
            {addressError.message}
          </div>
        ) : null}
      </div>
      <div className="grid grid-cols-3 gap-4 xl:gap-6">
        <FormInput name="city" label="City" placeholder="Please enter city" />
        <FormInput
          name="state"
          label="State"
          placeholder="Please enter state"
          disabled
        />
        <FormInput
          name="zipCode"
          label="zip"
          placeholder="Please enter zipCode"
          disabled
        />
      </div>
      <FormInput
        name="email"
        label="Email"
        placeholder="Please enter email"
        disabled
      />
      <FormInput name="phone" label="Phone" placeholder="Please enter phone" />
    </div>
  );
};

export default SubPondOwnerInfo;
