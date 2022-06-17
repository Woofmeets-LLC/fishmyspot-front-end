import { useField } from 'formik';

const GiftCard = () => {
  const [field, meta, helpers] = useField('giftCode');
  const [couponDiscountField, couponDiscountMeta, couponDiscountHelpers] =
    useField('coupon-discount');

  const handleGiftCode = (e) => {
    if (field.value === 'sanjoy') {
      couponDiscountHelpers.setValue(30.0);
    }
    // helpers.setValue(field?.value);
  };

  return (
    <div className="mb-4 flex overflow-hidden rounded border border-secondary">
      <input
        type="text"
        name="giftCode"
        className="flex-grow bg-transparent p-2 focus:outline-none"
        placeholder="Do you have a Gift card"
        {...field}
      />
      <button
        type="button"
        onClick={handleGiftCode}
        className="bg-secondary py-2 px-4 font-trade-gothic text-white"
      >
        Apply
      </button>
    </div>
  );
};

export default GiftCard;
