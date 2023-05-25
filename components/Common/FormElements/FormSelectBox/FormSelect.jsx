import { useField } from 'formik';
import React from 'react';

const FormSelect = ({ label, children, name, ...props }) => {
  const [field, meta] = useField({ name });
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="mb-2 block font-trade-gothic-bold text-xl text-primary"
      >
        {label}
      </label>
      <select
        {...field}
        {...props}
        onChange={(e) => {
          field.onChange(e);
          typeof props?.onChange != 'undefined' && props.onChange();
        }}
        className="m-0 block w-full cursor-pointer rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-[7.5px] font-trade-gothic text-base font-medium text-primary transition ease-in-out focus:outline-none"
      >
        {children}
      </select>
      {meta.touched && meta.error ? (
        <div className="mt-2 text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormSelect;
