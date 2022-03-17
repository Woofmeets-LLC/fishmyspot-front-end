import { useField } from 'formik';
import React from 'react';

const ExperienceItem = ({ name, price }) => {
    const [field] = useField({ name: `experience[${name}].checked` });
    return (
        <label
            className="flex items-center py-2 2xl:py-3 px-4 2xl:px-5 transition-all delay-200 hover:bg-gray-100 cursor-pointer">
            <input
                {...{ ...field, checked: field.value }}
                type="checkbox"
                className="w-4 h-4 accent-secondary mr-2 " /> {name} / ${price}
        </label>
    );
};

export default ExperienceItem;