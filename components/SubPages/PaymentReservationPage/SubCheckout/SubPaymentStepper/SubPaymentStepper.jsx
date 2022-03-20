import React, { useState } from 'react';
import SubCheckout from '..';
import SubDetails from '../../SubDetails/SubDetails';
import SubPaymentMethod from '../../SubPaymentMethod';
import StepperContainer from './StepperContainer';

const SubPaymentStepper = ({ transactionInfo }) => {
    const [step, setStep] = useState(0);

    const stepperArray = [
        "Confirm details",
        "Checkout",
        "Confirmation",
    ];

    const getStepItems = () => {
        switch (step) {
            case 0:
                return <SubPaymentMethod step={step} setStep={setStep} />;
            case 1:
                return <SubCheckout setStep={setStep} transactionInfo={transactionInfo} />;
            case 2:
                return <div className="">Step 3</div>;
            default:
                return null;
        }
    }
    return (
        <>
            <StepperContainer step={step} stepperArray={stepperArray} />
            <div className={step < 2 ? 'md:grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12' : ''}>
                {/* Showing data based on state  */}
                {getStepItems()}

                {/* By default the section will show to every step  */}
                <div className="">
                    <SubDetails title={"Details"} step={step} />
                </div>
            </div>
        </>
    );
};

export default SubPaymentStepper;