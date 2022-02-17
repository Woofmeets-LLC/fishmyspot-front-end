import { useField } from 'formik';
import React from 'react';

const FormSelect = ({ label, children, name, ...props }) => {
    const [field, meta] = useField({ name });
    return (
        <div>
            <label htmlFor={name} className="block text-[16px] text-primary font-trade-gothic-bold capitalize mb-2">{label}</label>
            <select
                {...field} {...props}
                onChange={(e) => {
                    field.onChange(e);
                    typeof (props?.onChange) != "undefined" && props.onChange();
                }}
                className="block w-full px-3 py-[7.5px] font-trade-gothic text-base text-primary bg-white bg-clip-padding bg-no-repeat font-medium border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none cursor-pointer">
                {children}
            </select>
            {meta.touched && meta.error ? (
                <div className="mt-2 text-red-500 text-sm">{meta.error}</div>
            ) : null}
        </div>

    );
};

export default FormSelect;