import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaTelegramPlane, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import { FormInput, FormOption, FormSelect, Modal } from '../../../Common';

const HowDidHearModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useSelector((state) => state?.auth);

  const handleClose = async () => {
    getSdk().currentUser.updateProfile({
      publicData: {
        showReferralModal: false,
      },
    });
    setIsOpen(false);
  };

  const handleSubmit = (values) => {
    setIsLoading(true);

    const referralData = {
      name: `${user?.profile?.firstName} ${user?.profile?.lastName}`,
      email: user?.email,
      source: values?.media == 'Other' ? values?.otherMedia : values?.media,
    };

    axios
      .post('https://cms.fishmyspot.com/api/onboarding-sources', {
        data: referralData,
      })
      .then(async (res) => {
        toast.success('Referral source submitted successfully');
        setIsLoading(false);

        handleClose();
      })
      .catch((err) => {
        console.log({ err });
        setIsLoading(false);
      });
  };
  return (
    <Modal
      isOpen={isOpen && user?.profile?.publicData?.showReferralModal}
      isOverflowY={false}
      rounded={15}
      onClose={() => setIsOpen(false)}
    >
      <div className="mb-3 pt-3 pr-5 text-right">
        <button onClick={handleClose}>
          <FaTimes />
        </button>
      </div>
      <h2 className="text-center font-food-truck text-3xl text-primary xl:text-4xl 2xl:text-[44px] 3xl:text-5xl">
        REFERRAL SOURCE
      </h2>
      <div className=" pl-8 pr-6 pt-4 pb-10 sm:w-[350px] smd:w-[420px] md:w-[500px] xl:pl-10 xl:pr-8 2xl:w-[593px] 2xl:pl-14 2xl:pr-12 3xl:pl-20 3xl:pr-[72px] 3xl:pt-6 3xl:pb-10">
        <div className="">
          {/* Formik form  */}
          <Formik
            initialValues={{
              media: '',
              otherMedia: '',
            }}
            validationSchema={yup.object().shape({
              media: yup.string().required('Source is required'),
              otherMedia: yup
                .string()
                .test(
                  'otherMedia',
                  'Please specify the source',
                  (val, context) => {
                    console.log({ context, val });
                    return context?.parent?.media == 'Other' && !val
                      ? false
                      : true;
                  }
                ),
            })}
            enableReinitialize={true}
            onSubmit={handleSubmit}
          >
            {(formProps) => {
              return (
                <Form>
                  <FormSelect label="How did you hear about us?" name="media">
                    <FormOption title="Select option" value="" />
                    <FormOption title="Social Media" value="Social Media" />
                    <FormOption title="Radio" value="Radio" />
                    <FormOption
                      title="Friends and Family"
                      value="Friends and Family"
                    />
                    <FormOption title="Online" value="Online" />
                    <FormOption title="Other" value="Other" />
                  </FormSelect>
                  {formProps?.values?.media == 'Other' ? (
                    <FormInput name="otherMedia" label="Please specify" />
                  ) : null}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`mt-3 inline-flex items-center gap-2 rounded-full  bg-secondary px-6 py-2 font-trade-gothic-bold`}
                    >
                      {isLoading ? (
                        <>
                          <span className="flex w-7 animate-spin items-center justify-center">
                            <span className="h-5 w-5 rounded-full border-t-2 border-b-2 border-primary"></span>
                          </span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <FaTelegramPlane /> Submit{' '}
                        </>
                      )}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default HowDidHearModal;
