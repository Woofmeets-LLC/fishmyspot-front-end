import { useField } from 'formik';
import Link from 'next/link';
import React from 'react';
import { FormInput, FormOption, FormSelect, PhoneNumberInput } from '../..';

const SignUpForm = ({ mode }) => {
  const [field, meta, helpers] = useField('isAgree');
  return (
    <>
      <div
        className={`grid   ${
          mode == 'owner' ? 'sm:grid-cols-2 sm:gap-4' : 'grid-cols-2 gap-4'
        }`}
      >
        <FormInput
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
        />
        <FormInput
          label="Last Name"
          name="lastName"
          placeholder="Enter your last name"
        />
      </div>
      <div
        className={`grid   ${
          mode == 'owner' ? 'sm:grid-cols-2 sm:gap-4' : 'grid-cols-2 gap-4'
        }`}
      >
        <FormSelect label="Gender" name="gender">
          <FormOption title="Select gender" value="" />
          <FormOption title="Male" value="MALE" />
          <FormOption title="Female" value="FEMALE" />
        </FormSelect>
        <FormSelect
          disabled={mode == 'owner' ? true : false}
          label="Account Type"
          name="type"
        >
          <FormOption title="Select a type" value="" />
          <FormOption title="Pond Owner" value="owner" />
          <FormOption title="Angler" value="angler" />
        </FormSelect>
      </div>
      <FormInput label="Email" name="email" placeholder="Enter your email" />
      <PhoneNumberInput
        label="Phone Number"
        name="phone"
        placeholder="Enter your phone number"
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <div className="mb-4">
        <label
          onChange={() => helpers.setValue(!field.value)}
          className=" mb-2 cursor-pointer font-trade-gothic-bold text-[16px] text-primary"
        >
          <input
            type="checkbox"
            className="mr-2 h-4 w-4 accent-secondary"
            {...field}
          />
          I agree to{' '}
          <span className="ml-1 mr-1 border-primary font-trade-gothic-bold">
            Fish My Spot
          </span>{' '}
          <Link href="/privacy">
            <a className="ml-1 border-b border-primary font-trade-gothic-bold">
              Privacy
            </a>
          </Link>{' '}
          and
          <Link href="/terms-of-use">
            <a className="ml-1 border-b border-primary font-trade-gothic-bold">
              Terms of use
            </a>
          </Link>
        </label>
        {meta.touched && meta.error ? (
          <div className="mt-2 text-sm text-red-500">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export default SignUpForm;
