import { useField } from 'formik';
import React from 'react';

const FormRadioButtons = ({ label, name, radioBtns = [], containerClasses, ...props }) => {
    const [field, meta] = useField({ name });
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-xl text-primary font-trade-gothic-bold capitalize mb-2">{label}</label>
            <div className={containerClasses ? containerClasses : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}>
                {
                    radioBtns?.map((radioBtn, index) => {
                        return <label key={index} className="cursor-pointer">
                            <span className="inline-block w-[18px] h-[18px] rounded-full  border-2 border-secondary -mb-[3px]">
                                <input
                                    type="radio"
                                    name={name}
                                    {...{ ...field, value: radioBtn.value }}
                                    {...props}
                                    checked={field.value == radioBtn.value}
                                    className="appearance-none rounded-full h-[14px] w-[14px] border-2 border-white bg-white checked:bg-secondary checked:border-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" />
                            </span> {radioBtn.title}
                        </label>
                    })
                }
            </div>
            {meta.touched && meta.error ? (
                <div className="mt-2 text-red-500 text-sm">{meta.error}</div>
            ) : null}

        </div>
    );
};

export default FormRadioButtons;