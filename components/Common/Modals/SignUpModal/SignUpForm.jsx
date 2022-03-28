import { useField } from 'formik';
import Link from 'next/link';
import React from 'react';
import { FormInput, FormOption, FormSelect } from '../..';

const SignUpForm = () => {
    const [field, meta, helpers] = useField("isAgree");
    return (
        <>
            <FormInput label="Email" name="email" placeholder="Enter your email" />
            <div className="grid grid-cols-2 gap-4">
                <FormInput label="First Name" name="firstName" placeholder="Enter your first name" />
                <FormInput label="Last Name" name="lastName" placeholder="Enter your last name" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <FormSelect label="Gender" name="gender" >
                    <FormOption title="Select gender" value="" />
                    <FormOption title="Male" value="MALE" />
                    <FormOption title="Female" value="FEMALE" />
                </FormSelect>
                <FormSelect label="Account Type" name="type" >
                    <FormOption title="Select a type" value="" />
                    <FormOption title="Pond Owner" value="owner" />
                    <FormOption title="Angler" value="angler" />
                </FormSelect>
            </div>
            <FormInput label="Password" name="password" type="password" placeholder="Enter your password" />
            <div className="mb-4">
                <label
                    onChange={() => helpers.setValue(!field.value)}
                    className=" text-[16px] font-trade-gothic-bold text-primary mb-2 cursor-pointer">
                    <input
                        type="checkbox"
                        className="w-4 h-4 mr-2 accent-secondary"
                        {...field} />
                    I agree to <span className="ml-1 font-trade-gothic-bold border-primary mr-1">Fish My Spot</span>{" "}  <Link href="/privacy"><a className="ml-1 font-trade-gothic-bold border-b border-primary">Privacy</a></Link> and
                    <Link href="/terms-of-use"><a className="ml-1 font-trade-gothic-bold border-b border-primary">Terms of use</a></Link>
                </label>
                {meta.touched && meta.error ? (
                    <div className="mt-2 text-red-500 text-sm">{meta.error}</div>
                ) : null}
            </div>
        </>
    );
};

export default SignUpForm;