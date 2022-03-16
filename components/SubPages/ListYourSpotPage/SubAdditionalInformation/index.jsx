import React from 'react';
import SubListingTextarea from '../SubListingTextarea';
import AdditionalInfoPhotos from './AdditionalInfoPhotos';
import WhereDidYouHearAboutUsSection from './WhereDidYouHearAboutUsSection';

const SubAdditionalInformation = () => {
    return (
        <div>
            <SubListingTextarea
                name="additional-information-description"
                placeholder="Add Additional information"
                rows={5}
                label={"Do you have any additional information you would like to include?"} />
            <AdditionalInfoPhotos />
            <WhereDidYouHearAboutUsSection />
        </div>
    );
};

export default SubAdditionalInformation;