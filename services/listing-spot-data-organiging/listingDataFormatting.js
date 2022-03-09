import { availabilityPlanFormatting } from "./availableTimeFormatting";

export const listingDataOrganizing = (values) => {
    // Availability Plan Data
    const availabilityPlan = availabilityPlanFormatting(values.availableTime);

    // Address Data
    const address2 = values?.secondAddress == 'yes'
        ? {
            address: values?.address2,
            city: values?.city2,
            state: values?.state2,
            zipCode: values?.zipCode2,
            phone: values?.phone2,
            email: values?.email2
        }
        : {}

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
        title: values?.address1,
        description: values?.description,
        geolocation: values?.latLng1,
        publicData: {
            availabilityPlan,
            fishes,
            allFishes,
            amenities,
            allAmenities,
            address2,
            addOns,
            experiences,
            zipCode: values?.zipCode1,
            address: values?.address1,
            "city": values?.city1,
            "state": values?.state1,
            "phone": values?.phone1,
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