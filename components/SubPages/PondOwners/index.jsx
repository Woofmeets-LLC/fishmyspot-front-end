import React from 'react';
import { useSelector } from 'react-redux';
import { WantToSkipForms } from '../../Common';
import GetStartedListing from './GetStartedListing';
import PondOwnersFAQ from './PondOwnersFAQ';
import SignUpNow from './SignUpNow';
import TrustedPartner from './TrustedPartner';
import VideoSection from './VideoSection';
import WhyChooseFMS from './WhyChooseFMS';

const PondOwners = () => {
  // Redux
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className=" font-trade-gothic">
      <TrustedPartner />
      <WhyChooseFMS isLoggedIn={isLoggedIn} />
      <GetStartedListing isLoggedIn={isLoggedIn} />
      {!isLoggedIn ? <SignUpNow /> : null}
      <PondOwnersFAQ />
      <WantToSkipForms />
      <VideoSection />
    </div>
  );
};

export default PondOwners;
