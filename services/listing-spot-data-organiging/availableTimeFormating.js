// Slots
const slots = {
    "6am-11am": { startTime: '06:00', endTime: '11:00' },
    "11am-4pm": { startTime: '11:00', endTime: '16:00' },
    "4pm-9pm": { startTime: '16:00', endTime: '21:00' },
    "9pm-6am": { startTime: '21:00', endTime: '06:00' },
};

const availabilityPlanEntriesForOneDay = (availableTime) => {
    // Creating entries for availabilityPlan
    return Object.keys(availableTime)
        ?.filter(key => availableTime[key]?.isSelected)
        ?.map(key => {
            const tempEntries = Object.keys(availableTime[key].hours)
                ?.filter(hourKey => availableTime[key].hours[hourKey] === true)
                ?.map(hourKey => hourKey === "all-hours" ? Object.keys(slots) : [hourKey])
                ?.map(hourKeyArray => hourKeyArray.map(hourKey => ({
                    dayOfWeek: key?.substring(0, 3),
                    ...slots[hourKey]
                })));
            return tempEntries
        })
        ?.reduce((prevArray, currentArray) => [...prevArray, ...currentArray], [])
        ?.reduce((prevArray, currentArray) => [...prevArray, ...currentArray], []);
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

const availabilityPlanFormatting = (availableTime) =>{
    return {
        type: 'availability-plan/time',
        entries: availableTimeFormatting(availableTime),
        timezone: 'America/New_York'
    };
}

export {
    availabilityPlanEntriesForOneDay,
    availableTimeFormatting,
    availabilityPlanFormatting
};

