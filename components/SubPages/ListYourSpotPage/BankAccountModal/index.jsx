import { Form, Formik } from 'formik';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { setCloseBankAccountModal } from '../../../../store/slices/modalsSlice';
import { FormInput, FormOption, FormSelect, Modal } from '../../../Common';

const BankAccountModal = () => {
  const { showBankAccountModal } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (values, { resetForm }) => {
    console.log({ values });
    dispatch(setCloseBankAccountModal());
  };

  return (
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
        CREATE AN ACCOUNT
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
  );
};

export default BankAccountModal;
