/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubAccessToPondEdit from '../../../components/SubPages/EditPondPage/SubAccessToPondEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { listingImagesUpload } from '../../../services/listing-spot-data-organiging/listingImageUpload';
import { getSdk } from '../../../sharetribe/sharetribeSDK';

const AccessToPondEdit = () => {
    const [pondData, setPondData] = useState({});
    const [loading, setLoading] = useState(false);

    const { query } = useRouter();
    const getPondData = () => {
        setLoading(true)
        getSdk().ownListings.show({ id: query['pond-id'], include: ["images"], })
            .then(res => {
                setLoading(false)
                const data = res?.data?.data;
                const included = res?.data?.included;
                const formattedData = {
                    ...data,
                    relationships: {
                        ...data.relationships,
                        images: {
                            data: data?.relationships?.images?.data?.map(image => {
                                return included?.find(included => included.id.uuid === image.id.uuid);
                            })
                        }
                    }
                }
                setPondData(formattedData);
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
                    enableReinitialize
                    initialValues={{
                        "ATP-description": pondData?.attributes?.publicData?.['access-to-pond-description'] || '',
                        "ATP-images-file": [],
                        "ATP-images-base64": pondData?.relationships?.images?.data?.map(image => image?.attributes?.variants?.default?.url) || [],
                        "additional-information-description": pondData?.attributes?.publicData?.['additional-information-description'] || '',
                    }}
                    validationSchema={
                        yup.object({
                            "ATP-description": yup.string().required("Description is required"),
                            "ATP-images-base64": yup.array().min(2, 'You must upload at least 2 photos!'),
                        })
                    }
                    onSubmit={async (values, helpers) => {
                        const existingImages = pondData?.relationships?.images?.data
                            ?.filter(image => values?.["ATP-images-base64"]?.includes(image?.attributes?.variants?.default?.url))
                            ?.map(image => image.id)

                        const uploadedImages = await listingImagesUpload(values?.["ATP-images-file"]);
                        const newImagesIds = uploadedImages;
                        const requestData = {
                            images: [...existingImages],
                        }
                        console.log({ requestData, newImagesIds, files: values?.["ATP-images-file"] });

                    }}>
                    <Form>
                        {
                            loading
                                ? <div>Loading...</div>
                                : <SubAccessToPondEdit />
                        }
                    </Form>
                </Formik>
            </EditPondContainer>
        </HomeLayout>
    );
};

export default AccessToPondEdit;