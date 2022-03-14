import { useField } from 'formik';
import React from 'react';



const DaysTypeSelect = ({ pondData }) => {
    const [field, meta, helpers] = useField('dayType');

    const radioBtns = [
        {
            title: 'Half day',
            price: parseFloat(+pondData?.attributes?.publicData?.halfDay).toFixed(2),
            value: 'halfDay',
        },
        {
            title: 'Full day',
            price: parseFloat(+pondData?.attributes?.publicData?.fullDay).toFixed(2),
            value: 'fullDay',
        },
    ];
    return (
        <div className='text-base lg:text-lg 2xl:text-xl text-primary font-trade-gothic-bold mb-3 lg:mb-4 2xl:mb-5 space-y-2 md:space-y-3 lg:space-y-4 2xl:space-y-5'>
            {
                radioBtns?.map((radioBtn, index) => {
                    return (
                        <label
                            key={index}
                            className="cursor-pointer flex justify-between"
                            onClick={() => {
                                helpers.setValue(radioBtn.value)
                            }}>
                            <div className='space-x-3' >
                                <span className="inline-block w-[18px] h-[18px] rounded-full  border-2 border-secondary -mb-[3px]">
                                    <input
                                        type="radio"
                                        name="dayType"
                                        {
                                        ...{
                                            ...field,
                                            checked: field.value === radioBtn.value,
                                            onChange: () => null
                                        }
                                        }
                                        className="appearance-none rounded-full h-[14px] w-[14px] border-2 border-white bg-white checked:bg-secondary checked:border-white focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" />
                                </span>
                                <span>{radioBtn.title}</span>
                            </div>
                            <span>${radioBtn.price}</span>
                        </label>)
                })
            }
        </div>
    );
};

export default DaysTypeSelect;