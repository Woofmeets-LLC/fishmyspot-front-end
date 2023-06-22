import { useField } from 'formik';
import React from 'react';

const PhoneNumberInput = ({ label, className, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const formatPhoneNumber = (value) => {
    const cleanedValue = value.replace(/[^\d]/g, ''); // Remove non-digit characters

    if (cleanedValue.length <= 3) {
      // Format as (XXX) XXX-XXXX
      return cleanedValue;
    } else if (cleanedValue.length > 3 && cleanedValue?.length <= 6) {
      // Format as (XXX) XXX-XXXX
      return `(${cleanedValue.slice(0, 3)}) ${cleanedValue.slice(3, 6)}`;
    } else {
      // Format as (XXX) XXX-XXXX
      return `(${cleanedValue.slice(0, 3)}) ${cleanedValue.slice(
        3,
        6
      )}-${cleanedValue.slice(6, 10)}`;
    }
    return cleanedValue;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const formattedNumber = formatPhoneNumber(value); // Format phone number

    // Only update the field value if it's a valid phone number
    if (formattedNumber || value === '') {
      helpers.setValue(formattedNumber);
    }
  };
  return (
    <div className="mb-4">
      <label
        htmlFor={props.name}
        className="mb-2 block font-trade-gothic-bold text-lg capitalize text-primary"
      >
        {label}
      </label>
      <input
        type={props.type ? props.type : 'text'}
        id={props.name}
        className={`${props?.disabled ? 'bg-gray-50' : 'bg-white'} ${
          className && className
        } m-0 block w-full rounded border border-solid border-gray-300 bg-clip-padding bg-no-repeat  px-3 py-[5px] font-trade-gothic text-base text-primary transition ease-in-out focus:outline-none`}
        {...{ ...field, onChange: (e) => handleChange(e) }}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="mt-2 text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default PhoneNumberInput;
