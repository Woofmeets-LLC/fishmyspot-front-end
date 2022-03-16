import React, { useState } from 'react';
import AboutFishMySpotContent from './AboutFishMySpotContent';
import ReportingIssue from './Safety/ReportingIssue';
import SafetyConcerns from './Safety/SafetyConcerns';
import SafetyTipsAndGuidelines from './Safety/SafetyTipsAndGuidelines';
import TravelRestriction from './Safety/TravelRestriction';
import LegalResources from './TermsAndPolicies/LegalResources';
import MoneyTransmission from './TermsAndPolicies/MoneyTransmission';
import PaymentTerms from './TermsAndPolicies/PaymentTerms';
import PrivacyPolicy from './TermsAndPolicies/PrivacyPolicy';
import TermsOfService from './TermsAndPolicies/TermsOfService';

const SubContentArea = ({ isShowContent }) => {
  return (
    <>
      <AboutFishMySpotContent />
      {
        isShowContent === "safety1" && <SafetyConcerns />
      }
      {
        isShowContent === "safety2" && <SafetyTipsAndGuidelines />
      }
      {
        isShowContent === "safety3" && <ReportingIssue />
      }
      {
        isShowContent === "safety4" && <TravelRestriction />
      }
      {
        isShowContent === "termsAndPolicy1" && <PrivacyPolicy />
      }
      {
        isShowContent === "termsAndPolicy2" && <PaymentTerms />
      }
      {
        isShowContent === "termsAndPolicy3" && <TermsOfService />
      }
      {
        isShowContent === "termsAndPolicy4" && <LegalResources />
      }
      {
        isShowContent === "termsAndPolicy5" && <MoneyTransmission />
      }
    </>
  );
};

export default SubContentArea;