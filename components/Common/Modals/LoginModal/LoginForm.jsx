import React from 'react';
import { FormInput } from '../..';

const LoginForm = () => {
    return (
        <>
            <FormInput label="Email" name="email" placeholder="Enter your email" />
            <FormInput label="Password" name="password" type="password" placeholder="Enter your password" />
            <button
                type="button"
                className="font-trade-gothic-bold text-primary">
                Forget password?
            </button>
        </>
    );
};

export default LoginForm;