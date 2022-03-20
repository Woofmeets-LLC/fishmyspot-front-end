import React, { useState } from 'react';
import Autocomplete from "react-google-autocomplete";
import CheckoutInput from './CheckoutInput';

const CustomCheckoutForm = () => {
    const [addressError, setAddressError] = useState({ isError: false, message: "" });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');

    const getAddress = (place) => {
        setAddressError({ isError: false, message: "" });

        setAddress(place.formatted_address);
        setCity("");
        setState("");
        setZipCode("");

        let errorCount = 3;
        place.address_components.forEach(component => {
            if (component.types[0] === 'administrative_area_level_2') {
                setCity(component?.short_name)
                errorCount--;
            }
            if (component.types[0] == 'postal_code') {
                setZipCode(component?.short_name);
                errorCount--;
            }
            if (component.types[0] == 'administrative_area_level_1') {
                setState(component?.short_name)
                errorCount--;
            }
        })
        if (errorCount) {
            setAddressError({ isError: true, message: "Address is not valid. Select valid address!" })
        } else {
            setAddressError({ isError: false, message: "" })
        }
    }
    return (
        <>
            <p className='text-lg font-trade-gothic-bold text-primary mb-2 lg:mb-5'>Billing Info</p>
            <CheckoutInput
                label="Name"
                name="name"
                placeholder="Enter your name"
                value={name}
                setValue={setName}
                validation={/^.{1,}$/}
                errMessage={"Name is required"}
                setErrors={setErrors}
                errors={errors}
            />
            <div className="grid md:grid-cols-2 gap-5">
                <CheckoutInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    setValue={setEmail}
                    errMessage={"Email is not valid"}
                    validation={/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                    setErrors={setErrors}
                    errors={errors}
                />
                <CheckoutInput
                    label="phone number"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    setValue={setPhone}
                    errMessage={"Phone number is not valid"}
                    validation={/^.{10,}$/}
                    setErrors={setErrors}
                    errors={errors}
                />
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
                    defaultValue={address}

                />
                {addressError.isError ? (
                    <div className="mt-2 text-red-500 text-sm">{addressError.message}</div>
                ) : null}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <CheckoutInput
                    label="City"
                    name="city"
                    placeholder="Enter your city"
                    value={city}
                    setValue={setCity}
                    setErrors={setErrors}
                    errors={errors}
                    disabled
                />
                <CheckoutInput
                    label="State"
                    name="state"
                    placeholder="Enter your state"
                    value={state}
                    setValue={setState}
                    setErrors={setErrors}
                    errors={errors}
                    disabled
                />
            </div>

            <CheckoutInput
                label="Zip Code"
                name="zipCode"
                placeholder="Enter your zip code"
                value={zipCode}
                setValue={setZipCode}
                setErrors={setErrors}
                errors={errors}
                disabled
            />
        </>
    );
};

export default CustomCheckoutForm;