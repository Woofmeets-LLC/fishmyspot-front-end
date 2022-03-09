/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubDescriptionEdit from '../../../components/SubPages/EditPondPage/SubDescriptionEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { getRequest } from '../../../services/requests';
import { getSdk } from '../../../sharetribe/sharetribeSDK';

const DescriptionEdit = () => {
    const [fishes, setFishes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fishesLoading, setFishesLoading] = useState(false);
    const [pondData, setPondData] = useState({});

    const { query } = useRouter();

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
                    onSubmit={(values, helpers) => {

                        const isAnyDefaultFishSelected = Object.values(values?.fishes)?.includes(true);
                        const isAnyOthersFishFieldValid = values["others-fish"]?.isSelected ? (values["others-fish"]?.names != "") : true;

                        isAnyDefaultFishSelected && isAnyOthersFishFieldValid && console.log(values);

                    }}>
                    <Form>
                        {
                            loading
                                ? <div>Loading...</div>
                                : <SubDescriptionEdit fishes={fishes} loading={fishesLoading} />
                        }
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default DescriptionEdit;