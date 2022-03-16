import React from 'react';
import { FormInput } from '../..';

const LoginForm = () => {
    return (
        <>
            <FormInput label="Email" name="email" placeholder="Enter your email" />
            <FormInput label="Password" name="password" type="password" placeholder="Enter your password" />
        </>
    );
};

export default LoginForm;