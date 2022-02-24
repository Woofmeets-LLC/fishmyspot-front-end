import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { BackBtn, MultiStepForm, NextBtn } from '../../components/Common';
import FormStep from '../../components/Common/FormElements/MultiStepForm/FormStep';
import SubAvailableTime from '../../components/SubPages/ListYourSpotPage/SubAvailableTime';
import SubPondListing from '../../components/SubPages/ListYourSpotPage/SubPondListing';
import SubPondOwnerDetails from '../../components/SubPages/ListYourSpotPage/SubPondOwnerDetails';
import SubPondOwnerInfo from '../../components/SubPages/ListYourSpotPage/SubPondOwnerInfo';
import SubPricing from '../../components/SubPages/ListYourSpotPage/SubPricing';
import TopImageCard from '../../components/SubPages/ListYourSpotPage/TopImageCard';
import HomeLayout from '../../layouts/HomeLayout';
import { setShowSignUpModal } from '../../store/slices/modalsSlice';

const ListYourPond = () => {
    // Redux
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);


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
        // Pond Owner Info
        address: "",
        city: "",
        state: "",
        phone: "",
        secondAddress: "no",
        // Available Time
        availableTime: {
            sunday: {
                hours: {
                    "6am-11am": true,
                    "11am-4pm": false,
                    "4pm-9pm": true,
                    "9pm-6am": true,
                    "all-hours": false,
                }
            },
            monday: {
                isSelected: false,
                hours: {
                    "6am-11am": true,
                    "11am-4pm": false,
                    "4pm-9pm": true,
                    "9pm-6am": true,
                    "all-hours": false,
                }
            },
            tuesday: {
                isSelected: false,
                hours: {
                    "6am-11am": true,
                    "11am-4pm": false,
                    "4pm-9pm": true,
                    "9pm-6am": true,
                    "all-hours": false,
                }
            },
            wednesday: {
                isSelected: false,
                hours: {
                    "6am-11am": true,
                    "11am-4pm": false,
                    "4pm-9pm": true,
                    "9pm-6am": true,
                    "all-hours": false,
                }
            },
            thursday: {
                isSelected: false,
                hours: {
                    "6am-11am": true,
                    "11am-4pm": false,
                    "4pm-9pm": true,
                    "9pm-6am": true,
                    "all-hours": false,
                }
            },
            friday: {
                isSelected: false,
                hours: {
                    "6am-11am": true,
                    "11am-4pm": false,
                    "4pm-9pm": true,
                    "9pm-6am": true,
                    "all-hours": false,
                }
            },
            saturday: {
                isSelected: false,
                hours: {
                    "6am-11am": true,
                    "11am-4pm": false,
                    "4pm-9pm": true,
                    "9pm-6am": true,
                    "all-hours": false,
                }
            },
            everyday: {
                isSelected: false,
                hours: {
                    "6am-11am": true,
                    "11am-4pm": false,
                    "4pm-9pm": true,
                    "9pm-6am": true,
                    "all-hours": false,
                }
            }
        },
    }
    const validation = {
        pondListing: yup.object({
            acre: yup.string().required("Acre is required"),
            "stocked-pond": yup.string().required("You have to select one of those"),
            "catch-requirements": yup.string().required("You have to select one of those"),
        }),
        pondOwnerDetails: yup.object({
            firstName: yup.string().required("First name is required"),
            lastName: yup.string().required("Last name is required"),
            email: yup.string().email().required("Email is required"),
            zipCode: yup.string().required("Zip code is required"),
            halfDayRate: yup.string().required("Required!"),
            fullDayRate: yup.string().required("Required!"),
        }),
        pondOwnerInfo: yup.object({
            firstName: yup.string().required("First name is required"),
            lastName: yup.string().required("Last name is required"),
            email: yup.string().email().required("Email is required"),
            zipCode: yup.string().required("Zip code is required"),
            address: yup.string().required("Required!"),
            city: yup.string().required("Required!"),
            state: yup.string().required("Required!"),
            phone: yup.string().required("Required!"),
            secondAddress: yup.string().required("Required!"),
        }),
    }
    const timelineArray = [
        "Pond listing",
        "Pond Owner Details",
        "Price",
        "Pond Owner Information",
        "Available time",
        "Description",
        "Access to Pond",
        "Amenities",
        "Agreement"
    ];

    const stepControllerBtns = [
        {},
        {},
        {
            back: <BackBtn text="Go back" />, next: <NextBtn
                text="List My Spot"
                onClick={() => !isLoggedIn && dispatch(setShowSignUpModal())} />
        }
    ]

    return (
        <HomeLayout>
            <TopImageCard />
            <MultiStepForm
                initialValues={initialValues}
                timelineArray={timelineArray}
                stepControllerBtns={stepControllerBtns}
                successComponent={<div>Success</div>}
            >
                <FormStep validationSchema={validation.pondListing}>
                    <SubPondListing />
                </FormStep>
                <FormStep validationSchema={validation.pondOwnerDetails}>
                    <SubPondOwnerDetails />
                </FormStep>
                <FormStep>
                    <SubPricing />
                </FormStep>
                <FormStep validationSchema={validation.pondOwnerInfo}>
                    <SubPondOwnerInfo />
                </FormStep>
                <FormStep>
                    <SubAvailableTime />
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