import axios from 'axios';
import { useField } from 'formik';
import { useState } from 'react';

const GiftCard = () => {
  const [field, meta, helpers] = useField('giftCode');
  const [couponDiscountField, couponDiscountMeta, couponDiscountHelpers] =
    useField('coupon-discount');
  const [couponApplied, setCouponApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAvailableBalance, setIsAvailableBalance] = useState(true);

  const handleGiftCode = () => {
    setIsLoading(true);
    axios(
      `https://fish-my-spot-backend-op74rtdzqa-uc.a.run.app/giftcards/${field.value}`
    )
      .then((res) => {
        setIsLoading(false);
        if (res?.data?.amount > 0) {
          setCouponApplied(true);
          couponDiscountHelpers.setValue(res?.data?.amount);
        } else {
          couponDiscountHelpers.setError(true);
        }
      })
      .catch((err) => {
        helpers.setError(true);
        helpers.setValue('', false);
        setIsLoading(false);
        setCouponApplied(false);
      });
  };

  const resetCoupon = () => {
    setCouponApplied(false);
    couponDiscountHelpers.setValue(0);
    helpers.setValue('');
  };

  return (
    <>
      <div
        className={`${
          !meta?.error && 'mb-4'
        } flex overflow-hidden rounded border border-secondary`}
      >
        <input
          type="text"
          name="giftCode"
          disabled={couponApplied}
          className="flex-grow bg-transparent p-2 focus:outline-none"
          placeholder="Do you have a Gift card"
          {...field}
        />

        <div className="flex justify-end">
          <button
            type="button"
            className={`flex items-center justify-center rounded bg-secondary py-2 px-3 font-trade-gothic-bold text-lg text-primary 2xl:py-3`}
            onClick={couponApplied ? resetCoupon : handleGiftCode}
            disabled={isLoading}
          >
            {isLoading && (
              <span className="flex w-7 animate-spin items-center justify-center">
                <span className="h-5 w-5 rounded-full border-t-2 border-b-2 border-white"></span>
              </span>
            )}
            {isLoading ? 'Loading...' : couponApplied ? 'Reset' : 'Apply'}
          </button>
        </div>
      </div>
      {couponDiscountMeta?.error && (
        <div className="mb-4 text-sm text-red-500">No funds available!</div>
      )}
      {meta?.error ? (
        <div className="mt-2 mb-4 text-sm text-red-500">
          Coupon code is not valid!
        </div>
      ) : null}
    </>
  );
};

export default GiftCard;
