import { useField } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import ExperienceItem from './ExperienceItem';

const ExperienceSelect = ({ pondData }) => {
    const [field] = useField('experience');

    const [isActive, setIsActive] = useState(false);
    const dropdown = useRef(null);

    useEffect(() => {
        // only add the event listener when the dropdown is opened
        if (!isActive) return;
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setIsActive(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, [isActive]);

    return (
        <div className='mb-4 xl:mb-5'>
            <label
                htmlFor=""
                className='block lg:text-lg 2xl:text-xl font-trade-gothic-bold text-primary mb-2 lg:mb-3 xl:mb-4'
            >Experiences</label>
            <div className={`w-full relative text-base cursor-pointer border border-gray-300 rounded-md transition ease-in-out select-none`}>
                <div
                    onClick={() => setIsActive(prevState => !prevState)}
                    className="py-3 px-3 md:px-5 shadow-md font-trade-gothic text-highlight-1">
                    <div className='flex justify-between items-center'>
                        <span>
                            {
                                Object?.keys(field?.value || {}).length
                                    ? (
                                        Object.keys(field?.value)?.reduce((prev, curr) => field.value[curr]?.checked ? prev + 1 : prev, 0)
                                            ? `${Object.keys(field?.value)?.reduce((prev, curr) => field.value[curr]?.checked ? prev + 1 : prev, 0)} experience selected`
                                            : 'Select experiences'
                                    )
                                    : "No Experience available"
                            }
                        </span>
                        <span className='text-lg'>
                            {
                                !isActive ?
                                    <IoMdArrowDropdown /> :
                                    <IoMdArrowDropup />
                            }
                        </span>
                    </div>
                </div>
                {
                    isActive &&
                    <div
                        ref={dropdown}
                        className={`absolute z-50 top-14 bg-white rounded-md shadow-lg font-trade-gothic-bold  text-primary w-full`}>
                        {
                            Object.keys(field?.value)?.map((key, i) => (
                                <ExperienceItem key={i} name={key} price={field.value[key].price} />
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default ExperienceSelect;
