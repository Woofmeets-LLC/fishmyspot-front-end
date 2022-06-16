/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import { setStripeAccount } from '../../../../store/slices/stripeAccountSlice';
import { FormInput, FormOption, FormSelect, PageHeader } from '../../../Common';
import BankAccountDetails from './BankAccountDetails';

const SubBankAccountFormSection = () => {
  const [loading, setLoading] = useState(false);
  const [stripeAccountData, setStripeAccountData] = useState({});
  const { stripeAccount, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateBankAccToRedux = () => {
    getSdk()
      .stripeAccount.fetch()
      .then((res) => {
        const stripeData = res?.data?.data;
        const isTransferActivated =
          stripeData?.attributes?.stripeAccountData?.capabilities
            ?.card_payments == 'active' ||
          stripeData?.attributes?.stripeAccountData?.capabilities?.transfers ==
            'active';

        dispatch(
          setStripeAccount({
            ...stripeData,
            isTransferActivated,
            loaded: true,
          })
        );
      })
      .catch((error) => {
        dispatch(
          setStripeAccount({
            attributes: null,
            id: null,
            type: null,
            isTransferActivated: null,
            loaded: true,
          })
        );
      });
  };

  useEffect(() => {
    if (auth?.user?.profile?.publicData?.account_type == 'owner') {
      updateBankAccToRedux();
    }
  }, [auth?.user?.profile?.publicData?.account_type]);

  const initialValues = {
    country: 'US',
    currency: 'usd',
    account_holder_name: '',
    account_holder_type: '',
    routing_number: '',
    account_number: '',
  };

  const validationSchema = yup.object().shape({
    country: yup.string().required('Required'),
    currency: yup.string().required('Required'),
    account_holder_name: yup.string().required('Required'),
    account_holder_type: yup.string().required('Required'),
    routing_number: yup.string().required('Required'),
    account_number: yup.string().required('Required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);

    axios
      .post('/api/stripe/bankaccount', {
        ...values,
      })
      .then((data) => {
        if (stripeAccount?.attributes?.stripeAccountId) {
          const updateBankAccount = getSdk().stripeAccount.update(
            {
              bankAccountToken: data?.data?.id,
            },
            {
              expand: true,
            }
          );

          toast.promise(updateBankAccount, {
            duration: 3000,
            loading: 'Bank Account Updating...',
            success: (res) => {
              updateBankAccToRedux();
              setLoading(false);
              return `Your Bank Account Updated successfully!`;
            },
            error: (err) => {
              setLoading(false);
              return `Something went wrong. Please try again!`;
            },
          });
        } else {
          const createBankAccount = getSdk().stripeAccount.create(
            {
              country: values?.country,
              bankAccountToken: data?.data?.id,
              requestedCapabilities: ['transfers', 'card_payments'],
            },
            {
              expand: true,
            }
          );
          toast.promise(createBankAccount, {
            duration: 3000,
            loading: 'Bank Account Creating...',
            success: (res) => {
              setLoading(false);
              return `Your Bank Account Created successfully!`;
            },
            error: (err) => {
              setLoading(false);
              return `Something went wrong. Please try again!`;
            },
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error('Something went wrong!');
      });

    // resetForm({ values: '' });
  };

  return (
    <>
      <Toaster />
      <div className="bg-[#fcfcfc]">
        <div className="container py-10">
          <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <PageHeader
              title={'Bank Account'}
              userName={
                auth?.user?.profile?.firstName +
                ' ' +
                auth?.user?.profile?.lastName
              }
              userEmail={auth?.user?.email}
            />
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:gap-5">
            <div className="col-span-7">
              <div className="rounded-xl bg-white py-5 px-4 shadow-md sm:p-5 2xl:pl-11 2xl:pt-11 2xl:pr-16 2xl:pb-12">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  enableReinitialize={true}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <FormSelect label={'Country'} name={'country'} disabled>
                        <FormOption title={'US'} value={'US'} />
                      </FormSelect>
                      <FormSelect label={'Currency'} name={'currency'} disabled>
                        <FormOption title={'USD'} value={'usd'} />
                      </FormSelect>
                    </div>
                    <div className="sm:grid sm:grid-cols-2 sm:gap-3 md:gap-4">
                      <FormInput
                        label={'Account Holder Name'}
                        name={'account_holder_name'}
                      />

                      <FormSelect
                        label={'Account Holder Type'}
                        name={'account_holder_type'}
                      >
                        <FormOption title={'Select Type'} value={''} />
                        <FormOption title={'Individual'} value={'individual'} />
                        <FormOption title={'Company'} value={'company'} />
                      </FormSelect>
                    </div>

                    <div className="sm:grid sm:grid-cols-2 sm:gap-3 md:gap-4">
                      <FormInput
                        label={'Routing Number'}
                        name={'routing_number'}
                      />
                      <FormInput
                        label={'Account Number'}
                        name={'account_number'}
                      />
                    </div>

                    <button
                      type={loading ? 'button' : 'submit'}
                      disabled={loading}
                      className={`mt-4 flex w-full items-center justify-center rounded bg-secondary py-2 px-3 font-trade-gothic-bold text-lg text-primary 2xl:py-3`}
                    >
                      {loading && (
                        <span className="flex w-7 animate-spin items-center justify-center">
                          <span className="h-5 w-5 rounded-full border-t-2 border-b-2 border-white"></span>
                        </span>
                      )}
                      {loading
                        ? 'Loading...'
                        : stripeAccount?.attributes?.stripeAccountId
                        ? 'Update Account'
                        : 'Add Bank Account'}
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
            {stripeAccount?.attributes?.stripeAccountData?.external_accounts
              ?.data.length > 0 && (
              <BankAccountDetails stripeAccount={stripeAccount} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubBankAccountFormSection;
