/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
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
import { listingDataOrganizing } from '../../services/listing-spot-data-organiging/listingDataFormatting';
import { listingImagesUpload } from '../../services/listing-spot-data-organiging/listingImageUpload';
import { getRequest } from '../../services/requests';
import { getSdk } from '../../sharetribe/sharetribeSDK';
import { setFishes } from '../../store/slices/listSpotContentsSlice';
import { setStripeAccount } from '../../store/slices/stripeAccountSlice';


const ListYourPond = () => {
    const [loading, setLoading] = useState(false);
    const [stripeLoading, setStripeLoading] = useState(false)
    // Redux
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const { isLoggedIn, user } = auth;
    const fishes = useSelector(state => state.listSpotContents.fishes);
    const fishesObject = fishes?.map(fish => fish.name + "_" + fish.id)
        ?.reduce((prevObj, key) => ({ ...prevObj, [key]: false }), {});
    const { isTransferActivated, loaded } = useSelector(state => state.stripeAccount);


    useEffect(() => {
        if (loaded) {
            !isTransferActivated
        }
    }, [loaded])


    

    const redirectToStripe = () => {        
        if(typeof window !== 'undefined'){
            const originURL = window.location.origin;
            getSdk().stripeAccountLinks.create({
                failureURL: originURL,
                successURL: originURL + "/list-your-spot?sl=dl",
                type: "account_onboarding",
                collect: "currently_due",
            })
                .then(res => {
                    if (typeof (window) !== "undefined") {
                        window.open(
                            res.data?.data?.attributes?.url,
                            '_blank'
                        )                       
                    }
                })
                .catch(err => {
                    console.dir(err)
                })
        }
       
    }

    const createStripeAccount = () => {
        setStripeLoading(true)
        getSdk().stripeAccount.create({
            country: "US",
            requestedCapabilities: ["transfers", "card_payments"]
        }, {
            expand: true
        })
            .then(res => {
                redirectToStripe();
            })
            .catch(err => {
                console.dir(err)
            })
    }


    // available time data 
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "everyday"];
    const availableTime = days.reduce((prevObj, key) => {
        return {
            ...prevObj,
            [key]: {
                isSelected: false,
                hours: {
                    "6am-11am": false,
                    "11am-4pm": false,
                    "4pm-9pm": false,
                    "9pm-6am": false,
                    "6am-9pm": false,
                    "all-hours": false,
                }
            }
        }
    }, {});

    // routes 
    const router = useRouter();

    // Updating fishes image to redux
    useEffect(() => {
        if(typeof window !== 'undefined'){
            window.onfocus = () => {
                getSdk().stripeAccount.fetch()
                    .then(res => {
                        setStripeLoading(false)
                        const stripeData = res?.data?.data;
                        const isTransferActivated = stripeData?.attributes?.stripeAccountData?.capabilities?.card_payments == 'active' || stripeData?.attributes?.stripeAccountData?.capabilities?.transfers == 'active';

                        dispatch(setStripeAccount({ ...stripeData, isTransferActivated, loaded: true }));
                    })
                    .catch(error => {
                        setStripeLoading(false)
                        dispatch(setStripeAccount({
                        attributes: null,
                        id: null,
                        type: null,
                        isTransferActivated: null,
                        loaded: true,
                    }));
            });
            }
        }
       
        getRequest('fishes')
            .then(res => {
                dispatch(setFishes(res.data));
            })
            .catch(err => {
                // console.log(err);
            })
    }, [])

    useEffect(() => {
        if(router.query?.sl){
            if(router.query.sl == 'dl'){
                if(typeof window !== 'undefined'){
                    window.close()
                }
            }
        }
    }, [router])


    const initialValues = {
        // Pond Listing
        acre: "",
        "stocked-pond": "",
        "catch-requirements": "",
        // Pond Owner Details
        firstName: user?.profile?.firstName,
        lastName: user?.profile?.lastName,
        email: user?.email,
        zipCode: '',
        address: "",
        city: "",
        state: "",
        phone: "",
        halfDayRate: '',
        fullDayRate: '',
        latLng: {
            lat: '',
            lng: ' ',
            _sdkType: 'LatLng',
        },
        // Available Time
        availableTime,
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
            "pond-trawler-or-metal-boat": {
                checked: false,
                title: "Pond Trawler/Metal Boat",
                price: 20
            },
            "campsite": {
                checked: false,
                title: "Campsite",
                price: 20
            },
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
        }),
        description: yup.object({
            description: yup.string().required("Description is required"),
        }),
        accessToPond: yup.object({
            "ATP-description": yup.string().required("Description is required"),
            "ATP-images-file": yup.array().min(2, 'You must upload at least 2 photos!'),
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
        {}, {},
        {
            back: <BackBtn text="Go back" />, next: <NextBtn
                text="List My Spot" />
        }, {}, {}, {}, {}, {}, {},
        { next: <NextBtn 
            text={isTransferActivated  ? 'List My Spot' :(stripeLoading ? "Loading..." :  'Connect Stripe First!')} 
            type={isTransferActivated  ? 'submit' : 'button'} 
            onClick={() => { 
                if(stripeLoading){
                    return;
                }
                !isTransferActivated && createStripeAccount();
             }} /> },
    ]

    const handleSubmit = async (values, helpers) => {
        // set loading
        setLoading(true);
        // Data organizing without images
        const newData = listingDataOrganizing(values);

        // Formatting Images array and uploading
        const allImages = [
            ...values["ATP-images-file"],
            ...values["amenities-images-file"],
            ...values["additional-images-file"]
        ];
        const uploadedImages = await listingImagesUpload(allImages);
        // Setting images uuids to newData
        newData.images = uploadedImages?.success ? uploadedImages?.uuids : [];

        // Creating listing
        getSdk().ownListings.create(newData, { expand: true, include: ['images'] })
            .then(listingRes => {
                setLoading(false);
                toast.success("Listing created successfully!");
                // console.log(listingRes);
                router.push(`/list-your-spot/success`);
            })
            .catch(err => {
                setLoading(false);
                toast.error("Failed listing creation!");
                // console.log(err);
            })
    }

    return (
        <HomeLayout
            isPrivate
            guards={{
                account_type: "owner",
                fallbackUrl: "/",
            }}>
            <TopImageCard />            {
                
                        <MultiStepForm
                            initialValues={initialValues}
                            timelineArray={timelineArray}
                            stepControllerBtns={stepControllerBtns}
                            onSubmit={handleSubmit}
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
                            <FormStep validationSchema={validation.accessToPond}>
                                <SubAccessToPond />
                            </FormStep>
                            <FormStep>
                                <SubAmenities />
                            </FormStep>
                            <FormStep >
                                <SubAdditionalInformation />
                            </FormStep>
                            <FormStep >
                                {
                                    loading
                                        ? <div className="flex justify-center items-center flex-wrap my-10">
                                            <ClipLoader size={50} color={'#1971ff'} />
                                            <h2 className="w-full text-center font-semibold mt-2">Creating your pond...</h2>
                                        </div>
                                        : <SubAgreementSection />
                                }
                            </FormStep>
                        </MultiStepForm>
                   
            }
        </HomeLayout>
    );
};

export default ListYourPond;