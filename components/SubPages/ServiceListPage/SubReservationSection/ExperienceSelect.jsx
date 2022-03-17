import { useField } from 'formik';
import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const ExperienceSelect = ({ pondData }) => {
    const [field, meta, helpers] = useField('experience');

    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Select Experience");

    const items = pondData?.attributes?.publicData?.addOns?.map(addOn => `${addOn.title} / $${addOn.price}`) || [];

    const handleClick = (item) => {
        helpers.setValue(item);
        setSelectedItem(item);
        setIsActive(prevState => !prevState);
    }
    return (
        <div className='mb-4 xl:mb-5'>
            <label
                htmlFor=""
                className='block lg:text-lg 2xl:text-xl font-trade-gothic-bold text-primary mb-2 lg:mb-3 xl:mb-4'
            >Experiences</label>
            <div className={`w-full relative text-base cursor-pointer border ${items.length ? "border-gray-300" : "border-red-500"} rounded-md transition ease-in-out select-none`}>
                <div
                    onClick={() => setIsActive(prevState => !prevState)}
                    className="py-3 px-3 md:px-5 shadow-md font-trade-gothic text-highlight-1">
                    <div className='flex justify-between items-center'>
                        <span>
                            {selectedItem}
                        </span>
                        <span className='text-lg'>
                            {
                                !isActive ?
                                    <IoMdArrowDropdown className={!items.length && "text-red-500"} /> :
                                    <IoMdArrowDropup className={!items.length && "text-red-500"} />
                            }
                        </span>
                    </div>
                </div>
                {
                    isActive &&
                    <div className={`absolute z-50 top-14 bg-white rounded-md shadow-lg font-trade-gothic-bold  text-primary w-full`}>
                        {
                            items?.map((item, i) => {
                                return (
                                    <div
                                        key={i}
                                        onClick={() => handleClick(item)}
                                        className="py-2 2xl:py-3 px-4 2xl:px-5 transition-all delay-200 hover:bg-gray-100">
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default ExperienceSelect;