import { useField } from 'formik';
import React, { useState } from 'react';
import Autocomplete from "react-google-autocomplete";
import { FormInput } from '../../../Common';


const SubPondOwnerInfo = () => {
    const [addressError, setAddressError] = useState({ isError: false, message: "" })

    const [fullDayRateField] = useField({ name: "fullDayRate" })

    const [firstNameField] = useField({ name: "firstName" })
    const [lastNameField] = useField({ name: "lastName" })
    const [zipCodeField, zipCodeMeta, zipCodeHelpers] = useField({ name: "zipCode" })
    const [addressField, addressMeta, addressHelpers] = useField({ name: "address" })
    const [latLngField, latLngMeta, latLngHelpers] = useField({ name: "latLng" })
    const [cityField, cityMeta, cityHelpers] = useField({ name: "city" })
    const [stateField, stateMeta, stateHelpers] = useField({ name: "state" })


    const getAddress = (place) => {
        setAddressError({ isError: false, message: "" });

        addressHelpers.setValue(place.formatted_address);
        cityHelpers.setValue("");
        stateHelpers.setValue("");
        zipCodeHelpers.setValue("");

        let errorCount = 3;
        place.address_components.forEach(component => {
            if (component.types[0] === 'administrative_area_level_2') {
                cityHelpers.setValue(component?.short_name)
                errorCount--;
            }
            if (component.types[0] == 'postal_code') {
                zipCodeHelpers.setValue(component?.short_name);
                errorCount--;
            }
            if (component.types[0] == 'administrative_area_level_1') {
                stateHelpers.setValue(component?.short_name)
                errorCount--;
            }
            latLngHelpers.setValue({
                _sdkType: 'LatLng',
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            })
        })
        if (errorCount) {
            setAddressError({ isError: true, message: "Address is not valid. Select valid address!" })
        } else {
            setAddressError({ isError: false, message: "" })
        }
    }

    return (
        <div>
            <div className="text-center text-primary">
                <h2 className="text-2xl font-trade-gothic-bold mb-5">{`${firstNameField?.value} ${lastNameField?.value}`},
                    you could make</h2>
                <h1 className="text-5xl font-trade-gothic-bold mb-8">$ {+fullDayRateField?.value * 7}</h1>
                <p className="text-sm mb-10">by sharing your pond for 1 week in {zipCodeField?.value}.</p>
            </div>

            <div className="grid grid-cols-2 gap-5 xl:gap-6">
                <FormInput name="firstName" label="First Name" placeholder="Enter your first name" disabled />
                <FormInput name="lastName" label="Last Name" placeholder="Enter your last name" disabled />
            </div>

            <div className="mb-4">
                <label
                    className="block text-lg text-primary font-trade-gothic-bold capitalize mb-2"
                >
                    Address
                </label>
                <Autocomplete
                    placeholder={'Enter Your Address'}
                    className="block w-full px-3 py-[5px] font-trade-gothic text-base text-primary bg-white bg-clip-padding bg-no-repeat  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none"
                    apiKey={process.env.GOOGLE_MAP_API_KEY}
                    onPlaceSelected={(place) => {
                        getAddress(place, 'address')
                    }}
                    options={{
                        types: 'ALL'
                    }}
                    defaultValue={addressField?.value}

                />
                {addressMeta.touched && (addressMeta.error) ? (
                    <div className="mt-2 text-red-500 text-sm">{addressMeta.error}</div>
                ) : null}
                {addressError.isError ? (
                    <div className="mt-2 text-red-500 text-sm">{addressError.message}</div>
                ) : null}
            </div>
            <div className="grid grid-cols-3 gap-4 xl:gap-6">
                <FormInput name="city" label="City" placeholder="Please enter city" disabled />
                <FormInput name="state" label="State" placeholder="Please enter state" disabled />
                <FormInput name="zipCode" label="zip" placeholder="Please enter zipCode" disabled />
            </div>
            <FormInput name="email" label="Email" placeholder="Please enter email" disabled />
            <FormInput name="phone" label="Phone" placeholder="Please enter phone" />
        </div>
    );
};

export default SubPondOwnerInfo;