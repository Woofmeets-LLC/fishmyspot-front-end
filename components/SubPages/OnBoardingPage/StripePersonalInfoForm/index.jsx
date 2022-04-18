import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { createStripeAccountToken } from "../../../../services/payment-services/stripe";
import { FormInput, FormOption, FormSelect } from "../../../Common";

const PersonalInfoContainer = () => {
  const onSumbit = async (values, helpers) => {

    const { token, error } = createStripeAccountToken(values);
  };

  return (
    <div className="container py-8">
      <Formik
        enableReinitialize={true}
        initialValues={{
          "token-account": "",
          "token-person": "",
          "inp-company-name": "",
          "inp-company-type": "company",
          "inp-company-street-address1": "",
          "inp-company-city": "",
          "inp-company-state": "",
          "inp-company-zip": "",
          "inp-person-first-name": "",
          "inp-person-last-name": "",
          "inp-person-street-address1": "",
          "inp-person-city": "",
          "inp-person-state": "",
          "inp-person-zip": "",
        }}
        validationSchema={yup.object({})}
        onSubmit={onSumbit}
      >
        <Form className="my-form block md:w-2/3 lg:w-1/2 mx-auto">
          <input type="hidden" name="token-account" id="token-account" />
          <input type="hidden" name="token-person" id="token-person" />
          <FormInput
            name="inp-company-name"
            className="inp-company-name"
            label="Business Name"
          />

          <FormSelect
            name="inp-company-type"
            className="inp-company-type"
            label="Business Type"
          >
            <FormOption value={"individual"} title={"Individual"}></FormOption>
            <FormOption value={"company"} title={"Company"}></FormOption>
          </FormSelect>
          <div className="relative h-10 mt-5">
            <h2 className="relative inline-block text-xl bg-white text-secondary font-trade-gothic-bold capitalize pr-2 mb-2 z-[2]">
              Business Address
            </h2>
            <span className="absolute top-[15px] w-full block border border-dashed border-secondary "></span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="inp-company-street-address1"
              className="inp-company-street-address1"
              label="Street Address Line 1"
            />
            <FormInput
              name="inp-company-city"
              className="inp-company-city"
              label="City"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="inp-company-state"
              className="inp-company-state"
              label="State"
            />
            <FormInput
              name="inp-company-zip"
              className="inp-company-zip"
              label="Postal Code"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <FormInput
              name="inp-person-first-name"
              className="inp-person-first-name"
              label="Representative First Name"
            />
            <FormInput
              name="inp-person-last-name"
              className="inp-person-last-name"
              label="Representative Last Name"
            />
          </div>
          {/* <h2 className="block text-xl text-secondary font-trade-gothic-bold capitalize mb-2">Representative Address</h2> */}
          <div className="relative h-10 mt-5">
            <h2 className="relative inline-block text-xl bg-white text-secondary font-trade-gothic-bold capitalize pr-2 mb-2 z-[2]">
              Representative Address
            </h2>
            <span className="absolute top-[15px] w-full block border border-dashed border-secondary "></span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="inp-person-street-address1"
              className="inp-person-street-address1"
              label="Street Address Line 1"
            />
            <FormInput
              name="inp-person-city"
              className="inp-person-city"
              label="City"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="inp-person-state"
              className="inp-person-state"
              label="State"
            />
            <FormInput
              name="inp-person-zip"
              className="inp-person-zip"
              label="Postal Code"
            />
          </div>
          <p className="mb-3">
            By clicking, you agree to{" "}
            <a href="#" className="text-secondary">
              our terms
            </a>{" "}
            and the{" "}
            <a href="/connect-account/legal" className="text-secondary">
              Stripe Connected Account Agreement
            </a>
            .
          </p>
          <button
            type="submit"
            className=" block md:w-1/2 mx-auto bg-primary text-white text-xl font-food-truck rounded px-10 py-[6px] "
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalInfoContainer;
