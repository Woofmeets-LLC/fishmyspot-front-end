import { useField } from 'formik';
import { useState } from 'react';

const GiftCard = () => {
  const [field, meta, helpers] = useField('giftCode');
  const [couponDiscountField, couponDiscountMeta, couponDiscountHelpers] =
    useField('coupon-discount');
  const [couponApplied, setCouponApplied] = useState(false);

  const handleGiftCode = () => {
    fetch(`http://localhost:5000/giftcards/${field.value}`)
      .then((res) => res.json())
      .then((res) => {
        setCouponApplied(true);
        couponDiscountHelpers.setValue(res.amount);
      });

    // helpers.setValue(field?.value);
  };

  const resetCoupon = () => {
    setCouponApplied(false);
    couponDiscountHelpers.setValue(0);
    helpers.setValue('');
  };

  return (
    <div className="mb-4 flex overflow-hidden rounded border border-secondary">
      <input
        type="text"
        name="giftCode"
        disabled={couponApplied}
        className="flex-grow bg-transparent p-2 focus:outline-none"
        placeholder="Do you have a Gift card"
        {...field}
      />
      <button
        type="button"
        onClick={couponApplied ? resetCoupon : handleGiftCode}
        className="bg-secondary py-2 px-4 font-trade-gothic text-white"
      >
        {couponApplied ? 'Reset' : 'Apply'}
      </button>
    </div>
  );
};

export default GiftCard;
