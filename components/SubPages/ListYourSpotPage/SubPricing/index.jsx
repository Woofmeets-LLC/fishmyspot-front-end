import { useField } from 'formik';
import React from 'react';

const SubPricing = () => {
    const [firstNameField] = useField({ name: "firstName" })
    const [lastNameField] = useField({ name: "lastName" })
    const [fullDayRateField] = useField({ name: "fullDayRate" })
    const [zipCodeField] = useField({ name: "zipCode" })
    return (
        <div className="text-center text-primary">
            <h2 className="text-2xl font-trade-gothic-bold mb-5">{`${firstNameField?.value} ${lastNameField?.value}`}, you could make</h2>
            <h1 className="text-5xl font-trade-gothic-bold mb-8">$ {+fullDayRateField?.value * 7}</h1>
            <p className="text-sm mb-10">by sharing your pond for 1 week in {zipCodeField?.value}.</p>
        </div>
    );
};

export default SubPricing;