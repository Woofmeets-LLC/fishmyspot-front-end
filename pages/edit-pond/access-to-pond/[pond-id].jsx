/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import EditPondContainer from '../../../components/SubPages/EditPondPage/EditPondContainer';
import SubAccessToPondEdit from '../../../components/SubPages/EditPondPage/SubAccessToPondEdit';
import HomeLayout from '../../../layouts/HomeLayout';
import { listingImagesUpload } from '../../../services/listing-spot-data-organiging/listingImageUpload';
import { getSdk } from '../../../sharetribe/sharetribeSDK';
import { UUID } from '../../../types';

const AccessToPondEdit = () => {
  const [pondData, setPondData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { query, push } = useRouter();
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

  const handleUpdatePondData = async (values, helpers) => {
    const existingImages = pondData?.relationships?.images?.data
      ?.filter(image => values?.["ATP-images-base64"]?.includes(image?.attributes?.variants?.default?.url))
      ?.map(image => image.id)

    const imageFilesForUpload = values?.["ATP-images-file"]?.filter(photo => typeof (photo) != 'string');
    const uploadedImages = await listingImagesUpload(imageFilesForUpload);
    const newImagesIds = uploadedImages?.success ? uploadedImages?.uuids : [];

    const requestData = {
      images: [...existingImages, ...newImagesIds],
      publicData: {
        "access-to-pond-description": values?.["ATP-description"],
        "additional-information-description": values?.["additional-information-description"],
      }
    }

    setIsSubmitting(true);

    const updatingPondData = getSdk().ownListings.update({
      id: new UUID(query['pond-id']),
      ...requestData,
    })

    toast.promise(updatingPondData, {
      duration: 3000,
      loading: 'Pond listing data updating...',
      success: (res) => {
        console.log({ "toast-res": res });
        setTimeout(() => push("/own-spot-list"), 2000)
        setIsSubmitting(false);
        return `Your pond updated successfully!`
      },
      error: (err) => {
        console.log(err);
        setIsSubmitting(false);
        return `Pond updating failed. Please try again!`;
      },
    })

  }

  return (
    <HomeLayout>
      <EditPondContainer>
        <Formik
          enableReinitialize
          initialValues={{
            "ATP-description": pondData?.attributes?.publicData?.['access-to-pond-description'] || '',
            "ATP-images-file": pondData?.relationships?.images?.data?.map(image => image?.attributes?.variants?.default?.url) || [],
            "ATP-images-base64": pondData?.relationships?.images?.data?.map(image => image?.attributes?.variants?.default?.url) || [],
            "additional-information-description": pondData?.attributes?.publicData?.['additional-information-description'] || '',
          }}
          validationSchema={
            yup.object({
              "ATP-description": yup.string().required("Description is required"),
              "ATP-images-base64": yup.array().min(2, 'You must upload at least 2 photos!'),
            })
          }
          onSubmit={handleUpdatePondData}>
          <Form>
            {
              loading
                ? <div>Loading...</div>
                : <>
                  <SubAccessToPondEdit />
                  <div className="my-2 text-right">
                    <button
                      type={isSubmitting ? "button" : "submit"}
                      className="flex justify-center items-center bg-secondary text-white font-trade-gothic-bold rounded py-2 px-8 ml-auto">
                      {
                        isSubmitting &&
                        <span className="animate-spin flex justify-center items-center w-7">
                          <span className="rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                        </span>
                      }
                      {
                        isSubmitting
                          ? "Loading..."
                          : `Update`
                      }

                    </button>
                  </div>
                </>
            }
          </Form>
        </Formik>
      </EditPondContainer>
    </HomeLayout>
  );
};

export default AccessToPondEdit;
