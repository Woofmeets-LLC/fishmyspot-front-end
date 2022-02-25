import { useField } from 'formik';
import React from 'react';

const OthersFish = () => {
    const [isSelectedField, isSelectedMeta, isSelectedHelpers] = useField({ name: "others-fish[isSelected]" });
    const [namesField] = useField({ name: "others-fish[names]" });
    return (
        <div className="mb-1">
            <label className="block cursor-pointer font-trade-gothic-bold text-primary mb-2">
                <span className="inline-block w-[18px] h-[18px] rounded-full  border-2 border-secondary -mb-[3px] mr-1">
                    <input
                        type="radio"
                        {...{
                            ...isSelectedField,
                            checked: isSelectedField.value,
                            onChange: () => console.log(),
                            onClick: () => isSelectedHelpers.setValue(!isSelectedField.value)
                        }}
                        // checked={field.value == radioBtn.value}
                        className="appearance-none rounded-full h-[14px] w-[14px] border-2 border-white bg-white checked:bg-secondary checked:border-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" />
                </span>
                <span className="inline-block mr-2"> Others ( species ): </span>
                <input
                    type="text"
                    className="outline-none border-b-2 border-primary"
                    {...namesField}
                    disabled={!isSelectedField.value}
                />
            </label>
            <p className="text-sm text-gray-500">Use comma for giving multiple <b>Others fish name</b>!</p>
        </div>
    );
};

export default OthersFish;