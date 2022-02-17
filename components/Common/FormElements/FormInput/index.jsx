import { useField } from 'formik';
import React from 'react';

const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-3">
            <label
                htmlFor={props.name}
                className="block text-[16px] text-primary font-trade-gothic-bold capitalize mb-2"
            >
                {label}
            </label>
            <input
                type={props.type ? props.type : 'text'}
                className="block w-full px-3 py-[5px] font-trade-gothic text-base text-primary bg-white bg-clip-padding bg-no-repeat  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="mt-2 text-red-500 text-sm">{meta.error}</div>
            ) : null}
        </div>

    );
};

export default FormInput;