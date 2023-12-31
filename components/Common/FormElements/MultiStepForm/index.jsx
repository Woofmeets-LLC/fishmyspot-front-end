import { Form, Formik } from "formik";
import React, { Children, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BackBtn from "./BackBtn";
import NextBtn from "./NextBtn";
import TimeLineContainer from "./TimeLine/TimeLineContainer";

const MultiStepForm = ({
  hideBackBtnAtEnd = false,
  stepControllerBtns = [],
  timelineArray,
  successComponent,
  children,
  ...props
}) => {
  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const childrenArray = Children.toArray(children);
  const currentChild = childrenArray[step];
  const isFirstStep = step === 0;
  const isLastStep = step === timelineArray.length;

  useEffect(() => {
    if (localStorage?.getItem("currentStep")) {
      setStep(JSON.parse(localStorage?.getItem("currentStep")));
    }
  }, []);

  // Redux
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="container py-10 md:px-10 xl:px-28 3xl:py-32">
      <div className="grid grid-cols-10 gap-8 lg:gap-0">
        <TimeLineContainer step={step} timelineArray={timelineArray} />

        <div className="col-span-10 lg:col-span-6">
          <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            enableReinitialize={true}
            onSubmit={async (values, helpers) => {
              if (step === timelineArray.length - 1) {
                if (values.terms && values.license) {
                  await props.onSubmit(values, helpers);
                }
              } else {
                // If we want to write custom logic for the next step then we have to write it here
                switch (timelineArray[step]) {
                  case "Price":
                    isLoggedIn && setStep((s) => s + 1);
                    break;

                  case "Available time":
                    const isSelectedAny = Object.keys(values?.availableTime)
                      ?.map((key) => values?.availableTime[key]?.isSelected)
                      ?.includes(true);
                    if (isSelectedAny) {
                      const isAnyNotSelectedHours = Object.keys(
                        values?.availableTime
                      )
                        ?.filter(
                          (key) => values?.availableTime[key]?.isSelected
                        )
                        ?.map((key) =>
                          Object.values(
                            values?.availableTime[key]?.hours
                          )?.includes(true)
                        )
                        ?.includes(false);

                      !isAnyNotSelectedHours && setStep((s) => s + 1);
                    }
                    break;

                  case "Description":
                    const isAnyDefaultFishSelected = Object.values(
                      values?.fishes
                    )?.includes(true);
                    const isAnyOthersFishFieldValid = values["others-fish"]
                      ?.isSelected
                      ? values["others-fish"]?.names != ""
                      : true;

                    isAnyDefaultFishSelected &&
                      isAnyOthersFishFieldValid &&
                      setStep((s) => s + 1);
                    break;

                  case "Agreement":
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
                <div className="min-h-[200px] rounded px-4 py-7 shadow md:px-[30px] md:py-[50px]">
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
                          : true) &&
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
                    <div className="flex justify-end">
                      {!isLastStep &&
                        (stepControllerBtns.length > step ? (
                          <span className="inline-block">
                            {" "}
                            {stepControllerBtns[step]?.next ? (
                              stepControllerBtns[step]?.next
                            ) : (
                              <NextBtn isSubmitting={isSubmitting} />
                            )}{" "}
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
      </div>
    </div>
  );
};

export default MultiStepForm;
