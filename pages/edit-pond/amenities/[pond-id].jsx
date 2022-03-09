/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubAmenitiesEdit from '../../../components/SubPages/EditPondPage/SubAmenitiesEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { getSdk } from '../../../sharetribe/sharetribeSDK';

const AmenitiesEdit = () => {
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

    // console.log(pondData?.publicData?.addOns?.reduce());
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
                            ...pondData?.publicData?.allAmenities?.amenities
                        },
                        otherAmenities: {
                            isSelected: pondData?.publicData?.allAmenities?.others?.length ? true : false,
                            names: pondData?.publicData?.allAmenities?.others?.join(",") || ""
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
                        {
                            loading
                                ? <div>Loading...</div>
                                : <SubAmenitiesEdit />
                        }
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default AmenitiesEdit;