/* eslint-disable react-hooks/exhaustive-deps */
import { useField } from 'formik';
import { useEffect } from 'react';

const Calculation = () => {
  const [dayTypeField] = useField('dayType');
  const [dayRatesField] = useField('dayRates');
  const [experienceField] = useField('experience');
  const [serviceFeeField] = useField('serviceFee');
  const [additionalAnglerField] = useField('additional-guests');
  const [totalField, totalMeta, totalHelpers] = useField('total');
  const [couponDiscountField] = useField('coupon-discount');
  const [appliedDiscount, appliedDiscountMeta, appliedDiscountHelpers] =
    useField('applied-discount');

  const dayRate = +parseFloat(
    +dayRatesField.value?.[dayTypeField.value]
  ).toFixed(2);

  const experienceCost = Object.keys(experienceField.value || {})?.reduce(
    (prevCost, currExpKey) => {
      return +experienceField.value?.[currExpKey]?.checked
        ? +prevCost + +experienceField.value?.[currExpKey]?.price
        : +prevCost;
    },
    0
  );

  const additionalAnglerCost = +experienceField.value?.['Additional Fisherman']
    ?.checked
    ? additionalAnglerField?.value * 10
    : 0;

  const serviceFee = +parseFloat(+serviceFeeField.value).toFixed(2);

  const couponDiscount = couponDiscountField?.value
    ? couponDiscountField?.value
    : 0.0;

  // const total = parseFloat(
  //   +dayRate +
  //     +experienceCost +
  //     +serviceFee +
  //     additionalAnglerCost -
  //     +couponDiscount
  // ).toFixed(2);

  useEffect(() => {
    // totalHelpers.setValue(total);
    const totalWithoutServiceFee =
      dayRate + experienceCost + additionalAnglerCost;

    if (totalWithoutServiceFee >= couponDiscount) {
      appliedDiscountHelpers.setValue(couponDiscount);
      totalHelpers.setValue(
        totalWithoutServiceFee - couponDiscount + serviceFee
      );
    } else {
      appliedDiscountHelpers.setValue(totalWithoutServiceFee);
      totalHelpers.setValue(serviceFee);
    }
  }, [
    dayRate,
    experienceCost,
    serviceFee,
    additionalAnglerCost,
    couponDiscount,
  ]);

  return (
    <div className="my-8 font-trade-gothic text-highlight-1 lg:text-lg 2xl:text-xl">
      <div className="flex justify-between pb-1">
        <p>{dayTypeField.value == 'fullDay' ? 'Full Day' : 'Half Day'}</p>
        <p>${dayRate.toFixed(2)}</p>
      </div>
      {Object?.keys(experienceField.value || {}).length
        ? Object.keys(experienceField.value)
            ?.filter((key) => experienceField.value[key].checked)
            ?.map((key, i) => (
              <div
                key={i}
                className="mb-2 flex flex-1 justify-between space-x-4 2xl:mb-3"
              >
                <div className="space-y-2">
                  <p>
                    {key} {key === 'Additional Fisherman' && 'x1'}
                  </p>
                  {key === 'Additional Fisherman' &&
                    additionalAnglerField?.value !== 0 && (
                      <p>Additional Guests x{additionalAnglerField?.value}</p>
                    )}
                </div>
                <div className="flex-1 space-y-2 text-right">
                  <p>
                    ${parseFloat(+experienceField.value[key].price).toFixed(2)}
                  </p>
                  {key === 'Additional Fisherman' &&
                    additionalAnglerField?.value !== 0 && (
                      <div className="items-between flex flex-1 flex-col">
                        <p className="flex justify-around">
                          <span className="inline-block flex-grow text-left"></span>
                          <span className="inline-block">
                            $
                            {parseFloat(
                              +experienceField.value[key].price *
                                additionalAnglerField?.value
                            ).toFixed(2)}
                          </span>
                        </p>
                      </div>
                    )}
                </div>
              </div>
            ))
        : null}
      <div className="flex justify-between pb-1">
        <p>Service fees</p>
        <p>${serviceFee}</p>
      </div>
      {appliedDiscount.value > 0.0 && (
        <div className="flex justify-between pb-2">
          <p>Coupon Discount</p>
          <p>{`-$${appliedDiscount.value.toFixed(2)}`}</p>
        </div>
      )}
      <div className="flex justify-between border-t border-highlight-1 pt-2 font-trade-gothic-bold text-lg md:pt-3 lg:text-xl 2xl:text-2xl">
        <p>Total</p>
        <p>${totalField.value}</p>
      </div>
    </div>
  );
};

export default Calculation;
