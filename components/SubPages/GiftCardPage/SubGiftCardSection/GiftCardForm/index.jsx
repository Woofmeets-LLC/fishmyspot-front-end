import axios from 'axios';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
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
  const { giftCardData } = useSelector((state) => state);
  const initialValues = {
    amount: giftCardData?.amount || '',
    recipientEmail: giftCardData?.recipientEmail || '',
    message: giftCardData?.message || '',
  };
  const validationSchema = yup.object({
    amount: yup.string().required('Amount is required'),
    recipientEmail: yup.string().required('Recipient Email is required'),
    message: yup.string().required('Message is required'),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(setGiftCardData(values));
    setStep(step + 1);
  };

  if (!giftCardAmounts && !giftCardAmountError) {
    return (
      <div className="flex h-screen w-screen flex-wrap items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <ClipLoader size={50} color={'#1971ff'} />
          <h2 className="mt-2 w-full text-center font-semibold">Loading...</h2>
        </div>
      </div>
    );
  }
  return (
    <>
      {giftCardAmounts?.length === 0 ? (
        <div className="flex h-full items-center justify-center font-trade-gothic-bold text-3xl text-primary">
          No Gift Card Available
        </div>
      ) : (
        <div>
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
              <FormTextarea
                label={'Message to the Recipient'}
                name={'message'}
              />

              <div className="flex justify-end">
                <button
                  className="rounded bg-secondary py-2 px-6 font-trade-gothic-bold text-lg text-primary 2xl:py-3"
                  type="submit"
                >
                  Next Step
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};

export default GiftCardForm;
