import React from 'react';
import SubListingTextarea from '../../ListYourSpotPage/SubListingTextarea';
import AllImagesEdit from './AllImagesEdit';

const SubAccessToPondEdit = () => {
    return (
        <>
            <SubListingTextarea
                label="Describe how to best access your spot"
                name="ATP-description"
                rows={5}
                placeholder="Please provide a brief description of your pond . This will assist FishMySpot with accurately listing your pond/lake on our website" />
            <SubListingTextarea
                name="additional-information-description"
                placeholder="Add Additional information"
                rows={5}
                label={"Do you have any additional information you would like to include?"} />
            <AllImagesEdit />
        </>
    );
};

export default SubAccessToPondEdit;