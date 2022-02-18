import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { setShowSignUpModal } from '../../../../store/slices/modalsSlice';
import LoginForm from './LoginForm';

const LoginFormContainer = ({ setShowForgetPassword }) => {
    // States
    const [isAngler, setIsAngler] = useState(true);

    // Redux
    const { showLoginModal } = useSelector(state => state.modals);
    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Required"),
        password: Yup.string().required("Required").min(8, "Too Short!")
    });


    const handleSubmit = (values, helpers) => {
        const loginInfo = { ...values, type: isAngler ? "ANGLER" : "OWNER" };
        console.log(loginInfo);
    }
    return (
        <div className="sidebar min-h-[310px] max-h-[73vh] pr-2">
            <h2 className="font-food-truck text-3xl xl:text-4xl 2xl:text-[44px] 3xl:text-5xl text-primary text-center mb-3">LOG IN</h2>

            <div className="flex justify-center items-center font-trade-gothic-bold mb-3">
                <button
                    onClick={() => setIsAngler(false)}
                    className={`w-1/2 pb-2 border-b-4 transition text-lg ${isAngler ? "border-gray-300" : "border-secondary"}`}>Pond Owner</button>
                <button
                    onClick={() => setIsAngler(true)}
                    className={`w-1/2 pb-2 border-b-4 transition text-lg ${!isAngler ? "border-gray-300" : "border-secondary"}`}>Angler</button>

            </div>

            {/* Formik form  */}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={handleSubmit}>
                <Form>
                    <LoginForm />
                    <button
                        type="button"
                        onClick={() => setShowForgetPassword(true)}
                        className="font-trade-gothic-bold text-primary">
                        Forget password?
                    </button>
                    <button
                        type="submit"
                        className="block w-full bg-highlight-3 text-white text-center font-trade-gothic-bold py-2 mt-5">Log In as {isAngler ? "Angler" : "Pond Owner"}</button>
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
                Don't have an account?
                <button
                    onClick={() => dispatch(setShowSignUpModal())}
                    className="inline-block text-primary font-trade-gothic-bold ml-2">Sign Up</button>
            </div>
        </div>
    );
};

export default LoginFormContainer;