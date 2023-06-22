import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { Children, useState } from 'react';
import { useSelector } from 'react-redux';
import { BackBtn, NextBtn } from '../../../../Common';

const SpotMultiStepForm = ({
  hideBackBtnAtEnd = false,
  stepControllerBtns = [],
  successComponent,
  timelineArray,
  children,
  ...props
}) => {
  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const childrenArray = Children.toArray(children);
  const currentChild = childrenArray[step];
  const isFirstStep = step === 0;
  const isLastStep = step === timelineArray.length;
  const router = useRouter();

  // Redux
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="container pr-10 lg:pl-0 xl:pr-28 3xl:py-32">
      {/* <div className="grid grid-cols-10 gap-8 lg:gap-0">
        <div className="col-span-10 lg:col-span-6">
          
        </div>
      </div> */}
      <Formik
        {...props}
        validationSchema={currentChild.props.validationSchema}
        enableReinitialize={true}
        onSubmit={async (values, helpers) => {
          if (step === timelineArray.length - 1) {
            localStorage.setItem('listingData', JSON.stringify(values));
            localStorage.setItem('currentStep', step);
            router.push('/list-your-spot');
          } else {
            // If we want to write custom logic for the next step then we have to write it here
            switch (timelineArray[step]) {
              case 'Price':
                isLoggedIn && setStep((s) => s + 1);
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
            <div className="min-h-[200px] rounded px-4 py-7 md:px-[30px] md:py-[50px]">
              <div className="min-h-[100px]">
                {isSuccess ? successComponent : currentChild}
              </div>
              <div className={`grid grid-cols-2 pt-5`}>
                <div className="flex justify-start">
                  {!isFirstStep &&
                    (isLastStep ? (hideBackBtnAtEnd ? false : true) : true) &&
                    (stepControllerBtns.length > step ? (
                      <span
                        onClick={() => setStep((prevStep) => prevStep - 1)}
                        className="inline-block"
                      >
                        {stepControllerBtns[step]?.back ? (
                          stepControllerBtns[step]?.back
                        ) : (
                          <BackBtn />
                        )}
                      </span>
                    ) : (
                      <BackBtn
                        onClick={() => setStep((prevStep) => prevStep - 1)}
                      />
                    ))}
                </div>
                <div className={`flex justify-end`}>
                  {!isLastStep &&
                    (stepControllerBtns.length > step ? (
                      <span className="inline-block">
                        {' '}
                        {stepControllerBtns[step]?.next ? (
                          stepControllerBtns[step]?.next
                        ) : (
                          <NextBtn text="Next" isSubmitting={isSubmitting} />
                        )}{' '}
                      </span>
                    ) : (
                      <NextBtn isSubmitting={isSubmitting} />
                    ))}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SpotMultiStepForm;
