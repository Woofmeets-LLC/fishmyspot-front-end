
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "everyday"];

const preDefinedHours = {
    '01:00': '1am',
    '02:00': '2am',
    '03:00': '3am',
    '04:00': '4am',
    '05:00': '5am',
    '06:00': '6am',
    '07:00': '7am',
    '08:00': '8am',
    '09:00': '9am',
    '10:00': '10am',
    '11:00': '11am',
    '12:00': '12pm',
    '13:00': '1pm',
    '14:00': '2pm',
    '15:00': '3pm',
    '16:00': '4pm',
    '17:00': '5pm',
    '18:00': '6pm',
    '19:00': '7pm',
    '20:00': '8pm',
    '21:00': '9pm',
    '22:00': '10pm',
    '23:00': '11pm',
    '24:00': '12am',
}

const preDefinedLongHours = {
    '01:00': '01:00 AM',
    '02:00': '02:00 AM',
    '03:00': '03:00 AM',
    '04:00': '04:00 AM',
    '05:00': '05:00 AM',
    '06:00': '06:00 AM',
    '07:00': '07:00 AM',
    '08:00': '08:00 AM',
    '09:00': '09:00 AM',
    '10:00': '10:00 AM',
    '11:00': '11:00 AM',
    '12:00': '12:00 PM',
    '13:00': '01:00 PM',
    '14:00': '02:00 PM',
    '15:00': '03:00 PM',
    '16:00': '04:00 PM',
    '17:00': '05:00 PM',
    '18:00': '06:00 PM',
    '19:00': '07:00 PM',
    '20:00': '08:00 PM',
    '21:00': '09:00 PM',
    '22:00': '10:00 PM',
    '23:00': '11:00 PM',
    '24:00': '12:00 AM',
}

// Slots
const slots = {
    "6am-11am": { startTime: '06:00', endTime: '11:00' },
    "11am-4pm": { startTime: '11:00', endTime: '16:00' },
    "4pm-9pm": { startTime: '16:00', endTime: '21:00' },
    "9pm-6am": { startTime: '21:00', endTime: '06:00' },
    "6am-9pm": { startTime: '06:00', endTime: '21:00' },
};

const availabilityPlanEntriesForOneDay = (availableTime) => {
    // Creating entries for availabilityPlan
    const mapEntries = (key, hourKeyArray) => hourKeyArray.map(hourKey => ({
        dayOfWeek: key?.substring(0, 3),
        ...slots[hourKey],
        seats: 1,
    }))
    return Object.keys(availableTime)
        ?.filter(key => availableTime[key]?.isSelected)
        ?.map(key => {
            const isAllHourSelected = Object.keys(availableTime[key].hours)
                ?.filter(hourKey => availableTime[key].hours[hourKey] === true)
                ?.includes("all-hours");

            if (isAllHourSelected) {
                return mapEntries(key, Object.keys(slots));
            } else {
                const hourKeyArray = Object.keys(availableTime[key].hours)
                    ?.filter(hourKey => availableTime[key].hours[hourKey] === true)

                return mapEntries(key, hourKeyArray);
            }
        })
        ?.reduce((prevArray, currentArray) => [...prevArray, ...currentArray], [])
}


const availableTimeFormatting = (availableTime) => {
    const isEveryDaySelected = availableTime["everyday"]?.isSelected;
    if (isEveryDaySelected) {
        // This is for Every Day selection
        const days = ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
        const tempAvailableTime = days?.reduce((prevDays, currentDay) => {
            return { ...prevDays, [currentDay]: { ...availableTime["everyday"] } }
        }, {});
        return availabilityPlanEntriesForOneDay(tempAvailableTime)
    } else {
        // This is for single Day selection
        return availabilityPlanEntriesForOneDay(availableTime)
    }
}

const availabilityPlanFormatting = (availableTime) => {
    return {
        type: 'availability-plan/time',
        entries: availableTimeFormatting(availableTime),
        timezone: 'America/New_York'
    };
}

const preFormatAvailableTime = (pondData, everydayData) => {
    return days.reduce((prevObj, key) => {
        const isFound = everydayData?.isSelected
            ? key === 'everyday'
            : pondData?.publicData?.availabilityPlan?.entries?.map(day => day?.dayOfWeek)?.includes(key.substring(0, 3));
        let dayData = {};
        if (isFound) {
            const tempHours = pondData?.publicData?.availabilityPlan?.entries
                ?.filter(day => day?.dayOfWeek === key.substring(0, 3))
                ?.map(day => ({ key: `${preDefinedHours[day?.startTime]}-${preDefinedHours[day?.endTime]}` }))
            const selectedHours =  everydayData?.isSelected 
            ? everydayData?.hours?.reduce((prevObj, hourKey) => ({ ...prevObj, [hourKey]: true }), {})
            : tempHours?.reduce((prevObj, newObj) => ({ ...prevObj, [newObj.key]: true }), {});
            dayData = {
                isSelected: true,
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
                    "6am-9pm": false,
                    "all-hours": Object.keys(selectedHours).length == 5 ? true : false,
                    ...selectedHours,
                }
            }
        } else {
            dayData = {
                isSelected: false,
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
                    "6am-9pm": false,
                    "all-hours": false,
                }
            }
        }

        return {
            ...prevObj,
            [key]: dayData
        }
    }, {});
}

const getEditAvailableTimeData = (pondData) => {

    // Checking if every day is selected
    const selectedDaysUniqueArray = [...new Set(pondData?.publicData?.availabilityPlan?.entries?.map(entry => entry.dayOfWeek))];
    const isEveryDaySelected = selectedDaysUniqueArray.length == 7 ? true : false;

    // available time data 
    if (isEveryDaySelected) {
        const tempSelectedHours = pondData?.publicData?.availabilityPlan?.entries
            ?.map(entry => `${preDefinedHours[entry?.startTime]}-${preDefinedHours[entry?.endTime]}`);
        const selectedHours = [...new Set(tempSelectedHours)];

        return preFormatAvailableTime(pondData, { isSelected: true, hours: selectedHours });
    } else {
        return preFormatAvailableTime(pondData);
    }

}

const availableTimeSlots = (availableTimesArray, dayName, setTimeSlot)=>{
    const formattedArray = availableTimesArray
    ?.filter(availableTime=> availableTime.dayOfWeek.search(dayName) > -1)
    ?.map(entry=>`${preDefinedLongHours[entry?.startTime]} - ${preDefinedLongHours[entry?.endTime]}`);

    
    return setTimeSlot(formattedArray);
}

export {
    availabilityPlanEntriesForOneDay,
    availableTimeFormatting,
    availabilityPlanFormatting,
    getEditAvailableTimeData,
    availableTimeSlots,
    preDefinedLongHours
};

