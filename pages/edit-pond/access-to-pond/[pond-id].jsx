import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubAccessToPondEdit from '../../../components/SubPages/EditPondPage/SubAccessToPondEdit';
import HomeLayout from '../../../layouts/HomeLayout';

const AccessToPondEdit = () => {
    return (
        <HomeLayout>
            <EditPondContainer>
                <Formik
                    enableReinitialize
                    initialValues={{
                        "ATP-description": '',
                        "ATP-images-file": [],
                        "ATP-images-base64": [],
                        "additional-information-description": '',
                    }}
                    validationSchema={
                        yup.object({
                            "ATP-description": yup.string().required("Description is required"),
                            "ATP-images-file": yup.array().min(2, 'You must upload at least 2 photos!'),
                        })
                    }
                    onSubmit={(values, helpers) => {
                        console.log(values);
                    }}>
                    <Form>
                        <SubAccessToPondEdit />
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default AccessToPondEdit;