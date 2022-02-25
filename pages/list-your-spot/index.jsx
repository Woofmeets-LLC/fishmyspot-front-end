import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { BackBtn, MultiStepForm, NextBtn } from '../../components/Common';
import FormStep from '../../components/Common/FormElements/MultiStepForm/FormStep';
import SubAccessToPond from '../../components/SubPages/ListYourSpotPage/SubAccessToPond';
import SubAdditionalInformation from '../../components/SubPages/ListYourSpotPage/SubAdditionalInformation';
import SubAgreementSection from "../../components/SubPages/ListYourSpotPage/SubAgreementSection";
import SubAmenities from '../../components/SubPages/ListYourSpotPage/SubAmenities';
import SubAvailableTime from '../../components/SubPages/ListYourSpotPage/SubAvailableTime';
import SubDescription from '../../components/SubPages/ListYourSpotPage/SubDescription';
import SubPondListing from '../../components/SubPages/ListYourSpotPage/SubPondListing';
import SubPondOwnerDetails from '../../components/SubPages/ListYourSpotPage/SubPondOwnerDetails';
import SubPondOwnerInfo from '../../components/SubPages/ListYourSpotPage/SubPondOwnerInfo';
import SubPricing from '../../components/SubPages/ListYourSpotPage/SubPricing';
import TopImageCard from '../../components/SubPages/ListYourSpotPage/SubTopImageCard';
import HomeLayout from '../../layouts/HomeLayout';
import { getRequest } from '../../services/requests';
import { setFishes } from '../../store/slices/listSpotContentsSlice';
import { setShowSignUpModal } from '../../store/slices/modalsSlice';

const ListYourPond = () => {
    // Redux
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);
    const fishes = useSelector(state => state.listSpotContents.fishes);
    const fishesObject = fishes?.map(fish => fish.name + "_" + fish.id)
        ?.reduce((prevObj, key) => ({ ...prevObj, [key]: false }), {});

    // Updating fishes image to redux
    useEffect(() => {
        getRequest('fishes')
            .then(res => {
                dispatch(setFishes(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


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
        // Description
        description: "",
        fishes: fishesObject,
        "others-fish": {
            isSelected: false,
            names: ""
        },
        // Access to Pond
        "ATP-description": "",
        "ATP-images-file": [],
        "ATP-images-base64": [],
        // Amenities
        amenities: {
            "Canoe/kayak": false,
            "Pavilion or Other Shelter": false,
            "Grill": false,
            "Restrooms": false,
            "Pet Friendly": false,
            "Picnic Tables": false,
            "Dock": false,
        },
        otherAmenities: {
            isSelected: false,
            names: ""
        },
        addOns: {
            "Pond Trawler/Metal Boat ($20)": false,
            "Campsite ( $20 )": false,
        },
        otherAddOns: {
            isSelected: false,
            names: ""
        },
        "amenities-images-file": [],
        "amenities-images-base64": [],

        // additional information
        "additional-information-description": "",
        "additional-images-file": [],
        "additional-images-base64": [],
        promoteBy: {
            referral: {
                state: false,
                email: '',
                name: ''
            },
            ad: {
                state: false
            },
            mailer: {
                state: false
            },
            radio: {
                state: false
            }

        },
        // Agreement
        terms: false,
        license: false,
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
        })
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
        "Additional Information",
        "Agreement"
    ];

    const stepControllerBtns = [
        {},
        {},
        {
            back: <BackBtn text="Go back" />, next: <NextBtn
                text="List My Spot"
                onClick={() => !isLoggedIn && dispatch(setShowSignUpModal())} />
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {
            next: <NextBtn
                // onClick={() => !isLoggedIn && dispatch(setShowSignUpModal())} 
                text="List My Spot" />
        },
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
                    <SubDescription />
                </FormStep>
                <FormStep>
                    <SubAccessToPond />
                </FormStep>
                <FormStep>
                    <SubAmenities />
                </FormStep>
                <FormStep >
                    <SubAdditionalInformation />
                </FormStep>
                <FormStep>
                    <SubAgreementSection />
                </FormStep>
            </MultiStepForm>
        </HomeLayout>
    );
};

export default ListYourPond;