import { enableBodyScroll } from 'body-scroll-lock';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaTelegramPlane, FaTimes } from 'react-icons/fa';
import * as yup from 'yup';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import Modal from '../../CustomModal/Modal';
import ReviewForm from '../../PurchaseCard/CreateReview/ReviewForm';

const CreateReviewForOnwer = ({ purchaseData, setPurchaseList, listingId, transactionId }) => {
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleClose = () => {
        console.log("Closed");
        setShowReviewForm(false);
        enableBodyScroll(document?.body);
    };

    const handleSubmit = (values) => {
        setLoading(true);
        getSdk().transactions.transition({
            id: values?.transactionId,
            transition: "transition/review-2-by-provider",
            params: {
                reviewRating: +values?.rating,
                reviewContent: values?.review,
            }
        }, {
            expand: true
        })
            .then(res => {
                console.log(res);
                toast.success("Review submitted successfully");
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.dir(err);
            });
    };

    return (
        <div className="pt-4">
            <div className="text-center">
                {
                    showReviewForm
                        ? <Formik
                            initialValues={{
                                listingId,
                                transactionId,
                                review: '',
                                rating: 0,
                            }}
                            validationSchema={yup.object({
                                review: yup.string().required('Review is required!'),
                                rating: yup.number().min(1, "Select at least one start!").required('Please select rating!'),
                            })}
                            enableReinitialize={true}
                            onSubmit={handleSubmit}>
                            <Form>
                                <Modal
                                    isOpen={showReviewForm}
                                    isOverflowY={false}
                                    rounded={15}
                                    onClose={handleClose}>
                                    <div className="text-right pt-3 pr-5">
                                        <button onClick={handleClose}>
                                            <FaTimes />
                                        </button>
                                    </div>
                                    <div className="sm:w-[350px] smd:w-[420px] md:w-[500px] 2xl:w-[593px] min-h-[300px] max-h-[90vh] pl-8 xl:pl-10 2xl:pl-14 3xl:pl-20 pr-6 xl:pr-8 2xl:pr-12 3xl:pr-[72px] pt-4 pb-10 3xl:pt-7 3xl:pb-10">

                                        <ReviewForm />

                                        <button
                                            type="submit"
                                            className="inline-flex items-center gap-2 font-trade-gothic-bold px-6 py-2 mt-3 bg-secondary rounded-full">
                                            {
                                                loading
                                                    ? (
                                                        <>
                                                            <span className="animate-spin flex justify-center items-center w-7">
                                                                <span className="rounded-full h-5 w-5 border-t-2 border-b-2 border-primary"></span>
                                                            </span>
                                                            Submitting review...
                                                        </>
                                                    )
                                                    : (
                                                        <><FaTelegramPlane /> Submit your review </>
                                                    )
                                            }
                                        </button>
                                    </div>
                                </Modal>
                            </Form>
                        </Formik>
                        : <button
                            onClick={() => setShowReviewForm(prevShowReviewForm => !prevShowReviewForm)}
                            className="inline-flex items-center gap-2 font-trade-gothic-bold px-6 py-2 bg-secondary rounded-full"><FaTelegramPlane /> Submit your review</button>
                }
            </div>
        </div>
    );
};

export default CreateReviewForOnwer;