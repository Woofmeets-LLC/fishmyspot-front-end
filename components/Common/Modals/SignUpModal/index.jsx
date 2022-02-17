import { Form, Formik } from 'formik';
import React from 'react';
import { FaFacebookF, FaTimes } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Modal } from '../..';
import { setCloseSignUpModal, setShowLoginModal } from '../../../../store/slices/modalsSlice';
import SignUpForm from './SignUpForm';

const SignUpModal = () => {
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

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        password: Yup.string().required("Required").min(8, "Too Short!"),
        gender: Yup.string().required("Required"),
        type: Yup.string().required("Required"),
        isAgree: Yup.boolean().oneOf([true], "You must agree!").required("Required"),
    });


    const handleSubmit = (values, helpers) => {
        console.log(values);
    }

    return (
        <Modal
            isOpen={showSignUpModal}
            isOverflowY={false}
            rounded={15}
            onClose={() => dispatch(setCloseSignUpModal())}>
            <div className="sm:w-[350px] smd:w-[420px] md:w-[500px] 2xl:w-[593px] min-h-[400px] max-h-[90vh] p-2 pl-8 xl:pl-10 2xl:pl-14 3xl:pl-20 pr-6 xl:pr-8 2xl:pr-12 3xl:pr-[72px] py-8 3xl:py-10">
                <div className="text-right -mt-3 -mr-1 mb-2">
                    <button onClick={() => dispatch(setCloseSignUpModal())}>
                        <FaTimes />
                    </button>
                </div>
                <div className="sidebar min-h-[310px] max-h-[73vh] pr-2">
                    <h2 className="font-food-truck text-3xl xl:text-4xl 2xl:text-[44px] 3xl:text-5xl text-primary text-center mb-5">CREATE AN ACCOUNT</h2>

                    {/* Formik form  */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        enableReinitialize={true}
                        onSubmit={handleSubmit}>
                        <Form>
                            <SignUpForm />
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