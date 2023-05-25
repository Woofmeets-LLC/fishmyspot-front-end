import React from 'react';
import { WantToSkipForms } from '../../Common';
import GetStartedListing from './GetStartedListing';
import PondOwnersFAQ from './PondOwnersFAQ';
import SignUpNow from './SignUpNow';
import TrustedPartner from './TrustedPartner';
import WhyChooseFMS from './WhyChooseFMS';

const PondOwners = () => {
  return (
    <div className=" font-trade-gothic">
      <TrustedPartner />
      <WhyChooseFMS />
      <GetStartedListing />
      <SignUpNow />
      <PondOwnersFAQ />
      <WantToSkipForms />
    </div>
  );
};

export default PondOwners;
