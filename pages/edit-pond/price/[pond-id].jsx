/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubPriceEdit from '../../../components/SubPages/EditPondPage/SubPriceEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { getSdk } from '../../../sharetribe/sharetribeSDK';

const PriceEdit = () => {
    const [pondData, setPondData] = useState({});
    const [loading, setLoading] = useState(false);

    const { query } = useRouter();
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
    }, [query]);
    return (
        <HomeLayout>
            <EditPondContainer>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        halfDayRate: pondData?.publicData?.halfDay || '',
                        fullDayRate: pondData?.publicData?.fullDay || '',
                        zipCode1: pondData?.publicData?.zipCode || '',
                    }}
                    validationSchema={
                        yup.object({
                            halfDayRate: yup.number().required('Required'),
                            fullDayRate: yup.number().required('Required'),
                        })
                    }
                    onSubmit={(values, helpers) => {
                        console.log(values);
                    }}>
                    <Form>
                        {
                            loading
                                ? <div>Loading...</div>
                                : <SubPriceEdit />
                        }
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default PriceEdit;