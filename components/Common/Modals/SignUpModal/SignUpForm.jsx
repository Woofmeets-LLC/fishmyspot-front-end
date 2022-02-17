import Link from 'next/link';
import React from 'react';
import { FormCheckbox, FormInput, FormOption, FormSelect } from '../..';

const SignUpForm = () => {
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
                    <FormOption title="Pond Owner" value="OWNER" />
                    <FormOption title="Angler" value="ANGLER" />
                </FormSelect>
            </div>
            <FormInput label="Password" name="password" type="password" placeholder="Enter your password" />
            <FormCheckbox
                label={
                    <>I agree to <span className="ml-1 font-trade-gothic-bold border-b border-primary">Door tap</span>  policy and
                        <Link href="/"><a className="ml-1 font-trade-gothic-bold border-b border-primary">Terms of use</a></Link></>
                }
                name="isAgree" />
            <button
                type="submit"
                className="block w-full bg-highlight-3 text-white text-center font-trade-gothic-bold py-2 mt-5">Sign Up</button>
        </>
    );
};

export default SignUpForm;