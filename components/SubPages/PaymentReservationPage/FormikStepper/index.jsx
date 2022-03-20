import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import ConfirmDetailSection from '../ConfirmDetailSection/ConfirmDetailSection';
import StepperContainer from '../SubCheckout/SubPaymentStepper/StepperContainer';
import SubDetails from '../SubDetails/SubDetails';

const FormikStepper = ({ children, stepperArray, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  console.log(step, childrenArray.length)

  const isLastStep = () => {
    return step === childrenArray.length - 2;
  }

  return (
    <div>
      <StepperContainer step={step} stepperArray={stepperArray} />
      <Formik
        {...props}
        enableReinitialize={true}
        validationSchema={currentChild.props.validation}
        onSubmit={async (values, helpers) => {
          if (isLastStep()) {
            console.log('last step', values);
            // it will be used inside the then block of the api
            setStep(s => s + 1);
          }
          else {
            setStep(s => s + 1);
            await props.onSubmit(values, helpers);
          }
        }}
      >
        <Form autoComplete='off'>

          <div className={step < 2 ? 'md:grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12' : ''}>
            {currentChild}

            {
              step < 2 &&
              <div className="">
                <ConfirmDetailSection />
                <SubDetails title={"Details"} step={step} />
              </div>
            }
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default FormikStepper;