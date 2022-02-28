import { useField } from 'formik';
import React from 'react';

const FishDetails = ({ label, name, image = "/images/pond1.jpg", ...props }) => {
    const [field, meta, helpers] = useField({ name });
    return (
        <div className="mb-1">
            <label className="block cursor-pointer font-trade-gothic-bold text-primary mb-2">
                <span className="inline-block w-[18px] h-[18px] rounded-full  border-2 border-secondary -mb-[3px]">
                    <input
                        type="radio"
                        name={name}
                        {...{
                            ...field,
                            checked: field?.value,
                            onChange: () => console.log(),
                            onClick: () => helpers.setValue(!field.value)
                        }}
                        {...props}
                        // checked={field.value == radioBtn.value}
                        className="appearance-none rounded-full h-[14px] w-[14px] border-2 border-white bg-white checked:bg-secondary checked:border-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" />
                </span> {label}
            </label>
            <img src={image} className="aspect-[13/8] border" alt="" />
        </div>
    );
};

export default FishDetails;