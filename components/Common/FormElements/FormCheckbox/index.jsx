import { useField } from 'formik';
import React from 'react';

const FormCheckbox = ({ label, ...props }) => {
    const [field, meta, helpers] = useField({ ...props, type: 'checkbox' });
    return (
        <div className="mb-4">
            <label
                onChange={() => helpers.setValue(!field.value)}
                className="flex items-center text-[16px] font-trade-gothic-bold text-primary mb-2 cursor-pointer">
                <input
                    type="checkbox"
                    className="w-4 h-4 mr-2 accent-secondary"
                    {...field} {...props} />
                {label}
            </label>
            {meta.touched && meta.error ? (
                <div className="mt-2 text-red-500 text-sm">{meta.error}</div>
            ) : null}
        </div>

    );
};

export default FormCheckbox;