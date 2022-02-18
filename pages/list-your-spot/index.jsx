import React from 'react';
import { MultiStepForm } from '../../components/Common';
import FormStep from '../../components/Common/FormElements/MultiStepForm/FormStep';
import TopImageCard from '../../components/SubPages/ListYourSpotPage/TopImageCard';
import HomeLayout from '../../layouts/HomeLayout';

const ListYourPond = () => {
    const initialValues = {
        name: "",
        location: "",
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
                <FormStep>
                    Step 1
                </FormStep>
                <FormStep>
                    Step 2
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