import { useField } from 'formik';
import React from 'react';
import { FormCheckbox } from '../../../Common';


const AddOns = () => {
    const [selectOtherAddOnsField, { }, selectOtherAddOnsHelpers] = useField("otherAddOns[isSelected]");
    const [namesOtherAddOnsField] = useField("otherAddOns[names]");
    return (
        <>
            <h2 className="text-primary font-trade-gothic-bold text-xl mb-4">Check all that you would like to ADD-ON to your listing. (This is an additional fee that anglers will be charged):</h2>
            <FormCheckbox name="addOns[Pond Trawler/Metal Boat ($20)]" label="Pond Trawler/Metal Boat ($20)" />
            <FormCheckbox name="addOns[Campsite ( $20 )]" label="Campsite ( $20 )" />
            <label
                onChange={() => selectOtherAddOnsHelpers.setValue(!selectOtherAddOnsField.value)}
                className="inline-flex items-center text-[16px] font-trade-gothic-bold text-primary cursor-pointer">
                <input
                    type="checkbox"
                    className="w-4 h-4 mr-2 accent-secondary"
                    {...{
                        ...selectOtherAddOnsField,
                        checked: selectOtherAddOnsField.value.isSelected
                    }} />
                <span className="inline-block mr-2"> Others: </span>
            </label>
            <input
                type="text"
                placeholder="Ex: Add-Ons1, Add-Ons2, etc."
                {...namesOtherAddOnsField}
                disabled={!selectOtherAddOnsField.value}
                className="border-b-2 border-primary appearance-none outline-none placeholder:font-trade-gothic mb-2" />
            <div className="px-6 mb-7">
                <p className="text-sm text-gray-500">Use comma for separating multiple <b>other amenities</b>!</p>
            </div>
        </>
    );
};

export default AddOns;