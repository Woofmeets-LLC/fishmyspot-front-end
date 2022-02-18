import React from 'react';
import { FormInput } from '../..';

const ResetPasswordForm = () => {
    return (
        <>
            <FormInput label="New Password" name="newPassword" type="password" placeholder="Enter your new password" />
            <FormInput label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm password" />
        </>
    );
};

export default ResetPasswordForm;