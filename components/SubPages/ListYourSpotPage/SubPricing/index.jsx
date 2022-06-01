import { useField } from "formik";
import React from "react";

const SubPricing = () => {
  const [firstNameField] = useField({ name: "firstName" });
  const [lastNameField] = useField({ name: "lastName" });
  const [fullDayRateField] = useField({ name: "fullDayRate" });
  const [zipCodeField] = useField({ name: "zipCode" });

  return (
    <div className="text-center text-primary">
      {firstNameField?.value && lastNameField?.value ? (
        <h2 className="mb-5 font-trade-gothic-bold text-2xl">
          {`${firstNameField?.value} ${lastNameField?.value}`}, you could make
        </h2>
      ) : (
        <h2 className="mb-5 font-trade-gothic-bold text-2xl">You could make</h2>
      )}
      <h1 className="mb-8 font-trade-gothic-bold text-5xl">
        $ {+fullDayRateField?.value * 7}
      </h1>
      <p className="mb-10 text-sm">
        by sharing your pond for 1 week in {zipCodeField?.value}.
      </p>
    </div>
  );
};

export default SubPricing;
