/* eslint-disable react-hooks/exhaustive-deps */
import { useField } from 'formik';
import React, { useEffect } from 'react';

const Calculation = () => {
  const [dayTypeField] = useField('dayType');
  const [dayRatesField] = useField('dayRates');
  const [experienceField] = useField('experience');
  const [serviceFeeField] = useField('serviceFee');
  const [additionalAnglerField] = useField('additional-guests');
  const [totalField, totalMeta, totalHelpers] = useField('total');

  const dayRate = parseFloat(
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

  const serviceFee = parseFloat(+serviceFeeField.value).toFixed(2);
  const total = parseFloat(
    +dayRate + +experienceCost + +serviceFee + additionalAnglerCost
  ).toFixed(2);

  useEffect(() => {
    totalHelpers.setValue(total);
  }, [total]);
  return (
    <div className="my-8 font-trade-gothic text-highlight-1 lg:text-lg 2xl:text-xl">
      <div className="mb-2 flex justify-between 2xl:mb-3">
        <p>{dayTypeField.value == 'fullDay' ? 'Full Day' : 'Half Day'}</p>
        <p>${dayRate}</p>
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
      <div className="flex justify-between border-b border-highlight-1 pb-3 2xl:pb-4">
        <p>Service fees</p>
        <p>${serviceFee}</p>
      </div>
      <div className="flex justify-between pt-2 font-trade-gothic-bold text-lg md:pt-3 lg:text-xl 2xl:text-2xl">
        <p>Total</p>
        <p>${total}</p>
      </div>
    </div>
  );
};

export default Calculation;
