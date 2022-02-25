import React from 'react';
import { FormTextarea } from '../../../Common';
import AccessPondImages from './AccessPondImages';

const SubAccessToPond = () => {
    return (
        <div>
            <FormTextarea
                label="Describe how to best access your spot"
                name="ATP-description"
                rows={5}
                placeholder="Please provide a brief description of your pond . This will assist FishMySpot with accurately listing your pond/lake on our website" />
            <AccessPondImages />
        </div>
    );
};

export default SubAccessToPond;