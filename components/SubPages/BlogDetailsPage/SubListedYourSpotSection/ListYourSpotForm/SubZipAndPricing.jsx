import React from "react";
import { FormInput } from "../../../../Common";

const SubZipAndPricing = () => {
  return (
    <div>
      <FormInput name="zipCode" label="Zip Code" />
      <div className="grid grid-cols-2 gap-5 xl:gap-6">
        <FormInput name="halfDayRate" label="Half Day Rate" type="number" />
        <FormInput name="fullDayRate" label="Full Day Rate" type="number" />
      </div>
    </div>
  );
};

export default SubZipAndPricing;
