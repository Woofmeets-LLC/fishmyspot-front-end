/* eslint-disable react-hooks/exhaustive-deps */
import { useField } from 'formik';
import React, { useEffect } from 'react';

const Calculation = () => {
    const [dayTypeField] = useField('dayType');
    const [dayRatesField] = useField('dayRates');
    const [experienceField] = useField('experience');
    const [totalField, totalMeta, totalHelpers] = useField('total');

    const dayRate = parseFloat(+dayRatesField.value?.[dayTypeField.value]).toFixed(2);
    const experienceCost = parseFloat(+experienceField?.value?.split("/ $")[1] || 0).toFixed(2);
    const serviceFee = parseFloat(3.50).toFixed(2);
    const total = parseFloat(+dayRate + +experienceCost + +serviceFee).toFixed(2);

    useEffect(() => {
        totalHelpers.setValue(total)
    }, [total])
    return (
        <div className='lg:text-lg 2xl:text-xl font-trade-gothic text-highlight-1 my-8 xl:my-14'>
            <div className='flex justify-between mb-2 lg:mb-3 2xl:mb-4'>
                <p>{
                    dayTypeField.value == 'fullDay' ? 'Full Day' : 'Half Day'
                }</p>
                <p>${dayRate}</p>
            </div>
            {
                experienceField?.value &&
                <div className='flex justify-between mb-2 lg:mb-3 2xl:mb-4 space-x-4'>
                    <p>{experienceField.value}</p>
                    <p>${experienceCost}</p>
                </div>
            }
            <div className='flex justify-between pb-2 md:pb-3 lg:pb-4 xl:pb-5 border-b border-highlight-1'>
                <p>Service fees</p>
                <p>${serviceFee}</p>
            </div>
            <div className='mt-2 md:mt-3 flex justify-between text-lg lg:text-xl 2xl:text-2xl font-trade-gothic-bold'>
                <p>Total</p>
                <p>${total}</p>
            </div>
        </div>
    );
};

export default Calculation;