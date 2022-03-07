import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubPondListingEdit from '../../../components/SubPages/EditPondPage/SubPondListingEdit';
import HomeLayout from '../../../layouts/HomeLayout';

const PondListingEdit = () => {
    return (
        <HomeLayout>
            <EditPondContainer>
                <Formik
                    initialValues={{
                        acre: '',
                        'stocked-pond': '',
                        "catch-requirements": '',
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
                        <SubPondListingEdit />
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default PondListingEdit;