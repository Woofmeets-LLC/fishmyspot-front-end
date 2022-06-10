import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { setGiftCardData } from '../../../../../store/slices/giftCardSlice';
import FormInput from '../../../../Common/FormElements/FormInput';
import FormOption from '../../../../Common/FormElements/FormSelectBox/FormOption';
import FormSelect from '../../../../Common/FormElements/FormSelectBox/FormSelect';
import FormTextarea from '../../../../Common/FormElements/FormTextarea';

const GiftCardForm = ({ step, setStep }) => {
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
      <span className="font-trade-gothic text-lg uppercase text-highlight-1">
        Fishmyspot store
      </span>
      <h2 className="mb-2 font-food-truck text-5xl uppercase text-primary">
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
            <FormOption title="Select Type" value="" />
            <FormOption title="35" value="35" />
            <FormOption title="55" value="55" />
          </FormSelect>
          <FormInput
            label={'Recipients Email'}
            name={'recipientEmail'}
            type="email"
            placeholder="Enter recipient email"
          />
          <FormTextarea label={'Message to the Recipient'} name={'message'} />

          <button
            className="w-full rounded bg-secondary py-3 px-6 font-trade-gothic-bold text-lg text-primary"
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
