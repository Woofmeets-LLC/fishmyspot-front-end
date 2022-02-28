import { useField } from 'formik';
import React from 'react';

const SubListingTextarea = ({ label, name, ...props }) => {
    const [field, meta] = useField({ name });
    return (
        <div className="mb-6">
            <label htmlFor={props.name}
                className={`block text-2xl text-primary font-trade-gothic-bold mb-2`}>{label}</label>
            <textarea
                className="block w-full px-3 py-[5px] text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none resize-none"
                {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="mt-2 text-red-500 text-sm">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default SubListingTextarea;