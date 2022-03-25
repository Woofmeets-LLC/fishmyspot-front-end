import React, { useState } from 'react';
import PaymentSuccess from '../PaymentSuccess';
import SubCheckout from '../SubCheckout';
import SubDetails from '../SubDetails/SubDetails';
import SubPaymentMethod from '../SubPaymentMethod';
import StepperContainer from './StepperContainer';

const SubPaymentStepper = ({ transactionInfo, reset }) => {
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
                return <SubCheckout setStep={setStep} transactionInfo={transactionInfo} reset={reset} />;
            case 2:
                return <PaymentSuccess />;
            default:
                return null;
        }
    }
    return (
        <>
            <StepperContainer step={step} stepperArray={stepperArray} />
            <div className={step < 2 ? 'flex flex-wrap md:grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12' : ''}>
                {/* Showing data based on state  */}
                <div className="w-full">
                    {getStepItems()}
                </div>

                {/* By default the section will show to every step  */}
                {
                    step < 2 &&
                    <div className="w-full">
                        <SubDetails
                            title={"Details"}
                            step={step} />
                    </div>
                }
            </div>
        </>
    );
};

export default SubPaymentStepper;