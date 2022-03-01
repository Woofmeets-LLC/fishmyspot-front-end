import { availabilityPlanFormatting } from "./availableTimeFormating"

export const listingDataOrganizing = (values) => {
    // Availability Plan Data
   const availabilityPlan = availabilityPlanFormatting(values.availableTime)

    const data = {
        title: values.address1,
        description: values.description,
        geolocation: values.latLng1,
        // availabilityPlan,
        publicData: {
            acre: values.acre,
            "stocked-pond": values["stocked-pond"],
            "catch-requirements": values["catch-requirements"],
            zipCode: values.zipCode1,
            address: values.address1,
            "city": values.city1,
            "state": values.state1,
            "phone": values.phone1,
            "halfDayRate": {
                _skdType: 'Money',
                currency: "USD",
                amount: +values.halfDayRate * 100
            },
            "fullDayRate": {
                _skdType: 'Money',
                currency: "USD",
                amount: +values.fullDayRate * 100
            },
            address2: {
                address: values.address2,
            },
            amenities: [..."amenities of true", "others"],
            allAmenities: {
                amenities: [..."amenities array of object"],
                others: ["name1", "name2"]
            },
            promoteBy: values.promoteBy,
            "additional-information-description": values['"additional-information-description'],
            "terms": values.terms,
            "license": values.license,
        }
    }

    return data
}