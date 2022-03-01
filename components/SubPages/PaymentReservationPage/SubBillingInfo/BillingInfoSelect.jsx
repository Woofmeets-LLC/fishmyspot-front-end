import { useField } from 'formik';
import React from 'react';

const BillingInfoSelect = () => {
  const [field, meta, helpers] = useField('country');
  return (
    <div>
      <label htmlFor="country">Country</label>
      <select {...field}>
        <option value="usa">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="canada">Canada</option>
      </select>
      {
        meta.touched && meta.error &&
        <div className="text-red-500">
          {meta.error}
        </div>
      }
    </div>
  );
};

export default BillingInfoSelect;