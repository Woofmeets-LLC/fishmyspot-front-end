import { enableBodyScroll } from 'body-scroll-lock';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import * as Yup from 'yup';
import { Modal } from '../..';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPasswordModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    const initialValues = {
        email: "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Required"),
    });


    const handleSubmit = (values) => {
        setIsSuccess(true);
        console.log(values);
    }
    const handleClose = () => {
        enableBodyScroll(document?.body);
        setIsOpen(false);
    }
    return (
        <Modal
            isOpen={isOpen}
            isOverflowY={false}
            rounded={15}
            onClose={handleClose}>
            <div className="text-right pt-3 pr-5 mb-3">
                <button onClick={handleClose}>
                    <FaTimes />
                </button>
            </div>
            <div className="sm:w-[350px] smd:w-[420px] md:w-[500px] 2xl:w-[593px] min-h-[300px] max-h-[90vh] pl-8 xl:pl-10 2xl:pl-14 3xl:pl-20 pr-6 xl:pr-8 2xl:pr-12 3xl:pr-[72px] pb-10 3xl:pb-10">

                <div className="sidebar min-h-[310px] max-h-[73vh] pr-2">
                    <div className="pb-8">
                        <div className="mb-2 2xl:mb-4">
                            <img
                                className="w-28 2xl:w-[125px] h-28 2xl:h-[125px] mx-auto mt-4"
                                src="/images/key-circle.png"
                                alt="" />
                        </div>
                        <h2 className="font-food-truck text-3xl xl:text-4xl 2xl:text-[44px] 3xl:text-5xl text-primary text-center mb-3 2xl:mb-5"> RESET PASSWORD</h2>
                        <p className="font-trade-gothic text-center px-2 mb-4 2xl:mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            enableReinitialize={true}
                            onSubmit={handleSubmit}>
                            <Form>
                                <ResetPasswordForm /><button
                                    type="submit"
                                    className="block w-full bg-highlight-3 text-white text-center font-trade-gothic-bold py-2 mt-5 2xl:mt-8">Save</button>
                            </Form>
                        </Formik>
                    </div>

                </div>
            </div>
        </Modal>
    );
};

export default ResetPasswordModal;