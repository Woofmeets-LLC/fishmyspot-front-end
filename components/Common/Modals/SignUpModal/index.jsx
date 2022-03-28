import { enableBodyScroll } from 'body-scroll-lock';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebookF, FaTimes } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Modal } from '../..';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import { setCloseSignUpModal, setShowLoginModal } from '../../../../store/slices/modalsSlice';
import SignUpForm from './SignUpForm';

const SignUpModal = () => {
    // States
    const [isLoading, setIsLoading] = useState(false);

    const { showSignUpModal } = useSelector(state => state.modals);

    const dispatch = useDispatch();

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        type: "",
        isAgree: ""
    }

    const validationSchema = yup.object().shape({
        firstName: yup.string().required("Required"),
        lastName: yup.string().required("Required"),
        email: yup.string().email().required("Required"),
        password: yup.string().required("Required").min(8, "Too Short!"),
        gender: yup.string().required("Required"),
        type: yup.string().required("Required"),
        isAgree: yup.boolean().oneOf([true], "You must agree!").required("Required"),
    });


    const handleSubmit = (values, helpers) => {
        setIsLoading(true);
        getSdk().currentUser.create({
            email: values?.email,
            password: values?.password,
            firstName: values?.firstName,
            lastName: values?.lastName,
            publicData: {
                gender: values?.gender,
                account_type: values?.type
            }
        }, {
            expand: true
        }).then((res) => {
            setIsLoading(false)
            toast("Sign up successful, you can login!", { type: "success" });
            dispatch(setShowLoginModal());
        }).catch(() => {
            setIsLoading(false)
            toast("Email is already taken!", { type: "error" });
        })
    }

    const handleClose = () => {
        dispatch(setCloseSignUpModal());
        enableBodyScroll(document?.body);
    }

    return (
        <Modal
            isOpen={showSignUpModal}
            isOverflowY={false}
            rounded={15}
            onClose={handleClose}>
            <div className="text-right pt-3 pr-5 mb-3">
                <button onClick={handleClose}>
                    <FaTimes />
                </button>
            </div>
            <h2 className="font-food-truck text-3xl xl:text-4xl 2xl:text-[44px] 3xl:text-5xl text-primary text-center">CREATE AN ACCOUNT</h2>
            <div className="sm:w-[350px] smd:w-[420px] md:w-[500px] 2xl:w-[593px] min-h-[300px] max-h-[90vh] pl-8 xl:pl-10 2xl:pl-14 3xl:pl-20 pr-6 xl:pr-8 2xl:pr-12 3xl:pr-[72px] pt-4 pb-10 3xl:pt-6 3xl:pb-10">
                <div className="sidebar min-h-[200px] max-h-[57vh] pr-2">

                    {/* Formik form  */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        enableReinitialize={true}
                        onSubmit={handleSubmit}>
                        <Form>
                            <SignUpForm />
                            <button
                                type="submit"
                                className="flex justify-center items-center w-full bg-secondary text-white text-center font-trade-gothic-bold py-2 mt-5">
                                {
                                    isLoading &&
                                    <span className="animate-spin flex justify-center items-center w-7">
                                        <span className="rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                                    </span>
                                }
                                {
                                    isLoading
                                        ? "Loading..."
                                        : `Sign Up`
                                }</button>
                        </Form>
                    </Formik>

                    <div className="grid grid-cols-2 gap-4 mt-5">
                        <button
                            className="flex justify-center items-center gap-2 w-full border border-transparent bg-blue-600 text-white text-center font-bold py-[6px]">
                            <FaFacebookF /> Facebook
                        </button>
                        <button
                            className="flex justify-center items-center gap-2 w-full shadow border border-gray-50 text-primary text-center font-bold py-[6px]">
                            <FcGoogle /> Google
                        </button>
                    </div>
                    <div className="mt-5 text-center">
                        Already have an account?
                        <button
                            onClick={() => dispatch(setShowLoginModal())}
                            className="inline-block text-primary font-trade-gothic-bold ml-2">Login</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SignUpModal;