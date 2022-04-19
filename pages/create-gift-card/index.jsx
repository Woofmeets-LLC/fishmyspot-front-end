import axios from 'axios';
import { useField, Form, FormikProps, Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import {
  FormInput,
  FormOption,
  FormSelect,
  PageHeader,
} from '../../components/Common';
import HomeLayout from '../../layouts/HomeLayout';

const CreateGiftCard = () => {
  const { user } = useSelector((state) => state?.auth);

  const initialValues = {
    amount: '',
    type: '',
    email: '',
  };
  const validationSchema = yup.object().shape({
    amount: yup.string().required('Required'),
    type: yup.string().required('Required'),
    email: yup.string().required('Required'),
  });
  const handleSubmit = (values) => {
    const options = {
      method: 'POST',
      url: 'https://us1.api.voucherify.io/v1/vouchers',
      headers: {
        'X-App-Id': '39d1e85c-83cb-438b-8548-74874f5f802b',
        'X-App-Token': '39fe6d4e-0d3f-4046-bc47-0c547c4362d4',
        'X-Voucherify-Channel': 'Voucherify Documentation',
        'Content-Type': 'application/json',
      },
      data: {
        type: 'GIFT_VOUCHER',
        gift: { amount: values.amount * 100, balance: values.amount * 100 },
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <HomeLayout>
      <div className="bg-[#fbfbfb]">
        <div className="container py-6">
          <PageHeader
            title={'Gift Card'}
            userName={user?.profile?.firstName + ' ' + user?.profile?.lastName}
            userEmail={user?.email}
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white py-5 px-4 sm:p-5 md:p-8 2xl:pl-11 2xl:pt-11 2xl:pr-16 2xl:pb-12 shadow-md rounded-xl mt-4">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <FormInput
                    label={'Amount'}
                    name={'amount'}
                    placeholder={'Enter your amount'}
                  />

                  <FormSelect label={'Select Type'} name={'type'}>
                    <FormOption title="Select Type" value="" />
                    <FormOption title="Myself" value="mySelf" />
                    <FormOption title="Someone" value="someone" />
                  </FormSelect>

                  <FormInput
                    label={'Email'}
                    type={'email'}
                    name={'email'}
                    placeholder={"Enter someone's email"}
                  />

                  <button
                    type="submit"
                    className="bg-secondary text-white font-trade-gothic-bold text-base py-3 px-4 rounded"
                  >
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl text-primary font-food-truck uppercase mb-3">
                My Gift Card
              </h1>
              <div>
                <div
                  className={`flex justify-between items-center text-base xl:text-xl mb-2 border-b border-b-highlight-1`}
                >
                  <p className={`font-trade-gothic-bold text-highlight-1`}>
                    Coupon Code
                  </p>
                  <p className={`font-trade-gothic-bold text-highlight-1`}>
                    Amount
                  </p>
                  <p className="font-trade-gothic-bold text-highlight-1">
                    Send code
                  </p>
                </div>
                <div
                  className={`flex justify-between items-center text-base xl:text-xl mb-2`}
                >
                  <p className={`font-trade-gothic text-highlight-1`}>
                    WELCOME
                  </p>
                  <p className={`font-trade-gothic text-highlight-1`}>$100</p>
                  <button className="bg-secondary text-white font-trade-gothic text-sm p-2 rounded">
                    Send Coupon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CreateGiftCard;
