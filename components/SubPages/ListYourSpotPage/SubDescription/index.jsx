import React from 'react';
import { useSelector } from 'react-redux';
import SubListingTextarea from '../SubListingTextarea';
import FishDetails from './FishDetails';
import OthersFish from './OthersFish';

const SubDescription = () => {
    const fishes = useSelector(state => state.listSpotContents.fishes);
    return (
        <div>
            <SubListingTextarea label="Describe Pond" name="description" rows={5} placeholder="Please provide a brief description of your pond . This will assist FishMySpot with accurately listing your pond/lake on our website." />
            <h2 className="block text-2xl font-trade-gothic-bold text-primary mb-3">Check all fish that can be found in your pond:</h2>
            <div className="grid grid-cols-2 gap-6 mb-5">
                {
                    fishes?.map(fish => {
                        const image = fish?.image?.additional?.sm?.url ? fish?.image?.additional?.sm?.url : fish?.image?.url
                        return <FishDetails
                            key={fish?.id}
                            label={fish?.name}
                            name={`fishes[${fish?.name + "_" + fish?.id}]`}
                            image={image} />
                    })
                }
            </div>
            <OthersFish />
        </div>
    );
};

export default SubDescription;