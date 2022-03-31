/* eslint-disable react-hooks/exhaustive-deps */
import { useField } from 'formik';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdCalendarToday } from "react-icons/md";
import { bookingTimeFormatter } from '../../../../services/date/date-overflow-handler';
import { preDefinedLongHours } from '../../../../services/listing-spot-data-organiging/availableTimeFormatting';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import TimeSelect from './TimeSelect';

const SelectDateTime = ({ pondData }) => {
    const [isTimeActive, setIsTimeActive] = useState(false);
    const [selectedTimeItem, setSelectedTimeItem] = useState("Select One");
    const [timeSlot, setTimeSlot] = useState([]);
    const [timeSlotError, setTimeSlotError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [dateField, dateMeta, dateHelpers] = useField('date');
    const [timeField, timeMeta, timeHelpers] = useField('time');
    const [dayTypeField] = useField('dayType');

    const entries = pondData?.attributes?.publicData?.availabilityPlan?.entries;

    const weekDay = [
        "sun",
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
    ];

    const slots = {
        halfDay: [
            `06:00 AM - 11:00 AM`,
            `11:00 AM - 04:00 PM`,
            `04:00 PM - 09:00 PM`,
        ],
        fullDay: [
            `09:00 PM - 06:00 AM`,
            `06:00 AM - 09:00 PM`,
        ]
    };

    const getNewTimeSlotsForReservation = (entries, dayName) => {
        timeHelpers.setValue("");

        const newTimeSlot = entries?.filter(availableTime => (availableTime.dayOfWeek.search(dayName) > -1))
            ?.map(entry => `${preDefinedLongHours[entry?.startTime]} - ${preDefinedLongHours[entry?.endTime]}`)
            ?.filter(time => slots[dayTypeField.value]?.includes(time));


        setSelectedTimeItem(newTimeSlot?.length ? "Select one" : "No time available this day");
        setTimeSlot(prevTimeSlot => newTimeSlot);
    }

    useEffect(() => {
        // Time Slot making
        const dayName = weekDay[dateField?.value?.getDay()];
        getNewTimeSlotsForReservation(entries, dayName);
    }, [dayTypeField.value, pondData]);



    const handleDateChange = (date) => {
        const todayDate = new Date();
        const newDate = new Date(date);
        // if (
        //     newDate.getFullYear() >= todayDate.getFullYear() &&
        //     newDate.getMonth() >= todayDate.getMonth() &&
        //     newDate.getDate() >= todayDate.getDate()
        // ) {
        //     // Setting the date value
        //     dateHelpers.setValue(date);

        //     // Time Slot making
        //     const dayName = weekDay[date.getDay()];
        //     getNewTimeSlotsForReservation(entries, dayName);
        // } else {
        //     // Setting the date value
        //     dateHelpers.setValue('');
        // }
        // Setting the date value
        dateHelpers.setValue(date);

        // Time Slot making
        const dayName = weekDay[date.getDay()];
        getNewTimeSlotsForReservation(entries, dayName);

    }

    const handleTimeChange = (time) => {
        setTimeSlotError(false);
        setLoading(true);
        const slots = {
            "06:00 AM - 11:00 AM": { startTime: '06:00', endTime: '11:00' },
            "11:00 AM - 04:00 PM": { startTime: '11:00', endTime: '16:00' },
            "04:00 PM - 09:00 PM": { startTime: '16:00', endTime: '21:00' },
            "09:00 PM - 06:00 AM": { startTime: '21:00', endTime: '06:00' },
            "06:00 AM - 09:00 PM": { startTime: '06:00', endTime: '21:00' },
        };

        const timeObject = bookingTimeFormatter(dateField.value, slots[time]);

        getSdk().timeslots.query({
            listingId: pondData?.id?.uuid,
            start: new Date(timeObject.bookingStart).toISOString(),
            end: new Date(timeObject.bookingEnd).toISOString()
        })
            .then(res => {
                setLoading(false);
                setTimeSlotError(res.data.data.length === 0);
                res.data.data.length !== 0 && timeHelpers.setValue(time);
                // res.data comains the response data
            })
            .catch(err => {
                setLoading(false);
                setTimeSlotError(true);
                console.dir(err);
            });

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
                        placeholderText={`${dateField.value || "Your selected date is in the past"}`}
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
                loading={loading}
                helper={handleTimeChange}
            />
            <div className="my-2 text-red-500 text-sm">
                {
                    timeSlotError &&
                    <>This time slot is not available!</>
                }
                {timeSlotError && timeMeta.error && " & "}
                {timeMeta.error ? (
                    <>{timeMeta.error}</>
                ) : null}
            </div>
        </>
    );
};

export default SelectDateTime;