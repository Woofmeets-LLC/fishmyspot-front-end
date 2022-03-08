import { useField } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { FormInput } from '../../../Common';

const SubPriceEdit = () => {
    const [fullDayRateField] = useField('fullDayRate')
    const [zipCode1Field] = useField('zipCode1')

    const profile = useSelector(state => state?.auth?.user?.profile);
    return (
        <>
            <div className="grid grid-cols-2 gap-5 xl:gap-6">
                <FormInput name="halfDayRate" label="Half Day Rate" type="number" />
                <FormInput name="fullDayRate" label="Full Day Rate" type="number" />
            </div>
            <div className="text-center text-primary mt-5">
                <h2 className="text-2xl font-trade-gothic-bold mb-5">{profile?.displayName}, you could make</h2>
                <h1 className="text-5xl font-trade-gothic-bold mb-8">$ {+fullDayRateField?.value * 7}</h1>
                <p className="text-sm mb-10">by sharing your pond for 1 week in {zipCode1Field?.value}.</p>
            </div>
            <div className="my-2 text-center">
                <button
                    type="submit"
                    className="bg-secondary text-white font-trade-gothic-bold rounded py-2 px-8 ml-auto">Update</button>
            </div>
        </>
    );
};

export default SubPriceEdit;