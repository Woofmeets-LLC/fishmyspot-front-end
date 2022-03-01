import { useField } from 'formik';
import React from 'react';

const BillingInfoInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name}>
        {label}
      </label>
      <input
        type={props.type ? props.type : 'text'}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="mt-2 text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default BillingInfoInput;