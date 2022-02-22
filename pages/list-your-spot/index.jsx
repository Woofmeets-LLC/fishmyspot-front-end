import React from 'react';
import * as yup from 'yup';
import { MultiStepForm } from '../../components/Common';
import FormStep from '../../components/Common/FormElements/MultiStepForm/FormStep';
import PondListing from '../../components/SubPages/ListYourSpotPage/PondListing';
import PondOwnerDetails from '../../components/SubPages/ListYourSpotPage/PondOwnerDetails';
import TopImageCard from '../../components/SubPages/ListYourSpotPage/TopImageCard';
import HomeLayout from '../../layouts/HomeLayout';

const ListYourPond = () => {
    const initialValues = {
        // Pond Listing
        acre: "",
        "stocked-pond": "",
        "catch-requirements": "",
        // Pond Owner Details
        firstName: '',
        lastName: '',
        email: '',
        zipCode: '',
        halfDayRate: '',
        fullDayRate: '',
        // Price
        location: "",
    }
    const validationSchema = {
        pondListing: yup.object({
            acre: yup.string().required("Acre is required"),
            "stocked-pond": yup.string().required("You have to select one of those"),
            "catch-requirements": yup.string().required("You have to select one of those"),
        }),
        pondOwnerDetails: yup.object({
            firstName: yup.string().required("First name is required"),
        }),
    }
    const timelineArray = ["Pond listing", "Pond Owner Details", "Price", "Pond Owner Information", "Available time", "Description", "Access to Pond", "Amenities", "Agreement "];
    return (
        <HomeLayout>
            <TopImageCard />
            <MultiStepForm
                initialValues={initialValues}
                timelineArray={timelineArray}
                successComponent={<div>Success</div>}
            >
                <FormStep validationSchema={validationSchema.pondListing}>
                    <PondListing />
                </FormStep>
                <FormStep validationSchema={validationSchema.pondOwnerDetails}>
                    <PondOwnerDetails />
                </FormStep>
                <FormStep>
                    Step 3
                </FormStep>
                <FormStep>
                    Step 4
                </FormStep>
                <FormStep>
                    Step 5
                </FormStep>
                <FormStep>
                    Step 6
                </FormStep>
                <FormStep>
                    Step 7
                </FormStep>
                <FormStep>
                    Step 8
                </FormStep>
                <FormStep>
                    Step 9
                </FormStep>
                <FormStep>
                    Step 10
                    <div className="">
                        <button>Submit</button>
                    </div>
                </FormStep>
            </MultiStepForm>
        </HomeLayout>
    );
};

export default ListYourPond;