import React from "react";
import LetsListedYourSpot from "./LetsListedYourSpot";
import ListYourSpotForm from "./ListYourSpotForm";

const SubListedYourSpotSection = () => {
  return (
    <section>
      <div className="lg:grid lg:grid-cols-2">
        <LetsListedYourSpot />
        <ListYourSpotForm />
      </div>
    </section>
  );
};

export default SubListedYourSpotSection;
