/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubAvailableTimeEdit from '../../../components/SubPages/EditPondPage/SubAvailableTimeEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { availabilityPlanFormatting, getEditAvailableTimeData } from '../../../services/listing-spot-data-organiging/availableTimeFormatting';
import { getSdk } from '../../../sharetribe/sharetribeSDK';
import { UUID } from '../../../types';

const AvailableTimeEdit = () => {
    const [pondData, setPondData] = useState({});
    const [loading, setLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { query, push } = useRouter();
    const getPondData = () => {
        setLoading(true)
        getSdk().ownListings.show({ id: query['pond-id'] })
            .then(res => {
                setLoading(false)
                // res.data contains the response data
                setPondData(res?.data?.data?.attributes);
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            });
    }

    useEffect(() => {
        getPondData()
    }, [query])

    const availableTime = getEditAvailableTimeData(pondData);
    console.log(availableTime);
    const handleUpdatePondData = (values, helpers) => {

        // Availability Plan Data
        const availabilityPlan = availabilityPlanFormatting(values.availableTime);

        const isSelectedAny = Object.keys(values?.availableTime)?.map(key => (values?.availableTime[key]?.isSelected))?.includes(true);
        if (isSelectedAny) {
            const isAnyNotSelectedHours = Object.keys(values?.availableTime)
                ?.filter(key => values?.availableTime[key]?.isSelected)
                ?.map(key => Object.values(values?.availableTime[key]?.hours)?.includes(true))
                ?.includes(false);

            setIsSubmitting(true);
            const updatingPondData = getSdk().ownListings.update({
                id: new UUID(query['pond-id']),
                publicData: {
                    availabilityPlan,
                },
            })
            !isAnyNotSelectedHours &&
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

    }

    return (
        <HomeLayout>
            <EditPondContainer>
                <Formik
                    enableReinitialize
                    initialValues={{
                        availableTime
                    }}
                    onSubmit={handleUpdatePondData}>
                    <Form>
                        {
                            loading
                                ? <div>Loading...</div>
                                : <>
                                    <SubAvailableTimeEdit />
                                    <div className="my-2">
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

export default AvailableTimeEdit;