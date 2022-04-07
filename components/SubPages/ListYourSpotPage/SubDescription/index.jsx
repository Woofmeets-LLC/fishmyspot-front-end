import { useField } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import SubListingTextarea from '../SubListingTextarea';
import FishDetails from './FishDetails';
import OthersFish from './OthersFish';
import PondTitle from './PondTitle';

const SubDescription = () => {
    const fishes = useSelector(state => state.listSpotContents.fishes);

    // Formik 
    const [fishesField] = useField('fishes');
    const [othersFishField] = useField('others-fish');

    const isAnyDefaultFishSelected = Object.values(fishesField?.value)?.includes(true);
    const isAnyOthersFishFieldValid = othersFishField?.value?.isSelected ? (othersFishField?.value?.names != "") : true;
    return (
        <div>
            <PondTitle label={"Pond Title"} name={"title"} placeholder="Enter your pond title..." />
            <SubListingTextarea label="Describe Pond" name="description" rows={5} placeholder="Please provide a brief description of your pond . This will assist FishMySpot with accurately listing your pond/lake on our website." />
            <h2 className="block text-2xl font-trade-gothic-bold text-primary mb-3">Check all fish that can be found in your pond:</h2>
            <div className="grid grid-cols-2 gap-6 mb-2">
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
            <div className="mb-5">
                {
                    !isAnyDefaultFishSelected && <div className="text-red-500 text-[15px]">Please select at least one fish!</div>
                }
            </div>
            <OthersFish />
            {
                !isAnyOthersFishFieldValid && <div className="text-red-500 text-[15px]">Please input the others fish name!</div>
            }
        </div>
    );
};

export default SubDescription;