import { useField } from 'formik';
import React from 'react';
import Autocomplete from "react-google-autocomplete";
import { FormInput, FormRadioButtons } from '../../../Common';


const SubPondOwnerInfo = () => {
    const [fullDayRateField] = useField({ name: "fullDayRate" })

    const [firstName1Field] = useField({ name: "firstName1" })
    const [lastName1Field] = useField({ name: "lastName1" })
    const [zipCode1Field, zipCode1Meta, zipCode1Helpers] = useField({ name: "zipCode1" })
    const [address1Field, address1Meta, address1Helpers] = useField({ name: "address1" })
    const [city1Field, city1Meta, city1Helpers] = useField({ name: "city1" })
    const [state1Field, state1Meta, state1Helpers] = useField({ name: "state1" })
    const [latLng1Field, latLng1Meta, latLng1Helpers] = useField({ name: "latLng1" })

    const [secondAddressField] = useField({ name: "secondAddress" })
    const [firstName2Field] = useField({ name: "firstName2" })
    const [lastName2Field] = useField({ name: "lastName2" })
    const [email2Field] = useField({ name: "email2" })
    const [zipCode2Field, zipCode2Meta, zipCode2Helpers] = useField({ name: "zipCode2" })
    const [address2Field, address2Meta, address2Helpers] = useField({ name: "address2" })
    const [city2Field, city2Meta, city2Helpers] = useField({ name: "city2" })
    const [state2Field, state2Meta, state2Helpers] = useField({ name: "state2" })
    const [latLng2Field, latLng2Meta, latLng2Helpers] = useField({ name: "latLng2" })
    const [phone2Field] = useField({ name: "phone2" })

    const getAddress = (place, addressName) => {
        if (addressName === "address1") {
            address1Helpers.setValue(place.formatted_address);
            place.address_components.forEach(component => {
                if (component.types[0] === 'administrative_area_level_2') {
                    // address.city = component.short_name
                    city1Helpers.setValue(component?.short_name)
                }
                if (component.types[0] == 'postal_code') {
                    // address.zip = component.short_name
                    zipCode1Helpers.setValue(component?.short_name);
                }
                if (component.types[0] == 'administrative_area_level_1') {
                    // address.state = component.short_name
                    state1Helpers.setValue(component?.short_name)
                }
                // Setting the lat and lng values
                latLng1Helpers.setValue({
                    _sdkType: 'LatLng',
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                })
                // address.lat = place.geometry.location.lat();
                // address.lng = place.geometry.location.lng();
            })
        } else if (addressName === "address2") {
            address2Helpers.setValue(place.formatted_address);
            place.address_components.forEach(component => {
                if (component.types[0] === 'administrative_area_level_2') {
                    city2Helpers.setValue(component?.short_name)
                }
                if (component.types[0] == 'postal_code') {
                    zipCode2Helpers.setValue(component?.short_name);
                }
                if (component.types[0] == 'administrative_area_level_1') {
                    state2Helpers.setValue(component?.short_name)
                }
                // Setting the lat and lng values
                latLng2Helpers.setValue({
                    _sdkType: 'LatLng',
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                })
            })
        }
    }

    const checkEmptyFields = () => {
        if (secondAddressField?.value === "no") {
            return false;
        } else {
            if (firstName2Field?.value &&
                lastName2Field?.value &&
                email2Field?.value &&
                zipCode2Field?.value &&
                address2Field?.value &&
                city2Field?.value &&
                state2Field?.value &&
                phone2Field?.value) {
                return false;
            } else {
                return true;
            }
        }
    }

    const isAnyFieldEmpty = checkEmptyFields();

    return (
        <div>
            <div className="text-center text-primary">
                <h2 className="text-2xl font-trade-gothic-bold mb-5">{`${firstName1Field?.value} ${lastName1Field?.value}`},
                    you could make</h2>
                <h1 className="text-5xl font-trade-gothic-bold mb-8">$ {+fullDayRateField?.value * 7}</h1>
                <p className="text-sm mb-10">by sharing your pond for 1 week in {zipCode1Field?.value}.</p>
            </div>

            <div className="grid grid-cols-2 gap-5 xl:gap-6">
                <FormInput name="firstName1" label="First Name" placeholder="Enter your first name" />
                <FormInput name="lastName1" label="Last Name" placeholder="Enter your last name" />
            </div>
            {/* <FormInput name="address1" label="Address" placeholder="Enter Your Address" /> */}
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
                        getAddress(place, 'address1')
                    }}
                    options={{
                        types: 'ALL'
                    }}
                    defaultValue={address1Field?.value}

                />
            </div>
            <div className="grid grid-cols-3 gap-4 xl:gap-6">
                <FormInput name="city1" label="City" placeholder="Please enter city" />
                <FormInput name="state1" label="State" placeholder="Please enter state" />
                <FormInput name="zipCode1" label="zip" placeholder="Please enter zipCode" />
            </div>
            <FormInput name="email1" label="Email" placeholder="Please enter email" />
            <FormInput name="phone1" label="Phone" placeholder="Please enter phone" />
            <FormRadioButtons
                name="secondAddress"
                radioBtns={[{ title: "Yes", value: "yes" }, { title: "No", value: "no" }]}
                label="Do you need to add a second address for where you
            want to receive payment or add another contact to your
            listing? (Optional)" />
            {
                secondAddressField?.value === "yes" && (
                    <div className="mt-6">
                        <div className="grid grid-cols-2 gap-5 xl:gap-6">
                            <FormInput name="firstName2" label="First Name" placeholder="Enter your first name" />
                            <FormInput name="lastName2" label="Last Name" placeholder="Enter your last name" />
                        </div>
                        {/* <FormInput name="address2" label="Address" placeholder="Enter Your Address" /> */}
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
                                    getAddress(place, 'address2')
                                }}
                                options={{
                                    types: 'ALL'
                                }}
                                defaultValue={address2Field?.value}

                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4 xl:gap-6">
                            <FormInput name="city2" label="City" placeholder="Please enter city" />
                            <FormInput name="state2" label="State" placeholder="Please enter state" />
                            <FormInput name="zipCode2" label="zip" placeholder="Please enter zipCode" />
                        </div>
                        <FormInput name="email2" label="Email" placeholder="Please enter email" />
                        <FormInput name="phone2" label="Phone" placeholder="Please enter phone" />
                    </div>
                )
            }
            {
                isAnyFieldEmpty && (
                    <div className="text-red-500 text-center mt-6">You must have to fill all fields</div>
                )
            }
        </div>
    );
};

export default SubPondOwnerInfo;