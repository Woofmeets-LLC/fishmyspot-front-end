import { useField } from 'formik';
import React from 'react';
import { FormCheckbox } from '../../../Common';

const Amenities = () => {
    const [selectOtherAmenitiesField, { }, selectOtherAmenitiesHelpers] = useField("otherAmenities[isSelected]");
    const [namesOtherAmenitiesField] = useField("otherAmenities[names]");
    return (
        <>
            <h2 className="text-primary font-trade-gothic-bold text-2xl mb-4">Choose Amenities</h2>
            <FormCheckbox name="amenities[Canoe/kayak]" label="Canoe/kayak" />
            <FormCheckbox name="amenities[Pavilion or Other Shelter]" label="Pavilion or Other Shelter" />
            <FormCheckbox name="amenities[Grill]" label="Grill" />
            <FormCheckbox name="amenities[Restroom]" label="Restroom" />
            <FormCheckbox name="amenities[Pet Friendly]" label="Pet Friendly" />
            <FormCheckbox name="amenities[Picnic Tables]" label="Picnic Tables" />
            <FormCheckbox name="amenities[Dock]" label="Dock" />
            <label
                onChange={() => selectOtherAmenitiesHelpers.setValue(!selectOtherAmenitiesField.value)}
                className="flex items-center text-[16px] font-trade-gothic-bold text-primary mb-1 cursor-pointer">
                <input
                    type="checkbox"
                    className="w-4 h-4 mr-2 accent-secondary"
                    {...{
                        ...selectOtherAmenitiesField,
                        checked: selectOtherAmenitiesField.value.isSelected
                    }} />
                Other (Include any other amenities you have):
            </label>
            <div className="px-6 mb-7">
                <input
                    type="text"
                    placeholder="Ex: Swimming Pool, Tennis Court, etc."
                    {...namesOtherAmenitiesField}
                    disabled={!selectOtherAmenitiesField.value}
                    className="w-full border-b-2 border-primary appearance-none outline-none mb-2" />
                <p className="text-sm text-gray-500">Use comma for separating multiple <b>other amenities</b>!</p>
            </div>
        </>
    );
};

export default Amenities;