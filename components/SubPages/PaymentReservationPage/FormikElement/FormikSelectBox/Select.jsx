import { useField } from 'formik';
import React from 'react';

const Select = ({ label, children, name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <div>
      {
        label !== " " && <label
          htmlFor={name}
          className="block text-lg text-primary font-trade-gothic-bold mb-2"
        >
          {label}
        </label>}
      <select
        {...field}
        {...props}
        className="block w-full px-3 py-[7.5px] font-trade-gothic text-base text-primary bg-white bg-clip-padding bg-no-repeat font-medium border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none cursor-pointer"
      >
        {children}
      </select>
      {
        meta.touched && meta.error ? (
          <div className="mt-2 text-red-500 text-sm">{meta.error}</div>
        ) : null
      }
    </div>
  );
};

export default Select;