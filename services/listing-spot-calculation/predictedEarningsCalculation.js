const HALF_DAY_RATE = 63.63;

/**
 *
 * @param {number}  acre
 * @description
 * This api calculates *full day rate*
 * @returns {string}
 */
export const fullDayEarningEstimation = (acre) => {
  const ratemaps = {
    0: 55,
    1: 60,
    2: 65,
    3: 75,
    4: 80,
    5: 95,
    6: 105,
  };

  // parse acre to number
  const x = +acre;

  const metrics = [
    x <= 1,
    x > 1 && x <= 2,
    x > 2 && x <= 4,
    x > 4 && x <= 6,
    x > 6 && x <= 7,
    x > 7 && x <= 8,
    x > 8,
  ];

  const indexWhereTrue = metrics.findIndex((value) => value);

  return ratemaps[indexWhereTrue];
};

/**
 *
 * @param {number} acre
 * @description
 * Formula - ``(full day rate * half day constant) / 100``
 * @returns {number}
 */
export const halfEarningEstimation = (acre) => {
  return Math.round((fullDayEarningEstimation(+acre) * HALF_DAY_RATE) / 100);
};

/**
 *
 * @param {number} acre
 * @description
 * Formula is: ``full day rate * 7``
 * @returns {number}
 */
export const weeklyEarningEstimation = (acre) => {
  return Math.round(fullDayEarningEstimation(+acre) * 7);
};

/**
 *
<<<<<<< HEAD
=======
 * @param {number} fullDayEarningValue
 * @description
 * Formula is: ``full day rate * 7``
 * @returns {number}
 */
 export const customWeeklyEarningEstimation = (fullDayEarningValue) => {
  return Math.round(+fullDayEarningValue * 7);
};

/**
 *
>>>>>>> 77670b13b2e1ea477986541dee443a901f7fa9f4
 * @param {number} acre
 * @typedef {Object} EstEarnings
 * @property {number} Weekly
 * @property {number} HalfDay
 * @property {number} FullDay
 * @returns {EstEarnings}
 */
export const estimatedEarnings = (acre) => {
  return {
    Weekly: weeklyEarningEstimation(acre),
    HalfDay: halfEarningEstimation(acre),
    FullDay: fullDayEarningEstimation(acre),
  };
};
