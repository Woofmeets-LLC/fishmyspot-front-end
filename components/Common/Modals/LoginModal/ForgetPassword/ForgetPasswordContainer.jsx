/* eslint-disable @next/next/no-img-element */
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { getSdk } from '../../../../../sharetribe/sharetribeSDK';
import ForgetPasswordForm from './ForgetPasswordForm';

const ForgetPasswordContainer = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const initialValues = {
        email: "",
    }

    const validationSchema = yup.object().shape({
        email: yup.string().email().required("Required"),
    });


    const handleSubmit = (values) => {
        setIsSuccess(true);
        getSdk().passwordReset.request({
            email: values.email
        }, {})
            .then(res => {
                // res.data
            })
            .catch(err => {

            })
    }
    return (
        <div className="sidebar min-h-[310px] max-h-[73vh] pr-2">
            <div className="pb-12">
                <div className="mb-2 2xl:mb-4">
                    <img
                        className="w-28 2xl:w-[125px] h-28 2xl:h-[125px] mx-auto mt-4"
                        src="/images/key-circle.png"
                        alt="" />
                </div>
                <h2 className="font-food-truck text-3xl xl:text-4xl 2xl:text-[44px] 3xl:text-5xl text-primary text-center mb-3 2xl:mb-5"> {isSuccess ? "EMAIL SENT" : "FORGOT PASSWORD"} </h2>
                <p className="font-trade-gothic text-center px-2 mb-4 2xl:mb-6">That&apos;s okay, it happens! Fill in your email and we&apos;ll send you instructions to reset your password.</p>

                {/* Formik form  */}
                {
                    isSuccess
                        ? <div className="">
                            <button
                                type="button"
                                onClick={() => setIsSuccess(false)}
                                className="block w-full bg-highlight-3 text-white text-center font-trade-gothic-bold py-2 mt-5 rounded">Back </button>
                        </div>
                        : <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            enableReinitialize={true}
                            onSubmit={handleSubmit}>
                            <Form>
                                <ForgetPasswordForm />
                                <button
                                    type="submit"
                                    className="block w-full bg-highlight-3 text-white text-center font-trade-gothic-bold py-2 mt-5 rounded">Send </button>
                            </Form>
                        </Formik>
                }

            </div>
        </div>
    );
};

export default ForgetPasswordContainer;