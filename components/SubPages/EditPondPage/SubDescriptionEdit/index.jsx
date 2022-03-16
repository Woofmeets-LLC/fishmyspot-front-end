import { useField } from 'formik';
import React from 'react';
import FishDetails from '../../ListYourSpotPage/SubDescription/FishDetails';
import OthersFish from '../../ListYourSpotPage/SubDescription/OthersFish';
import SubListingTextarea from '../../ListYourSpotPage/SubListingTextarea';

const SubDescriptionEdit = ({ fishes, loading }) => {

    // Formik 
    const [fishesField] = useField('fishes');
    const [othersFishField] = useField('others-fish');

    const isAnyDefaultFishSelected = Object.values(fishesField?.value)?.includes(true);
    const isAnyOthersFishFieldValid = othersFishField?.value?.isSelected ? (othersFishField?.value?.names != "") : true;
    return (
        <>
            <SubListingTextarea label="Describe Pond" name="description" rows={5} placeholder="Please provide a brief description of your pond . This will assist FishMySpot with accurately listing your pond/lake on our website." />
            <h2 className="block text-2xl font-trade-gothic-bold text-primary mb-3">Check all fish that can be found in your pond:</h2>
            {
                loading
                    ? <div className="text-center">Loading...</div>
                    : <div className="grid grid-cols-2 gap-6 mb-2">
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
            }
            <div className="mb-5">
                {
                    !isAnyDefaultFishSelected && <div className="text-red-500 text-[15px]">Please select at least one fish!</div>
                }
            </div>
            <OthersFish />
            {
                !isAnyOthersFishFieldValid && <div className="text-red-500 text-[15px]">Please input the others fish name!</div>
            }
        </>
    );
};

export default SubDescriptionEdit;