import { Form, Formik } from 'formik';
import React from 'react';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubAmenitiesEdit from '../../../components/SubPages/EditPondPage/SubAmenitiesEdit';
import HomeLayout from '../../../layouts/HomeLayout';

const AmenitiesEdit = () => {
    return (
        <HomeLayout>
            <EditPondContainer>

                <Formik
                    enableReinitialize
                    initialValues={{
                        amenities: {
                            "Canoe/kayak": false,
                            "Pavilion or Other Shelter": false,
                            "Grill": false,
                            "Restrooms": false,
                            "Pet Friendly": false,
                            "Picnic Tables": false,
                            "Dock": false,
                        },
                        otherAmenities: {
                            isSelected: false,
                            names: ""
                        },
                        addOns: {
                            "pond-trawler-or-metal-boat": {
                                checked: false,
                                title: "Pond Trawler/Metal Boat",
                                price: 20
                            },
                            "campsite": {
                                checked: false,
                                title: "Campsite",
                                price: 20
                            },
                        },
                        otherAddOns: {
                            isSelected: false,
                            services: [],
                        },
                    }}
                    onSubmit={(values, helpers) => {
                        console.log(values);
                    }}>
                    <Form>
                        <SubAmenitiesEdit />
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default AmenitiesEdit;