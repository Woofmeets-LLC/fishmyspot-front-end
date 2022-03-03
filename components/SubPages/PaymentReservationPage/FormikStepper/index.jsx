import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import StepperContainer from './Stepper/StepperContainer';

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
        validationSchema={currentChild.props.validation}
        onSubmit={async (values, helpers) => {
          if (isLastStep()) {
            console.log('last step', values);
            // it will be used inside the then block of the api
            setStep(s => s + 1);
            // await props.onSubmit(values, helpers);
          }
          else {
            setStep(s => s + 1);
          }
        }}
      >
        <Form autoComplete='off'>
          {currentChild}
        </Form>
      </Formik>
    </div>
  )
}

export default FormikStepper;