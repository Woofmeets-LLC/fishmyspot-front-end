/* eslint-disable react-hooks/exhaustive-deps */
import { useField } from 'formik';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdCalendarToday } from "react-icons/md";
import { preDefinedLongHours } from '../../../../services/listing-spot-data-organiging/availableTimeFormatting';
import TimeSelect from './TimeSelect';

const SelectDateTime = ({ pondData }) => {
    const [isTimeActive, setIsTimeActive] = useState(false);
    const [selectedTimeItem, setSelectedTimeItem] = useState("Select One");
    const [timeSlot, setTimeSlot] = useState([]);

    const [dateField, dateMeta, dateHelpers] = useField('date');
    const [timeField, timeMeta, timeHelpers] = useField('time');

    const weekDay = [
        "sun",
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
    ]

    const handleDateChange = (date) => {
        // Setting the date value
        dateHelpers.setValue(date);
        timeHelpers.setValue("");

        // Time Slot making
        const entries = pondData?.attributes?.publicData?.availabilityPlan?.entries;
        const dayName = weekDay[date.getDay()];
        setTimeSlot(prevTimeSlot => {
            const newTimeSlot = entries?.filter(availableTime => availableTime.dayOfWeek.search(dayName) > -1)
                ?.map(entry => `${preDefinedLongHours[entry?.startTime]} - ${preDefinedLongHours[entry?.endTime]}`);

            setSelectedTimeItem(newTimeSlot?.length ? "Select one" : "No time available");
            return newTimeSlot
        });
    }

    const handleTimeChange = (time) => {
        timeHelpers.setValue(time);
        console.log("time is", time)
    }
    return (
        <>
            <div className='mb-4 xl:mb-5'>
                <label
                    htmlFor=""
                    className='block lg:text-lg 2xl:text-xl font-trade-gothic-bold text-primary mb-2 lg:mb-3 xl:mb-4'
                >
                    Pick a Date
                </label>
                <div className='w-full flex items-center border border-gray-300 rounded-md overflow-hidden shadow-md font-trade-gothic text-highlight-1 text-base'>
                    <span className='pl-3 md:pl-5 text-lg lg:text-xl 2xl:text-[28px]'>
                        <MdCalendarToday />
                    </span>
                    <DatePicker
                        selected={dateField.value}
                        onChange={handleDateChange}
                        placeholderText={`${dateField.value}`}
                        className="w-full py-3 px-5 focus:outline-none text-base"
                    />
                </div>
            </div>
            {dateMeta.error ? (
                <div className="mt-2 text-red-500 text-sm">{dateMeta.error}</div>
            ) : null}

            {/* Time field */}
            <TimeSelect
                label={"Time"}
                isActive={isTimeActive}
                setIsActive={setIsTimeActive}
                setSelectedItem={setSelectedTimeItem}
                selectedItem={selectedTimeItem}
                items={timeSlot}
                helper={handleTimeChange}
            />

            {timeMeta.error ? (
                <div className="mb-3 text-red-500 text-sm">{timeMeta.error}</div>
            ) : null}
        </>
    );
};

export default SelectDateTime;