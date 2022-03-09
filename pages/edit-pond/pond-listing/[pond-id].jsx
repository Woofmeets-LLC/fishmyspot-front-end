/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubPondListingEdit from '../../../components/SubPages/EditPondPage/SubPondListingEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { getSdk } from '../../../sharetribe/sharetribeSDK';

const PondListingEdit = () => {
    const [pondData, setPondData] = useState({})
    const [loading, setLoading] = useState(false)

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
                    onSubmit={(values, helpers) => {
                        console.log(values);
                    }}>
                    <Form>
                        {
                            loading
                                ? <div>Loading...</div>
                                : <SubPondListingEdit />
                        }
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default PondListingEdit;