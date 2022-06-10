import axios from 'axios';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import * as yup from 'yup';
import { setGiftCardData } from '../../../../../store/slices/giftCardSlice';
import FormInput from '../../../../Common/FormElements/FormInput';
import FormOption from '../../../../Common/FormElements/FormSelectBox/FormOption';
import FormSelect from '../../../../Common/FormElements/FormSelectBox/FormSelect';
import FormTextarea from '../../../../Common/FormElements/FormTextarea';

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const GiftCardForm = ({ step, setStep }) => {
  const { data: giftCardAmounts, error: giftCardAmountError } = useSWR(
    'https://cms.fishmyspot.com/api/gift-cards',
    fetcher
  );

  const dispatch = useDispatch();
  const initialValues = {
    amount: '',
    recipientEmail: '',
    message: '',
  };
  const validationSchema = yup.object({
    amount: yup.string().required('Amount is required'),
    recipientEmail: yup.string().required('Recipient Email is required'),
    message: yup.string().required('Message is required'),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log({ values });
    dispatch(setGiftCardData(values));
    setStep(step + 1);
  };
  return (
    <div className="">
      <span className="font-trade-gothic text-sm uppercase text-highlight-1 sm:text-base 2xl:text-lg">
        Fishmyspot store
      </span>
      <h2 className="mb-2 font-food-truck text-2xl uppercase text-primary md:text-3xl 2xl:text-5xl">
        FishMySpot GIFT Cards
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <Form>
          <FormSelect label={'Amount'} name={'amount'}>
            <FormOption title="Select Amount" value="" />
            {giftCardAmounts?.map((amount) => (
              <FormOption
                key={amount?.id}
                title={amount?.attributes?.cardAmount}
                value={amount?.attributes?.cardAmount}
              />
            ))}
          </FormSelect>
          <FormInput
            label={'Recipients Email'}
            name={'recipientEmail'}
            type="email"
            placeholder="Enter recipient email"
          />
          <FormTextarea label={'Message to the Recipient'} name={'message'} />

          <button
            className="w-full rounded bg-secondary py-2 px-6 font-trade-gothic-bold text-lg text-primary 2xl:py-3"
            type="submit"
          >
            Next Step
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default GiftCardForm;
