import { useField } from 'formik';
import React from 'react';

const FormTextarea = ({ label, name, resizeY = false, ...props }) => {
  const [field, meta] = useField({ name });
  return (
    <div className="mb-6">
      <label
        htmlFor={props.name}
        className={`mb-2 block font-trade-gothic-bold text-xl text-primary 3xl:text-2xl`}
      >
        {label}
      </label>
      <textarea
        className={`m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-[5px] text-base text-gray-700 transition ease-in-out focus:outline-none ${
          resizeY ? 'resize-y' : 'resize-none'
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="mt-2 text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormTextarea;
