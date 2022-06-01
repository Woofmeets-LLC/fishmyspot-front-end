import { useState } from 'react';
import { listingDataOrganizing } from '../../../../../services/listing-spot-data-organiging/listingDataFormatting';
import { BackBtn, MultiStepForm, NextBtn } from '../../../../Common';
import FormStep from '../../../../Common/FormElements/MultiStepForm/FormStep';
import SubPondListing from '../../../ListYourSpotPage/SubPondListing';
import SubPricing from '../../../ListYourSpotPage/SubPricing';
import SpotMultiStepForm from './SpotMultiStepForm';
import SubZipAndPricing from './SubZipAndPricing';
import * as yup from 'yup';
import StepHeader from './StepHeader';

const ListYourSpotForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    // Pond Listing
    acre: '',
    'stocked-pond': '',
    'catch-requirements': '',
    // Pond Owner Details
    zipCode: '',
    halfDayRate: '',
    fullDayRate: '',
  };
  const validation = {
    pondListing: yup.object({
      acre: yup.string().required('Acre is required'),
      'stocked-pond': yup.string().required('You have to select one of those'),
      'catch-requirements': yup
        .string()
        .required('You have to select one of those'),
    }),
    pondOwnerDetails: yup.object({
      zipCode: yup.string().required('Zip code is required'),
      halfDayRate: yup.string().required('Required!'),
      fullDayRate: yup.string().required('Required!'),
    }),
  };
  const timelineArray = ['Pond listing', 'Pond Owner Details', 'Price'];
  const stepControllerBtns = [
    {},
    {},
    {
      // back: <BackBtn text="Go back" />,
      next: <NextBtn text="List My Spot" />,
    },
  ];

  return (
    <SpotMultiStepForm
      initialValues={initialValues}
      stepControllerBtns={stepControllerBtns}
      // onSubmit={handleSubmit}
      successComponent={<div>Success</div>}
      timelineArray={timelineArray}
    >
      <FormStep validationSchema={validation.pondListing}>
        <StepHeader step={1} />
        <SubPondListing />
      </FormStep>
      <FormStep validationSchema={validation.pondOwnerDetails}>
        <StepHeader step={2} />
        <SubZipAndPricing />
      </FormStep>
      <FormStep>
        <StepHeader step={3} />
        <SubPricing />
      </FormStep>
    </SpotMultiStepForm>
  );
};

export default ListYourSpotForm;
