import { useField } from 'formik';
import React from 'react';

const OthersFish = () => {
    const [isSelectedField, isSelectedMeta, isSelectedHelpers] = useField({ name: "others-fish[isSelected]" });
    const [namesField] = useField({ name: "others-fish[names]" });
    return (
        <div className="mb-1">
            <label className="inline-block cursor-pointer font-trade-gothic-bold text-primary mb-2">
                <span className="inline-block w-[18px] h-[18px] rounded-full  border-2 border-secondary -mb-[3px] mr-1">
                    <input
                        type="radio"
                        {...{
                            ...isSelectedField,
                            checked: isSelectedField.value,
                            onChange: () => { },
                            onClick: () => isSelectedHelpers.setValue(!isSelectedField.value)
                        }}
                        // checked={field.value == radioBtn.value}
                        className="appearance-none rounded-full h-[14px] w-[14px] border-2 border-white bg-white checked:bg-secondary checked:border-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" />
                </span>
                <span className="inline-block mr-2"> Others ( species ): </span>
            </label>
            <input
                type="text"
                className="outline-none border-b-2 border-primary placeholder:font-trade-gothic"
                placeholder="Ex: Hilisha, wall eye, etc."
                {...namesField}
                disabled={!isSelectedField.value}
            />
            <p className="text-sm text-gray-500">Use comma for separating multiple <b>other fish names</b>!</p>
        </div>
    );
};

export default OthersFish;