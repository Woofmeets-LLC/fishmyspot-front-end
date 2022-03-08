import { Form, Formik } from 'formik';
import React, { Children, useState } from 'react';
import { useSelector } from 'react-redux';
import BackBtn from './BackBtn';
import NextBtn from './NextBtn';
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

    // Redux 
    const { isLoggedIn } = useSelector(state => state.auth);
    return (
        <div className="container md:px-10 xl:px-28 py-10 3xl:py-32">
            <div className="grid grid-cols-10 gap-8 lg:gap-0">
                <TimeLineContainer step={step} timelineArray={timelineArray} />

                <div className="col-span-10 lg:col-span-6">
                    <Formik
                        {...props}
                        validationSchema={currentChild.props.validationSchema}
                        enableReinitialize={true}
                        onSubmit={async (values, helpers) => {
                            if (step === (timelineArray.length - 1)) {
                                // setIsSuccess(true);
                                await props.onSubmit(values, helpers);
                            } else {
                                // If we want to write custom logic for the next step then we have to write it here
                                switch (timelineArray[step]) {
                                    case 'Price':
                                        isLoggedIn && setStep((s) => s + 1);
                                        break;

                                    case 'Pond Owner Information':
                                        if (values?.secondAddress == 'no') {
                                            setStep((s) => s + 1);
                                        } else {
                                            if (values.firstName2 &&
                                                values.lastName2 &&
                                                values.email2 &&
                                                values.zipCode2 &&
                                                values.address2 &&
                                                values.city2 &&
                                                values.state2 &&
                                                values.phone2) {
                                                setStep((s) => s + 1);
                                            } else {
                                                helpers?.setErrors({
                                                    firstName2: 'Please fill all the fields',
                                                })
                                            }
                                        }
                                        break;

                                    case 'Available time':
                                        const isSelectedAny = Object.keys(values?.availableTime)?.map(key => (values?.availableTime[key]?.isSelected))?.includes(true);
                                        if (isSelectedAny) {
                                            const isAnyNotSelectedHours = Object.keys(values?.availableTime)
                                                ?.filter(key => values?.availableTime[key]?.isSelected)
                                                ?.map(key => Object.values(values?.availableTime[key]?.hours)?.includes(true))
                                                ?.includes(false);

                                            !isAnyNotSelectedHours && setStep((s) => s + 1);
                                        }
                                        break;

                                    case 'Description':
                                        const isAnyDefaultFishSelected = Object.values(values?.fishes)?.includes(true);
                                        const isAnyOthersFishFieldValid = values["others-fish"]?.isSelected ? (values["others-fish"]?.names != "") : true;

                                        isAnyDefaultFishSelected && isAnyOthersFishFieldValid && setStep((s) => s + 1);
                                        break;

                                    case 'Agreement':
                                        // const isSelectedAny = Object.keys(values?.availableTime)?.map(key => (values?.availableTime[key]?.isSelected))?.includes(true);
                                        // isSelectedAny && setStep((s) => s + 1);
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
                                                    stepControllerBtns.length > step
                                                        ? <span
                                                            onClick={() => setStep((prevStep) => prevStep - 1)}
                                                            className="inline-block">
                                                            {
                                                                stepControllerBtns[step]?.back
                                                                    ? stepControllerBtns[step]?.back
                                                                    : <BackBtn />
                                                            }
                                                        </span>
                                                        : <BackBtn
                                                            onClick={() => setStep((prevStep) => prevStep - 1)} />
                                                )}
                                        </div>
                                        <div className="flex justify-end">
                                            {!isLastStep && (
                                                stepControllerBtns.length > step
                                                    ? <span className="inline-block"> {
                                                        stepControllerBtns[step]?.next
                                                            ? stepControllerBtns[step]?.next
                                                            : <NextBtn isSubmitting={isSubmitting} />
                                                    } </span>
                                                    : <NextBtn isSubmitting={isSubmitting} />
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