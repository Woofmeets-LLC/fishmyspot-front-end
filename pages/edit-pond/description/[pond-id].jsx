/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubDescriptionEdit from '../../../components/SubPages/EditPondPage/SubDescriptionEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { getRequest } from '../../../services/requests';
import { getSdk } from '../../../sharetribe/sharetribeSDK';
import { UUID } from '../../../types';

const DescriptionEdit = () => {
    const [fishes, setFishes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fishesLoading, setFishesLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [pondData, setPondData] = useState({});

    const { query, push } = useRouter();

    const fishesObject = fishes?.map(fish => fish.name + "_" + fish.id)
        ?.reduce((prevObj, key) => ({ ...prevObj, [key]: false }), {});

    const getFishes = () => {
        setFishesLoading(true)
        getRequest('fishes')
            .then(res => {
                setFishes(res.data);
                setFishesLoading(false);
            })
            .catch(err => {
                setFishesLoading(false);
                // console.log(err);
            })
    }

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

    // Updating fishes image to redux
    useEffect(() => {
        // Getting fishes name
        getFishes();
    }, [])

    useEffect(() => {
        // Getting pond data
        getPondData()
    }, [query]);

    const handleUpdatePondData = (values, helpers) => {
        // Fishes Data
        const tempFishes = Object.keys(values?.fishes)
            ?.filter(fish => values?.fishes[fish])
            ?.map(fish => fish.split("_")[0]);
        const fishesArray = values?.["others-fish"]?.isSelected ? [...tempFishes, "Other"] : tempFishes;
        const allFishes = {
            fishes: values?.fishes,
            othersFish: values?.["others-fish"]?.isSelected
                ? values?.["others-fish"]?.names?.split(",")?.filter(fish => fish !== "")
                : []
        }
        const requestData = {
            description: values.description,
            publicData: {
                fishes: fishesArray,
                allFishes
            }
        }

        // Formik functions
        const isAnyDefaultFishSelected = Object.values(values?.fishes)?.includes(true);
        const isAnyOthersFishFieldValid = values["others-fish"]?.isSelected ? (values["others-fish"]?.names != "") : true;

        // Setting isSubmitting to true
        setIsSubmitting(true);
        // Updating Pond Data
        const updatingPondData = getSdk().ownListings.update({
            id: new UUID(query['pond-id']),
            ...requestData,
        })

        // Checking if fishes selected and fulfilled requirement then it will update pond data
        isAnyDefaultFishSelected &&
            isAnyOthersFishFieldValid &&
            toast.promise(updatingPondData, {
                duration: 3000,
                loading: 'Pond data updating...',
                success: (res) => {
                    console.log({ "toast-res": res });
                    setTimeout(() => push("/own-spot-list"), 2000)
                    setIsSubmitting(false);
                    return `Your pond data updated successfully!`
                },
                error: (err) => {
                    console.log(err);
                    setIsSubmitting(false);
                    return `Pond data updating failed. Please try again!`;
                },
            })
    }
    return (
        <HomeLayout>
            <EditPondContainer>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        description: pondData?.description || '',
                        fishes: { ...fishesObject, ...pondData?.publicData?.allFishes?.fishes },
                        "others-fish": {
                            isSelected: pondData?.publicData?.allFishes?.othersFish?.length > 0 || false,
                            names: pondData?.publicData?.allFishes?.othersFish?.join(",") || ''
                        },
                    }}
                    validationSchema={
                        yup.object({
                            description: yup.string().required("Description is required"),
                        })
                    }
                    onSubmit={handleUpdatePondData}>
                    <Form>
                        {
                            loading
                                ? <div>Loading...</div>
                                : <>
                                    <SubDescriptionEdit fishes={fishes} loading={fishesLoading} />
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

export default DescriptionEdit;