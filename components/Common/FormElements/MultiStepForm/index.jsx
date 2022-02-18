import { Form, Formik } from 'formik';
import React, { Children, useState } from 'react';
import TimeLineContainer from './TimeLine/TimeLineContainer';

const MultiStepForm = ({
    hideBackBtnAtEnd = false,
    stepControllerBtns = [],
    timelineArray,
    successComponent,
    children,
    ...props
}
) => {
    const [step, setStep] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);
    const childrenArray = Children.toArray(children);
    const currentChild = childrenArray[step];
    const isFirstStep = step === 0;
    const isLastStep = step === timelineArray.length;


    return (
        <div className="container py-10 2xl:py-32">
            <div className="grid grid-cols-10 gap-8 lg:gap-0">
                <TimeLineContainer step={step} timelineArray={timelineArray} />

                <div className="col-span-10 lg:col-span-7">
                    <Formik
                        {...props}
                        validationSchema={currentChild.props.validationSchema}
                        enableReinitialize={true}
                        onSubmit={async (values, helpers) => {
                            if (isLastStep) {
                                setIsSuccess(true);
                                await props.onSubmit(values, helpers);
                            } else {
                                // If we want to write custom logic for the next step then we have to write it here
                                switch (timelineArray[step]) {
                                    case 'Utilities & Feaures':
                                        // Codes for how we handle the step
                                        break;

                                    default:
                                        setStep((s) => s + 1);
                                        break;
                                }
                                helpers.setTouched({});
                            }
                        }}
                    >
                        {/*========= Main Form ============= */}
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="min-h-[200px] shadow px-4 md:px-[30px] py-7 md:py-[50px] rounded">
                                    <div className="min-h-[100px]">
                                        {isSuccess ? successComponent : currentChild}
                                    </div>
                                    <div className={`grid grid-cols-2 pt-5`}>
                                        <div className="flex justify-start">
                                            {!isFirstStep &&
                                                (isLastStep
                                                    ? hideBackBtnAtEnd
                                                        ? false
                                                        : true
                                                    : true) && (
                                                    <button
                                                        onClick={() => setStep((prevStep) => prevStep - 1)}
                                                        type="button"
                                                        className="bg-secondary text-white font-trade-gothic-bold rounded py-2 px-6"
                                                    >
                                                        {stepControllerBtns.length > step
                                                            ? stepControllerBtns[step]?.back
                                                            : 'Back'}
                                                    </button>
                                                )}
                                        </div>
                                        <div className="flex justify-end">
                                            {!isLastStep && (
                                                <button
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    className=" bg-secondary text-white font-trade-gothic-bold rounded py-2 px-6"
                                                >
                                                    {stepControllerBtns.length > step
                                                        ? stepControllerBtns[step]?.next
                                                        : 'Continue'}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    );
};

export default MultiStepForm;