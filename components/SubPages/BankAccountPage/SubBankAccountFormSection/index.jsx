import axios from 'axios';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { getSdk } from '../../../../sharetribe/sharetribeSDK';
import { FormInput, FormOption, FormSelect } from '../../../Common';

const SubBankAccountFormSection = () => {
  const [loading, setLoading] = useState(false);
  const [stripeAccountData, setStripeAccountData] = useState({});
  const { stripeAccount } = useSelector((state) => state);

  useEffect(() => {
    getSdk()
      .stripeAccount.fetch()
      .then((res) => {
        // res.data
        setStripeAccountData(res?.data?.data?.attributes?.stripeAccountData);
      });
  }, []);

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
    console.log({ values });
    axios
      .post('/api/stripe/bankaccount', {
        ...values,
      })
      .then((data) => {
        if (stripeAccount?.attributes?.stripeAccountId) {
          getSdk()
            .stripeAccount.update(
              {
                bankAccountToken: data?.data?.id,
              },
              {
                expand: true,
              }
            )
            .then((res) => {
              // res.data
              console.log(res.data);
            });
        } else {
        }
      });

    // resetForm({ values: '' });
  };

  return (
    <div className="bg-[#fcfcfc]">
      <div className="container py-10">
        <h1 className="font-food-truck text-3xl uppercase text-primary">
          Bank Account
        </h1>
        <div className="rounded-xl bg-white py-5 px-4 shadow-md sm:p-5 md:w-[600px] md:p-8 lg:w-[700px] 2xl:w-[746px] 2xl:pl-11 2xl:pt-11 2xl:pr-16 2xl:pb-12">
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
              <div className="grid grid-cols-2 gap-3 md:gap-4">
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

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <FormInput label={'Routing Number'} name={'routing_number'} />
                <FormInput label={'Account Number'} name={'account_number'} />
              </div>

              <button
                type={loading ? 'button' : 'submit'}
                className={`mt-4 flex w-full items-center justify-center rounded bg-secondary py-2 px-3 font-trade-gothic-bold text-lg text-primary 2xl:py-3`}
              >
                {loading && (
                  <span className="flex w-7 animate-spin items-center justify-center">
                    <span className="h-5 w-5 rounded-full border-t-2 border-b-2 border-white"></span>
                  </span>
                )}
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SubBankAccountFormSection;
