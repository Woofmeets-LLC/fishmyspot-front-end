/* eslint-disable react-hooks/exhaustive-deps */
import addDays from 'date-fns/addDays';
import { useField } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
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
    const [dateError, setDateError] = useState({ status: false, message: '' });
    const [loading, setLoading] = useState(false);
    const [dates, setDates] = useState([]);


    const [dateField, dateMeta, dateHelpers] = useField('date');
    const [timeField, timeMeta, timeHelpers] = useField('time');
    const [dayTypeField] = useField('dayType');

    const entries = pondData?.attributes?.publicData?.availabilityPlan?.entries;

    const dropdown = useRef(null);

    useEffect(() => {
        let dates = [];
        for (let i = 0; i < 90; i++) {
            dates.push(addDays(new Date(), i));
        }
        setDates([...dates]);
    }, []);

    useEffect(() => {
        // only add the event listener when the dropdown is opened
        if (!isTimeActive) return;
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setIsTimeActive(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, [isTimeActive]);

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
        const dayName = dateField?.value && weekDay[dateField?.value?.getDay()];
        getNewTimeSlotsForReservation(entries, dayName);
    }, [dayTypeField.value, pondData]);


    const handleDateChange = (date) => {
        setDateError({ status: false, message: '' });
        // Setting the date value
        dateHelpers.setValue("2000-01-01");
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

        const getMilliseconds = (date) => {
            return date ? new Date(date).getTime() : new Date().getTime();
        }

        getSdk().timeslots.query({
            listingId: pondData?.id?.uuid,
            start: new Date(timeObject.bookingStart).toISOString(),
            end: new Date(timeObject.bookingEnd).toISOString()
        })
            .then(res => {
                setLoading(false);

                const nowTime = new Date().getTime();
                const selectedTime = new Date(new Date(timeObject.bookingStart).toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })).getTime();

                const isSelectedPastTime = selectedTime < nowTime;

                setTimeSlotError(res.data.data.length === 0 || isSelectedPastTime);
                res.data.data.length !== 0 && !isSelectedPastTime && timeHelpers.setValue(time);
            })
            .catch(err => {
                setLoading(false);
                setTimeSlotError(true);
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
                        includeDates={dates}
                        placeholderText={`${dateField.value}`}
                        className="w-full py-3 px-5 focus:outline-none text-base"
                    />
                </div>
            </div>
            {dateMeta.error || dateError.status ? (
                <div className="mt-2 mb-4 text-red-500 text-sm">
                    {dateMeta.error} {dateMeta.error && dateError?.status && 'and'} {dateError?.status && dateError?.message}
                </div>
            ) : null}

            {/* Time field */}
            <TimeSelect
                label={"Time (New York Time Zone)"}
                isActive={isTimeActive}
                setIsActive={setIsTimeActive}
                setSelectedItem={setSelectedTimeItem}
                selectedItem={selectedTimeItem}
                items={timeSlot}
                loading={loading}
                helper={handleTimeChange}
                dropdown={dropdown}
            />
            <div className="my-2 text-red-500 text-sm">
                {
                    timeSlotError &&
                    <>This time slot is not available!</>
                }
                {timeSlotError && timeMeta.touched && timeMeta.error && " & "}
                {timeMeta.touched && timeMeta.error ? (
                    <>{timeMeta.error}</>
                ) : null}
            </div>
        </>
    );
};

export default SelectDateTime;