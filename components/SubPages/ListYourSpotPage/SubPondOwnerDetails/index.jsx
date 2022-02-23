import React from 'react';
import { FormInput } from '../../../Common';

const SubPondOwnerDetails = () => {
    return (
        <div>
            <h2 className="text-2xl text-primary font-trade-gothic-bold mb-5">Pond Owner Details</h2>
            <FormInput name="firstName" label="First Name" />
            <FormInput name="lastName" label="Last Name" />
            <FormInput name="email" label="Email" />
            <FormInput name="zipCode" label="Zip Code" />
            <div className="grid grid-cols-2 gap-5 xl:gap-6">
                <FormInput name="halfDayRate" label="Half Day Rate" type="number" />
                <FormInput name="fullDayRate" label="Full Day Rate" type="number" />
            </div>
        </div>
    );
};

export default SubPondOwnerDetails;