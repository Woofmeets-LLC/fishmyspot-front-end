import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState } from 'react';
import Autocomplete from "react-google-autocomplete";
import { Toaster } from 'react-hot-toast';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { LoginModal, SignUpModal } from '../../../components/Common';
import { logoutAction } from '../../../store/slices/authSlice';
import { set } from '../../../store/slices/autocompletetionSlice';
import { setShowLoginModal, setShowSignUpModal } from '../../../store/slices/modalsSlice';

const backdropVariants = {
    hidden: {
        opacity: 0,
        minHeight: "0px",
    },
    visible: {
        opacity: 1,
        minHeight: "100px"
    },
    exit: {
        opacity: 0,
        minHeight: "0px",
    }
}

const Header = () => {
    const router = useRouter();
    const getAddress = (place) => {
        dispatch(set({ isFirst: router.pathname !== "/services", latLng: `${place.geometry.location.lat()}:${place.geometry.location.lng()}` }))
        router.push(`/services?location=${place.geometry.location.lat()}%3A${place.geometry.location.lng()}&price=0,1000`)
    }
    // States
    const [isActive, setIsActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const { isLoggedIn, user } = useSelector(state => state.auth);

    // Dispatch
    const dispatch = useDispatch();

    return (
        <>
            <SignUpModal />
            <LoginModal />
            <Toaster />
            <header className="sticky top-0 z-[1000] bg-white shadow">
                <div className="relative container flex items-center h-[70px] 2xl:h-[85px] 3xl:h-[102px]">
                    <Link href="/">
                        <a>
                            <div className="flex items-center w-[95px] 2xl:w-[118px] 3xl:w-[134px] h-full mr-4 2xl:mr-6">
                                <img
                                    src="/images/logo.png"
                                    className="w-full"
                                    alt="logo" />
                            </div>
                        </a>
                    </Link>
                    <div className="hidden md:flex items-center w-[300px] lg:w-[500px] 2xl:w-[620px] 3xl:w-[818px] h-full border-l px-8 lg:px-16">
                        <div className="flex w-full h-8 xl:h-[35px] 2xl:h-[42px] 3xl:h-[47px] border rounded">
                            <span className="flex justify-center items-center h-full w-8 2xl:w-10">
                                <AiOutlineSearch className="text-primary xl:text-xl 2xl:text-2xl" />
                            </span>
                            <Autocomplete
                                placeholder={'Search...'}
                                className="block w-full appearance-none p-1 bg-transparent border-none text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                apiKey={process.env.GOOGLE_MAP_API_KEY}
                                onPlaceSelected={(place) => {
                                    getAddress(place)
                                }}
                                options={{
                                    types: 'ALL'
                                }}


                            />
                        </div>
                    </div>
                    {/* Before login right side items */}
                    {
                        !isLoggedIn &&
                        <>
                            <div
                                style={{ transition: "all 0.2s ease!important" }}
                                className={`absolute md:static top-[74px] right-0 block md:flex md:items-center w-[150px] md:w-auto md:h-[70px] 2xl:h-[85px] 3xl:h-[102px] md:ml-auto space-y-2 md:space-y-0 md:space-x-10 bg-white transition transform px-2 ${isActive ? "h-auto py-2 rounded border md:border-0" : "h-0 overflow-hidden py-0"}`}>
                                <button
                                    onClick={() => !isLoggedIn && dispatch(setShowLoginModal())}
                                    type="button"
                                    className="block md:inline-block text-primary font-trade-gothic-bold 2xl:text-[18px]">List your spot +</button>
                                <button
                                    onClick={() => !isLoggedIn && dispatch(setShowSignUpModal())}
                                    className="block md:inline-block text-primary font-trade-gothic-bold 2xl:text-[18px]">Sign-up</button>
                                <button
                                    onClick={() => !isLoggedIn && dispatch(setShowLoginModal())}
                                    className="block md:inline-block text-primary font-trade-gothic-bold 2xl:text-[18px]">Log-in</button>

                            </div>
                            <div className="block md:hidden ml-auto">
                                <button
                                    onClick={() => setIsActive(prevValue => !prevValue)}
                                    className=" h-[70px] block lg:hidden py-4 md:py-5 px-2 text-primary text-2xl lg:text-3xl">
                                    <div className="lg:hidden cursor-pointer flex flex-col items-end relative">
                                        <span className={`bg-primary rounded-sm transform transition duration-500 ${isActive
                                            ? "h-1 mb-2 rotate-45 w-7 translate-y-3"
                                            : "h-[3px] mb-[6px] rotate-0 w-7 translate-y-0"}`}></span>
                                        <span className={` bg-primary rounded-sm w-5 transform transition duration-500 ${isActive
                                            ? "h-1 mb-2 opacity-0"
                                            : "h-[3px] mb-[6px] opacity-1"}`}></span>
                                        <span className={`w-7 bg-primary rounded-sm transform transition duration-500 ${isActive
                                            ? "h-1 -rotate-45 -translate-y-3"
                                            : "h-[3px] rotate-0 translate-y-0"}`}></span>
                                    </div>
                                </button>
                            </div>
                        </>
                    }

                    {/* After login  right side items*/}
                    {
                        isLoggedIn &&
                        <div
                            style={{ transition: "all 0.2s ease!important" }}
                            className={`flex items-center w-auto h-[70px] 2xl:h-[85px] 3xl:h-[102px] ml-auto space-y-0 space-x-10 bg-white transition transform px-2 py-2 rounded border-0`}>
                            {
                                user?.profile?.publicData?.account_type !== "angler" &&
                                <Link href="/list-your-spot" >
                                    <a className={`hidden md:inline-block text-primary font-trade-gothic-bold 2xl:text-[18px]`}>List your spot +</a>
                                </Link>
                                // <button
                                //     onClick={() => !isLoggedIn && dispatch(setShowLoginModal())}
                                //     type="button"
                                //     className="hidden md:inline-block text-primary font-trade-gothic-bold 2xl:text-[18px]">List your spot +</button>
                            }
                            <div className="flex items-center px-3 border shadow rounded-full ml-auto">
                                <div className="block">
                                    <button
                                        onClick={() => setIsMenuActive(prevValue => !prevValue)}
                                        className=" block  py-1 px-2 text-primary text-2xl lg:text-3xl">
                                        <div className=" cursor-pointer flex flex-col items-end relative">
                                            <span className={`bg-primary rounded-sm transform transition duration-500 h-[3px] ${isMenuActive
                                                ? "mb-2 rotate-[48deg] w-5 translate-y-[11px]"
                                                : "mb-1 rotate-0 w-5 translate-y-0"}`}></span>
                                            <span className={` bg-primary rounded-sm w-5 transform transition duration-500 h-[3px] ${isMenuActive
                                                ? "mb-2 opacity-0"
                                                : "mb-1 opacity-1"}`}></span>
                                            <span className={`w-5 bg-primary rounded-sm transform transition duration-500 h-[3px] ${isMenuActive
                                                ? "-rotate-[48deg] -translate-y-[11px]"
                                                : "rotate-0 translate-y-0"}`}></span>
                                        </div>
                                    </button>
                                </div>
                                <FaUserCircle className="text-[40px] text-primary cursor-pointer p-2" />
                            </div>
                        </div>
                    }

                    {/* Menu after login */}
                    <AnimatePresence>
                        {
                            isLoggedIn && isMenuActive &&
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={backdropVariants}
                                className={`absolute block top-[74px] right-[20px] w-[150px] md:w-auto md:ml-auto space-y-2 bg-white px-4 h-auto py-2 rounded border`}>
                                {
                                    user?.profile?.publicData?.account_type !== "angler" &&
                                    <Link href="/list-your-spot" >
                                        <a className={`block md:hidden text-primary font-trade-gothic-bold text-sm md:text-base lg:text-base 2xl:text-[18px]`}>List your spot +</a>
                                    </Link>
                                }
                                <Link href="/messages" >
                                    <a className={`block text-primary font-trade-gothic-bold text-sm md:text-base lg:text-base 2xl:text-[18px]`}>Message</a>
                                </Link>
                                <Link href="/notifications" >
                                    <a className="block text-primary font-trade-gothic-bold text-sm md:text-base lg:text-base 2xl:text-[18px]">Notification </a>
                                </Link>
                                {
                                    user?.profile?.publicData?.account_type === "angler"
                                        ? <Link href="/favorite-pond-list" >
                                            <a className="block text-primary font-trade-gothic-bold text-sm md:text-base lg:text-base 2xl:text-[18px]">Favorite pond </a>
                                        </Link>
                                        : <Link href="/seller-dashboard" >
                                            <a className="block text-primary font-trade-gothic-bold text-sm md:text-base lg:text-base 2xl:text-[18px]">Dashboard </a>
                                        </Link>
                                }
                                <Link href="/settings" >
                                    <a className="block text-primary font-trade-gothic-bold text-sm md:text-base lg:text-base 2xl:text-[18px]">Settings </a>
                                </Link>
                                <Link href="/cancellation" >
                                    <a className="block text-primary font-trade-gothic-bold text-sm md:text-base lg:text-base 2xl:text-[18px]">Cancellation  </a>
                                </Link>
                                {
                                    user?.profile?.publicData?.account_type === "angler" &&
                                    <Link href="/help" >
                                        <a className="block text-primary font-trade-gothic-bold text-sm md:text-base lg:text-base 2xl:text-[18px]">Help </a>
                                    </Link>
                                }
                                <button
                                    onClick={() => dispatch(logoutAction())}
                                    className="block text-primary font-trade-gothic-bold text-sm md:text-base lg:text-base 2xl:text-[18px]">Logout</button>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </header >
        </>
    );
};

export default Header;