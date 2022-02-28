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
        // => First address 
        firstName1: '',
        lastName1: '',
        email1: '',
        zipCode1: '',
        address1: "",
        city1: "",
        state1: "",
        phone1: "",
        halfDayRate: '',
        fullDayRate: '',
        // => Second address 
        firstName2: '',
        lastName2: '',
        email2: '',
        zipCode2: '',
        address2: "",
        city2: "",
        state2: "",
        phone2: "",

        secondAddress: "no",

        // Available Time
        availableTime: {
            sunday: {
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
                    "all-hours": false,
                }
            },
            monday: {
                isSelected: false,
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
                    "all-hours": false,
                }
            },
            tuesday: {
                isSelected: false,
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
                    "all-hours": false,
                }
            },
            wednesday: {
                isSelected: false,
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
                    "all-hours": false,
                }
            },
            thursday: {
                isSelected: false,
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
                    "all-hours": false,
                }
            },
            friday: {
                isSelected: false,
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
                    "all-hours": false,
                }
            },
            saturday: {
                isSelected: false,
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
                    "all-hours": false,
                }
            },
            everyday: {
                isSelected: false,
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
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
            firstName1: yup.string().required("First name is required"),
            lastName1: yup.string().required("Last name is required"),
            email1: yup.string().email().required("Email is required"),
            zipCode1: yup.string().required("Zip code is required"),
            halfDayRate: yup.string().required("Required!"),
            fullDayRate: yup.string().required("Required!"),
        }),
        pondOwnerInfo: yup.object({
            firstName1: yup.string().required("First name is required"),
            lastName1: yup.string().required("Last name is required"),
            email1: yup.string().email().required("Email is required"),
            zipCode1: yup.string().required("Zip code is required"),
            address1: yup.string().required("Required!"),
            city1: yup.string().required("Required!"),
            state1: yup.string().required("Required!"),
            phone1: yup.string().required("Required!"),
            secondAddress: yup.string().required("Required!"),
        }),
        description: yup.object({
            description: yup.string().required("Description is required"),
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
        "Additional Information",
        "Agreement"
    ];

    const stepControllerBtns = [
        {}, {},
        {
            back: <BackBtn text="Go back" />, next: <NextBtn
                text="List My Spot"
                onClick={() => !isLoggedIn && dispatch(setShowSignUpModal())} />
        }, {}, {}, {}, {}, {}, {},
        { next: <NextBtn text="List My Spot" /> },
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
                <FormStep validationSchema={validation.description}>
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