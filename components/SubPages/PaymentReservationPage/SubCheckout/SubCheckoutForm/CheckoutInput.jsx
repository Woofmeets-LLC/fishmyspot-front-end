/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const CheckoutInput = ({ label, name, value, setValue, validation, errMessage, errors, setErrors, ...props }) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="block text-lg text-primary font-trade-gothic-bold capitalize mb-2"
            >
                {label}
            </label>
            <input
                type={props.type ? props.type : 'text'}
                id={props.name}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
                    if (validation && !validation.test(e.target.value)) {
                        setErrors(prevErrors => ({ ...prevErrors, [name]: errMessage }));
                    }
                }}
                {...props}
                className={`${props?.disabled ? "bg-gray-50" : "bg-white"}  block w-full px-3 py-[5px] font-trade-gothic text-base text-primary bg-clip-padding bg-no-repeat  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none`}
            />

            {errors[name] ? (
                <div className="mt-2 text-red-500 text-sm">{errors[name]}</div>
            ) : null}
        </div>
    );
};

export default CheckoutInput;