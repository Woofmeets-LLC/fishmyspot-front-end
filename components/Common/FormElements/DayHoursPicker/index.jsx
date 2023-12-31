import { useField } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const variants = {
    hidden: {
        opacity: 0,
        y: -15,
    },
    visible: {
        y: 5,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 1,
            type: 'spring',
            stiffness: 120
        }
    }
};

const DayHoursPicker = ({
    label,
    name,
    options = [
        { title: "6AM - 11AM", value: "6am-11am" },
        { title: "11AM - 4PM", value: "11am-4pm" },
        { title: "4PM - 9PM", value: "4pm-9pm" },
        { title: "9PM - 6AM", value: "9pm-6am" },
        { title: "6AM - 9PM", value: "6am-9pm" },
        { title: "All Hours", value: "all-hours" },
    ]
}) => {
    const [isDropDown, setIsDropDown] = useState(false);
    const dropdown = useRef(null);

    // Formik 
    const [field, meta, helpers] = useField({ name, type: 'checkbox' });
    const [everydayField] = useField({ name: "availableTime[everyday]" });
    // Formik for all available days
    const [allDaysField, { }, allDaysHelpers] = useField({ name: "availableTime" });

    const isAnyHourSelected = field?.value?.isSelected ? (Object.values(field?.value?.hours)?.includes(true)) : true;

    const handleDayClick = () => {
        if (name == 'availableTime[everyday]') {
            allDaysHelpers.setValue(Object.keys(allDaysField.value)?.reduce((prevObj, currKey) => {
                return {
                    ...prevObj,
                    [currKey]: {
                        isSelected: currKey == 'everyday' ? !everydayField.value.isSelected : false,
                        hours: Object.keys(allDaysField.value[currKey]?.hours).reduce((prevHours, currHour) => {
                            return {
                                ...prevHours,
                                [currHour]: false
                            }
                        }, {})
                    }
                }
            }, {}));
            helpers.setValue({ ...field.value, isSelected: !field?.value?.isSelected });
        } else {
            helpers.setValue({
                ...field.value,
                isSelected: everydayField?.value.isSelected ? false : !field?.value?.isSelected
            });
        }
    };


    const handleSelectHoursClick = () => {
        if (everydayField?.value?.isSelected) {
            setIsDropDown(prevIsDropDown => name == "availableTime[everyday]" ? !prevIsDropDown : false)
        } else {
            setIsDropDown(prevIsDropDown => field.value.isSelected ? !prevIsDropDown : false);
        }
    }

    const handleHoursChange = (option) => {
        helpers.setValue({
            ...field.value,
            hours: {
                ...field.value.hours,
                [option?.value]: !field.value.hours[option?.value]
            }
        });
    }

    useEffect(() => {
        // only add the event listener when the dropdown is opened
        if (!isDropDown) return;

        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setIsDropDown(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, [isDropDown]);
    return (
        <div className=" mb-4">
            <div className="flex justify-between items-center">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        {...{
                            ...field,
                            checked: everydayField?.value?.isSelected ? true : field?.value?.isSelected,
                            onChange: handleDayClick
                        }}
                        className={`${everydayField?.value?.isSelected ? (name != "availableTime[everyday]" ? "accent-yellow-200" : "accent-secondary") : "accent-secondary"} w-4 h-4 mr-2 cursor-pointer`} />{label}
                </label>
                <div className="relative block w-[165px]">
                    <div
                        onClick={handleSelectHoursClick}
                        className="relative block w-[165px] px-3 py-[5px] font-trade-gothic text-base text-primary bg-white bg-clip-padding bg-no-repeat font-medium border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none cursor-pointer">
                        <div
                            className="flex justify-between items-center">
                            <span>Select Hour</span>
                            {
                                (everydayField?.value?.isSelected
                                    ? (name == "availableTime[everyday]" ? isDropDown : false)
                                    : field?.value?.isSelected ? isDropDown : false)
                                    ? <IoIosArrowUp />
                                    : <IoIosArrowDown />
                            }
                        </div>
                    </div>
                    <AnimatePresence>
                        {
                            (everydayField?.value?.isSelected
                                ? (name == "availableTime[everyday]" ? isDropDown : false)
                                : field?.value?.isSelected ? isDropDown : false) &&
                            (
                                <motion.div
                                    ref={dropdown}
                                    variants={variants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className={`absolute top-8 w-full p-2 z-[20] bg-white border rounded`}>
                                    {
                                        options?.map((option, i) => {
                                            return (
                                                <div key={i}>
                                                    <motion.label className="flex items-center cursor-pointer">
                                                        <input
                                                            type={"checkbox"}
                                                            name={option?.title}
                                                            id={i}
                                                            value={option?.value}
                                                            checked={field?.value?.hours?.["all-hours"] ? true : field?.value?.hours?.[option?.value]}
                                                            onChange={() => handleHoursChange(option)}
                                                            className={`${field?.value?.hours?.["all-hours"] ? (option?.value != "all-hours" ? "accent-yellow-200" : "accent-secondary") : "accent-secondary"} w-4 h-4 mr-2 cursor-pointer`} />
                                                        <span>{option?.title}</span>
                                                    </motion.label>

                                                </div>
                                            )
                                        })
                                    }
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex justify-end">
                {
                    !isAnyHourSelected && <div className="w-[165px] text-red-500 mt-1">Please select hours</div>
                }
            </div>
        </div>
    );
};

export default DayHoursPicker;