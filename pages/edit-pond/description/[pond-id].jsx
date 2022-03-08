import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubDescriptionEdit from '../../../components/SubPages/EditPondPage/SubDescriptionEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { getRequest } from '../../../services/requests';

const DescriptionEdit = () => {
    const [fishes, setFishes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fishesObject = fishes?.map(fish => fish.name + "_" + fish.id)
        ?.reduce((prevObj, key) => ({ ...prevObj, [key]: false }), {});

    // Updating fishes image to redux
    useEffect(() => {
        getRequest('fishes')
            .then(res => {
                setFishes(res.data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                // console.log(err);
            })
    }, [])
    return (
        <HomeLayout>
            <EditPondContainer>
                <Formik
                    enableReinitialize
                    initialValues={{
                        fishes: fishesObject,
                        "others-fish": {
                            isSelected: false,
                            names: ""
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
                        <SubDescriptionEdit fishes={fishes} loading={loading} />
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default DescriptionEdit;