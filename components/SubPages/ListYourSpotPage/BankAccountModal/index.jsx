import axios from 'axios';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import { setCloseBankAccountModal } from '../../../../store/slices/modalsSlice';
import { setStripeAccount } from '../../../../store/slices/stripeAccountSlice';
import { FormInput, FormOption, FormSelect, Modal } from '../../../Common';

const BankAccountModal = () => {
  const [loading, setLoading] = useState(false);
  const { showBankAccountModal } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setCloseBankAccountModal());
  };

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

  const handleSubmit = (values, { resetForm }) => {
    setLoading(true);

    axios
      .post('/api/stripe/bankaccount', {
        ...values,
      })
      .then((data) => {
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
            updateBankAccToRedux();
            setLoading(false);
            return `Your Bank Account Created successfully!`;
          },
          error: (err) => {
            setLoading(false);
            return `Something went wrong. Please try again!`;
          },
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.error('Something went wrong!');
      });

    dispatch(setCloseBankAccountModal());
  };

  return (
    <>
      <Toaster />
      <Modal
        isOpen={showBankAccountModal}
        isOverflowY={false}
        rounded={15}
        onClose={handleClose}
      >
        <div className="mb-3 pt-3 pr-5 text-right">
          <button onClick={handleClose}>
            <FaTimes />
          </button>
        </div>
        <h2 className="text-center font-food-truck text-3xl text-primary xl:text-4xl 2xl:text-[44px] 3xl:text-5xl">
          RECEIVE PAYMENT
        </h2>
        <div className="max-h-[90vh] min-h-[300px] pl-8 pr-6 pt-4 pb-10 sm:w-[350px] smd:w-[420px] md:w-[500px] xl:pl-10 xl:pr-8 2xl:w-[593px] 2xl:pl-14 2xl:pr-12 3xl:pl-20 3xl:pr-[72px] 3xl:pt-6 3xl:pb-10">
          <div className="sidebar max-h-[57vh] min-h-[200px] pr-2">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="md:grid md:grid-cols-2 md:gap-4">
                  <FormSelect label={'Country'} name={'country'} disabled>
                    <FormOption title={'US'} value={'US'} />
                  </FormSelect>
                  <FormSelect label={'Currency'} name={'currency'} disabled>
                    <FormOption title={'USD'} value={'usd'} />
                  </FormSelect>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-4">
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

                <div className="md:grid md:grid-cols-2 md:gap-4">
                  <FormInput label={'Routing Number'} name={'routing_number'} />
                  <FormInput label={'Account Number'} name={'account_number'} />
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
                  {loading ? 'Loading...' : 'Add Bank Account'}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BankAccountModal;
