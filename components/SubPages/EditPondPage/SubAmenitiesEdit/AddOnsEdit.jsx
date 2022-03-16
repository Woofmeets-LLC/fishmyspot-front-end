import { useField } from 'formik';
import React from 'react';
import { FormCheckbox } from '../../../Common';

const AddOnsEdit = () => {
    const [selectOtherAddOnsField, { }, selectOtherAddOnsHelpers] = useField("otherAddOns.isSelected");
    const [namesOtherAddOnsField] = useField("otherAddOns.services");
    const [addOnsField] = useField("addOns");
    return (
        <>
            <h2 className="text-primary font-trade-gothic-bold text-xl mb-4">Check all that you would like to ADD-ON to your listing. (This is an additional fee that anglers will be charged):</h2>
            {
                addOnsField.value &&
                Object.keys(addOnsField?.value)?.map((key, index) => (
                    <FormCheckbox
                        key={index}
                        name={`addOns[${key}].checked`}
                        label={`${addOnsField?.value?.[key]?.title} ($${addOnsField?.value?.[key]?.price})`} />
                ))
            }
            {/* <FormCheckbox
                name="otherAddOns.isSelected"
                label={`Other`} /> */}
            {/* {
                selectOtherAddOnsField.value &&
                <div className="">
                    Others addons
                </div>
            } */}

        </>
    );
};

export default AddOnsEdit;