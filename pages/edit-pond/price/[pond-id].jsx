import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubPriceEdit from '../../../components/SubPages/EditPondPage/SubPriceEdit';
import HomeLayout from '../../../layouts/HomeLayout';

const PriceEdit = () => {
    return (
        <HomeLayout>
            <EditPondContainer>
                <Formik
                    enableReinitialize
                    initialValues={{
                        halfDayRate: '',
                        fullDayRate: '',
                        zipCode1: '',
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
                        <SubPriceEdit />
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default PriceEdit;