import { useField } from 'formik';
import React from 'react';

const SubPricing = () => {
    const [firstName1Field] = useField({ name: "firstName1" })
    const [lastName1Field] = useField({ name: "lastName1" })
    const [fullDayRateField] = useField({ name: "fullDayRate" })
    const [zipCode1Field] = useField({ name: "zipCode1" })
    return (
        <div className="text-center text-primary">
            <h2 className="text-2xl font-trade-gothic-bold mb-5">{`${firstName1Field?.value} ${lastName1Field?.value}`}, you could make</h2>
            <h1 className="text-5xl font-trade-gothic-bold mb-8">$ {+fullDayRateField?.value * 7}</h1>
            <p className="text-sm mb-10">by sharing your pond for 1 week in {zipCode1Field?.value}.</p>
        </div>
    );
};

export default SubPricing;