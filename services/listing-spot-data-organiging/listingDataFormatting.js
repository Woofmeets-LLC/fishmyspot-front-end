import { availabilityPlanFormatting } from "./availableTimeFormatting";

export const listingDataOrganizing = (values) => {
    // Availability Plan Data
    const availabilityPlan = availabilityPlanFormatting(values.availableTime);

    // Fishes Data
    const tempFishes = Object.keys(values?.fishes)?.filter(fish => values?.fishes[fish])?.map(fish => fish.split("_")[0]);
    const fishes = values?.["others-fish"]?.isSelected ? [...tempFishes, "Other"] : tempFishes;
    const allFishes = {
        fishes: values?.fishes,
        othersFish: values?.["others-fish"]?.isSelected
            ? values?.["others-fish"]?.names?.split(",")?.filter(fish => fish !== "")
            : []
    }

    // Amenities Data
    const tempAmenities = Object.keys(values?.amenities)?.filter(amenity => values?.amenities[amenity]);
    const amenities = values?.otherAmenities?.isSelected ? [...tempAmenities, "Other"] : tempAmenities
    const allAmenities = {
        amenities: values?.amenities,
        others: values?.otherAmenities?.isSelected
            ? values?.otherAmenities?.names?.split(",")?.filter(amenity => amenity !== "")
            : []
    }

    // Add ONs data 
    const experiences = Object.keys(values?.addOns)?.filter(key=>values?.addOns[key].checked)?.map(key=>values?.addOns[key]?.title?.split("(")[0].trim());
    const addOns = Object.keys(values?.addOns)?.filter(key=>values?.addOns[key].checked)?.map(key=>({
        title: values?.addOns[key]?.title?.split("(")[0].trim(),
        price: values?.addOns[key]?.price,
    }))

    const data = {
        title: values?.address,
        description: values?.description,
        geolocation: values?.latLng,
        availabilityPlan: {
            type: 'availability-plan/time',
            entries: [
                {
                    dayOfWeek: 'mon',
                    seats: 1,
                    startTime: '00:00',
                    endTime: '00:00'
                },
                {
                    dayOfWeek: 'tue',
                    seats: 1,
                    startTime: '00:00',
                    endTime: '00:00'
                },
                {
                    dayOfWeek: 'wed',
                    seats: 1,
                    startTime: '00:00',
                    endTime: '00:00'
                },
                {
                    dayOfWeek: 'thu',
                    seats: 1,
                    startTime: '00:00',
                    endTime: '00:00'
                },
                {
                    dayOfWeek: 'fri',
                    seats: 1,
                    startTime: '00:00',
                    endTime: '00:00'
                },
                {
                    dayOfWeek: 'sat',
                    seats: 1,
                    startTime: '00:00',
                    endTime: '00:00'
                },
                {
                    dayOfWeek: 'sun',
                    seats: 1,
                    startTime: '00:00',
                    endTime: '00:00'
                }
            ],
            timezone: "America/New_York",
        },
        publicData: {
            availabilityPlan,
            fishes,
            allFishes,
            amenities,
            allAmenities,
            addOns,
            experiences,
            zipCode: values?.zipCode,
            address: values?.address,
            "city": values?.city,
            "state": values?.state,
            "phone": values?.phone,
            rating: 5,
            absoluteRating: 5,
            reviewCount: 0,
            acre: +values?.acre,
            "stocked-pond": values["stocked-pond"],
            "catch-requirements": values["catch-requirements"],
            halfDay: +values?.halfDayRate,
            "halfDayRate": {
                _skdType: 'Money',
                currency: "USD",
                amount: +values?.halfDayRate * 100
            },
            fullDay: +values?.fullDayRate,
            "fullDayRate": {
                _skdType: 'Money',
                currency: "USD",
                amount: +values?.fullDayRate * 100
            },
            promoteBy: values?.promoteBy,
            "access-to-pond-description": values?.["ATP-description"],
            "additional-information-description": values['additional-information-description'],
            "terms": values?.terms,
            "license": values?.license,
        }
    }
    return data
}