import { Form, Formik } from 'formik';
import React, { useState } from 'react';

const FormikStepper = ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  console.log(currentChild)

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validation}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          console.log(values);
          await props.onSubmit(values, helpers);
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
  )
}

export default FormikStepper;