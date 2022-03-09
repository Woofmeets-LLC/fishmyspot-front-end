/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubAvailableTimeEdit from '../../../components/SubPages/EditPondPage/SubAvailableTimeEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { getEditAvailableTimeData } from '../../../services/listing-spot-data-organiging/availableTimeFormatting';
import { getSdk } from '../../../sharetribe/sharetribeSDK';

const AvailableTimeEdit = () => {
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
    }, [query])

    const availableTime = getEditAvailableTimeData(pondData);


    return (
        <HomeLayout>
            <EditPondContainer>
                <Formik
                    enableReinitialize
                    initialValues={{
                        availableTime
                    }}
                    onSubmit={(values, helpers) => {
                        const isSelectedAny = Object.keys(values?.availableTime)?.map(key => (values?.availableTime[key]?.isSelected))?.includes(true);
                        if (isSelectedAny) {
                            const isAnyNotSelectedHours = Object.keys(values?.availableTime)
                                ?.filter(key => values?.availableTime[key]?.isSelected)
                                ?.map(key => Object.values(values?.availableTime[key]?.hours)?.includes(true))
                                ?.includes(false);

                            !isAnyNotSelectedHours && console.log(values);
                        }

                    }}>
                    <Form>
                        {
                            loading
                                ? <div>Loading...</div>
                                : <SubAvailableTimeEdit />
                        }
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default AvailableTimeEdit;