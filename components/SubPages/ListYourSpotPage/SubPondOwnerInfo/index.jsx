import { useField } from 'formik';
import React from 'react';
import { FormInput, FormRadioButtons } from '../../../Common';


const SubPondOwnerInfo = () => {
    const [firstNameField] = useField({ name: "firstName" })
    const [lastNameField] = useField({ name: "lastName" })
    const [fullDayRateField] = useField({ name: "fullDayRate" })
    const [zipCodeField] = useField({ name: "zipCode" })
    return (
        <div>
            <div className="text-center text-primary">
                <h2 className="text-2xl font-trade-gothic-bold mb-5">{`${firstNameField?.value} ${lastNameField?.value}`}, you could make</h2>
                <h1 className="text-5xl font-trade-gothic-bold mb-8">$ {+fullDayRateField?.value * 7}</h1>
                <p className="text-sm mb-10">by sharing your pond for 1 week in {zipCodeField?.value}.</p>
            </div>

            <div className="grid grid-cols-2 gap-5 xl:gap-6">
                <FormInput name="firstName" label="First Name" placeholder="Enter your first name" />
                <FormInput name="lastName" label="Last Name" placeholder="Enter your last name" />
            </div>
            <FormInput name="address" label="Address" placeholder="Enter Your Address" />
            <div className="grid grid-cols-3 gap-4 xl:gap-6">
                <FormInput name="city" label="City" placeholder="Please enter city" />
                <FormInput name="state" label="State" placeholder="Please enter state" />
                <FormInput name="zipCode" label="zip" placeholder="Please enter zipCode" />
            </div>
            <FormInput name="email" label="Email" placeholder="Please enter email" />
            <FormInput name="phone" label="Phone" placeholder="Please enter phone" />
            <FormRadioButtons
                name="secondAddress"
                radioBtns={[{ title: "Yes", value: "yes" }, { title: "No", value: "no" }]}
                label="Do you need to add a second address for where you
            want to receive payment or add another contact to your
            listing? (Optional)" />

        </div>
    );
};

export default SubPondOwnerInfo;