import { Form, Formik } from 'formik';
import React from 'react';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubAvailableTimeEdit from '../../../components/SubPages/EditPondPage/SubAvailableTimeEdit';
import HomeLayout from '../../../layouts/HomeLayout';

const AvailableTimeEdit = () => {
    // available time data 
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "everyday"];
    const availableTime = days.reduce((prevObj, key) => {
        return {
            ...prevObj,
            [key]: {
                isSelected: false,
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
                    "all-hours": false,
                }
            }
        }
    }, {});

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
                        <SubAvailableTimeEdit />
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default AvailableTimeEdit;