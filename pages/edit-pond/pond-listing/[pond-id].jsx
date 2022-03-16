/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubPondListingEdit from '../../../components/SubPages/EditPondPage/SubPondListingEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { getSdk } from '../../../sharetribe/sharetribeSDK';
import { UUID } from '../../../types';

const PondListingEdit = () => {
    const [pondData, setPondData] = useState({});
    const [loading, setLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { query, push } = useRouter();
    const getPondData = () => {
        setLoading(true)
        getSdk().ownListings.show({ id: query['pond-id'] })
            .then(res => {
                setLoading(false);
                setPondData(res?.data?.data?.attributes);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }

    useEffect(() => {
        getPondData()
    }, [query]);

    const handleUpdatePondData = (values, helpers) => {
        setIsSubmitting(true);

        const updatingPondData = getSdk().ownListings.update({
            id: new UUID(query['pond-id']),
            publicData: {
                ...values
            },
        })

        toast.promise(updatingPondData, {
            duration: 3000,
            loading: 'Pond listing data updating...',
            success: (res) => {
                console.log({ "toast-res": res });
                setTimeout(() => push("/own-spot-list"), 2000)
                setIsSubmitting(false);
                return `Your pond updated successfully!`
            },
            error: (err) => {
                console.log(err);
                setIsSubmitting(false);
                return `Pond updating failed. Please try again!`;
            },
        })

    }
    return (
        <HomeLayout>
            <EditPondContainer>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        acre: pondData?.publicData?.acre || '',
                        'stocked-pond': pondData?.publicData?.['stocked-pond'] || '',
                        "catch-requirements": pondData?.publicData?.['catch-requirements'] || '',
                    }}
                    validationSchema={
                        yup.object({
                            acre: yup.string().required('Required'),
                            'stocked-pond': yup.string().required('Required'),
                            "catch-requirements": yup.string().required('Required'),
                        })
                    }
                    onSubmit={handleUpdatePondData}>
                    <Form>
                        {
                            loading
                                ? <div>Loading...</div>
                                : <>
                                    <SubPondListingEdit isSubmitting={isSubmitting} />
                                    <div className="my-2 text-right">
                                        <button
                                            type={isSubmitting ? "button" : "submit"}
                                            className="flex justify-center items-center bg-secondary text-white font-trade-gothic-bold rounded py-2 px-8 ml-auto">
                                            {
                                                isSubmitting &&
                                                <span className="animate-spin flex justify-center items-center w-7">
                                                    <span className="rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                                                </span>
                                            }
                                            {
                                                isSubmitting
                                                    ? "Loading..."
                                                    : `Update`
                                            }

                                        </button>
                                    </div>
                                </>
                        }
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default PondListingEdit;